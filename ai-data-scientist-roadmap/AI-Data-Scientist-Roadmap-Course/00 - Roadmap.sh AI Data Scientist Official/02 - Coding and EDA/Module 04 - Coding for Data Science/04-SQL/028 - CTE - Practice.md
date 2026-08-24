# 028 - Common Table Expression (CTE)

**Course Section:** 02 - Coding and EDA
**Module:** Module 04 - Coding for Data Science
**Content Group:** SQL
**Roadmap Source:** Coding for Data Science / SQL
**Lesson Type:** Coding
**Order in Module:** 028
**Suggested Duration:** 20 minutes

---

## 1. Summary

A **Common Table Expression**, usually abbreviated as **CTE**, is a temporary named result set defined inside a SQL query.

A CTE allows you to break a complex query into smaller, readable steps. It is especially useful when working with:

* Data cleaning
* Multi-step aggregations
* Feature engineering
* Customer segmentation
* Time-series analysis
* Recursive hierarchical data
* Machine-learning dataset preparation

A CTE exists only while the SQL statement is being executed. It is not stored permanently as a table or view.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain what a CTE is in your own words.
* Write a basic CTE using the `WITH` keyword.
* Reference a CTE from the main SQL query.
* Use multiple CTEs in one query.
* Combine CTEs with aggregation, filtering, joins, and window functions.
* Understand the difference between a CTE, subquery, temporary table, and view.
* Use a recursive CTE for hierarchical or sequential data.
* Apply CTEs to prepare analysis tables and machine-learning datasets.

---

## 3. Core Concept

A CTE creates a temporary named dataset that can be referenced by the query that follows it.

The general syntax is:

```sql
WITH cte_name AS (
    SELECT column_1, column_2
    FROM table_name
    WHERE condition
)
SELECT *
FROM cte_name;
```

The query inside the parentheses creates the temporary result set.

The final query uses that result set as if it were a regular table.

---

## 4. Basic CTE Structure

```text
WITH cte_name AS (
    Step 1: create an intermediate result
)

Step 2: query the intermediate result
```

Example:

```sql
WITH active_customers AS (
    SELECT
        customer_id,
        customer_name,
        country
    FROM customers
    WHERE status = 'active'
)
SELECT
    customer_id,
    customer_name
FROM active_customers;
```

In this example:

1. The CTE `active_customers` selects active customers.
2. The main query retrieves data from the CTE.
3. The CTE disappears after the query finishes.

---

## 5. CTE Execution Flow

```text
Source tables
     |
     v
WITH clause
     |
     v
Temporary named result set
     |
     v
Main SELECT query
     |
     v
Final analysis result
```

A CTE is part of one SQL statement:

```text
WITH definition + main query = one SQL statement
```

---

## 6. Example Dataset

Assume that we have a table named `sales`.

| sale_id | customer_id | product  | category    | quantity | unit_price | sale_date  |
| ------: | ----------: | -------- | ----------- | -------: | ---------: | ---------- |
|       1 |         101 | Laptop   | Electronics |        1 |       1200 | 2026-01-05 |
|       2 |         102 | Mouse    | Electronics |        2 |         25 | 2026-01-06 |
|       3 |         101 | Keyboard | Electronics |        1 |         80 | 2026-01-08 |
|       4 |         103 | Desk     | Furniture   |        1 |        350 | 2026-01-10 |
|       5 |         104 | Chair    | Furniture   |        2 |        150 | 2026-01-11 |
|       6 |         102 | Monitor  | Electronics |        1 |        400 | 2026-01-15 |

The revenue of one sales row is:

```text
revenue = quantity * unit_price
```

---

## 7. Basic CTE Example

Suppose we want to calculate the revenue for every transaction and then return only transactions with revenue greater than `100`.

```sql
WITH sales_with_revenue AS (
    SELECT
        sale_id,
        customer_id,
        product,
        category,
        quantity,
        unit_price,
        quantity * unit_price AS revenue
    FROM sales
)
SELECT
    sale_id,
    product,
    revenue
FROM sales_with_revenue
WHERE revenue > 100
ORDER BY revenue DESC;
```

### Why use a CTE?

Without a CTE, the revenue expression may need to be repeated:

```sql
SELECT
    sale_id,
    product,
    quantity * unit_price AS revenue
FROM sales
WHERE quantity * unit_price > 100
ORDER BY quantity * unit_price DESC;
```

