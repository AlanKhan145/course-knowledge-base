"""Bài 05: Define a nested Pydantic schema. No live APIs required."""
from pydantic import BaseModel, Field, HttpUrl


class Citation(BaseModel):
    """TODO: declare url as HttpUrl and title as str."""
    pass


class Answer(BaseModel):
    """TODO: declare answer as non-empty str and sources as list[Citation]."""
    pass


if __name__ == "__main__":
    payload = {"answer": "Demo answer", "sources": [{"url": "https://example.org/1", "title": "Demo"}]}
    item = Answer.model_validate(payload)
    print(item.model_dump_json(indent=2))
