"""Run provider-native, tool-call, or auto structured output (requires OpenAI key)."""
import argparse
import os
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain.agents.structured_output import ProviderStrategy, ToolStrategy
from langchain_openai import ChatOpenAI
from ai_job_agent.schemas import AgentResponse


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--strategy", choices=["auto", "provider", "tool"], default="auto")
    args = p.parse_args()
    load_dotenv()
    if not os.getenv("OPENAI_API_KEY"):
        raise RuntimeError("Cần OPENAI_API_KEY")
    strategy = {"auto": AgentResponse, "provider": ProviderStrategy(AgentResponse),
                "tool": ToolStrategy(AgentResponse)}[args.strategy]
    agent = create_agent(
        model=ChatOpenAI(model=os.getenv("OPENAI_MODEL", "gpt-4o-mini")),
        tools=[], response_format=strategy,
        system_prompt="Chỉ dựa vào câu người dùng. Không bịa nguồn. Nếu không có dữ liệu: jobs=[], sources=[].",
    )
    r = agent.invoke({"messages": [{"role": "user", "content": "Giải thích một câu về AI Agents, chưa cần việc làm."}]})
    print(r["structured_response"].model_dump_json(indent=2))


if __name__ == "__main__":
    main()
