# 025 — SQL JOIN

**Course:** 02 — Coding and EDA
**Module:** Module 04 — Coding for Data Science
**Topic Group:** SQL
**Roadmap Source:** Coding for Data Science / SQL
**Lesson Type:** Coding
**Lesson Order:** 025
**Suggested Duration:** 20 minutes

---

## 1. Summary

This lesson explains **SQL JOINs** in the context of AI and Data Science.

A `JOIN` combines rows from two or more tables using a related column. In real data systems, information is usually divided into multiple tables rather than stored in one large table.

For example:

* Customer information may be stored in a `customers` table.
* Order information may be stored in an `orders` table.
* Product information may be stored in a `products` table.
* Model predictions may be stored in a `predictions` table.

A Data Scientist uses JOINs to combine these tables into an analysis-ready dataset.

By the end of this lesson, you should understand:

* Why relational data is separated into multiple tables.
* How to select the correct type of JOIN.
* How JOINs affect the number of rows in a result.
* How to combine data safely without creating duplicates or losing observations.
* How JOINs are used in analytics, machine learning, experiments, and reporting.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain SQL JOINs in your own words.
* Identify the relationship between two tables.
* Use `INNER JOIN` to return matching rows.
* Use `LEFT JOIN` to preserve every row from the left table.
* Understand `RIGHT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN`, and `SELF JOIN`.
* Join multiple tables in one query.
* Detect duplicate rows caused by one-to-many or many-to-many relationships.
* Handle missing values created by JOIN operations.
* Build an analysis-ready table for a notebook, dashboard, or machine learning model.

---

## 3. Why JOINs Matter in Data Science

Real-world databases are usually normalized into several related tables.

Consider an e-commerce database:

```text
customers
    |
    | customer_id
    v
orders
    |
    | product_id
    v
products
```

Each table stores a different type of information:

| Table         | Description                       |
| ------------- | --------------------------------- |
| `customers`   | Customer profile and location     |
| `orders`      | Individual transactions           |
| `products`    | Product name, category, and price |
| `predictions` | Machine learning predictions      |
| `experiments` | A/B testing assignments           |

To answer a business question such as:

> Which customer segments generated the highest revenue?

you may need to combine:

```text
customers + orders + products
```

The workflow becomes:

```text
Relational tables
        |
        v
SQL JOIN
        |
        v
Analysis-ready dataset
        |
        v
EDA / Dashboard / Machine Learning
```

---

## 4. Core Concept

The general JOIN syntax is:

```sql
SELECT
    columns
FROM table_a
JOIN table_b
    ON table_a.key = table_b.key;
```

The `ON` clause defines the condition used to match rows.

Example:

```sql
SELECT
    customers.customer_id,
    customers.customer_name,
    orders.order_id,
    orders.amount
FROM customers
JOIN orders
    ON customers.customer_id = orders.customer_id;
```

In this example:

* `customers` is the first table.
* `orders` is the second table.
* `customer_id` is the join key.
* Rows are matched when the two `customer_id` values are equal.

---

## 5. Example Tables

Assume that we have the following tables.

### Customers

| customer_id | customer_name | country   |
| ----------: | ------------- | --------- |
|           1 | Alice         | Vietnam   |
|           2 | Bob           | Thailand  |
|           3 | Carol         | Singapore |
|           4 | David         | Vietnam   |

### Orders

| order_id | customer_id | amount |
| -------: | ----------: | -----: |
|      101 |           1 |    120 |
|      102 |           1 |     80 |
|      103 |           2 |    150 |
|      104 |           5 |    200 |

Notice that:

* Alice has two orders.
* Bob has one order.
* Carol and David have no orders.
* Order `104` refers to customer `5`, who is missing from the `customers` table.

These differences help demonstrate how each JOIN type behaves.

---

## 6. INNER JOIN

An `INNER JOIN` returns only rows that have matching values in both tables.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.amount
FROM customers AS c
INNER JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

### Result

| customer_id | customer_name | order_id | amount |
| ----------: | ------------- | -------: | -----: |
|           1 | Alice         |      101 |    120 |
|           1 | Alice         |      102 |     80 |
|           2 | Bob           |      103 |    150 |

