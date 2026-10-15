"""Bài 03: Normalize a Tavily-like dictionary response."""
MOCK_RESPONSE = {"results": [
    {"title": "Example job", "url": "https://example.org/job/1", "content": "Demo description"},
    {"title": "Broken page", "url": "", "content": None},
]}


def normalize_results(response: dict) -> list[dict]:
    """TODO: Return list of {'title','url','snippet'} for valid HTTP(S) URLs.

    Handle absent 'results'; treat missing title/snippet as empty strings.
    Do not invent a URL for entries that have none.
    """
    raise NotImplementedError("TODO: implement normalize_results")


if __name__ == "__main__":
    print(normalize_results(MOCK_RESPONSE))
