"""Import sample chunks into a local Supabase instance, computing Ollama embeddings."""
import json
import os
from pathlib import Path
from dotenv import load_dotenv
from ollama import Client
from supabase import create_client

BASE = Path(__file__).resolve().parent
load_dotenv(BASE / '.env')
load_dotenv(BASE.parent / '.env')
URL = os.environ['SUPABASE_URL']
KEY = os.environ['SUPABASE_SERVICE_ROLE_KEY']
MODEL = os.getenv('OLLAMA_MODEL', 'qwen3-embedding:0.6b')

supabase = create_client(URL, KEY)
ollama = Client(host='http://127.0.0.1:11434')
chunks = json.loads((BASE / 'chunks.sample.json').read_text(encoding='utf-8'))['chunks']

for index, chunk in enumerate(chunks, 1):
    response = ollama.embed(model=MODEL, input=chunk['content'])
    vector = response.embeddings[0]
    if len(vector) != 1024:
        raise ValueError(f'Expected 1024 dimensions; got {len(vector)}. Verify model/schema.')
    # Demonstration: insert() is not idempotent. Rerunning adds duplicates.
    result = supabase.table('chunks').insert({
        'content': chunk['content'],
        'metadata': chunk.get('metadata', {}),
        'embedding': vector,
    }).execute()
    print(f'[{index}/{len(chunks)}] inserted: {result.data[0]["id"]}')
print('Done. Note: rerun inserts duplicate rows unless you implement upsert/idempotency.')