Carol and David are excluded because they have no matching orders.

Order `104` is excluded because customer `5` does not exist in the customer table.

### Visual Model

```text
Customers:  [ 1, 2, 3, 4 ]
Orders:     [ 1, 1, 2, 5 ]

INNER JOIN: [ 1, 1, 2 ]
```

### When to Use

Use `INNER JOIN` when:

* You only need records that exist in both tables.
* Unmatched records are not relevant.
* You want customers who completed at least one transaction.
* You want predictions that can be matched to known labels.
* You want experiment users with recorded outcomes.

---

## 7. LEFT JOIN

A `LEFT JOIN` returns:

* Every row from the left table.
* Matching rows from the right table.
* `NULL` when no matching row exists in the right table.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.amount
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

### Result

| customer_id | customer_name | order_id | amount |
| ----------: | ------------- | -------: | -----: |
|           1 | Alice         |      101 |    120 |
|           1 | Alice         |      102 |     80 |
|           2 | Bob           |      103 |    150 |
|           3 | Carol         |     NULL |   NULL |
|           4 | David         |     NULL |   NULL |

### Visual Model

```text
Customers: [ 1, 2, 3, 4 ]
Orders:    [ 1, 1, 2, 5 ]

LEFT JOIN: [ 1, 1, 2, 3, 4 ]
```

### When to Use

Use `LEFT JOIN` when:

* The left table defines the population you want to preserve.
* You want all customers, including customers with no orders.
* You want all users, including users without predictions.
* You want to find missing events or incomplete records.
* You are building a machine learning dataset and must preserve every target row.

A `LEFT JOIN` is one of the most commonly used JOIN types in analytics.

---

## 8. Finding Unmatched Rows

A `LEFT JOIN` can be used to find records that do not have a match.

For example, to find customers who have never placed an order:

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

### Result

| customer_id | customer_name |
| ----------: | ------------- |
|           3 | Carol         |
|           4 | David         |

This pattern is sometimes called an **anti-join pattern**.

```text
LEFT JOIN
    +
WHERE right_table.key IS NULL
    =
Rows without a match
```

Common use cases include:

* Customers with no purchases.
* Products with no sales.
* Users with no model prediction.
* Records that failed an ETL pipeline.
* Transactions without a valid account.

---

## 9. RIGHT JOIN

A `RIGHT JOIN` returns:

* Every row from the right table.
* Matching rows from the left table.
* `NULL` when no matching row exists in the left table.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.amount
FROM customers AS c
RIGHT JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

### Conceptual Result

| customer_id | customer_name | order_id | amount |
| ----------: | ------------- | -------: | -----: |
|           1 | Alice         |      101 |    120 |
|           1 | Alice         |      102 |     80 |
|           2 | Bob           |      103 |    150 |
|        NULL | NULL          |      104 |    200 |

The final order is preserved even though customer `5` is missing.

A `RIGHT JOIN` can normally be rewritten as a `LEFT JOIN` by reversing the table order:

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.amount
FROM orders AS o
LEFT JOIN customers AS c
    ON o.customer_id = c.customer_id;
```

For readability, many analysts prefer `LEFT JOIN` over `RIGHT JOIN`.

---

## 10. FULL OUTER JOIN

A `FULL OUTER JOIN` returns:

* All matching rows.
* All unmatched rows from the left table.
* All unmatched rows from the right table.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.amount
FROM customers AS c
FULL OUTER JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

### Conceptual Result

| customer_id | customer_name | order_id | amount |
| ----------: | ------------- | -------: | -----: |
|           1 | Alice         |      101 |    120 |
|           1 | Alice         |      102 |     80 |
|           2 | Bob           |      103 |    150 |
|           3 | Carol         |     NULL |   NULL |
|           4 | David         |     NULL |   NULL |
|        NULL | NULL          |      104 |    200 |

### Visual Model

```text
Customers:       [ 1, 2, 3, 4 ]
Orders:          [ 1, 1, 2, 5 ]