The CTE version separates the query into two logical steps:

```text
Step 1: calculate revenue
Step 2: filter and sort the calculated revenue
```

---

## 8. CTE with Aggregation

A common use of CTEs is to aggregate data before applying additional filters.

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue,
        COUNT(*) AS number_of_orders
    FROM sales
    GROUP BY customer_id
)
SELECT
    customer_id,
    total_revenue,
    number_of_orders
FROM customer_revenue
WHERE total_revenue >= 400
ORDER BY total_revenue DESC;
```

The CTE calculates customer-level metrics.

The main query filters customers based on those metrics.

---

## 9. Filtering Aggregated Results

SQL does not normally allow an aggregate alias to be used directly in the same query's `WHERE` clause.

This is invalid:

```sql
SELECT
    customer_id,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
WHERE total_revenue > 500
GROUP BY customer_id;
```

The `WHERE` clause is evaluated before the aggregate result is created.

One solution is to use `HAVING`:

```sql
SELECT
    customer_id,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY customer_id
HAVING SUM(quantity * unit_price) > 500;
```

Another solution is to use a CTE:

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
)
SELECT *
FROM customer_revenue
WHERE total_revenue > 500;
```

The CTE can be easier to understand when more transformations are required later.

---

## 10. Multiple CTEs

A query may contain multiple CTEs.

Each CTE is separated by a comma.

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
),
average_revenue AS (
    SELECT
        AVG(total_revenue) AS avg_customer_revenue
    FROM customer_revenue
)
SELECT
    cr.customer_id,
    cr.total_revenue,
    ar.avg_customer_revenue
FROM customer_revenue AS cr
CROSS JOIN average_revenue AS ar
WHERE cr.total_revenue > ar.avg_customer_revenue
ORDER BY cr.total_revenue DESC;
```

### Logical flow

```text
sales
  |
  v
customer_revenue
  |
  +----------------------+
  |                      |
  v                      v
average_revenue     final comparison
                          |
                          v
          customers above average
```

A later CTE can reference an earlier CTE.

However, an earlier CTE normally cannot reference a later CTE.

---

## 11. Multi-Step Data Transformation

CTEs are useful for building analysis pipelines directly in SQL.

```sql
WITH cleaned_sales AS (
    SELECT
        sale_id,
        customer_id,
        TRIM(product) AS product,
        LOWER(category) AS category,
        quantity,
        unit_price,
        sale_date
    FROM sales
    WHERE quantity > 0
      AND unit_price > 0
),
sales_with_revenue AS (
    SELECT
        sale_id,
        customer_id,
        product,
        category,
        sale_date,
        quantity * unit_price AS revenue
    FROM cleaned_sales
),
monthly_sales AS (
    SELECT
        DATE_TRUNC('month', sale_date) AS sales_month,
        category,
        SUM(revenue) AS monthly_revenue
    FROM sales_with_revenue
    GROUP BY
        DATE_TRUNC('month', sale_date),
        category
)
SELECT
    sales_month,
    category,
    monthly_revenue
FROM monthly_sales
ORDER BY
    sales_month,
    monthly_revenue DESC;
```

This query contains three stages:

```text
Raw sales
    |
    v
Clean invalid and inconsistent records
    |
    v
Calculate transaction revenue
    |
    v
Aggregate monthly category revenue
    |
    v
Analysis-ready result
```

This structure is easier to debug than one deeply nested query.

---

## 12. CTE with JOIN

A CTE can be joined with another table.

Assume there is a `customers` table:

| customer_id | customer_name | country   |
| ----------: | ------------- | --------- |
|         101 | Alice         | Vietnam   |
|         102 | Bob           | Thailand  |
|         103 | Carol         | Singapore |
|         104 | David         | Vietnam   |

Query:

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
)
SELECT
    c.customer_id,
    c.customer_name,
    c.country,
    cr.total_revenue
FROM customers AS c
INNER JOIN customer_revenue AS cr
    ON c.customer_id = cr.customer_id
ORDER BY cr.total_revenue DESC;
```

The CTE prepares customer-level revenue before joining it with customer information.

---

## 13. CTE with Window Functions

CTEs are often combined with window functions.

Suppose we want the highest-revenue product in each category.

