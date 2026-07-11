# 026 - Subquery

**Course:** 02 - Coding and EDA
**Module:** Module 04 - Coding for Data Science
**Content Group:** SQL
**Roadmap Source:** Coding for Data Science / SQL
**Lesson Type:** Coding
**Order in Module:** 026
**Suggested Duration:** 20 minutes

---

## 1. Overview

A **subquery** is a SQL query nested inside another SQL query.

The inner query produces a value, a list of values, or a temporary table that the outer query uses to complete its analysis.

Subqueries are useful when a data question must be solved in multiple logical steps.

For example:

> Which products have revenue higher than the average product revenue?

To answer this question, SQL must:

1. Calculate the average product revenue.
2. Compare each product's revenue with that average.
3. Return only the products above the average.

A subquery allows these steps to be written as one SQL statement.

```text
Inner query
    |
    v
Intermediate result
    |
    v
Outer query
    |
    v
Final analysis result
```

In AI and Data Science workflows, subqueries are commonly used to:

* Filter records using aggregated statistics.
* Find users whose behavior is above or below average.
* Select the latest record for each entity.
* Create features for machine learning datasets.
* Compare experiment groups.
* Detect unusual transactions.
* Build temporary analytical tables.
* Prepare training and evaluation datasets.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain what a SQL subquery is.
* Identify the inner query and the outer query.
* Use subqueries inside `WHERE`, `SELECT`, `FROM`, and `HAVING`.
* Distinguish between scalar, multi-row, and correlated subqueries.
* Choose between a subquery, a `JOIN`, and a Common Table Expression.
* Use subqueries to prepare reproducible analytical datasets.
* Recognize common subquery errors and performance problems.

---

## 3. What Is a Subquery?

A subquery is a complete SQL query placed inside another SQL statement.

A subquery is usually enclosed in parentheses.

```sql
SELECT column_name
FROM table_name
WHERE column_name > (
    SELECT AVG(column_name)
    FROM table_name
);
```

The query contains two parts:

```text
Outer query
|
|-- SELECT column_name
|-- FROM table_name
|
`-- WHERE column_name > (
        Inner query
        SELECT AVG(column_name)
        FROM table_name
    )
```

The database usually evaluates the inner query first.

```text
Step 1: Execute the inner query
Step 2: Return the intermediate result
Step 3: Pass the result to the outer query
Step 4: Execute the outer query
Step 5: Return the final result
```

---

## 4. Example Database

The examples in this lesson use the following tables.

### `customers`

| customer_id | customer_name | country   |
| ----------: | ------------- | --------- |
|           1 | Alice         | Vietnam   |
|           2 | Bob           | Thailand  |
|           3 | Carol         | Vietnam   |
|           4 | David         | Singapore |

### `orders`

| order_id | customer_id | order_date | total_amount | status    |
| -------: | ----------: | ---------- | -----------: | --------- |
|      101 |           1 | 2026-01-10 |          500 | completed |
|      102 |           2 | 2026-01-12 |          200 | completed |
|      103 |           1 | 2026-02-05 |          800 | completed |
|      104 |           3 | 2026-02-08 |          150 | cancelled |
|      105 |           4 | 2026-02-15 |         1000 | completed |
|      106 |           3 | 2026-03-01 |          600 | completed |

---

## 5. Basic Subquery Example

Suppose we want to find orders whose value is higher than the average order value.

First, calculate the average.

```sql
SELECT AVG(total_amount) AS average_order_value
FROM orders;
```

Assume the result is:

```text
541.67
```

We can then use this query inside another query.

```sql
SELECT
    order_id,
    customer_id,
    total_amount
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);
```

### Execution flow

```text
SELECT AVG(total_amount)
FROM orders
        |
        v
Average value = 541.67
        |
        v
SELECT orders
WHERE total_amount > 541.67
        |
        v
Orders 103, 105, and 106
```

### Result

| order_id | customer_id | total_amount |
| -------: | ----------: | -----------: |
|      103 |           1 |          800 |
|      105 |           4 |         1000 |
|      106 |           3 |          600 |

---

## 6. Types of Subqueries

Subqueries can be classified by the type of result they return.

```text
Subquery
|
|-- Scalar subquery
|   `-- Returns one value
|
|-- Single-row subquery
|   `-- Returns one row
|
|-- Multi-row subquery
|   `-- Returns multiple rows
|
|-- Derived table
|   `-- Returns a temporary table
|
`-- Correlated subquery
    `-- Depends on the current outer-query row