FULL OUTER JOIN: [ 1, 1, 2, 3, 4, 5 ]
```

### When to Use

Use `FULL OUTER JOIN` when:

* You need all records from both systems.
* You are comparing two datasets.
* You want to identify missing records on either side.
* You are validating a data migration.
* You are reconciling data from different sources.

SQL dialects do not all support `FULL OUTER JOIN` in the same way, so always check the database documentation.

---

## 11. CROSS JOIN

A `CROSS JOIN` returns every possible combination of rows from two tables.

```sql
SELECT
    c.customer_name,
    p.product_name
FROM customers AS c
CROSS JOIN products AS p;
```

If:

* `customers` contains 4 rows.
* `products` contains 3 rows.

the result contains:

```text
4 × 3 = 12 rows
```

### Example

```text
Customers: Alice, Bob
Products:  Laptop, Phone, Tablet

Result:

Alice + Laptop
Alice + Phone
Alice + Tablet
Bob   + Laptop
Bob   + Phone
Bob   + Tablet
```

### When to Use

Use `CROSS JOIN` when:

* Generating all parameter combinations.
* Creating experiment grids.
* Building a complete date-product matrix.
* Creating every possible user-item pair for recommendation candidates.
* Testing all combinations of categories.

Be careful because the result can become extremely large.

For example:

```text
1,000 users × 10,000 products = 10,000,000 rows
```

---

## 12. SELF JOIN

A `SELF JOIN` joins a table to itself.

It is useful when rows in the same table are related.

Consider an employee table:

| employee_id | employee_name | manager_id |
| ----------: | ------------- | ---------: |
|           1 | Anna          |       NULL |
|           2 | Ben           |          1 |
|           3 | Chris         |          1 |
|           4 | Diana         |          2 |

To show every employee with their manager:

```sql
SELECT
    employee.employee_name AS employee,
    manager.employee_name AS manager
FROM employees AS employee
LEFT JOIN employees AS manager
    ON employee.manager_id = manager.employee_id;
```

### Result

| employee | manager |
| -------- | ------- |
| Anna     | NULL    |
| Ben      | Anna    |
| Chris    | Anna    |
| Diana    | Ben     |

Aliases are necessary because the same table is used twice:

```sql
employees AS employee
employees AS manager
```

---

## 13. JOIN Type Comparison

| JOIN Type         |       Matching Rows      | Unmatched Left Rows | Unmatched Right Rows |
| ----------------- | :----------------------: | :-----------------: | :------------------: |
| `INNER JOIN`      |            Yes           |          No         |          No          |
| `LEFT JOIN`       |            Yes           |         Yes         |          No          |
| `RIGHT JOIN`      |            Yes           |          No         |          Yes         |
| `FULL OUTER JOIN` |            Yes           |         Yes         |          Yes         |
| `CROSS JOIN`      |     All combinations     |    Not applicable   |    Not applicable    |
| `SELF JOIN`       | Depends on selected JOIN |       Depends       |        Depends       |

A practical decision guide:

```text
Do you need every row from the left table?
    |
    +-- Yes --> LEFT JOIN
    |
    +-- No
         |
         +-- Only matching rows? --> INNER JOIN
         |
         +-- Every row from both tables? --> FULL OUTER JOIN
         |
         +-- Every possible combination? --> CROSS JOIN
```

---

## 14. Table Aliases

Aliases make queries shorter and easier to read.

Without aliases:

```sql
SELECT
    customers.customer_name,
    orders.order_id,
    orders.amount
FROM customers
INNER JOIN orders
    ON customers.customer_id = orders.customer_id;
```

With aliases:

```sql
SELECT
    c.customer_name,
    o.order_id,
    o.amount
FROM customers AS c
INNER JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

Recommended alias style:

```text
customers    -> c
orders       -> o
products     -> p
predictions  -> pred
experiments  -> exp
```

Use aliases that remain understandable in larger queries.

---

## 15. Joining Multiple Tables

A query can contain several JOIN operations.

Suppose we have:

```text
customers
orders
order_items
products
```

The relationships are:

```text
customers
    |
    | customer_id
    v
orders
    |
    | order_id
    v
order_items
    |
    | product_id
    v
products
```

Example query:

