"""ReAct-inspired observable action loop, no model or private reasoning."""
from ai_job_agent.mock_data import search_mock_jobs


def run_react_demo(query: str, max_steps: int = 3):
    if max_steps < 1:
        raise ValueError("max_steps must be >= 1")
    steps = []
    for step in range(1, max_steps + 1):
        if step == 1:
            action = {"tool": "mock_search", "args": {"query": query}}
            observation = search_mock_jobs(query)
            steps.append({"step": step, "action": action, "observation_count": len(observation)})
            if observation:
                return {"final": [x["title"] for x in observation], "steps": steps}
        else:
            steps.append({"step": step, "action": "stop", "reason": "no supporting search results"})
            break
    return {"final": [], "steps": steps}


if __name__ == "__main__":
    import json
    print(json.dumps(run_react_demo("AI Engineer"), indent=2, ensure_ascii=False))
