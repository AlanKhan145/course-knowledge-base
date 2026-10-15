"""Real Tavily SDK call. Requires TAVILY_API_KEY, uses search credit."""
import json
import os
from dotenv import load_dotenv
from tavily import TavilyClient

load_dotenv()
if not os.getenv("TAVILY_API_KEY"):
    raise RuntimeError("Thiếu TAVILY_API_KEY")
client = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))
response = client.search(query="AI Engineer LangChain Bay Area site:linkedin.com/jobs", max_results=3,
                         search_depth="basic", include_domains=["linkedin.com"])
items = [{"title": r.get("title"), "url": r.get("url"), "snippet": r.get("content")}
         for r in response.get("results", [])]
print(json.dumps(items, indent=2, ensure_ascii=False))