```sql
SELECT
    c.customer_name,
    o.order_id,
    p.product_name,
    oi.quantity,
    p.price,
    oi.quantity * p.price AS item_revenue
FROM customers AS c
INNER JOIN orders AS o
    ON c.customer_id = o.customer_id
INNER JOIN order_items AS oi
    ON o.order_id = oi.order_id
INNER JOIN products AS p
    ON oi.product_id = p.product_id;
```

This query creates an item-level sales table that can be used for:

* Revenue analysis.
* Customer segmentation.
* Product performance analysis.
* Dashboard development.
* Machine learning feature engineering.

---

## 16. JOIN Relationships and Row Counts

Before joining tables, identify the relationship between them.

### One-to-One

One row in table A matches at most one row in table B.

```text
user_id -> user_profile
```

Example:

```text
users:         one row per user
user_profiles: one row per user
```

A one-to-one JOIN usually does not increase the number of rows.

---

### One-to-Many

One row in table A can match several rows in table B.

```text
one customer -> many orders
```

Example:

```text
Alice -> Order 101
Alice -> Order 102
```

After the JOIN, Alice appears more than once.

This is expected because the result is at the order level.

---

### Many-to-Many

Several rows in table A match several rows in table B.

A many-to-many JOIN can create an unexpectedly large number of rows.

For example:

### Customer Tags

| customer_id | tag     |
| ----------: | ------- |
|           1 | premium |
|           1 | mobile  |

### Customer Campaigns

| customer_id | campaign |
| ----------: | -------- |
|           1 | summer   |
|           1 | loyalty  |

Joining only on `customer_id` produces:

| customer_id | tag     | campaign |
| ----------: | ------- | -------- |
|           1 | premium | summer   |
|           1 | premium | loyalty  |
|           1 | mobile  | summer   |
|           1 | mobile  | loyalty  |

The two rows from each table create four combinations:

```text
2 tags × 2 campaigns = 4 joined rows
```

This behavior is sometimes called a **row explosion** or **join multiplication**.

---

## 17. Checking JOIN Cardinality

Always inspect the row count before and after a JOIN.

```sql
SELECT COUNT(*)
FROM customers;
```

```sql
SELECT COUNT(*)
FROM orders;
```

```sql
SELECT COUNT(*)
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

You should also inspect the uniqueness of the join key.

```sql
SELECT
    customer_id,
    COUNT(*) AS row_count
FROM customers
GROUP BY customer_id
HAVING COUNT(*) > 1;
```

If this query returns rows, `customer_id` is not unique in the `customers` table.

A useful validation checklist is:

```text
1. Count rows in the left table.
2. Count rows in the right table.
3. Check whether join keys are unique.
4. Run the JOIN.
5. Count rows in the result.
6. Investigate unexpected increases or decreases.
```

---

## 18. JOIN with Additional Conditions

A JOIN can use more than one matching condition.

```sql
SELECT
    a.user_id,
    a.event_date,
    a.activity_count,
    b.subscription_type
FROM daily_activity AS a
LEFT JOIN subscriptions AS b
    ON a.user_id = b.user_id
    AND a.event_date = b.subscription_date;
```

This query matches records using both:

* `user_id`
* `event_date`

Joining only on `user_id` might incorrectly match activity records to subscriptions from different dates.

---

## 19. JOIN Using Composite Keys

Some tables do not have one unique identifier. Instead, a combination of columns forms the key.

For example:

```text
user_id + event_date
```

The JOIN should include the complete composite key:

```sql
SELECT
    a.user_id,
    a.event_date,
    a.sessions,
    b.revenue
FROM user_activity AS a
LEFT JOIN user_revenue AS b
    ON a.user_id = b.user_id
    AND a.event_date = b.event_date;
