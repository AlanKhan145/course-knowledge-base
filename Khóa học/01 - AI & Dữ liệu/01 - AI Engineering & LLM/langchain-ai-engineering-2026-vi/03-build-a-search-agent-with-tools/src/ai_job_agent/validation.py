"""Cross-check output links against observed tool payloads."""
import json
from collections.abc import Iterable
from urllib.parse import urlparse


def _collect_urls(value, found: set[str]):
    if isinstance(value, dict):
        for k, v in value.items():
            if k == "url" and isinstance(v, str) and v.startswith(("https://", "http://")):
                found.add(v)
            _collect_urls(v, found)
    elif isinstance(value, list):
        for v in value:
            _collect_urls(v, found)


def observed_urls(tool_messages: Iterable) -> set[str]:
    """Reads ToolMessage.content JSON; ignores non-JSON tool output."""
    found: set[str] = set()
    for m in tool_messages:
        if getattr(m, "type", None) != "tool":
            continue
        raw = getattr(m, "content", None)
        if not isinstance(raw, str):
            continue
        try:
            _collect_urls(json.loads(raw), found)
        except json.JSONDecodeError:
            continue
    return found


def _key(url: str) -> str:
    p = urlparse(url)
    return f"{p.scheme.lower()}://{p.netloc.lower()}{p.path.rstrip('/')}"


def filter_grounded_links(result, allowed_urls: set[str]):
    """Remove ungrounded source/job links. Return count removed.

    URL scheme/host/path must match a URL observed in a ToolMessage.
    No fuzzy matching to prevent invented sources.
    """
    allowed = {_key(u) for u in allowed_urls}
    count = 0
    valid_sources = []
    for source in result.sources:
        if _key(str(source.url)) in allowed:
            valid_sources.append(source)
        else:
            count += 1
    result.sources = valid_sources
    valid_jobs = []
    for job in result.jobs:
        if _key(str(job.url)) in allowed:
            valid_jobs.append(job)
        else:
            count += 1
    result.jobs = valid_jobs
    if count:
        result.warnings.append(f"Đã loại {count} URL không tìm thấy trong dữ liệu công cụ.")
    return count