```

---

## 7. Scalar Subquery

A scalar subquery returns exactly one value.

It can be used anywhere SQL expects a single value.

```sql
SELECT AVG(total_amount)
FROM orders;
```

This query returns one number, so it can be used as a scalar subquery.

### Scalar subquery in `WHERE`

```sql
SELECT
    order_id,
    total_amount
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);
```

### Scalar subquery in `SELECT`

```sql
SELECT
    order_id,
    total_amount,
    (
        SELECT AVG(total_amount)
        FROM orders
    ) AS average_order_value
FROM orders;
```

### Result structure

| order_id | total_amount | average_order_value |
| -------: | -----------: | ------------------: |
|      101 |          500 |              541.67 |
|      102 |          200 |              541.67 |
|      103 |          800 |              541.67 |
|      104 |          150 |              541.67 |
|      105 |         1000 |              541.67 |
|      106 |          600 |              541.67 |

The same average value is attached to every row.

### Difference from average

```sql
SELECT
    order_id,
    total_amount,
    total_amount - (
        SELECT AVG(total_amount)
        FROM orders
    ) AS difference_from_average
FROM orders;
```

This pattern is useful for feature engineering and anomaly analysis.

---

## 8. Subquery in the `WHERE` Clause

A subquery in `WHERE` is commonly used to filter records.

### Example: Customers who placed at least one order

```sql
SELECT
    customer_id,
    customer_name
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
);
```

The inner query returns several customer IDs.

```text
Inner query result:

1
2
3
4
```

The outer query returns customers whose IDs appear in that list.

---

## 9. Using `IN` with a Subquery

Use `IN` when the subquery can return multiple values.

```sql
SELECT
    customer_id,
    customer_name
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
    WHERE status = 'completed'
);
```

### Logical interpretation

```text
Find completed-order customer IDs
              |
              v
        [1, 2, 3, 4]
              |
              v
Return customers whose IDs are in this list
```

### Avoid using `=` for multiple rows

This query may fail:

```sql
SELECT *
FROM customers
WHERE customer_id = (
    SELECT customer_id
    FROM orders
);
```

The inner query returns multiple values, but `=` expects one value.

Use `IN` instead:

```sql
SELECT *
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
);
```

---

## 10. Using `NOT IN` with a Subquery

Suppose we want customers who have never placed an order.

```sql
SELECT
    customer_id,
    customer_name
FROM customers
WHERE customer_id NOT IN (
    SELECT customer_id
    FROM orders
);
```

However, `NOT IN` can produce unexpected results when the subquery contains `NULL`.

A safer alternative is often `NOT EXISTS`.

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

---

## 11. Using `EXISTS`

`EXISTS` checks whether a subquery returns at least one row.

It returns either:

```text
TRUE
```

or:

```text
FALSE
```

### Example: Customers with completed orders

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
WHERE EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
      AND o.status = 'completed'
);
```

The value `1` is not important. SQL only checks whether a matching row exists.

This is also valid:

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
WHERE EXISTS (
    SELECT *
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

Using `SELECT 1` makes the intention clearer.

---

## 12. `IN` Versus `EXISTS`

Both can be used to check whether matching records exist.

### Using `IN`

```sql
SELECT *
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
);
```

### Using `EXISTS`

```sql
SELECT *
FROM customers AS c
WHERE EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

### General comparison

| Feature                  | `IN`                          | `EXISTS`                            |
| ------------------------ | ----------------------------- | ----------------------------------- |
| Main purpose             | Compare with a list of values | Check whether a matching row exists |
| Subquery result          | One or more values            | Existence of at least one row       |
| Easy to read             | Yes                           | Yes                                 |
| Handles correlated logic | Less common                   | Very common                         |
| `NULL` considerations    | Important for `NOT IN`        | Usually safer with `NOT EXISTS`     |

The database optimizer may transform both forms into similar execution plans.

Always inspect performance when working with large datasets.

---

## 13. Subquery in the `FROM` Clause

A subquery in `FROM` behaves like a temporary table.

It is also called a **derived table**.

```sql
SELECT *
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_id
) AS customer_sales;
```

Most SQL databases require a derived table to have an alias.

In this example, the alias is:

```sql
customer_sales
```

### Execution flow

```text
orders
  |
  v
