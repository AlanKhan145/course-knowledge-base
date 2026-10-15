import importlib.util
from pathlib import Path
import pytest

SCRIPT = Path(__file__).resolve().parents[1] / "examples" / "03_react_loop_offline.py"
spec = importlib.util.spec_from_file_location("react_offline", SCRIPT)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


def test_has_observation():
    result = module.run_react_demo("AI Engineer")
    assert result["steps"][0]["observation_count"] > 0


def test_no_evidence_returns_empty():
    assert module.run_react_demo("unknownabc") ["final"] == []


def test_step_limit_validation():
    with pytest.raises(ValueError):
        module.run_react_demo("AI", max_steps=0)
