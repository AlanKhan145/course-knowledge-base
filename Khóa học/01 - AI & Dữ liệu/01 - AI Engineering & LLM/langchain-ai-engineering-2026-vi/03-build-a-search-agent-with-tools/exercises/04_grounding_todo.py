"""Bài 04: Use observed URLs to reject fabricated citations."""


def keep_grounded_urls(candidate_urls: list[str], observed_urls: set[str]) -> list[str]:
    """TODO: Return candidates that exactly match observed search URL strings.

    Preserve order, remove duplicates. Never fabricate fallback URLs.
    """
    raise NotImplementedError("TODO: implement keep_grounded_urls")


if __name__ == "__main__":
    observed = {"https://example.org/jobs/1", "https://example.org/jobs/2"}
    candidates = ["https://example.org/jobs/1", "https://made-up.invalid/4", "https://example.org/jobs/1"]
    print(keep_grounded_urls(candidates, observed))