Group orders by customer
  |
  v
Calculate total spending
  |
  v
Temporary result: customer_sales
  |
  v
Outer query reads customer_sales
```

### Filtering the derived table

```sql
SELECT
    customer_id,
    total_spending
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_id
) AS customer_sales
WHERE total_spending > 700;
```

### Result

| customer_id | total_spending |
| ----------: | -------------: |
|           1 |           1300 |
|           4 |           1000 |

---

## 14. Subquery in the `SELECT` Clause

A subquery in `SELECT` adds a calculated value to each output row.

### Example: Number of orders for each customer

```sql
SELECT
    c.customer_id,
    c.customer_name,
    (
        SELECT COUNT(*)
        FROM orders AS o
        WHERE o.customer_id = c.customer_id
    ) AS order_count
FROM customers AS c;
```

### Result

| customer_id | customer_name | order_count |
| ----------: | ------------- | ----------: |
|           1 | Alice         |           2 |
|           2 | Bob           |           1 |
|           3 | Carol         |           2 |
|           4 | David         |           1 |

This is a correlated subquery because it references:

```sql
c.customer_id
```

from the outer query.

---

## 15. Subquery in the `HAVING` Clause

`HAVING` filters grouped results.

Suppose we want customers whose total spending is higher than the average customer spending.

```sql
SELECT
    customer_id,
    SUM(total_amount) AS total_spending
FROM orders
WHERE status = 'completed'
GROUP BY customer_id
HAVING SUM(total_amount) > (
    SELECT AVG(customer_total)
    FROM (
        SELECT
            customer_id,
            SUM(total_amount) AS customer_total
        FROM orders
        WHERE status = 'completed'
        GROUP BY customer_id
    ) AS customer_totals
);
```

### Logical steps

```text
1. Calculate total spending for each customer
2. Calculate the average of those customer totals
3. Keep customers above the average
```

This example contains one subquery inside another subquery.

Although valid, deeply nested SQL can become difficult to maintain. A Common Table Expression may be clearer for complex cases.

---

## 16. Correlated Subquery

A correlated subquery references a column from the outer query.

It cannot be executed independently because it depends on the current outer row.

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
WHERE (
    SELECT SUM(o.total_amount)
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
) > 700;
```

The inner query uses:

```sql
c.customer_id
```

from the outer query.

### Conceptual execution

```text
Outer row: Alice
    |
    v
Calculate Alice's total spending
    |
    v
Is total spending greater than 700?
    |
    v
Keep or remove Alice

Outer row: Bob
    |
    v
Calculate Bob's total spending
    |
    v
Is total spending greater than 700?
    |
    v
Keep or remove Bob
```

Conceptually, the correlated subquery is evaluated for each outer row.

Modern database optimizers may rewrite the query into a more efficient plan.

---

## 17. Non-Correlated Versus Correlated Subqueries

### Non-correlated subquery

The inner query does not depend on the outer query.

```sql
SELECT *
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);
```

The average can be calculated independently.

### Correlated subquery

The inner query depends on the current outer row.

```sql
SELECT *
FROM customers AS c
WHERE EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

### Comparison

| Property              | Non-correlated      | Correlated             |
| --------------------- | ------------------- | ---------------------- |
| Depends on outer row  | No                  | Yes                    |
| Can run independently | Yes                 | No                     |
| Typical use           | Global comparison   | Per-row matching       |
| Potential cost        | Usually lower       | May be higher          |
| Common operators      | `=`, `>`, `<`, `IN` | `EXISTS`, `NOT EXISTS` |

---

## 18. Finding the Latest Record

A common Data Science task is selecting the latest event for each user.

### Example: Latest order date for every customer

```sql
SELECT
    o.order_id,
    o.customer_id,
    o.order_date,
    o.total_amount
