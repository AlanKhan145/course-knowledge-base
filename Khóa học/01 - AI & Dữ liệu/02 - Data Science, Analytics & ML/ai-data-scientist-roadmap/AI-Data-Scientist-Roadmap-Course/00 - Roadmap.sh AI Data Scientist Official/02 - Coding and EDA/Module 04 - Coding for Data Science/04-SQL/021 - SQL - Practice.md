# 021 - SQL

**Course:** 02 - Coding and EDA
**Module:** Module 04 - Coding for Data Science
**Content Group:** SQL
**Roadmap Source:** Coding for Data Science / SQL
**Lesson Type:** Coding
**Lesson Order:** 021
**Suggested Duration:** 20 minutes

---

## 1. Overview

This lesson introduces **SQL — Structured Query Language** in the context of AI and Data Science.

SQL is used to retrieve, filter, join, aggregate, and transform structured data stored in relational databases. It is one of the most important tools for Data Analysts, Data Scientists, Analytics Engineers, Data Engineers, and Machine Learning Engineers.

After completing this lesson, you should understand:

* What SQL is and why it is important.
* How SQL fits into an AI and Data Science workflow.
* How to extract and aggregate data from relational databases.
* How to use joins, subqueries, Common Table Expressions, and window functions.
* How to turn SQL query results into notebooks, metrics, dashboards, models, APIs, or portfolio projects.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain SQL in your own words.
* Identify where SQL is used in an AI or Data Science workflow.
* Write queries using `SELECT`, `WHERE`, `GROUP BY`, and `ORDER BY`.
* Combine tables using SQL joins.
* Use subqueries and Common Table Expressions.
* Apply window functions to analytical problems.
* Determine the **grain** of a query result.
* Detect duplicate rows caused by incorrect joins.
* Use SQL results in Python, dashboards, experiments, or machine learning pipelines.

---

## 3. What Is SQL?

**SQL** stands for **Structured Query Language**.

It is a language designed for communicating with relational database management systems such as:

* PostgreSQL
* MySQL
* Microsoft SQL Server
* SQLite
* Oracle Database
* Snowflake
* Google BigQuery
* Amazon Redshift

A relational database stores data in tables made of rows and columns.

For example, an `orders` table may look like this:

| order_id | customer_id | order_date | revenue |
| -------: | ----------: | ---------- | ------: |
|     1001 |          12 | 2026-01-05 |  150.00 |
|     1002 |          18 | 2026-01-06 |  320.00 |
|     1003 |          12 | 2026-02-02 |   90.00 |

SQL allows us to ask questions such as:

* How much revenue did the company generate each month?
* Which customers made the most purchases?
* Which products have the highest return rate?
* How many users became inactive?
* What percentage of users completed a conversion funnel?
* Which features should be included in a machine learning dataset?

---

## 4. SQL in the Data Science Workflow

SQL is commonly used before Python modeling, visualization, or dashboard development.

```mermaid
flowchart LR
    A[(Operational Database)] --> B[SQL Query]
    B --> C[Filter and Join Data]
    C --> D[Aggregate or Transform]
    D --> E[Analysis Dataset]
    E --> F[Python or Notebook]
    E --> G[Dashboard]
    E --> H[Machine Learning Model]
    E --> I[API or Data Product]
```

A typical workflow is:

1. Identify the business or research question.
2. Locate the required database tables.
3. Define the grain of the expected result.
4. Join and filter the necessary records.
5. Aggregate or transform the data.
6. Validate row counts and metrics.
7. Export the result to Python, a dashboard, or a model pipeline.

---

## 5. Core SQL Query Structure

A basic SQL query follows this structure:

```sql
SELECT
    column_1,
    column_2
FROM table_name
WHERE condition
GROUP BY
    column_1,
    column_2
HAVING aggregate_condition
ORDER BY
    column_1;
```

Although `SELECT` appears first, SQL conceptually processes a query in approximately this order:

