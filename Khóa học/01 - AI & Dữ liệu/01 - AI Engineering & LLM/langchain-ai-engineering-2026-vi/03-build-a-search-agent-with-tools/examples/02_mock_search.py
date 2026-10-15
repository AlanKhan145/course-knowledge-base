"""An end-to-end no-API mock search with verifiable sample citations."""
from ai_job_agent.cli import run_mock

if __name__ == "__main__":
    result = run_mock("AI Engineer LangChain", limit=3)
    print(result.model_dump_json(indent=2))