FROM orders AS o
WHERE o.order_date = (
    SELECT MAX(o2.order_date)
    FROM orders AS o2
    WHERE o2.customer_id = o.customer_id
);
```

The correlated subquery finds the maximum date for the current customer.

### Conceptual result

| order_id | customer_id | order_date | total_amount |
| -------: | ----------: | ---------- | -----------: |
|      103 |           1 | 2026-02-05 |          800 |
|      102 |           2 | 2026-01-12 |          200 |
|      106 |           3 | 2026-03-01 |          600 |
|      105 |           4 | 2026-02-15 |         1000 |

For large datasets, a window function may be more efficient and expressive.

```sql
SELECT
    order_id,
    customer_id,
    order_date,
    total_amount
FROM (
    SELECT
        order_id,
        customer_id,
        order_date,
        total_amount,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY order_date DESC
        ) AS row_number
    FROM orders
) AS ranked_orders
WHERE row_number = 1;
```

---

## 19. Comparing Values with Aggregates

Subqueries are useful when individual rows must be compared with aggregated values.

### Orders above the global average

```sql
SELECT *
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);
```

### Orders above the customer's own average

```sql
SELECT
    o.order_id,
    o.customer_id,
    o.total_amount
FROM orders AS o
WHERE o.total_amount > (
    SELECT AVG(o2.total_amount)
    FROM orders AS o2
    WHERE o2.customer_id = o.customer_id
);
```

The first example uses a global average.

The second example uses a customer-specific average.

```text
Global comparison:

Every order
    |
    v
One average for the entire table

Group-specific comparison:

Each customer order
    |
    v
Average for that specific customer
```

---

## 20. Operators Used with Subqueries

Common operators include:

| Operator     | Meaning                                             |
| ------------ | --------------------------------------------------- |
| `=`          | Equal to one value                                  |
| `>`          | Greater than one value                              |
| `<`          | Less than one value                                 |
| `>=`         | Greater than or equal to one value                  |
| `<=`         | Less than or equal to one value                     |
| `<>`         | Not equal to one value                              |
| `IN`         | Matches one value in a returned list                |
| `NOT IN`     | Does not match any value in a list                  |
| `EXISTS`     | A matching row exists                               |
| `NOT EXISTS` | No matching row exists                              |
| `ANY`        | Comparison succeeds for at least one returned value |
| `ALL`        | Comparison succeeds for every returned value        |

---

## 21. Using `ANY`

`ANY` returns `TRUE` when a comparison succeeds for at least one value returned by the subquery.

```sql
SELECT
    order_id,
    total_amount
FROM orders
WHERE total_amount > ANY (
    SELECT total_amount
    FROM orders
    WHERE customer_id = 3
);
```

This means:

> Return orders whose amount is greater than at least one order belonging to customer 3.

If customer 3 has orders of `150` and `600`, the condition behaves like:

```text
total_amount > 150
OR
total_amount > 600
```

Because only one comparison must be true, this is effectively greater than the minimum returned value.

---

## 22. Using `ALL`

`ALL` requires the comparison to succeed for every value returned by the subquery.

```sql
SELECT
    order_id,
    total_amount
FROM orders
WHERE total_amount > ALL (
    SELECT total_amount
    FROM orders
    WHERE customer_id = 3
);
```

If customer 3 has orders of `150` and `600`, the condition behaves like:

```text
total_amount > 150
AND
total_amount > 600
```

This is effectively greater than the maximum returned value.

---

## 23. Subquery Versus `JOIN`

Many subqueries can be rewritten using a `JOIN`.

### Subquery version

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
WHERE c.customer_id IN (
    SELECT o.customer_id
    FROM orders AS o
    WHERE o.status = 'completed'
);
```

### `JOIN` version

```sql
SELECT DISTINCT
    c.customer_id,
    c.customer_name
FROM customers AS c
INNER JOIN orders AS o
    ON c.customer_id = o.customer_id
WHERE o.status = 'completed';
```

### Comparison

| Use a subquery when                          | Use a `JOIN` when                     |
| -------------------------------------------- | ------------------------------------- |
| You need to filter using a calculated result | You need columns from multiple tables |
| The logic is naturally expressed in steps    | The tables have a clear relationship  |
| You only need to test existence              | You need detailed matching records    |
| A scalar value is required                   | Multiple columns must be combined     |

A `JOIN` is not always faster than a subquery. Modern query optimizers may produce the same execution plan.