```text
FROM
  ↓
JOIN
  ↓
WHERE
  ↓
GROUP BY
  ↓
HAVING
  ↓
SELECT
  ↓
ORDER BY
  ↓
LIMIT
```

Understanding this logical order helps explain why aliases created in `SELECT` are not always available inside `WHERE`.

---

## 6. Selecting Data

Use `SELECT` to choose columns from a table.

```sql
SELECT
    order_id,
    customer_id,
    revenue
FROM orders;
```

To select every column:

```sql
SELECT *
FROM orders;
```

Using `SELECT *` can be useful during exploration, but it is usually better to list the required columns explicitly in production queries.

### Column aliases

Aliases make query results easier to understand.

```sql
SELECT
    customer_id,
    revenue AS order_revenue
FROM orders;
```

### Calculated columns

SQL can create new values from existing columns.

```sql
SELECT
    order_id,
    quantity,
    unit_price,
    quantity * unit_price AS total_amount
FROM order_items;
```

---

## 7. Filtering Rows

Use `WHERE` to filter individual rows before aggregation.

```sql
SELECT
    order_id,
    customer_id,
    revenue
FROM orders
WHERE revenue >= 100;
```

### Common comparison operators

| Operator     | Meaning                     |
| ------------ | --------------------------- |
| `=`          | Equal to                    |
| `<>` or `!=` | Not equal to                |
| `>`          | Greater than                |
| `<`          | Less than                   |
| `>=`         | Greater than or equal to    |
| `<=`         | Less than or equal to       |
| `IN`         | Matches one value in a list |
| `BETWEEN`    | Falls within a range        |
| `LIKE`       | Matches a text pattern      |
| `IS NULL`    | Checks for missing values   |

### Multiple conditions

```sql
SELECT *
FROM orders
WHERE revenue >= 100
  AND order_status = 'completed';
```

```sql
SELECT *
FROM customers
WHERE country = 'Vietnam'
   OR country = 'Thailand';
```

The same condition can be written more clearly with `IN`:

```sql
SELECT *
FROM customers
WHERE country IN ('Vietnam', 'Thailand');
```

---

## 8. Sorting and Limiting Results

Use `ORDER BY` to sort rows.

```sql
SELECT
    customer_id,
    revenue
FROM orders
ORDER BY revenue DESC;
```

* `ASC` sorts from smallest to largest.
* `DESC` sorts from largest to smallest.

Use `LIMIT` to return only a specific number of rows.

```sql
SELECT
    customer_id,
    revenue
FROM orders
ORDER BY revenue DESC
LIMIT 10;
```

This query returns the ten highest-value orders.

---

## 9. Aggregation

Aggregation summarizes multiple rows into metrics.

Common aggregate functions include:

| Function  | Purpose               |
| --------- | --------------------- |
| `COUNT()` | Counts rows or values |
| `SUM()`   | Calculates a total    |
| `AVG()`   | Calculates an average |
| `MIN()`   | Finds the minimum     |
| `MAX()`   | Finds the maximum     |

### Example: total revenue

```sql
SELECT
    SUM(revenue) AS total_revenue
FROM orders;
```

### Example: number of orders

```sql
SELECT
    COUNT(*) AS number_of_orders
FROM orders;
```

### Example: unique customers

```sql
SELECT
    COUNT(DISTINCT customer_id) AS unique_customers
FROM orders;
```

---

## 10. Grouping Data

Use `GROUP BY` to calculate metrics for each category.

```sql
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(revenue) AS total_revenue
FROM orders
GROUP BY customer_id;
```

The result contains one row per customer.

### Monthly revenue example

```sql
SELECT
    DATE_TRUNC('month', order_date) AS month,
    SUM(revenue) AS revenue
FROM orders
GROUP BY
    DATE_TRUNC('month', order_date)
ORDER BY month;
```

Some SQL systems allow positional grouping:

```sql
SELECT
    DATE_TRUNC('month', order_date) AS month,
    SUM(revenue) AS revenue
FROM orders
GROUP BY 1
ORDER BY 1;
```

