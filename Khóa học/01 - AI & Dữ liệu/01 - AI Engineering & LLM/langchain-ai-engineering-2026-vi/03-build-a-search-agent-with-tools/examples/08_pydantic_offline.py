"""Test structured output without any LLM API calls."""
from pydantic import ValidationError
from ai_job_agent.schemas import AgentResponse

payload = {
    "answer": "Có một kết quả giả lập.",
    "jobs": [{"title": "AI Engineer Demo", "url": "https://example.org/jobs/demo-ai-001", "skills": ["Python"]}],
    "sources": [{"url": "https://example.org/jobs/demo-ai-001", "title": "Demo"}],
}
result = AgentResponse.model_validate(payload)
print(result.model_dump_json(indent=2))
try:
    AgentResponse.model_validate({"answer": "", "sources": [{"url": "not-a-url"}]})
except ValidationError as exc:
    print("Validation rejected invalid payload:", exc.error_count(), "errors")