```sql
WITH product_revenue AS (
    SELECT
        category,
        product,
        SUM(quantity * unit_price) AS revenue
    FROM sales
    GROUP BY
        category,
        product
),
ranked_products AS (
    SELECT
        category,
        product,
        revenue,
        ROW_NUMBER() OVER (
            PARTITION BY category
            ORDER BY revenue DESC
        ) AS revenue_rank
    FROM product_revenue
)
SELECT
    category,
    product,
    revenue
FROM ranked_products
WHERE revenue_rank = 1;
```

### Processing stages

```text
Sales transactions
        |
        v
Revenue by category and product
        |
        v
Rank products inside each category
        |
        v
Keep rank 1
```

The CTE makes it possible to filter by the window-function result.

---

## 14. Top N Records per Group

A frequent analytics problem is finding the top `N` records inside each group.

For example, find the top two products in each category.

```sql
WITH product_revenue AS (
    SELECT
        category,
        product,
        SUM(quantity * unit_price) AS revenue
    FROM sales
    GROUP BY
        category,
        product
),
ranked_products AS (
    SELECT
        category,
        product,
        revenue,
        DENSE_RANK() OVER (
            PARTITION BY category
            ORDER BY revenue DESC
        ) AS revenue_rank
    FROM product_revenue
)
SELECT
    category,
    product,
    revenue,
    revenue_rank
FROM ranked_products
WHERE revenue_rank <= 2
ORDER BY
    category,
    revenue_rank;
```

This pattern is useful for:

* Top products by category
* Top students by class
* Top models by experiment group
* Top campaigns by region
* Highest-performing stores by country

---

## 15. CTE for Machine-Learning Feature Engineering

A CTE can create one row per entity, such as one row per customer.

```sql
WITH customer_features AS (
    SELECT
        customer_id,
        COUNT(*) AS purchase_count,
        SUM(quantity) AS total_items,
        SUM(quantity * unit_price) AS total_spending,
        AVG(quantity * unit_price) AS average_order_value,
        MAX(sale_date) AS last_purchase_date
    FROM sales
    GROUP BY customer_id
)
SELECT
    customer_id,
    purchase_count,
    total_items,
    total_spending,
    average_order_value,
    last_purchase_date
FROM customer_features;
```

The result can be exported to Python for:

* Customer segmentation
* Churn prediction
* Customer lifetime value prediction
* Recommendation systems
* Anomaly detection

### Feature pipeline

```text
Transactional database
        |
        v
SQL CTE feature engineering
        |
        v
One row per customer
        |
        v
Pandas DataFrame
        |
        v
Machine-learning model
```

---

## 16. CTE for Data Quality Checks

CTEs can help identify invalid, missing, or duplicated data.

### Find duplicate customers

```sql
WITH duplicate_customers AS (
    SELECT
        customer_id,
        COUNT(*) AS row_count
    FROM customers
    GROUP BY customer_id
)
SELECT
    customer_id,
    row_count
FROM duplicate_customers
WHERE row_count > 1;
```

### Find invalid sales rows

```sql
WITH invalid_sales AS (
    SELECT
        sale_id,
        customer_id,
        quantity,
        unit_price,
        CASE
            WHEN customer_id IS NULL THEN 'missing_customer'
            WHEN quantity <= 0 THEN 'invalid_quantity'
            WHEN unit_price < 0 THEN 'invalid_price'
            ELSE 'unknown_error'
        END AS error_type
    FROM sales
    WHERE customer_id IS NULL
       OR quantity <= 0
       OR unit_price < 0
)
SELECT *
FROM invalid_sales
ORDER BY error_type;
```

This pattern can become part of a reusable data validation pipeline.

---

## 17. Recursive CTE

A recursive CTE references itself.

Recursive CTEs are commonly used for:

* Employee hierarchies
* Category trees
* Folder structures
* Graph traversal
* Sequential number generation
* Date series generation

A recursive CTE normally contains:

1. An anchor query
2. A recursive query
3. A termination condition

General structure:

```sql
WITH RECURSIVE cte_name AS (
    -- Anchor query
    SELECT ...

    UNION ALL

    -- Recursive query
    SELECT ...
    FROM cte_name
    WHERE termination_condition
)
SELECT *
FROM cte_name;
```

---

## 18. Recursive Number Sequence

The following query generates numbers from `1` to `5`.