Choose the form that is clear, correct, and efficient for the database.

---

## 24. Subquery Versus Common Table Expression

A Common Table Expression, or CTE, creates a named temporary result using `WITH`.

### Subquery version

```sql
SELECT
    customer_id,
    total_spending
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    GROUP BY customer_id
) AS customer_totals
WHERE total_spending > 700;
```

### CTE version

```sql
WITH customer_totals AS (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    GROUP BY customer_id
)
SELECT
    customer_id,
    total_spending
FROM customer_totals
WHERE total_spending > 700;
```

The CTE version is often easier to read.

```text
Subquery
    |
    `-- Best for short, local logic

CTE
    |
    `-- Best for multi-step or reusable logic
```

Use a CTE when:

* The query contains several analytical steps.
* The same intermediate result is referenced multiple times.
* Nested subqueries become difficult to understand.
* You want to document the transformation pipeline clearly.

---

## 25. Subqueries in a Data Science Workflow

Subqueries often appear during data preparation.

```text
Raw database tables
        |
        v
Filter valid records
        |
        v
Aggregate user or product behavior
        |
        v
Compare rows with group statistics
        |
        v
Create an analytical table
        |
        v
Export to Python or a notebook
        |
        v
EDA, feature engineering, or modeling
```

### Example workflow

```text
customers + orders
        |
        v
Find completed orders
        |
        v
Calculate total spending per customer
        |
        v
Keep customers above average
        |
        v
Create a high-value customer dataset
        |
        v
Analyze retention or train a churn model
```

---

## 26. Feature Engineering Example

Suppose we want to create a feature showing whether each order is above the customer's average order amount.

```sql
SELECT
    o.order_id,
    o.customer_id,
    o.total_amount,
    (
        SELECT AVG(o2.total_amount)
        FROM orders AS o2
        WHERE o2.customer_id = o.customer_id
    ) AS customer_average,
    CASE
        WHEN o.total_amount > (
            SELECT AVG(o3.total_amount)
            FROM orders AS o3
            WHERE o3.customer_id = o.customer_id
        )
        THEN 1
        ELSE 0
    END AS is_above_customer_average
FROM orders AS o;
```

The output could be used as a model feature.

| order_id | customer_id | total_amount | customer_average | is_above_customer_average |
| -------: | ----------: | -----------: | ---------------: | ------------------------: |
|      101 |           1 |          500 |              650 |                         0 |
|      103 |           1 |          800 |              650 |                         1 |
|      104 |           3 |          150 |              375 |                         0 |
|      106 |           3 |          600 |              375 |                         1 |

A CTE or window function may avoid repeating the same average calculation.

```sql
SELECT
    order_id,
    customer_id,
    total_amount,
    customer_average,
    CASE
        WHEN total_amount > customer_average THEN 1
        ELSE 0
    END AS is_above_customer_average
FROM (
    SELECT
        order_id,
        customer_id,
        total_amount,
        AVG(total_amount) OVER (
            PARTITION BY customer_id
        ) AS customer_average
    FROM orders
) AS order_features;
```

---

## 27. Experiment Analysis Example

Suppose an experiment table contains:

```text
user_id
experiment_group
conversion
```

We want groups whose conversion rate is higher than the overall conversion rate.

```sql
SELECT
    experiment_group,
    AVG(conversion) AS group_conversion_rate
FROM experiment_results
GROUP BY experiment_group
HAVING AVG(conversion) > (
    SELECT AVG(conversion)
    FROM experiment_results
);
```

This query compares each experimental group with the global benchmark.

It can help answer:

* Which groups outperform the overall average?
* Which segments respond best to a treatment?
* Which product variants should be investigated further?

Statistical significance should still be evaluated separately.

---

## 28. Anomaly Detection Example

Suppose a transaction is considered potentially unusual when its amount is more than three times the customer's average transaction amount.

```sql
SELECT
    t.transaction_id,
    t.customer_id,
    t.amount
FROM transactions AS t
WHERE t.amount > 3 * (
    SELECT AVG(t2.amount)
    FROM transactions AS t2
    WHERE t2.customer_id = t.customer_id
);
```

This query creates a simple rule-based anomaly detector.

It does not replace a proper fraud-detection model, but it can be useful for:

