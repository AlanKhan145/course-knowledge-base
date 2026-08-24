# 002 - SQL / Database Chatbot using LangChain

## Section

Advanced Projects with LangChain

## Duration

5 minutes

## Main Idea

Builds a natural language interface for a SQL database. Users ask questions in plain English; LangChain translates the question to a SQL query, executes it against the database, and the LLM formats the result as a human-readable answer.

## Architecture

```
User question (natural language)
    ↓
LLM generates SQL query
    ↓
SQL engine executes query on the database
    ↓
Raw result returned
    ↓
LLM formats result as natural language answer
    ↓
Response to user
```

## Implementation

### Setup

```python
from langchain_community.utilities import SQLDatabase
from langchain_openai import ChatOpenAI
from langchain.chains import create_sql_query_chain
from langchain_community.tools.sql_database.tool import QuerySQLDataBaseTool
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# Connect to a SQLite database
db = SQLDatabase.from_uri("sqlite:///sales.db")

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
```

### SQL Query Generation Chain

```python
# Chain that generates SQL from a natural language question
sql_chain = create_sql_query_chain(llm, db)

# Test: generate a SQL query
query = sql_chain.invoke({"question": "How many orders were placed in January 2024?"})
print(query)
# SELECT COUNT(*) FROM orders WHERE strftime('%Y-%m', order_date) = '2024-01'
```

### SQL Execution + Answer Formatting

```python
execute_query = QuerySQLDataBaseTool(db=db)

answer_prompt = ChatPromptTemplate.from_template("""
Given the following user question, SQL query, and SQL result, answer the question.

Question: {question}
SQL Query: {query}
SQL Result: {result}

Answer:
""")

full_chain = (
    RunnablePassthrough.assign(query=sql_chain).assign(
        result=lambda x: execute_query.invoke(x["query"])
    )
    | answer_prompt
    | llm
    | StrOutputParser()
)

response = full_chain.invoke({"question": "What were the top 3 best-selling products last month?"})
print(response)
```

## Creating a Test Database

```python
import sqlite3

conn = sqlite3.connect("sales.db")
cursor = conn.cursor()

cursor.executescript("""
CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, category TEXT, price REAL);
CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, product_id INTEGER, quantity INTEGER,
    order_date TEXT, customer TEXT);
INSERT INTO products VALUES (1, 'Laptop', 'Electronics', 999.99);
INSERT INTO products VALUES (2, 'Headphones', 'Electronics', 149.99);
INSERT INTO orders VALUES (1, 1, 2, '2024-01-15', 'Alice');
INSERT INTO orders VALUES (2, 2, 5, '2024-01-22', 'Bob');
""")
conn.commit()
conn.close()
```

## Safety Considerations

- Use **read-only database connections** for public-facing chatbots.
- Add a **query validator** to reject destructive SQL (DROP, DELETE, UPDATE).
- Log all generated queries for auditing.

```python
# Read-only SQLite
db = SQLDatabase.from_uri("sqlite:///sales.db?mode=ro", uri=True)
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Build a LangChain SQL chain that converts natural language to SQL.
- Execute the generated query and format the result with an LLM.
- Connect the chain to a SQLite database.
- Apply basic safety practices for production SQL chatbots.

## Review Questions

1. What happens if the LLM generates an incorrect SQL query?
2. Why should a production SQL chatbot use a read-only database connection?
3. How does `create_sql_query_chain` know the schema of the database?

## Summary

The SQL chatbot uses LangChain to translate natural language questions into SQL, execute the query, and format the result as a human-readable answer. This pattern enables non-technical users to query databases without writing SQL, and is applicable to analytics dashboards, business intelligence tools, and enterprise data exploration.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
