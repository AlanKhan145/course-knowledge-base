"""Does not print secret values."""
import os
from importlib.metadata import PackageNotFoundError, version
from dotenv import load_dotenv

load_dotenv()
for name in ("langchain", "langchain-openai", "langchain-tavily", "tavily-python", "pydantic"):
    try:
        print(f"{name}: {version(name)}")
    except PackageNotFoundError:
        print(f"{name}: chưa cài")
for key in ("OPENAI_API_KEY", "TAVILY_API_KEY", "LANGSMITH_API_KEY"):
    print(f"{key}: {'đã cấu hình' if os.getenv(key) else 'chưa cấu hình'}")