* Exploratory analysis.
* Data quality checks.
* Creating weak labels.
* Generating candidate alerts.
* Building baseline rules.

---

## 29. Common Mistakes

### Mistake 1: Using `=` with a multi-row subquery

Incorrect:

```sql
SELECT *
FROM customers
WHERE customer_id = (
    SELECT customer_id
    FROM orders
);
```

Correct:

```sql
SELECT *
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
);
```

---

### Mistake 2: Forgetting parentheses

Incorrect:

```sql
SELECT *
FROM orders
WHERE total_amount > SELECT AVG(total_amount) FROM orders;
```

Correct:

```sql
SELECT *
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);
```

---

### Mistake 3: Forgetting the derived-table alias

Potentially incorrect:

```sql
SELECT *
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    GROUP BY customer_id
);
```

Correct:

```sql
SELECT *
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    GROUP BY customer_id
) AS customer_totals;
```

---

### Mistake 4: Returning several columns in a scalar context

Incorrect:

```sql
SELECT *
FROM orders
WHERE total_amount > (
    SELECT customer_id, AVG(total_amount)
    FROM orders
    GROUP BY customer_id
);
```

The comparison expects one value, but the subquery returns two columns and multiple rows.

---

### Mistake 5: Ignoring `NULL` with `NOT IN`

Risky:

```sql
SELECT *
FROM customers
WHERE customer_id NOT IN (
    SELECT customer_id
    FROM orders
);
```

If the subquery returns `NULL`, the result may be unexpected.

Safer:

```sql
SELECT *
FROM customers AS c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

---

### Mistake 6: Creating unnecessary nesting

Hard to read:

```sql
SELECT *
FROM (
    SELECT *
    FROM (
        SELECT *
        FROM orders
    ) AS level_one
) AS level_two;
```

Only use nested queries when each level performs a meaningful transformation.

---

### Mistake 7: Using a correlated subquery on a very large table without testing

A correlated subquery may conceptually run once per outer row.

Potential alternatives include:

* `JOIN`
* CTE
* Window function
* Pre-aggregated table
* Indexed lookup

Always inspect the execution plan for production workloads.

---

## 30. Performance Considerations

Subqueries are not automatically slow.

Performance depends on:

* Table size.
* Indexes.
* Query structure.
* Database engine.
* Data distribution.
* Number of returned rows.
* Whether the subquery is correlated.
* Whether the optimizer can rewrite the query.

### Useful indexes

For this correlated subquery:

```sql
SELECT *
FROM customers AS c
WHERE EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

An index on the foreign key may help:

```sql
CREATE INDEX idx_orders_customer_id
ON orders(customer_id);
```

For date filtering:

```sql
CREATE INDEX idx_orders_customer_date
ON orders(customer_id, order_date);
```

### Performance checklist

Before using a complex subquery in production:

1. Run the query on representative data.
2. Inspect the execution plan.
3. Verify that filter and join columns are indexed.
4. Compare the subquery with a `JOIN` or CTE.
5. Avoid selecting unnecessary columns.
6. Filter early when possible.
7. Test both correctness and execution time.

---

## 31. Query Readability Guidelines

Format subqueries using indentation.

Hard to read:

```sql
SELECT * FROM orders WHERE total_amount > (SELECT AVG(total_amount) FROM orders);
```

Better:

```sql
SELECT
    order_id,
    customer_id,
    total_amount
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);
```

Use meaningful aliases.

Unclear:

```sql
SELECT *
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS x
    FROM orders
    GROUP BY customer_id
) AS t;
```

Clearer:

```sql
SELECT
    customer_id,
    total_spending
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    GROUP BY customer_id
) AS customer_totals;
```

---

## 32. Reproducible SQL Workflow

A reproducible subquery analysis should include:

```text
sql_project/
|
|-- data/
|   |-- raw/
|   `-- processed/
|
|-- queries/
|   |-- 01_create_tables.sql
|   |-- 02_load_data.sql
|   |-- 03_validate_data.sql
|   |-- 04_subquery_analysis.sql
|   `-- 05_export_dataset.sql
|
|-- notebooks/
|   `-- sales_analysis.ipynb
|
|-- outputs/
|   |-- customer_summary.csv
|   `-- charts/
|
`-- README.md
```

The `README.md` should explain:

* Data source.
* Table structure.
* SQL engine.
* Query execution order.
* Assumptions.
* Data quality issues.
* Expected outputs.
* How to reproduce the analysis.

---

## 33. Complete Demo

### Question

Which customers have completed-order spending higher than the average completed-order spending per customer?

### Step 1: Calculate spending per customer

```sql
SELECT
    customer_id,
    SUM(total_amount) AS total_spending