Using explicit column expressions is usually easier to maintain than positional references such as `GROUP BY 1`.

---

## 11. `WHERE` Versus `HAVING`

`WHERE` filters rows before aggregation.

`HAVING` filters groups after aggregation.

```sql
SELECT
    customer_id,
    SUM(revenue) AS total_revenue
FROM orders
WHERE order_status = 'completed'
GROUP BY customer_id
HAVING SUM(revenue) >= 1000;
```

In this query:

* `WHERE` removes incomplete orders.
* `GROUP BY` creates one group per customer.
* `HAVING` keeps customers whose total revenue is at least 1,000.

---

## 12. SQL Joins

Joins combine related records from multiple tables.

Suppose we have two tables:

### `customers`

| customer_id | customer_name | country   |
| ----------: | ------------- | --------- |
|           1 | Alice         | Vietnam   |
|           2 | Bob           | Thailand  |
|           3 | Carol         | Singapore |

### `orders`

| order_id | customer_id | revenue |
| -------: | ----------: | ------: |
|      101 |           1 |     250 |
|      102 |           1 |     180 |
|      103 |           2 |     320 |

### Join relationship

```mermaid
erDiagram
    CUSTOMERS ||--o{ ORDERS : places

    CUSTOMERS {
        int customer_id PK
        string customer_name
        string country
    }

    ORDERS {
        int order_id PK
        int customer_id FK
        decimal revenue
    }
```

---

### 12.1 `INNER JOIN`

An `INNER JOIN` returns only matching records from both tables.

```sql
SELECT
    o.order_id,
    c.customer_name,
    o.revenue
FROM orders AS o
INNER JOIN customers AS c
    ON o.customer_id = c.customer_id;
```

Carol is not returned because she has no matching order.

---

### 12.2 `LEFT JOIN`

A `LEFT JOIN` returns every record from the left table and matching records from the right table.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.revenue
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

Carol is included, but her order fields contain `NULL`.

### Finding customers with no orders

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

---

### 12.3 Join overview

```mermaid
flowchart TB
    A[INNER JOIN] --> A1[Only rows that match in both tables]
    B[LEFT JOIN] --> B1[All left-table rows and matching right-table rows]
    C[RIGHT JOIN] --> C1[All right-table rows and matching left-table rows]
    D[FULL OUTER JOIN] --> D1[All rows from both tables]
    E[CROSS JOIN] --> E1[Every possible pair of rows]
```

---

## 13. Understanding Query Grain

The **grain** describes what one row in a dataset represents.

Examples:

* One row per order.
* One row per customer.
* One row per product per month.
* One row per user per day.
* One row per machine learning observation.

Before writing a query, complete this sentence:

> Each row in the final result represents one __________.

For example:

> Each row represents one customer per month.

A suitable query may be:

```sql
SELECT
    customer_id,
    DATE_TRUNC('month', order_date) AS month,
    COUNT(*) AS order_count,
    SUM(revenue) AS monthly_revenue
FROM orders
GROUP BY
    customer_id,
    DATE_TRUNC('month', order_date);
```

The grain is:

```text
customer_id + month
```

### Why grain matters

Incorrect grain can cause:

* Duplicate rows.
* Inflated revenue.
* Incorrect customer counts.
* Misleading averages.
* Data leakage in machine learning.
* Incorrect dashboard metrics.

---

## 14. Join Duplication Problem

Consider a customer with:

* Three orders.
* Two support tickets.

Joining both tables directly by `customer_id` may produce:

```text
3 orders × 2 tickets = 6 rows
```

This can duplicate revenue values.

### Risky query

```sql
SELECT
    c.customer_id,
    SUM(o.revenue) AS total_revenue,
    COUNT(t.ticket_id) AS ticket_count
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
LEFT JOIN support_tickets AS t
    ON c.customer_id = t.customer_id
GROUP BY c.customer_id;
```

### Safer solution: aggregate before joining

