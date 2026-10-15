import pytest
from ai_job_agent.mock_data import search_mock_jobs
from ai_job_agent.cli import run_mock


def test_mock_search_works():
    jobs = search_mock_jobs("LangChain")
    assert jobs and "LangChain" in jobs[0]["skills"]


def test_empty_query_is_rejected():
    with pytest.raises(ValueError):
        search_mock_jobs(" ")


def test_limit_bounds_are_enforced():
    with pytest.raises(ValueError):
        search_mock_jobs("AI", limit=100)


def test_mock_has_warnings_and_urls():
    result = run_mock("Python", 2)
    assert len(result.jobs) == 2
    assert len(result.sources) == 2
    assert any("DEMO" in w for w in result.warnings)


def test_no_result_does_not_hallucinate():
    result = run_mock("unmatchabletokenabc")
    assert not result.jobs and not result.sources