```sql
WITH RECURSIVE number_sequence AS (
    SELECT 1 AS number

    UNION ALL

    SELECT number + 1
    FROM number_sequence
    WHERE number < 5
)
SELECT number
FROM number_sequence;
```

Result:

| number |
| -----: |
|      1 |
|      2 |
|      3 |
|      4 |
|      5 |

### Recursive flow

```text
Anchor: 1
   |
   v
1 + 1 = 2
   |
   v
2 + 1 = 3
   |
   v
3 + 1 = 4
   |
   v
4 + 1 = 5
   |
   v
Stop because number < 5 is false
```

---

## 19. Recursive Employee Hierarchy

Assume an `employees` table:

| employee_id | employee_name       | manager_id |
| ----------: | ------------------- | ---------: |
|           1 | CEO                 |       NULL |
|           2 | Engineering Manager |          1 |
|           3 | Data Manager        |          1 |
|           4 | Data Scientist      |          3 |
|           5 | Data Engineer       |          3 |

Query:

```sql
WITH RECURSIVE employee_hierarchy AS (
    SELECT
        employee_id,
        employee_name,
        manager_id,
        0 AS hierarchy_level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT
        e.employee_id,
        e.employee_name,
        e.manager_id,
        eh.hierarchy_level + 1
    FROM employees AS e
    INNER JOIN employee_hierarchy AS eh
        ON e.manager_id = eh.employee_id
)
SELECT
    employee_id,
    employee_name,
    manager_id,
    hierarchy_level
FROM employee_hierarchy
ORDER BY
    hierarchy_level,
    employee_id;
```

Possible result:

| employee_id | employee_name       | manager_id | hierarchy_level |
| ----------: | ------------------- | ---------: | --------------: |
|           1 | CEO                 |       NULL |               0 |
|           2 | Engineering Manager |          1 |               1 |
|           3 | Data Manager        |          1 |               1 |
|           4 | Data Scientist      |          3 |               2 |
|           5 | Data Engineer       |          3 |               2 |

---

## 20. CTE vs Subquery

A CTE and a subquery can often solve the same problem.

### Subquery version

```sql
SELECT *
FROM (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
) AS customer_revenue
WHERE total_revenue > 500;
```

