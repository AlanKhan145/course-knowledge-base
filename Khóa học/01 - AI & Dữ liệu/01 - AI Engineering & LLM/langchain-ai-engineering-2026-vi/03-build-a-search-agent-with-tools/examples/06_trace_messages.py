"""Inspect message and tool call metadata; not hidden chain-of-thought."""
import os
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain.tools import tool
from langchain_openai import ChatOpenAI

load_dotenv()
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("Thiếu OPENAI_API_KEY")

@tool
def look_up_demo(query: str) -> str:
    """Return a fictional search observation for teaching tool calling."""
    return "DỮ LIỆU GIẢ LẬP: ví dụ Tokyo nắng, không phải dữ liệu thời tiết thật."

agent = create_agent(ChatOpenAI(model=os.getenv("OPENAI_MODEL", "gpt-4o-mini")), [look_up_demo])
result = agent.invoke({"messages": [{"role": "user", "content": "Hãy dùng look_up_demo cho ví dụ thời tiết Tokyo"}]})
for index, message in enumerate(result["messages"], 1):
    print(index, type(message).__name__, "type=", message.type)
    if getattr(message, "tool_calls", None):
        for call in message.tool_calls:
            print("  tool:", call["name"], "args:", call["args"], "id:", call["id"])
    if message.type == "tool":
        print("  observation:", str(message.content)[:250])
print("\nFINAL:", result["messages"][-1].content)