```sql
WITH customer_orders AS (
    SELECT
        customer_id,
        SUM(revenue) AS total_revenue
    FROM orders
    GROUP BY customer_id
),
customer_tickets AS (
    SELECT
        customer_id,
        COUNT(*) AS ticket_count
    FROM support_tickets
    GROUP BY customer_id
)
SELECT
    c.customer_id,
    COALESCE(o.total_revenue, 0) AS total_revenue,
    COALESCE(t.ticket_count, 0) AS ticket_count
FROM customers AS c
LEFT JOIN customer_orders AS o
    ON c.customer_id = o.customer_id
LEFT JOIN customer_tickets AS t
    ON c.customer_id = t.customer_id;
```

Both intermediate tables now have one row per customer before the joins occur.

---

## 15. Subqueries

A subquery is a query nested inside another query.

### Example: orders above the average revenue

```sql
SELECT
    order_id,
    customer_id,
    revenue
FROM orders
WHERE revenue > (
    SELECT AVG(revenue)
    FROM orders
);
```

The inner query calculates the average order revenue. The outer query returns orders above that average.

### Subquery in `FROM`

```sql
SELECT
    monthly_sales.month,
    monthly_sales.revenue
FROM (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(revenue) AS revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
) AS monthly_sales
ORDER BY monthly_sales.month;
```

---

## 16. Common Table Expressions

A **Common Table Expression**, or CTE, creates a temporary named result using the `WITH` keyword.

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(revenue) AS revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    month,
    revenue
FROM monthly_sales
ORDER BY month;
```

CTEs are useful because they:

* Divide a complex query into readable steps.
* Make transformations easier to debug.
* Allow intermediate results to be reused.
* Clearly communicate the grain of each stage.

### Multiple CTEs

```sql
WITH completed_orders AS (
    SELECT *
    FROM orders
    WHERE order_status = 'completed'
),
customer_revenue AS (
    SELECT
        customer_id,
        SUM(revenue) AS total_revenue
    FROM completed_orders
    GROUP BY customer_id
)
SELECT
    customer_id,
    total_revenue
FROM customer_revenue
WHERE total_revenue >= 1000;
```

---

## 17. Window Functions

Window functions calculate values across related rows without collapsing them into one row per group.

The general syntax is:

```sql
function_name() OVER (
    PARTITION BY column_name
    ORDER BY column_name
)
```

Unlike `GROUP BY`, window functions preserve the original rows.

---

### 17.1 Ranking customers

```sql
SELECT
    customer_id,
    SUM(revenue) AS total_revenue,
    RANK() OVER (
        ORDER BY SUM(revenue) DESC
    ) AS revenue_rank
FROM orders
GROUP BY customer_id;
```

---

### 17.2 Ranking orders within each customer

```sql
SELECT
    order_id,
    customer_id,
    order_date,
    revenue,
    ROW_NUMBER() OVER (
        PARTITION BY customer_id
        ORDER BY order_date
    ) AS customer_order_number
FROM orders;
```

Each customer's first order receives the number `1`.

---

### 17.3 Running total

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(revenue) AS monthly_revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    month,
    monthly_revenue,
    SUM(monthly_revenue) OVER (
        ORDER BY month
    ) AS cumulative_revenue
FROM monthly_sales
ORDER BY month;
```

---

### 17.4 Comparing with the previous period

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(revenue) AS monthly_revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT
    month,
    monthly_revenue,
    LAG(monthly_revenue) OVER (
        ORDER BY month
    ) AS previous_month_revenue
FROM monthly_sales
ORDER BY month;
```

### Month-over-month growth

```sql
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(revenue) AS monthly_revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
),
sales_with_previous_month AS (
    SELECT
        month,
        monthly_revenue,
        LAG(monthly_revenue) OVER (
            ORDER BY month
        ) AS previous_month_revenue
    FROM monthly_sales
)
SELECT
    month,
    monthly_revenue,
    previous_month_revenue,
    ROUND(
        100.0
        * (monthly_revenue - previous_month_revenue)
        / NULLIF(previous_month_revenue, 0),
        2
    ) AS growth_percentage
