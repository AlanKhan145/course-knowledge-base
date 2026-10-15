"""Live agent using LangChain's TavilySearch integration."""
from ai_job_agent.cli import run_live

if __name__ == "__main__":
    result = run_live("AI Engineer LangChain Bay Area site:linkedin.com/jobs", 3, "integrated")
    print(result.model_dump_json(indent=2))