### CTE version

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
)
SELECT *
FROM customer_revenue
WHERE total_revenue > 500;
```

### Comparison

| Feature                      | CTE                                 | Subquery                             |
| ---------------------------- | ----------------------------------- | ------------------------------------ |
| Readability                  | Usually better for multi-step logic | Good for small expressions           |
| Reusability inside one query | May be referenced multiple times    | Usually written separately each time |
| Recursive queries            | Supported                           | Usually not supported                |
| Scope                        | One SQL statement                   | Parent query                         |
| Permanent storage            | No                                  | No                                   |
| Best use                     | Complex analytical pipelines        | Small nested operations              |

Use a subquery when the logic is small and simple.

Use a CTE when the query contains several logical stages or benefits from descriptive names.

---

## 21. CTE vs Temporary Table

| Feature                      | CTE                          | Temporary Table                        |
| ---------------------------- | ---------------------------- | -------------------------------------- |
| Lifetime                     | One SQL statement            | Usually one database session           |
| Stored separately            | No                           | Yes                                    |
| Can be indexed               | Usually no                   | Often yes                              |
| Can be reused across queries | No                           | Yes                                    |
| Suitable for recursion       | Yes                          | Not directly                           |
| Best use                     | Readable query decomposition | Repeated or large intermediate results |

A temporary table may be more appropriate when:

* The intermediate result is used by several separate SQL statements.
* The intermediate data is very large.
* An index is needed.
* The result must be updated before further analysis.

---

## 22. CTE vs View

| Feature                      | CTE                                    | View                             |
| ---------------------------- | -------------------------------------- | -------------------------------- |
| Lifetime                     | One query                              | Persistent database object       |
| Stored definition            | No                                     | Yes                              |
| Reusable across sessions     | No                                     | Yes                              |
| Requires database permission | Usually no special creation permission | Often requires create permission |
| Best use                     | Query-specific logic                   | Shared reusable business logic   |

Use a view when the same query definition must be shared across dashboards, reports, applications, or users.

---

## 23. Are CTEs Always Faster?

No.

A CTE mainly improves query organization and readability. It does not automatically improve performance.

Depending on the database engine:

* A CTE may be expanded into the main query.
* A CTE may be materialized as an intermediate result.
* The optimizer may choose different execution strategies.
* Referencing the same CTE multiple times may repeat work.
* A temporary table may perform better for large reused results.

Always inspect the execution plan for performance-sensitive queries.

Examples include:

```sql
EXPLAIN
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
)
SELECT *
FROM customer_revenue
WHERE total_revenue > 500;
```

Some databases also support:

```sql
EXPLAIN ANALYZE
SELECT ...;
```

---

## 24. Database Compatibility

The exact syntax may differ across database systems.

| Database   | Basic CTE | Recursive CTE                                      |
| ---------- | --------- | -------------------------------------------------- |
| PostgreSQL | `WITH`    | `WITH RECURSIVE`                                   |
| MySQL 8+   | `WITH`    | `WITH RECURSIVE`                                   |
| SQLite     | `WITH`    | `WITH RECURSIVE`                                   |
| SQL Server | `WITH`    | `WITH`, without the `RECURSIVE` keyword            |
| Oracle     | `WITH`    | Recursive subquery factoring syntax                |
| BigQuery   | `WITH`    | Recursive CTE support depends on syntax and limits |
| Snowflake  | `WITH`    | `WITH RECURSIVE`                                   |

Always check the documentation for the database you are using.

---

## 25. Naming CTEs Clearly

Use names that describe the intermediate dataset.

Good examples:

```sql
WITH cleaned_sales AS (...)
```

```sql
WITH monthly_customer_revenue AS (...)
```

```sql
WITH ranked_products AS (...)
```

```sql
WITH invalid_transactions AS (...)
```

Avoid vague names:

```sql
WITH temp AS (...)
```

```sql
WITH data AS (...)
```

```sql
WITH result1 AS (...)
```

Clear names make the query behave like readable documentation.

---

## 26. Good Formatting Style

Recommended:

```sql
WITH cleaned_sales AS (
    SELECT
        sale_id,
        customer_id,
        quantity,
        unit_price
    FROM sales
    WHERE quantity > 0
      AND unit_price > 0
),
customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM cleaned_sales
    GROUP BY customer_id
)
SELECT
    customer_id,
    total_revenue
FROM customer_revenue
ORDER BY total_revenue DESC;
```

Less readable:

```sql
WITH a AS (SELECT sale_id,customer_id,quantity,unit_price FROM sales WHERE quantity>0 AND unit_price>0),b AS (SELECT customer_id,SUM(quantity*unit_price) total FROM a GROUP BY customer_id) SELECT * FROM b ORDER BY total DESC;
```

Formatting is especially important when CTEs are used as a multi-step transformation pipeline.

---

## 27. Common CTE Patterns

### Pattern 1: Clean, aggregate, and filter

```sql
WITH cleaned_data AS (
    SELECT *
    FROM sales
    WHERE quantity > 0
      AND unit_price >= 0
),
aggregated_data AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM cleaned_data
    GROUP BY customer_id
)
SELECT *
FROM aggregated_data
WHERE total_revenue > 500;
```

### Pattern 2: Aggregate, rank, and select top records

```sql
WITH aggregated_data AS (
    SELECT
        category,
        product,
        SUM(quantity * unit_price) AS revenue
    FROM sales
    GROUP BY
        category,
        product
),
ranked_data AS (
    SELECT
        category,
        product,
        revenue,
        ROW_NUMBER() OVER (
            PARTITION BY category
            ORDER BY revenue DESC
        ) AS rank_number
    FROM aggregated_data
)
SELECT *
FROM ranked_data
WHERE rank_number <= 3;
```

### Pattern 3: Build an analysis-ready table

```sql
WITH customer_orders AS (
    SELECT
        customer_id,
        COUNT(*) AS order_count,
        SUM(quantity * unit_price) AS total_spending,
        MAX(sale_date) AS latest_order_date
    FROM sales
    GROUP BY customer_id
)
SELECT
    c.customer_id,
    c.customer_name,
    c.country,
    COALESCE(co.order_count, 0) AS order_count,
    COALESCE(co.total_spending, 0) AS total_spending,
    co.latest_order_date
FROM customers AS c
LEFT JOIN customer_orders AS co
    ON c.customer_id = co.customer_id;
```

---

## 28. Common Mistakes

### Mistake 1: Forgetting the main query

Incorrect:

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
);
```