FROM sales_with_previous_month
ORDER BY month;
```

`NULLIF(previous_month_revenue, 0)` prevents division by zero.

---

## 18. Handling Missing Values

SQL represents missing values with `NULL`.

### Find missing values

```sql
SELECT *
FROM customers
WHERE country IS NULL;
```

Do not write:

```sql
WHERE country = NULL
```

Comparisons with `NULL` require `IS NULL` or `IS NOT NULL`.

### Replace missing values

Use `COALESCE` to return the first non-null value.

```sql
SELECT
    customer_id,
    COALESCE(country, 'Unknown') AS country
FROM customers;
```

---

## 19. Conditional Logic with `CASE`

`CASE` creates categories based on conditions.

```sql
SELECT
    order_id,
    revenue,
    CASE
        WHEN revenue >= 1000 THEN 'High Value'
        WHEN revenue >= 500 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS order_segment
FROM orders;
```

### Conditional aggregation

```sql
SELECT
    COUNT(*) AS total_orders,
    SUM(
        CASE
            WHEN order_status = 'completed' THEN 1
            ELSE 0
        END
    ) AS completed_orders
FROM orders;
```

---

## 20. Date and Time Analysis

Date functions differ slightly between database systems, but common analytical operations include:

* Extracting the year or month.
* Grouping records by day, week, or month.
* Calculating time differences.
* Filtering recent data.
* Creating retention or cohort metrics.

### Extract year and month

```sql
SELECT
    EXTRACT(YEAR FROM order_date) AS order_year,
    EXTRACT(MONTH FROM order_date) AS order_month,
    SUM(revenue) AS revenue
FROM orders
GROUP BY
    EXTRACT(YEAR FROM order_date),
    EXTRACT(MONTH FROM order_date)
ORDER BY
    order_year,
    order_month;
```

### Filter a date range

```sql
SELECT *
FROM orders
WHERE order_date >= DATE '2026-01-01'
  AND order_date < DATE '2027-01-01';
```

Using a half-open interval is often safer than using `BETWEEN` when timestamps are involved.

---

## 21. SQL for Machine Learning

SQL is often used to create a **feature table** before model training.

For example, a customer churn dataset may contain:

* Number of orders.
* Total revenue.
* Average order value.
* Days since the latest order.
* Number of support tickets.
* Customer lifetime.
* Churn label.

```sql
WITH customer_features AS (
    SELECT
        customer_id,
        COUNT(*) AS order_count,
        SUM(revenue) AS total_revenue,
        AVG(revenue) AS average_order_value,
        MAX(order_date) AS latest_order_date
    FROM orders
    GROUP BY customer_id
)
SELECT
    customer_id,
    order_count,
    total_revenue,
    average_order_value,
    latest_order_date
FROM customer_features;
```

The resulting dataset can be loaded into Python for modeling.

```python
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("postgresql://user:password@localhost/sales")

query = """
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(revenue) AS total_revenue,
    AVG(revenue) AS average_order_value
FROM orders
GROUP BY customer_id;
"""

customer_features = pd.read_sql(query, engine)

print(customer_features.head())
```

---

## 22. Query Validation

A SQL query is not complete until its result has been validated.

Useful validation checks include:

### Check the number of rows

```sql
SELECT COUNT(*)
FROM query_result;
```

### Check the number of unique entities

```sql
SELECT
    COUNT(*) AS row_count,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM query_result;
```

If the expected grain is one row per customer, these two counts should be equal.

### Check for duplicate keys

```sql
SELECT
    customer_id,
    COUNT(*) AS row_count
FROM query_result
GROUP BY customer_id
HAVING COUNT(*) > 1;
```

### Check missing values

```sql
SELECT
    COUNT(*) AS total_rows,
    COUNT(customer_id) AS non_null_customer_ids