```

Using only part of the key may produce incorrect duplicates.

Incorrect:

```sql
ON a.user_id = b.user_id
```

Correct:

```sql
ON a.user_id = b.user_id
AND a.event_date = b.event_date
```

---

## 20. Filtering in `ON` Versus `WHERE`

Filter placement can change the result of a `LEFT JOIN`.

Consider this query:

```sql
SELECT
    c.customer_name,
    o.order_id,
    o.amount
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
WHERE o.amount >= 100;
```

The `WHERE` condition removes rows where `o.amount` is `NULL`.

As a result, customers without orders disappear, making the query behave similarly to an `INNER JOIN`.

To preserve all customers, place the condition inside the `ON` clause:

```sql
SELECT
    c.customer_name,
    o.order_id,
    o.amount
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
    AND o.amount >= 100;
```

### Key Difference

```text
Condition in WHERE:
Filters the final joined result.

Condition in ON:
Controls which rows are allowed to match.
```

This distinction is especially important when using outer JOINs.

---

## 21. Handling `NULL` Values

Outer JOINs can create `NULL` values for unmatched rows.

Example:

```sql
SELECT
    c.customer_name,
    COALESCE(SUM(o.amount), 0) AS total_revenue
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.customer_name;
```

`COALESCE` replaces `NULL` with another value:

```sql
COALESCE(SUM(o.amount), 0)
```

### Result

| customer_name | total_revenue |
| ------------- | ------------: |
| Alice         |           200 |
| Bob           |           150 |
| Carol         |             0 |
| David         |             0 |

Without `COALESCE`, customers without orders may have `NULL` revenue instead of `0`.

---

## 22. JOIN with Aggregation

JOINs are frequently combined with `GROUP BY`.

To calculate total revenue for each customer:

```sql
SELECT
    c.customer_id,
    c.customer_name,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.amount), 0) AS total_revenue,
    COALESCE(AVG(o.amount), 0) AS average_order_value
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.customer_name
ORDER BY
    total_revenue DESC;
```

This query answers:

* How many orders did each customer place?
* How much revenue did each customer generate?
* What was each customer's average order value?
* Which customers have never placed an order?

---

## 23. JOINs in Machine Learning

JOINs are commonly used to build model training datasets.

Suppose we have:

```text
users
transactions
support_tickets
model_labels
```

The feature table may be constructed as follows:

```sql
WITH transaction_features AS (
    SELECT
        user_id,
        COUNT(*) AS transaction_count,
        SUM(amount) AS total_spending,
        AVG(amount) AS average_transaction
    FROM transactions
    GROUP BY user_id
),
support_features AS (
    SELECT
        user_id,
        COUNT(*) AS support_ticket_count
    FROM support_tickets
    GROUP BY user_id
)
SELECT
    u.user_id,
    u.country,
    u.account_age_days,
    COALESCE(t.transaction_count, 0) AS transaction_count,
    COALESCE(t.total_spending, 0) AS total_spending,
    COALESCE(t.average_transaction, 0) AS average_transaction,
    COALESCE(s.support_ticket_count, 0) AS support_ticket_count,
    l.churned
FROM users AS u
LEFT JOIN transaction_features AS t
    ON u.user_id = t.user_id
LEFT JOIN support_features AS s
    ON u.user_id = s.user_id
INNER JOIN model_labels AS l
    ON u.user_id = l.user_id;
```

The output can be exported to Python for model training.

```text
Raw relational tables
        |
        v
Aggregate features
        |
        v
JOIN by entity key
        |
        v
Training table
        |
        v
Train / Validate / Test
```

---

## 24. Time-Aware JOINs and Data Leakage

For machine learning, joining data without considering time can create data leakage.

Suppose the prediction date is:

```text
2026-01-01
```

The feature table must not include transactions that happened after that date.

Incorrect concept:

```text
Prediction date: January 1
Feature includes purchase from January 20
```

That purchase belongs to the future and would not have been available when the prediction was made.

A safer query is:

```sql
SELECT
    u.user_id,
    COUNT(t.transaction_id) AS previous_transaction_count
FROM users AS u
LEFT JOIN transactions AS t
    ON u.user_id = t.user_id
    AND t.transaction_date < u.prediction_date
GROUP BY
    u.user_id;
```

The JOIN condition ensures that only historical records are used.

---

## 25. Common JOIN Mistakes

### Mistake 1: Missing the JOIN Condition

Incorrect:

```sql
SELECT *
FROM customers AS c
JOIN orders AS o;
```

This may produce a Cartesian product.

Correct:

```sql
SELECT *
FROM customers AS c
JOIN orders AS o
    ON c.customer_id = o.customer_id;
