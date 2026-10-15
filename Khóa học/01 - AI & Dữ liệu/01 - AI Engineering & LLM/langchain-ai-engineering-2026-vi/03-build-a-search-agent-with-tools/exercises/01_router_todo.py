"""Bài 01: Xây router rule-based mô phỏng quyết định agent, không phải LLM."""


def choose_route(query: str) -> str:
    """Return 'search_web' or 'answer_direct'.

    TODO: Return search_web for queries needing current/external data
    (e.g. jobs, weather today, current events); answer_direct otherwise.
    Reject blank queries with ValueError.
    """
    raise NotImplementedError("TODO: implement choose_route")


if __name__ == "__main__":
    examples = ["ReAct là gì?", "Có AI Engineer nào đang tuyển?", "Thời tiết hôm nay?", "2 + 2 là mấy?"]
    for query in examples:
        print(query, choose_route(query))