FROM orders
WHERE status = 'completed'
GROUP BY customer_id;
```

### Step 2: Calculate average customer spending

```sql
SELECT AVG(total_spending)
FROM (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_id
) AS customer_totals;
```

### Step 3: Return customers above the average

```sql
SELECT
    c.customer_id,
    c.customer_name,
    customer_totals.total_spending
FROM customers AS c
INNER JOIN (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_id
) AS customer_totals
    ON c.customer_id = customer_totals.customer_id
WHERE customer_totals.total_spending > (
    SELECT AVG(total_spending)
    FROM (
        SELECT
            customer_id,
            SUM(total_amount) AS total_spending
        FROM orders
        WHERE status = 'completed'
        GROUP BY customer_id
    ) AS average_input
);
```

### Query flow

```text
orders
  |
  v
Keep completed orders
  |
  v
Calculate total spending by customer
  |
  +------------------------+
  |                        |
  v                        v
Customer totals      Average customer total
  |                        |
  +-----------+------------+
              |
              v
Keep customers above average
              |
              v
Join customer names
              |
              v
Final analytical table
```

For maintainability, this query could be rewritten with CTEs.

```sql
WITH customer_totals AS (
    SELECT
        customer_id,
        SUM(total_amount) AS total_spending
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_id
),
average_spending AS (
    SELECT
        AVG(total_spending) AS average_customer_spending
    FROM customer_totals
)
SELECT
    c.customer_id,
    c.customer_name,
    ct.total_spending
FROM customer_totals AS ct
INNER JOIN customers AS c
    ON ct.customer_id = c.customer_id
CROSS JOIN average_spending AS a
WHERE ct.total_spending > a.average_customer_spending;
```

---

## 34. Practical Exercise

Use a small sales database containing:

### `customers`

```text
customer_id
customer_name
country
signup_date
```

### `products`

```text
product_id
product_name
category
price
```

### `orders`

```text
order_id
customer_id
order_date
status
```

### `order_items`

```text
order_id
product_id
quantity
unit_price
```

Complete the following tasks.

### Task 1: Orders above average

Find all orders whose total value is higher than the average order value.

### Task 2: Active customers

Find customers who have at least one completed order.

### Task 3: Inactive customers

Find customers who have never placed an order.

Use `NOT EXISTS`.

### Task 4: High-value customers

Calculate total spending for each customer and return customers whose spending is higher than the average customer spending.

### Task 5: Expensive products

Find products whose price is higher than the average price of products in the same category.

### Task 6: Latest order

Find the latest order for each customer.

### Task 7: Model feature

Create a table containing:

```text
customer_id
total_orders
total_spending
average_order_value
is_above_global_average
```

### Task 8: Insights

Write three insights based on your results.

Example:

```text
1. A small customer segment contributes a large share of total revenue.
2. Several customers have accounts but no completed purchases.
3. The highest-value products are concentrated in two categories.
```

---

## 35. Suggested Exercise Solutions

### Solution 1: Orders above average

```sql
SELECT
    order_id,
    customer_id,
    total_amount
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);
```

### Solution 2: Customers with completed orders

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
WHERE EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
      AND o.status = 'completed'
);
```

### Solution 3: Customers without orders

```sql
SELECT
    c.customer_id,
    c.customer_name
FROM customers AS c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

### Solution 4: Products above their category average

```sql
SELECT
    p.product_id,
    p.product_name,
    p.category,
    p.price
FROM products AS p
WHERE p.price > (
    SELECT AVG(p2.price)
    FROM products AS p2
    WHERE p2.category = p.category
);
```

### Solution 5: Latest order per customer

```sql
SELECT
    o.order_id,
    o.customer_id,
    o.order_date
