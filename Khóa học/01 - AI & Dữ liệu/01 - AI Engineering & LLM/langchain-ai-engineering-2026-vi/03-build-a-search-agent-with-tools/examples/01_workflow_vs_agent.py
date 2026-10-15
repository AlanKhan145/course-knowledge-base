"""Offline comparison: agent_like_router is rule-based, NOT a real LLM agent."""

def fixed_workflow(query: str):
    return ["summarize", "translate", "save"]


def agent_like_router(query: str):
    q = query.lower()
    if any(word in q for word in ["mới nhất", "hiện tại", "tuyển", "search"]):
        return ["web_search", "summarize"]
    return ["answer_from_context"]


if __name__ == "__main__":
    for q in ("Giải thích ReAct", "Tìm việc AI đang tuyển"):
        print(q, "\n fixed:", fixed_workflow(q), "\n routing:", agent_like_router(q))
    print("Chú ý: rule-based router chỉ minh họa quyền chọn nhánh, không phải LLM agent.")