```

---

### Mistake 2: Joining on the Wrong Column

Incorrect:

```sql
ON c.customer_name = o.customer_name
```

Names may:

* Be duplicated.
* Be misspelled.
* Change over time.
* Use different formatting.

Prefer stable identifiers:

```sql
ON c.customer_id = o.customer_id
```

---

### Mistake 3: Using `INNER JOIN` When Rows Must Be Preserved

If you need every customer, this may be wrong:

```sql
FROM customers AS c
INNER JOIN orders AS o
    ON c.customer_id = o.customer_id
```

Customers without orders will disappear.

Use:

```sql
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
```

---

### Mistake 4: Unexpected Duplicate Rows

A JOIN may duplicate rows because:

* The join key is not unique.
* The relationship is one-to-many.
* The relationship is many-to-many.
* The complete composite key was not used.

Do not immediately solve the problem with:

```sql
SELECT DISTINCT ...
```

`DISTINCT` may hide the real data modeling issue.

First, investigate the relationship and join keys.

---

### Mistake 5: Filtering the Right Table in `WHERE`

This query removes unmatched customers:

```sql
SELECT
    c.customer_name,
    o.amount
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
WHERE o.amount > 100;
```

To preserve unmatched customers, write:

```sql
SELECT
    c.customer_name,
    o.amount
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
    AND o.amount > 100;
```

---

### Mistake 6: Not Checking Data Types

Join columns should use compatible data types.

Problematic example:

```text
customers.customer_id -> INTEGER
orders.customer_id    -> VARCHAR
```

You may need a type conversion:

```sql
ON CAST(c.customer_id AS VARCHAR) = o.customer_id
```

However, it is usually better to fix inconsistent data types in the data model or cleaning pipeline.

---

### Mistake 7: Joining Raw Event Tables Directly

Joining two high-granularity event tables can create a many-to-many explosion.

For example:

```text
user clicks × user purchases
```

A safer pattern is:

```text
click events
    |
    v
aggregate by user
    |
    +----------------+
                     |
purchase events      |
    |                |
    v                |
aggregate by user    |
    |                |
    +------ JOIN ----+
```

SQL example:

```sql
WITH click_features AS (
    SELECT
        user_id,
        COUNT(*) AS click_count
    FROM clicks
    GROUP BY user_id
),
purchase_features AS (
    SELECT
        user_id,
        COUNT(*) AS purchase_count,
        SUM(amount) AS total_revenue
    FROM purchases
    GROUP BY user_id
)
SELECT
    c.user_id,
    c.click_count,
    COALESCE(p.purchase_count, 0) AS purchase_count,
    COALESCE(p.total_revenue, 0) AS total_revenue
FROM click_features AS c
LEFT JOIN purchase_features AS p
    ON c.user_id = p.user_id;
```

---

## 26. Practical Demo: Sales Analysis

Assume the following schema:

```sql
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name VARCHAR(100),
    country VARCHAR(100)
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    order_date DATE,
    amount DECIMAL(10, 2)
);
```

### Query 1: Orders with Customer Information

```sql
SELECT
    o.order_id,
    o.order_date,
    c.customer_name,
    c.country,
    o.amount
FROM orders AS o
INNER JOIN customers AS c
    ON o.customer_id = c.customer_id
ORDER BY
    o.order_date;
```

---

### Query 2: Customer Revenue Summary

```sql
SELECT
    c.customer_id,
    c.customer_name,
    c.country,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.amount), 0) AS total_revenue
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.customer_name,
    c.country
ORDER BY
    total_revenue DESC;
```

---

### Query 3: Customers Without Orders

```sql
SELECT
    c.customer_id,
    c.customer_name,
    c.country
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

---

### Query 4: Revenue by Country

```sql
SELECT
    c.country,
    COUNT(DISTINCT c.customer_id) AS customer_count,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.amount), 0) AS total_revenue
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
GROUP BY
    c.country
ORDER BY
    total_revenue DESC;
```

---

## 27. SQL and Python Workflow

