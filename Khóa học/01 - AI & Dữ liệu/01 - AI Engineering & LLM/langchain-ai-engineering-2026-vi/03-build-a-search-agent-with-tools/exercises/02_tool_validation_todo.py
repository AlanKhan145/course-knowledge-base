"""Bài 02: Không tin input do LLM đề xuất, validate tại runtime."""


def validate_search_args(query: str, limit: int) -> dict:
    """Return {'query': <trimmed>, 'limit': <int>}.

    TODO: query must be non-empty string; limit must be int in 1..10.
    Raise ValueError or TypeError for invalid inputs.
    """
    raise NotImplementedError("TODO: implement validate_search_args")


if __name__ == "__main__":
    for q, n in [("LangChain jobs", 3), ("", 3), ("AI Engineer", 999)]:
        try:
            print(validate_search_args(q, n))
        except (ValueError, TypeError) as exc:
            print(type(exc).__name__, str(exc))