A CTE must be followed by a query that uses it.

Correct:

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
)
SELECT *
FROM customer_revenue;
```

---

### Mistake 2: Adding a semicolon before the main query

Incorrect:

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
);

SELECT *
FROM customer_revenue;
```

The semicolon ends the statement before the CTE is used.

Correct:

```sql
WITH customer_revenue AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) AS total_revenue
    FROM sales
    GROUP BY customer_id
)
SELECT *
FROM customer_revenue;
```

---

### Mistake 3: Defining multiple CTEs with repeated `WITH`

Incorrect:

```sql
WITH first_cte AS (
    SELECT *
    FROM sales
)
WITH second_cte AS (
    SELECT *
    FROM first_cte
)
SELECT *
FROM second_cte;
```

Correct:

```sql
WITH first_cte AS (
    SELECT *
    FROM sales
),
second_cte AS (
    SELECT *
    FROM first_cte
)
SELECT *
FROM second_cte;
```

---

### Mistake 4: Referencing a later CTE

Problematic:

```sql
WITH first_cte AS (
    SELECT *
    FROM second_cte
),
second_cte AS (
    SELECT *
    FROM sales
)
SELECT *
FROM first_cte;
```

Define dependencies first:

```sql
WITH second_cte AS (
    SELECT *
    FROM sales
),
first_cte AS (
    SELECT *
    FROM second_cte
)
SELECT *
FROM first_cte;
```

---

### Mistake 5: Creating too many unnecessary CTEs

A separate CTE for every minor expression can make a query harder to follow.

Poor structure:

```sql
WITH step_1 AS (...),
step_2 AS (...),
step_3 AS (...),
step_4 AS (...),
step_5 AS (...)
SELECT ...
```

Use a new CTE when it represents a meaningful transformation stage.

---

### Mistake 6: Assuming a CTE stores data permanently

A CTE disappears after the SQL statement finishes.

To preserve a result, use one of the following:

```sql
CREATE TABLE ...
```

```sql
CREATE TEMP TABLE ...
```

```sql
CREATE VIEW ...
```

---

### Mistake 7: Infinite recursion

A recursive CTE must contain a valid stopping condition.

Dangerous example:

```sql
WITH RECURSIVE numbers AS (
    SELECT 1 AS number

    UNION ALL

    SELECT number + 1
    FROM numbers
)
SELECT *
FROM numbers;
```

This query has no termination condition.

Correct version:

```sql
WITH RECURSIVE numbers AS (
    SELECT 1 AS number

    UNION ALL

    SELECT number + 1
    FROM numbers
    WHERE number < 10
)
SELECT *
FROM numbers;
```

---

## 29. Practical Exercise

Use a small sales database containing:

* `customers`
* `products`
* `sales`

### Task 1: Calculate transaction revenue

Create a CTE named `sales_with_revenue`.

Required columns:

* `sale_id`
* `customer_id`
* `product`
* `category`
* `revenue`

---

### Task 2: Calculate customer-level metrics

Create a CTE named `customer_summary`.

Required metrics:

* Number of transactions
* Total quantity purchased
* Total revenue
* Average transaction value
* Most recent transaction date

---

### Task 3: Find high-value customers

Return customers whose total revenue is greater than the average customer revenue.

Suggested stages:

```text
sales
  |
  v
customer_summary
  |
  v
average_customer_revenue
  |
  v
high_value_customers
```

---

### Task 4: Find the top product in each category

Use:

* One CTE for product-level revenue
* One CTE for ranking
* `ROW_NUMBER()` or `DENSE_RANK()`
* A final filter for rank `1`

---

### Task 5: Build a Pandas report

Load the SQL result into Python.

```python
import sqlite3
import pandas as pd

connection = sqlite3.connect("sales.db")

query = """
WITH customer_summary AS (
    SELECT
        customer_id,
        COUNT(*) AS transaction_count,
        SUM(quantity) AS total_quantity,
        SUM(quantity * unit_price) AS total_revenue,
        AVG(quantity * unit_price) AS average_transaction_value
    FROM sales
    GROUP BY customer_id
)
SELECT *
FROM customer_summary
ORDER BY total_revenue DESC;
"""

customer_report = pd.read_sql_query(query, connection)

print(customer_report.head())
```

Create at least:

* One summary table
* One bar chart
* Three written insights