FROM orders AS o
WHERE o.order_date = (
    SELECT MAX(o2.order_date)
    FROM orders AS o2
    WHERE o2.customer_id = o.customer_id
);
```

---

## 36. Common Interview Questions

### Question 1

What is a subquery?

**Answer:**

A subquery is a SQL query nested inside another SQL statement. It provides an intermediate result that the outer query uses for filtering, calculation, or table construction.

### Question 2

What is a correlated subquery?

**Answer:**

A correlated subquery references one or more columns from the outer query. Its result depends on the current row being processed by the outer query.

### Question 3

Where can subqueries appear?

**Answer:**

Subqueries commonly appear in:

* `SELECT`
* `FROM`
* `WHERE`
* `HAVING`
* `INSERT`
* `UPDATE`
* `DELETE`

### Question 4

What is the difference between `IN` and `EXISTS`?

**Answer:**

`IN` compares a value with a returned list. `EXISTS` checks whether the subquery returns at least one matching row.

### Question 5

When should a CTE be preferred?

**Answer:**

A CTE is often preferable when a query contains several logical stages, reuses an intermediate result, or becomes difficult to understand because of nested subqueries.

---

## 37. Completion Checklist

* [ ] I can explain a subquery in one or two minutes.
* [ ] I can identify the inner query and outer query.
* [ ] I can write a scalar subquery.
* [ ] I can use a subquery with `IN`.
* [ ] I can use `EXISTS` and `NOT EXISTS`.
* [ ] I can write a subquery in the `FROM` clause.
* [ ] I understand what a correlated subquery is.
* [ ] I can compare a row with a global aggregate.
* [ ] I can compare a row with a group-specific aggregate.
* [ ] I understand the `NULL` risk of `NOT IN`.
* [ ] I can decide between a subquery, `JOIN`, CTE, and window function.
* [ ] I have saved at least one working SQL analysis query.
* [ ] I have documented one assumption or limitation.
* [ ] I have written at least three analytical insights.

---

## 38. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

Subqueries support this outcome by allowing analysts to:

* Break complex data questions into logical stages.
* Generate reusable analytical tables.
* Compare observations with aggregate benchmarks.
* Create features directly in a database.
* Prepare datasets before loading them into Python.
* Automate filtering and transformation steps.

---

## 39. Related Project

### Mini Project: SQL and Python Sales Analysis

Build a small sales database and use SQL subqueries to answer:

* Which orders are above the average order value?
* Which customers spend more than the average customer?
* Which products are more expensive than their category average?
* Which customers have never completed an order?
* What is the latest purchase for every customer?
* Which transactions could be considered unusual?

Export the final analytical table to a CSV file and analyze it with Pandas.

Suggested pipeline:

```text
CSV files
    |
    v
SQL database
    |
    v
Validation queries
    |
    v
Subqueries and aggregations
    |
    v
Analytical table
    |
    v
Pandas DataFrame
    |
    v
Charts and insights
    |
    v
README and portfolio report
```

Suggested portfolio artifacts:

* SQL schema.
* Data-loading script.
* Subquery analysis file.
* Jupyter Notebook.
* Three charts.
* Written business insights.
* Reproducibility instructions.
* Assumptions and limitations.

---

## 40. Summary

A **subquery** is a query nested inside another SQL query.

Subqueries help solve data problems that require intermediate calculations, lists, or temporary tables.

The most important forms are:

```text
Scalar subquery
    -> Returns one value

Multi-row subquery
    -> Returns several values

Derived table
    -> Returns a temporary table

Correlated subquery
    -> Depends on the current outer row
```

The most common patterns are:

```sql
WHERE value > (
    SELECT AVG(value)
    FROM table_name
);
```

```sql
WHERE id IN (
    SELECT id
    FROM another_table
);
```

```sql
WHERE EXISTS (
    SELECT 1
    FROM another_table
    WHERE matching_condition
);
```

```sql
FROM (
    SELECT ...
) AS temporary_result;
```

Subqueries are especially useful for:

* Aggregate comparisons.
* Existence checks.
* Group-specific filtering.
* Latest-record selection.
* Feature engineering.
* Experiment analysis.
* Anomaly detection.
* Reproducible dataset preparation.

A good SQL practitioner should not only know how to write a subquery, but also when to replace it with a `JOIN`, CTE, or window function for better readability and performance.
