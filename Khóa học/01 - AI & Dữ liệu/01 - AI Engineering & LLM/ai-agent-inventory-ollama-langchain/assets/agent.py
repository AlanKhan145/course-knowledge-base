"""SQL Agent demo trên LangChain Classic + Ollama; chỉ đọc dữ liệu SQLite."""
from pathlib import Path

from langchain_community.agent_toolkits import SQLDatabaseToolkit, create_sql_agent
from langchain_community.utilities import SQLDatabase
from langchain_ollama import ChatOllama

from custom_tools import calculate_max_revenue
from prompt import SQL_AGENT_PREFIX

ROOT = Path(__file__).resolve().parent
DB_PATH = ROOT / "grocery_data.db"


def build_agent():
    if not DB_PATH.is_file():
        raise FileNotFoundError("Chưa có grocery_data.db: chạy python load_excel.py")

    # SQLite URI mode=ro được cưỡng chế ở tầng database; prompt chỉ là hướng dẫn.
    uri = f"sqlite:///file:{DB_PATH.as_posix()}?mode=ro&uri=true"
    db = SQLDatabase.from_uri(uri, include_tables=["report"], sample_rows_in_table_info=2)
    llm = ChatOllama(model="mistral", temperature=0)
    toolkit = SQLDatabaseToolkit(db=db, llm=llm)
    return create_sql_agent(
        llm=llm,
        toolkit=toolkit,
        extra_tools=[calculate_max_revenue],
        prefix=SQL_AGENT_PREFIX,
        agent_type="zero-shot-react-description",
        max_iterations=7,
        top_k=10,
        verbose=False,
        agent_executor_kwargs={"handle_parsing_errors": True},
    )


_AGENT = None


def ask_agent(question: str) -> str:
    global _AGENT
    if not question or not question.strip():
        return "Vui lòng nhập câu hỏi."
    if _AGENT is None:
        _AGENT = build_agent()
    result = _AGENT.invoke({"input": question.strip()})
    return str(result.get("output", "Agent không có câu trả lời."))


if __name__ == "__main__":
    print(ask_agent("SKU-02 có bao nhiêu hàng?"))