JOIN operations are often performed in SQL before the result is loaded into Python.

```text
Database tables
      |
      v
SQL JOIN and aggregation
      |
      v
Smaller analysis table
      |
      v
Pandas DataFrame
      |
      v
EDA, charts, and machine learning
```

Python example:

```python
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("sqlite:///sales.db")

query = """
SELECT
    c.customer_id,
    c.customer_name,
    c.country,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.amount), 0) AS total_revenue
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.customer_name,
    c.country
ORDER BY
    total_revenue DESC;
"""

customer_summary = pd.read_sql_query(query, engine)

print(customer_summary.head())
```

This approach is efficient because the database performs the JOIN and aggregation before transferring data to Python.

---

## 28. Practice Exercise

Use a small sales database with the following tables:

### `customers`

| Column          | Description                |
| --------------- | -------------------------- |
| `customer_id`   | Unique customer identifier |
| `customer_name` | Customer name              |
| `country`       | Customer country           |

### `orders`

| Column        | Description                   |
| ------------- | ----------------------------- |
| `order_id`    | Unique order identifier       |
| `customer_id` | Customer who placed the order |
| `order_date`  | Date of the order             |
| `amount`      | Total order value             |

### `products`

| Column         | Description               |
| -------------- | ------------------------- |
| `product_id`   | Unique product identifier |
| `product_name` | Product name              |
| `category`     | Product category          |
| `price`        | Product price             |

### `order_items`

| Column       | Description                  |
| ------------ | ---------------------------- |
| `order_id`   | Order identifier             |
| `product_id` | Product identifier           |
| `quantity`   | Number of products purchased |

Complete the following tasks:

1. Join `customers` and `orders` to show customer information for every order.
2. Use a `LEFT JOIN` to list all customers, including customers without orders.
3. Find customers who have never placed an order.
4. Join all four tables to create an item-level sales dataset.
5. Calculate total revenue by customer.
6. Calculate total revenue by product category.
7. Identify products that have never been purchased.
8. Compare the row counts before and after each JOIN.
9. Write three insights based on the results.
10. Save the SQL queries in a reusable `.sql` file or notebook.

---

## 29. Mini Challenge

Create a customer-level feature table containing:

* Customer ID.
* Customer name.
* Country.
* Number of orders.
* Total spending.
* Average order value.
* First order date.
* Most recent order date.
* Number of unique products purchased.
* A binary feature indicating whether the customer has ordered anything.

Example:

```sql
SELECT
    c.customer_id,
    c.customer_name,
    c.country,
    COUNT(DISTINCT o.order_id) AS order_count,
    COALESCE(SUM(oi.quantity * p.price), 0) AS total_spending,
    COALESCE(AVG(o.amount), 0) AS average_order_value,
    MIN(o.order_date) AS first_order_date,
    MAX(o.order_date) AS latest_order_date,
    COUNT(DISTINCT p.product_id) AS unique_products,
    CASE
        WHEN COUNT(DISTINCT o.order_id) > 0 THEN 1
        ELSE 0
    END AS has_ordered
FROM customers AS c
LEFT JOIN orders AS o
    ON c.customer_id = o.customer_id
LEFT JOIN order_items AS oi
    ON o.order_id = oi.order_id
LEFT JOIN products AS p
    ON oi.product_id = p.product_id
GROUP BY
    c.customer_id,
    c.customer_name,
    c.country;
```

Before accepting the result, verify that the JOIN does not double-count order values.

---

## 30. Common Questions

### What is the default JOIN type?

In many SQL dialects, writing `JOIN` without another keyword means `INNER JOIN`.

```sql
FROM customers AS c
JOIN orders AS o
    ON c.customer_id = o.customer_id
```

is equivalent to:

```sql
FROM customers AS c
INNER JOIN orders AS o
    ON c.customer_id = o.customer_id
```

---

### Which table is the left table?

The table after `FROM` is the left table.

```sql
FROM customers AS c
LEFT JOIN orders AS o
```

Here:

* `customers` is the left table.
* `orders` is the right table.

---

### Can a JOIN use different column names?

Yes.

