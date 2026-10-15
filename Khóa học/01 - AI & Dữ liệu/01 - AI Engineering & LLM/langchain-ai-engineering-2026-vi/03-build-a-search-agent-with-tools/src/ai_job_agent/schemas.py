"""Pydantic output contracts; validation != factual accuracy."""
from pydantic import BaseModel, Field, HttpUrl


class Source(BaseModel):
    """One accessible source that actually appeared in search results."""
    url: HttpUrl = Field(description="Original HTTP(S) source URL")
    title: str = Field(default="Không rõ", description="Source headline")


class JobPosting(BaseModel):
    """Job information: do not invent unknown fields."""
    title: str = Field(min_length=1)
    company: str | None = None
    location: str | None = None
    url: HttpUrl
    skills: list[str] = Field(default_factory=list)
    status: str | None = Field(default=None, description="Only when explicitly supported by the source")


class AgentResponse(BaseModel):
    """Structured answer with evidence and uncertainty."""
    answer: str = Field(min_length=1, description="Vietnamese concise answer")
    jobs: list[JobPosting] = Field(default_factory=list)
    sources: list[Source] = Field(default_factory=list)
    warnings: list[str] = Field(default_factory=list)