---

## 30. Suggested Insights

Examples of useful observations include:

* The highest-value customer contributes a large percentage of total revenue.
* Electronics generate more revenue than furniture.
* A small number of products account for most sales.
* Some customers purchase frequently but have a low average order value.
* Some customers purchase rarely but generate high revenue.
* Revenue is concentrated in one month or one category.

Do not only display charts. Explain what each result means for the business or analysis.

---

## 31. Mini Project Structure

```text
cte-sales-analysis/
|
|-- data/
|   |-- customers.csv
|   |-- products.csv
|   `-- sales.csv
|
|-- sql/
|   |-- create_tables.sql
|   |-- load_data.sql
|   `-- analysis_cte.sql
|
|-- notebooks/
|   `-- cte_sales_analysis.ipynb
|
|-- reports/
|   |-- customer_revenue.csv
|   `-- product_ranking.png
|
|-- README.md
`-- requirements.txt
```

The `README.md` should explain:

* The business question
* The database schema
* How to create the database
* How to run the SQL query
* How to run the notebook
* The main findings
* Assumptions and limitations

---

## 32. Reproducible Workflow

```text
Raw CSV files
      |
      v
Load data into SQL database
      |
      v
Clean records with a CTE
      |
      v
Create derived columns
      |
      v
Aggregate business metrics
      |
      v
Rank or compare entities
      |
      v
Load result into Pandas
      |
      v
Create charts and insights
      |
      v
Export report or dashboard
```

Every transformation should be saved as SQL or Python code rather than performed manually.

---

## 33. Completion Checklist

* [ ] I can explain a CTE in one or two minutes.
* [ ] I understand that a CTE exists only during one SQL statement.
* [ ] I can create a CTE using the `WITH` keyword.
* [ ] I can reference a CTE from the main query.
* [ ] I can define multiple CTEs in one statement.
* [ ] I can use one CTE as the input of another CTE.
* [ ] I can combine CTEs with `JOIN`.
* [ ] I can combine CTEs with `GROUP BY`.
* [ ] I can combine CTEs with window functions.
* [ ] I can use a recursive CTE for hierarchical or sequential data.
* [ ] I understand the difference between a CTE and a subquery.
* [ ] I understand the difference between a CTE and a temporary table.
* [ ] I understand the difference between a CTE and a view.
* [ ] I do not assume that a CTE automatically improves performance.
* [ ] I have created a query, notebook, table, chart, or report for this lesson.
* [ ] I have documented at least one assumption, limitation, or follow-up question.

---

## 34. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

CTEs support this outcome by allowing complex transformations to be written as clear, testable, and reusable SQL stages.

---

## 35. Related Project

**Mini Project:** SQL and Python Data Analysis with a Small Sales Database and a Pandas Report

Possible deliverables:

* Database schema
* Reproducible SQL scripts
* Multi-stage CTE query
* Customer analysis table
* Product ranking table
* Pandas notebook
* Charts and written insights
* Git repository with setup instructions

---

## 36. Key Takeaways

* A CTE is a temporary named result set created with `WITH`.
* A CTE exists only during the execution of one SQL statement.
* CTEs make multi-step SQL queries easier to read and debug.
* Multiple CTEs can form a transformation pipeline.
* Later CTEs can reference earlier CTEs.
* CTEs work well with joins, aggregations, and window functions.
* Recursive CTEs can process hierarchical or sequential data.
* A CTE is not automatically faster than a subquery.
* Query performance should be verified using an execution plan.
* CTEs are highly useful for creating analysis-ready and machine-learning-ready datasets.

---

## 37. Final Summary

A **Common Table Expression** is an important SQL tool for organizing complex data transformations into clear logical stages.

Instead of placing all filtering, aggregation, ranking, joining, and feature engineering inside one deeply nested query, you can assign meaningful names to intermediate results.

A practical data workflow may look like this:

```text
Raw data
   |
   v
Cleaned data CTE
   |
   v
Feature calculation CTE
   |
   v
Aggregation CTE
   |
   v
Ranking or comparison CTE
   |
   v
Final analysis table
   |
   v
Notebook, dashboard, model, or API
```

To make this lesson useful for your AI and Data Scientist portfolio, turn it into a reproducible SQL script, notebook, analysis report, dashboard dataset, machine-learning feature table, or documented mini project.

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