FROM query_result;
```

### Compare totals before and after a join

```sql
SELECT SUM(revenue)
FROM orders;
```

Compare this result with the sum from the joined dataset. A larger value may indicate duplicated rows.

---

## 23. Practical Demo

### Business question

> How much revenue was generated each month, how many orders were completed, and what was the average order value?

```sql
SELECT
    DATE_TRUNC('month', order_date) AS month,
    COUNT(*) AS order_count,
    SUM(revenue) AS total_revenue,
    AVG(revenue) AS average_order_value
FROM orders
WHERE order_status = 'completed'
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;
```

### Expected grain

```text
One row per month
```

### Possible result

| month      | order_count | total_revenue | average_order_value |
| ---------- | ----------: | ------------: | ------------------: |
| 2026-01-01 |         520 |        81,200 |              156.15 |
| 2026-02-01 |         570 |        92,300 |              161.93 |
| 2026-03-01 |         610 |       101,500 |              166.39 |

### Possible insight

> Revenue increased across all three months. The growth was driven by both a higher number of completed orders and a gradual increase in average order value.

---

## 24. Hands-On Exercise

Create a small sales database using CSV files or SQLite.

Suggested tables:

### `customers`

* `customer_id`
* `customer_name`
* `country`
* `signup_date`

### `orders`

* `order_id`
* `customer_id`
* `order_date`
* `order_status`
* `revenue`

### `products`

* `product_id`
* `product_name`
* `category`

### `order_items`

* `order_id`
* `product_id`
* `quantity`
* `unit_price`

Complete the following tasks:

1. Calculate total revenue.
2. Calculate monthly revenue.
3. Count the number of unique customers.
4. Find the ten customers with the highest revenue.
5. Calculate average order value by country.
6. Find customers who have never placed an order.
7. Rank products by revenue within each category.
8. Calculate cumulative monthly revenue.
9. Calculate month-over-month revenue growth.
10. Identify and explain the grain of every query result.

Then load at least one query result into Pandas and create:

* One trend chart.
* One comparison chart or summary table.
* Three written insights.
* At least one recommendation or follow-up question.

---

## 25. Mini Project

### SQL and Python Sales Analysis

Build a small reproducible data analysis project using SQL and Python.

### Suggested workflow

```mermaid
flowchart TD
    A[CSV Files] --> B[SQLite or PostgreSQL]
    B --> C[SQL Data Exploration]
    C --> D[SQL Transformation Queries]
    D --> E[Validated Analysis Table]
    E --> F[Pandas]
    F --> G[Charts and Metrics]
    G --> H[Markdown Report]
