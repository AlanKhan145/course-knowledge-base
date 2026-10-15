"""Deterministic offline fixtures; no real vacancies are implied."""
import json
from pathlib import Path

DATA_FILE = Path(__file__).resolve().parents[2] / "data" / "mock_jobs.json"


def search_mock_jobs(query: str, limit: int = 3) -> list[dict]:
    if not isinstance(query, str) or not query.strip():
        raise ValueError("query phải là chuỗi không rỗng")
    if not isinstance(limit, int) or not 1 <= limit <= 10:
        raise ValueError("limit phải trong khoảng 1..10")
    jobs = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    words = {word.lower() for word in query.split() if len(word) >= 3}
    scored = []
    for job in jobs:
        blob = " ".join([job["title"], job["company"], job["location"], *job["skills"]]).lower()
        score = sum(word in blob for word in words)
        scored.append((score, job))
    return [job for score, job in sorted(scored, key=lambda item: item[0], reverse=True) if score > 0][:limit]
