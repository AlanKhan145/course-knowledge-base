"""Live agent using a custom @tool wrapping Tavily's SDK."""
from ai_job_agent.cli import run_live

if __name__ == "__main__":
    result = run_live("AI Engineer LangChain Bay Area site:linkedin.com/jobs", 3, "custom")
    print(result.model_dump_json(indent=2))
