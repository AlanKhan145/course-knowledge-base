from types import SimpleNamespace
from ai_job_agent.schemas import AgentResponse
from ai_job_agent.validation import observed_urls, filter_grounded_links


def test_observed_urls_extracts_json_only():
    messages = [SimpleNamespace(type="tool", content='{"results":[{"url":"https://example.org/a"}]}'),
                SimpleNamespace(type="tool", content="not json")]
    assert observed_urls(messages) == {"https://example.org/a"}


def test_unobserved_sources_are_removed():
    result = AgentResponse.model_validate({"answer": "ok", "sources": [
        {"url": "https://example.org/a"}, {"url": "https://fake.example/x"}],
        "jobs": [{"title": "Demo", "url": "https://fake.example/x"}]})
    removed = filter_grounded_links(result, {"https://example.org/a"})
    assert removed == 2
    assert len(result.sources) == 1 and result.jobs == []
    assert result.warnings
