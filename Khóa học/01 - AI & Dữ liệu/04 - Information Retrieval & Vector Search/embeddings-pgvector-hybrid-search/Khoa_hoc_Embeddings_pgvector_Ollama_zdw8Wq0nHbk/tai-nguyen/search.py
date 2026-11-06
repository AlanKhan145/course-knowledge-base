"""Compare PostgreSQL full-text search with vector similarity via Supabase RPC."""
import os
from pathlib import Path
from dotenv import load_dotenv
from ollama import Client
from supabase import create_client

BASE = Path(__file__).resolve().parent
load_dotenv(BASE / '.env')
load_dotenv(BASE.parent / '.env')
supabase = create_client(os.environ['SUPABASE_URL'], os.environ['SUPABASE_SERVICE_ROLE_KEY'])
ollama = Client(host='http://127.0.0.1:11434')
model = os.getenv('OLLAMA_MODEL', 'qwen3-embedding:0.6b')

# Direct SQL in Studio: SELECT id,content FROM public.chunks WHERE fts @@ to_tsquery('english','data & center');
print('Full-text (PostgREST text_search):')
fts_rows = supabase.table('chunks').select('id,content,metadata').text_search('fts',"'data' & 'center'",options={'config':'english'}).limit(5).execute().data
for item in fts_rows: print('-', item['id'], item['content'])

# Query-side instruction can help retrieval for Qwen3; keep it consistent in production.
query = 'financial records with exceptionally strong quarterly performance'
instruction = 'Instruct: Given a document query, retrieve the most relevant passage.\nQuery: ' + query
vector = ollama.embed(model=model, input=instruction).embeddings[0]
assert len(vector) == 1024
results = supabase.rpc('match_chunks', {'query_embedding': vector, 'match_count': 5}).execute().data
print('\nSemantic results:')
for item in results:
    print(f'- id={item["id"]} similarity={item["similarity"]:.3f}: {item["content"]}')