```

### Project requirements

* Store the raw CSV files separately.
* Create database tables from the raw data.
* Write SQL queries for cleaning and transformation.
* Document the grain of each important query.
* Validate joins and duplicate records.
* Load the final result into Pandas.
* Produce at least three insights.
* Include at least one chart.
* Save the SQL scripts and notebook in Git.
* Add a README explaining how to reproduce the project.

### Possible portfolio structure

```text
sql-sales-analysis/
├── data/
│   ├── raw/
│   │   ├── customers.csv
│   │   └── orders.csv
│   └── processed/
├── sql/
│   ├── create_tables.sql
│   ├── data_cleaning.sql
│   ├── customer_analysis.sql
│   └── monthly_metrics.sql
├── notebooks/
│   └── sales_analysis.ipynb
├── reports/
│   └── sales_report.md
├── README.md
└── requirements.txt
```

---

## 26. Common Mistakes

### 26.1 Ignoring query grain

A result may contain multiple rows per customer when the analysis expects one row per customer.

**Solution:** Define the expected grain before writing the query.

---

### 26.2 Creating duplicate rows through joins

Joining multiple one-to-many tables can multiply records.

**Solution:** Check relationship cardinality and aggregate tables before joining.

---

### 26.3 Using `SELECT *` in production queries

This may retrieve unnecessary columns and make queries harder to maintain.

**Solution:** Select only the required columns.

---

### 26.4 Confusing `WHERE` and `HAVING`

`WHERE` filters rows, while `HAVING` filters aggregated groups.

---

### 26.5 Incorrectly comparing values with `NULL`

Incorrect:

```sql
WHERE country = NULL
```

Correct:

```sql
WHERE country IS NULL
```

---

### 26.6 Counting duplicated entities

```sql
COUNT(customer_id)
```

counts every occurrence, while:

```sql
COUNT(DISTINCT customer_id)
```

counts unique customers.

Choose the function that matches the metric definition.

---

### 26.7 Using an incorrect join type

An `INNER JOIN` may silently remove entities with no matching records.

**Solution:** Decide whether unmatched records should remain in the result.

---

### 26.8 Performing manual transformations

Manual spreadsheet edits are difficult to reproduce and audit.

**Solution:** Save cleaning and transformation logic as SQL scripts.

---

### 26.9 Creating charts without explaining insights

A chart is not a conclusion.

A good analysis should explain:

* What changed?
* How large was the change?
* Why might it have happened?
* What action or investigation should follow?

---

### 26.10 Failing to validate results

A query can run successfully while still producing incorrect metrics.

**Solution:** Validate row counts, distinct keys, missing values, and aggregate totals.

---

## 27. Best Practices

* Define the expected grain before writing the query.
* Use meaningful table and column aliases.
* Format SQL consistently.
* Use CTEs to separate complex transformation stages.
* Filter unnecessary rows as early as practical.
* Aggregate one-to-many tables before joining them.
* Avoid `SELECT *` in reusable queries.
* Use comments to explain business rules.
* Validate row counts and unique keys.
* Store SQL scripts in version control.
* Keep raw data unchanged.
* Document assumptions and metric definitions.
* Test queries on a small sample before processing large datasets.
* Use parameterized queries when accepting external input.

---

## 28. Completion Checklist

* [ ] I can explain SQL in one or two minutes.
* [ ] I can write queries using `SELECT`, `FROM`, `WHERE`, and `ORDER BY`.
* [ ] I can aggregate data using `GROUP BY`.
* [ ] I understand the difference between `WHERE` and `HAVING`.
* [ ] I can combine tables using `INNER JOIN` and `LEFT JOIN`.
* [ ] I can use a subquery or Common Table Expression.
* [ ] I can use at least one window function.
* [ ] I can explain the grain of my query result.
* [ ] I can detect duplicate rows caused by joins.
* [ ] I can validate row counts and aggregate totals.
* [ ] I have created a SQL query, notebook, chart, API, or portfolio note.
* [ ] I have documented at least one assumption, limitation, or follow-up question.

---

## 29. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

SQL supports this outcome by allowing you to:

* Retrieve data directly from databases.
* Build reusable analysis datasets.
* Define and calculate business metrics.
* Prepare features for machine learning.
* Connect databases with notebooks, dashboards, and APIs.
* Store transformation logic in version-controlled scripts.

---

## 30. Related Project

**Mini Project:** SQL and Python Data Analysis using a small sales database and a Pandas report.

Suggested deliverables:

* Database schema.
* SQL table creation script.
* SQL cleaning and transformation scripts.
* Analysis notebook.
* Two or more charts.
* Three or more insights.
* Metric definitions.
* Validation checks.
* README documentation.

---

## 31. Summary

**SQL** is a foundational skill for AI and Data Scientists because most real-world data is stored in databases.

The most important concepts from this lesson are:

* SQL retrieves and transforms structured data.
* `WHERE` filters rows before aggregation.
* `GROUP BY` changes the grain of a dataset.
* Joins combine tables but can create duplicates.
* Subqueries and CTEs organize complex logic.
* Window functions perform advanced analysis without collapsing rows.
* Every query should have a clearly defined grain.
* Query results must be validated before they are used.
* SQL becomes more valuable when combined with Python, notebooks, dashboards, machine learning models, APIs, and Git.

Do not treat SQL as only a syntax exercise. Turn it into a reproducible notebook, analysis query, dashboard metric, machine learning feature table, API endpoint, or portfolio project.

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
