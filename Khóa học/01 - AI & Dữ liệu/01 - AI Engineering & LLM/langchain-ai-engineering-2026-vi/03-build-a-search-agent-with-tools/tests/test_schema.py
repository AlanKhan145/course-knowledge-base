import pytest
from pydantic import ValidationError
from ai_job_agent.schemas import AgentResponse


def test_schema_nested_is_valid():
    result = AgentResponse.model_validate({"answer": "ok", "sources": [{"url": "https://example.org/source"}]})
    assert len(result.sources) == 1


def test_reject_invalid_http_url():
    with pytest.raises(ValidationError):
        AgentResponse.model_validate({"answer": "ok", "sources": [{"url": "javascript:alert(1)"}]})


def test_reject_blank_answer():
    with pytest.raises(ValidationError):
        AgentResponse.model_validate({"answer": ""})