```sql
SELECT *
FROM users AS u
JOIN transactions AS t
    ON u.id = t.user_id;
```

The column names do not need to be identical. Their values and meanings must be compatible.

---

### Should I use `DISTINCT` after every JOIN?

No.

Use `DISTINCT` only when duplicate result rows are genuinely unnecessary.

First determine whether duplicates are caused by:

* A valid one-to-many relationship.
* Duplicate keys.
* An incomplete JOIN condition.
* A many-to-many relationship.
* Incorrect table granularity.

---

### Should JOINs be performed in SQL or Pandas?

Use SQL when:

* The data is stored in a database.
* The tables are large.
* Filtering and aggregation can reduce the data size.
* The query should be reusable in a pipeline.

Use Pandas when:

* The datasets are already loaded into memory.
* The data is small.
* You need Python-specific transformations.
* You are performing exploratory analysis.

The Pandas equivalent of a SQL JOIN is usually `merge()`:

```python
result = customers.merge(
    orders,
    on="customer_id",
    how="left"
)
```

---

## 31. Completion Checklist

* [ ] I can explain a SQL JOIN in one or two minutes.
* [ ] I understand the difference between `INNER JOIN` and `LEFT JOIN`.
* [ ] I know when unmatched rows are preserved.
* [ ] I can join two tables using a primary key and foreign key.
* [ ] I can join more than two tables.
* [ ] I can identify one-to-one, one-to-many, and many-to-many relationships.
* [ ] I check row counts before and after a JOIN.
* [ ] I check whether the join key is unique.
* [ ] I understand how `NULL` values appear after an outer JOIN.
* [ ] I can find unmatched rows with a `LEFT JOIN`.
* [ ] I understand the difference between filtering in `ON` and `WHERE`.
* [ ] I have written at least one reusable JOIN query.
* [ ] I have documented at least one assumption, caveat, or follow-up question.

---

## 32. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

JOINs support this outcome by allowing you to:

* Combine normalized database tables.
* Build analysis-ready datasets.
* Create machine learning feature tables.
* Connect predictions with actual outcomes.
* Compare data across systems.
* Create reusable queries for dashboards and reports.

---

## 33. Related Project

### Mini Project: SQL and Python Sales Analysis

Build a small sales database containing:

* Customers.
* Orders.
* Products.
* Order items.

Use SQL JOINs to create:

1. An order-level analysis table.
2. A product-level revenue table.
3. A customer-level feature table.
4. A list of customers without orders.
5. A list of products without sales.

Load the query results into Pandas and create:

* A revenue-by-country chart.
* A top-products table.
* A customer spending distribution chart.
* Three written business insights.

Suggested project structure:

```text
sql-sales-analysis/
|
|-- data/
|   |-- customers.csv
|   |-- orders.csv
|   |-- order_items.csv
|   `-- products.csv
|
|-- sql/
|   |-- create_tables.sql
|   |-- customer_analysis.sql
|   `-- product_analysis.sql
|
|-- notebooks/
|   `-- sales_analysis.ipynb
|
|-- reports/
|   `-- sales_summary.md
|
`-- README.md
```

---

## 34. Summary

A SQL `JOIN` combines related rows from multiple tables.

The most important JOIN types are:

* `INNER JOIN`: keep only matching rows.
* `LEFT JOIN`: keep every row from the left table.
* `RIGHT JOIN`: keep every row from the right table.
* `FULL OUTER JOIN`: keep every row from both tables.
* `CROSS JOIN`: create every possible row combination.
* `SELF JOIN`: join a table to itself.

The syntax is simple:

```sql
SELECT
    columns
FROM table_a AS a
LEFT JOIN table_b AS b
    ON a.key = b.key;
```

However, reliable JOINs require more than syntax. You must understand:

* The granularity of each table.
* The uniqueness of join keys.
* The expected relationship between tables.
* The expected number of result rows.
* How unmatched records should be handled.
* Whether time conditions are required.
* Whether the JOIN introduces duplicate observations or data leakage.

A well-designed JOIN can transform separate relational tables into a reproducible dataset for analysis, dashboards, machine learning, experiments, APIs, and portfolio projects.
