"""Real LLM agent, but only an OFFLINE deterministic mock tool."""
import os
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain.tools import tool
from langchain_openai import ChatOpenAI
from ai_job_agent.mock_data import search_mock_jobs

load_dotenv()
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("Cần OPENAI_API_KEY trong .env")

@tool
def search_jobs_mock(query: str) -> str:
    """Search a demo-only offline dataset of AI jobs; results are NOT real vacancies."""
    import json
    return json.dumps(search_mock_jobs(query), ensure_ascii=False)

agent = create_agent(
    model=ChatOpenAI(model=os.getenv("OPENAI_MODEL", "gpt-4o-mini")),
    tools=[search_jobs_mock],
    system_prompt="Mọi kết quả là dữ liệu DEMO; không khẳng định có tuyển thật.",
)
result = agent.invoke({"messages": [{"role": "user", "content": "Tìm việc AI Engineer LangChain trong dữ liệu demo"}]})
print(result["messages"][-1].content)
