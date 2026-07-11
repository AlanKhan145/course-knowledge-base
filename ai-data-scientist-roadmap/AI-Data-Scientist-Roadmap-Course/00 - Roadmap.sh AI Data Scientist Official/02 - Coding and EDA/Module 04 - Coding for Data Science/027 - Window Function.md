# 027 - Window Functions

**Course:** 02 - Coding and EDA
**Module:** Module 04 - Coding for Data Science
**Content Group:** SQL
**Roadmap Source:** Coding for Data Science / SQL
**Lesson Type:** Coding
**Lesson Order:** 027
**Suggested Duration:** 20 minutes

---

## 1. Summary

This lesson explains **SQL Window Functions** in the context of AI and Data Science.

Window functions perform calculations across a group of related rows while preserving each original row in the result.

They are especially useful for:

* Ranking records
* Calculating running totals
* Calculating moving averages
* Comparing a row with previous or next rows
* Finding the top records within each group
* Measuring percentages and cumulative distributions
* Creating time-series and behavioral features for machine learning

Unlike `GROUP BY`, a window function does not collapse multiple rows into one summary row.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain window functions in your own words.
* Understand the difference between `GROUP BY` and window functions.
* Use the `OVER()` clause.
* Divide data into groups with `PARTITION BY`.
* Define row order with `ORDER BY`.
* Use ranking functions such as `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`.
* Use offset functions such as `LAG()` and `LEAD()`.
* Calculate running totals and moving averages.
* Select the top N records within each group.
* Apply window functions to analytics and machine-learning feature engineering.

---

## 3. Main Concept

A **window function** calculates a value using a set of rows related to the current row.

The related rows are called a **window**.

The general syntax is:

```sql
window_function(expression) OVER (
    PARTITION BY column_name
    ORDER BY column_name
    ROWS BETWEEN frame_start AND frame_end
)
```

The three main components are:

| Component      | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| `PARTITION BY` | Divides rows into independent groups                   |
| `ORDER BY`     | Defines the order of rows inside each group            |
| Window frame   | Defines which rows around the current row are included |

Not every window function needs all three components.

---

## 4. Window Function Workflow

```text
Input table
    |
    v
Divide rows into partitions
    |
    v
Order rows inside each partition
    |
    v
Define the window frame
    |
    v
Calculate a value for every row
    |
    v
Return all original rows with new analytical columns
```

For example:

```text
All sales rows
    |
    +-- North region
    |      1. January
    |      2. February
    |      3. March
    |
    +-- South region
           1. January
           2. February
           3. March
```

Each region is a partition, and sales records are ordered by date inside each partition.

---

## 5. Example Dataset

Assume we have the following `sales` table:

| sale_id | employee | region | sale_date  | amount |
| ------: | -------- | ------ | ---------- | -----: |
|       1 | Alice    | North  | 2026-01-03 |    500 |
|       2 | Bob      | North  | 2026-01-05 |    700 |
|       3 | Alice    | North  | 2026-01-10 |    400 |
|       4 | Carol    | South  | 2026-01-04 |    900 |
|       5 | David    | South  | 2026-01-07 |    600 |
|       6 | Carol    | South  | 2026-01-12 |    800 |

Example table creation:

```sql
CREATE TABLE sales (
    sale_id INTEGER,
    employee VARCHAR(50),
    region VARCHAR(50),
    sale_date DATE,
    amount DECIMAL(10, 2)
);
```

Example data:

```sql
INSERT INTO sales (
    sale_id,
    employee,
    region,
    sale_date,
    amount
)
VALUES
    (1, 'Alice', 'North', '2026-01-03', 500),
    (2, 'Bob', 'North', '2026-01-05', 700),
    (3, 'Alice', 'North', '2026-01-10', 400),
    (4, 'Carol', 'South', '2026-01-04', 900),
    (5, 'David', 'South', '2026-01-07', 600),
    (6, 'Carol', 'South', '2026-01-12', 800);
```

---

## 6. `GROUP BY` versus Window Functions

### 6.1 Using `GROUP BY`

```sql
SELECT
    region,
    SUM(amount) AS region_total
FROM sales
GROUP BY region;
```

Result:

| region | region_total |
| ------ | -----------: |
| North  |         1600 |
| South  |         2300 |

`GROUP BY` combines all rows from the same region into one row.

---

### 6.2 Using a Window Function

```sql
SELECT
    sale_id,
    employee,
    region,
    amount,
    SUM(amount) OVER (
        PARTITION BY region
    ) AS region_total
FROM sales;
```

Result:

| sale_id | employee | region | amount | region_total |
| ------: | -------- | ------ | -----: | -----------: |
|       1 | Alice    | North  |    500 |         1600 |
|       2 | Bob      | North  |    700 |         1600 |
|       3 | Alice    | North  |    400 |         1600 |
|       4 | Carol    | South  |    900 |         2300 |
|       5 | David    | South  |    600 |         2300 |
|       6 | Carol    | South  |    800 |         2300 |

The original rows remain available.

```text
GROUP BY
Many input rows -> One output row per group

WINDOW FUNCTION
Many input rows -> Same number of output rows
                   plus analytical columns
```

---

## 7. The `OVER()` Clause

The `OVER()` clause converts a compatible SQL function into a window function.

### 7.1 Entire Table as One Window

```sql
SELECT
    employee,
    amount,
    SUM(amount) OVER () AS total_sales
FROM sales;
```

Because there is no `PARTITION BY`, the entire result set becomes one window.

---

### 7.2 Partitioning Rows

```sql
SELECT
    employee,
    region,
    amount,
    SUM(amount) OVER (
        PARTITION BY region
    ) AS region_total
FROM sales;
```

Each region is calculated independently.

---

### 7.3 Ordering Rows

```sql
SELECT
    employee,
    region,
    sale_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date
    ) AS running_total
FROM sales;
```

The rows are ordered by `sale_date` before the running total is calculated.

---

## 8. Ranking Functions

Ranking functions assign positions to rows.

Common ranking functions include:

| Function       | Tie behavior                                         |
| -------------- | ---------------------------------------------------- |
| `ROW_NUMBER()` | Always assigns unique sequential numbers             |
| `RANK()`       | Equal values share a rank and create gaps            |
| `DENSE_RANK()` | Equal values share a rank without gaps               |
| `NTILE(n)`     | Divides ordered rows into approximately equal groups |

---

## 9. `ROW_NUMBER()`

`ROW_NUMBER()` assigns a unique sequential number to every row.

```sql
SELECT
    employee,
    region,
    amount,
    ROW_NUMBER() OVER (
        PARTITION BY region
        ORDER BY amount DESC
    ) AS row_number
FROM sales;
```

Example result:

| employee | region | amount | row_number |
| -------- | ------ | -----: | ---------: |
| Bob      | North  |    700 |          1 |
| Alice    | North  |    500 |          2 |
| Alice    | North  |    400 |          3 |
| Carol    | South  |    900 |          1 |
| Carol    | South  |    800 |          2 |
| David    | South  |    600 |          3 |

A deterministic tie-breaker should be added when duplicate values are possible:

```sql
ROW_NUMBER() OVER (
    PARTITION BY region
    ORDER BY amount DESC, sale_id ASC
)
```

Without the second ordering column, tied rows may receive row numbers in an unspecified order.

---

## 10. `RANK()` and `DENSE_RANK()`

Assume the amounts in one region are:

```text
900, 800, 800, 600
```

The ranking results are:

| amount | `ROW_NUMBER()` | `RANK()` | `DENSE_RANK()` |
| -----: | -------------: | -------: | -------------: |
|    900 |              1 |        1 |              1 |
|    800 |              2 |        2 |              2 |
|    800 |              3 |        2 |              2 |
|    600 |              4 |        4 |              3 |

SQL example:

```sql
SELECT
    employee,
    region,
    amount,
    ROW_NUMBER() OVER (
        PARTITION BY region
        ORDER BY amount DESC
    ) AS row_num,
    RANK() OVER (
        PARTITION BY region
        ORDER BY amount DESC
    ) AS rank_num,
    DENSE_RANK() OVER (
        PARTITION BY region
        ORDER BY amount DESC
    ) AS dense_rank_num
FROM sales;
```

Use:

* `ROW_NUMBER()` when every row needs a unique position.
* `RANK()` for competition-style rankings.
* `DENSE_RANK()` when rankings should not contain gaps.

---

## 11. Top N Records per Group

A common analytical problem is:

> Find the top two sales in each region.

A window function is calculated after `WHERE`, so its alias cannot usually be used directly in the same query's `WHERE` clause.

Use a Common Table Expression:

```sql
WITH ranked_sales AS (
    SELECT
        sale_id,
        employee,
        region,
        amount,
        ROW_NUMBER() OVER (
            PARTITION BY region
            ORDER BY amount DESC
        ) AS row_num
    FROM sales
)
SELECT
    sale_id,
    employee,
    region,
    amount
FROM ranked_sales
WHERE row_num <= 2
ORDER BY region, row_num;
```

This pattern is useful for finding:

* Top customers in each country
* Most popular products in each category
* Best-performing models in each experiment
* Latest record for each user
* Highest-risk transactions for each account

Some SQL systems support `QUALIFY`:

```sql
SELECT
    sale_id,
    employee,
    region,
    amount
FROM sales
QUALIFY ROW_NUMBER() OVER (
    PARTITION BY region
    ORDER BY amount DESC
) <= 2;
```

`QUALIFY` is not available in every database.

---

## 12. Running Total

A running total accumulates values from the beginning of a partition to the current row.

```sql
SELECT
    sale_id,
    region,
    sale_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date
        ROWS BETWEEN UNBOUNDED PRECEDING
                 AND CURRENT ROW
    ) AS running_total
FROM sales
ORDER BY region, sale_date;
```

Conceptually:

```text
Row 1 running total = value 1

Row 2 running total = value 1 + value 2

Row 3 running total = value 1 + value 2 + value 3
```

The shorter form is often:

```sql
SUM(amount) OVER (
    PARTITION BY region
    ORDER BY sale_date
)
```

However, writing the frame explicitly makes the intended behavior clearer and avoids dialect-specific surprises.

---

## 13. Window Frames

A window frame defines which ordered rows contribute to the current calculation.

General syntax:

```sql
ROWS BETWEEN frame_start AND frame_end
```

Common boundaries include:

| Boundary              | Meaning                       |
| --------------------- | ----------------------------- |
| `UNBOUNDED PRECEDING` | First row in the partition    |
| `n PRECEDING`         | N rows before the current row |
| `CURRENT ROW`         | Current row                   |
| `n FOLLOWING`         | N rows after the current row  |
| `UNBOUNDED FOLLOWING` | Last row in the partition     |

---

### 13.1 Cumulative Frame

```sql
ROWS BETWEEN UNBOUNDED PRECEDING
         AND CURRENT ROW
```

Includes all rows from the start of the partition through the current row.

---

### 13.2 Centered Frame

```sql
ROWS BETWEEN 1 PRECEDING
         AND 1 FOLLOWING
```

Includes:

```text
Previous row
Current row
Next row
```

---

### 13.3 Complete Partition

```sql
ROWS BETWEEN UNBOUNDED PRECEDING
         AND UNBOUNDED FOLLOWING
```

Includes every row in the partition.

---

## 14. Moving Average

A moving average reduces short-term noise in time-series data.

The following query calculates a three-row moving average:

```sql
SELECT
    region,
    sale_date,
    amount,
    AVG(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date
        ROWS BETWEEN 2 PRECEDING
                 AND CURRENT ROW
    ) AS moving_average_3_rows
FROM sales
ORDER BY region, sale_date;
```

For the current row, the window contains:

```text
Two previous rows + current row
```

Formula:

```text
Moving average =
    Sum of values in the current window
    -----------------------------------
    Number of values in the window
```

At the beginning of a partition, fewer than three rows may be available. SQL calculates the average using the available rows.

---

## 15. `LAG()`

`LAG()` retrieves a value from a previous row.

```sql
SELECT
    region,
    sale_date,
    amount,
    LAG(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date
    ) AS previous_amount
FROM sales
ORDER BY region, sale_date;
```

Example:

| sale_date  | amount | previous_amount |
| ---------- | -----: | --------------: |
| 2026-01-03 |    500 |          `NULL` |
| 2026-01-05 |    700 |             500 |
| 2026-01-10 |    400 |             700 |

The first row has no previous row, so the result is `NULL`.

---

## 16. Change from the Previous Row

`LAG()` can be used to calculate absolute change:

```sql
WITH sales_with_previous AS (
    SELECT
        region,
        sale_date,
        amount,
        LAG(amount) OVER (
            PARTITION BY region
            ORDER BY sale_date
        ) AS previous_amount
    FROM sales
)
SELECT
    region,
    sale_date,
    amount,
    previous_amount,
    amount - previous_amount AS amount_change
FROM sales_with_previous
ORDER BY region, sale_date;
```

Percentage change:

```sql
WITH sales_with_previous AS (
    SELECT
        region,
        sale_date,
        amount,
        LAG(amount) OVER (
            PARTITION BY region
            ORDER BY sale_date
        ) AS previous_amount
    FROM sales
)
SELECT
    region,
    sale_date,
    amount,
    previous_amount,
    ROUND(
        100.0 * (amount - previous_amount)
        / NULLIF(previous_amount, 0),
        2
    ) AS percentage_change
FROM sales_with_previous
ORDER BY region, sale_date;
```

The `NULLIF()` function prevents division by zero.

Formula:

```text
Percentage change =
    Current value - Previous value
    ------------------------------
           Previous value
    multiplied by 100
```

---

## 17. `LEAD()`

`LEAD()` retrieves a value from a following row.

```sql
SELECT
    region,
    sale_date,
    amount,
    LEAD(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date
    ) AS next_amount
FROM sales
ORDER BY region, sale_date;
```

This is useful for:

* Comparing the current event with the next event
* Measuring time until the next purchase
* Detecting whether a user churned after an activity
* Creating future targets for supervised learning
* Comparing the current state with a later state

---

## 18. Time Between Events

Assume a table named `user_events`:

| user_id | event_time       | event_type   |
| ------- | ---------------- | ------------ |
| 101     | 2026-01-01 09:00 | login        |
| 101     | 2026-01-01 09:15 | view_product |
| 101     | 2026-01-01 09:30 | purchase     |

Use `LAG()` to retrieve the previous event time:

```sql
SELECT
    user_id,
    event_time,
    event_type,
    LAG(event_time) OVER (
        PARTITION BY user_id
        ORDER BY event_time
    ) AS previous_event_time
FROM user_events;
```

PostgreSQL example for calculating the time difference:

```sql
SELECT
    user_id,
    event_time,
    event_type,
    event_time - LAG(event_time) OVER (
        PARTITION BY user_id
        ORDER BY event_time
    ) AS time_since_previous_event
FROM user_events;
```

Date and timestamp difference syntax varies across SQL databases.

---

## 19. Percentage of Total

A window function can calculate each row's contribution to a total.

```sql
SELECT
    employee,
    region,
    amount,
    SUM(amount) OVER (
        PARTITION BY region
    ) AS region_total,
    ROUND(
        100.0 * amount
        / NULLIF(
            SUM(amount) OVER (
                PARTITION BY region
            ),
            0
        ),
        2
    ) AS percentage_of_region
FROM sales;
```

Formula:

```text
Percentage of regional sales =
    Row amount
    ---------------------
    Total regional amount
    multiplied by 100
```

This is useful for:

* Customer revenue contribution
* Product share within a category
* Model error contribution by segment
* Traffic contribution by channel

---

## 20. Difference from the Group Average

```sql
SELECT
    employee,
    region,
    amount,
    AVG(amount) OVER (
        PARTITION BY region
    ) AS region_average,
    amount - AVG(amount) OVER (
        PARTITION BY region
    ) AS difference_from_average
FROM sales;
```

A positive value means the row is above its regional average.

A negative value means it is below the regional average.

This pattern is useful for anomaly detection and feature engineering.

---

## 21. Cumulative Percentage

```sql
SELECT
    employee,
    region,
    amount,
    SUM(amount) OVER (
        PARTITION BY region
        ORDER BY amount DESC
        ROWS BETWEEN UNBOUNDED PRECEDING
                 AND CURRENT ROW
    )
    /
    NULLIF(
        SUM(amount) OVER (
            PARTITION BY region
        ),
        0
    ) AS cumulative_share
FROM sales
ORDER BY region, amount DESC;
```

This can support Pareto analysis, such as identifying the customers responsible for the first 80% of revenue.

---

## 22. `NTILE()`

`NTILE(n)` divides ordered rows into approximately equal-sized groups.

Example: divide sales into four groups.

```sql
SELECT
    employee,
    amount,
    NTILE(4) OVER (
        ORDER BY amount DESC
    ) AS sales_quartile
FROM sales;
```

Possible interpretation:

| Quartile | Meaning               |
| -------: | --------------------- |
|        1 | Highest-value records |
|        2 | Upper-middle records  |
|        3 | Lower-middle records  |
|        4 | Lowest-value records  |

Applications include:

* Customer segmentation
* Risk bands
* Performance groups
* Income quartiles
* Model score bands

When the number of rows is not evenly divisible by `n`, some groups contain one more row than others.

---

## 23. Distribution Functions

### 23.1 `PERCENT_RANK()`

`PERCENT_RANK()` estimates the relative rank of a row from `0` to `1`.

```sql
SELECT
    employee,
    amount,
    PERCENT_RANK() OVER (
        ORDER BY amount
    ) AS percent_rank
FROM sales;
```

Conceptual formula:

```text
PERCENT_RANK =
    rank - 1
    --------
    rows - 1
```

---

### 23.2 `CUME_DIST()`

`CUME_DIST()` returns the proportion of rows with values less than or equal to the current value.

```sql
SELECT
    employee,
    amount,
    CUME_DIST() OVER (
        ORDER BY amount
    ) AS cumulative_distribution
FROM sales;
```

These functions can help:

* Analyze score distributions
* Create percentile-based segments
* Compare model confidence scores
* Detect unusually high or low values

---

## 24. First and Last Values

### 24.1 `FIRST_VALUE()`

```sql
SELECT
    region,
    sale_date,
    amount,
    FIRST_VALUE(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date
    ) AS first_sale_amount
FROM sales;
```

---

### 24.2 `LAST_VALUE()`

A common mistake is using `LAST_VALUE()` without specifying the complete frame.

```sql
SELECT
    region,
    sale_date,
    amount,
    LAST_VALUE(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date
        ROWS BETWEEN UNBOUNDED PRECEDING
                 AND UNBOUNDED FOLLOWING
    ) AS last_sale_amount
FROM sales;
```

Without `UNBOUNDED FOLLOWING`, the default frame may end at the current row. In that case, `LAST_VALUE()` may simply return the current row's value.

---

## 25. Named Windows

Some databases allow reusable named window definitions.

```sql
SELECT
    employee,
    region,
    sale_date,
    amount,
    SUM(amount) OVER regional_window AS running_total,
    AVG(amount) OVER regional_window AS running_average
FROM sales
WINDOW regional_window AS (
    PARTITION BY region
    ORDER BY sale_date
    ROWS BETWEEN UNBOUNDED PRECEDING
             AND CURRENT ROW
);
```

Named windows reduce repeated SQL and improve readability.

Support varies across SQL databases.

---

## 26. SQL Execution Order

A simplified SQL execution order is:

```text
1. FROM
2. JOIN
3. WHERE
4. GROUP BY
5. HAVING
6. Window functions
7. SELECT
8. DISTINCT
9. ORDER BY
10. LIMIT
```

This explains why the following query usually fails:

```sql
SELECT
    employee,
    region,
    amount,
    ROW_NUMBER() OVER (
        PARTITION BY region
        ORDER BY amount DESC
    ) AS row_num
FROM sales
WHERE row_num <= 2;
```

At the time `WHERE` runs, `row_num` does not yet exist.

Use a CTE or subquery instead:

```sql
WITH ranked_sales AS (
    SELECT
        employee,
        region,
        amount,
        ROW_NUMBER() OVER (
            PARTITION BY region
            ORDER BY amount DESC
        ) AS row_num
    FROM sales
)
SELECT *
FROM ranked_sales
WHERE row_num <= 2;
```

---

## 27. Deduplicating Records

Suppose a customer can have multiple profile records, and you need only the latest one.

```sql
WITH ranked_profiles AS (
    SELECT
        customer_id,
        email,
        updated_at,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY updated_at DESC
        ) AS row_num
    FROM customer_profiles
)
SELECT
    customer_id,
    email,
    updated_at
FROM ranked_profiles
WHERE row_num = 1;
```

This is one of the most common production uses of window functions.

Use a deterministic tie-breaker when timestamps may be equal:

```sql
ORDER BY updated_at DESC, profile_id DESC
```

---

## 28. Session Detection Example

Window functions can help identify user sessions.

Assume a new session begins after 30 minutes of inactivity.

### Step 1: Retrieve the previous event time

```sql
WITH event_gaps AS (
    SELECT
        user_id,
        event_time,
        LAG(event_time) OVER (
            PARTITION BY user_id
            ORDER BY event_time
        ) AS previous_event_time
    FROM user_events
)
SELECT *
FROM event_gaps;
```

### Step 2: Mark the beginning of a session

PostgreSQL-style example:

```sql
WITH event_gaps AS (
    SELECT
        user_id,
        event_time,
        LAG(event_time) OVER (
            PARTITION BY user_id
            ORDER BY event_time
        ) AS previous_event_time
    FROM user_events
),
session_flags AS (
    SELECT
        user_id,
        event_time,
        CASE
            WHEN previous_event_time IS NULL THEN 1
            WHEN event_time - previous_event_time
                 > INTERVAL '30 minutes' THEN 1
            ELSE 0
        END AS new_session
    FROM event_gaps
)
SELECT
    user_id,
    event_time,
    SUM(new_session) OVER (
        PARTITION BY user_id
        ORDER BY event_time
        ROWS BETWEEN UNBOUNDED PRECEDING
                 AND CURRENT ROW
    ) AS session_number
FROM session_flags;
```

Workflow:

```text
Events
  |
  v
Compare each event with the previous event
  |
  v
Mark gaps longer than 30 minutes
  |
  v
Calculate cumulative sum of session markers
  |
  v
Assign session numbers
```

This technique is valuable for product analytics and recommendation systems.

---

## 29. Window Functions in AI and Data Science

Window functions are frequently used before data is loaded into Python or a machine-learning pipeline.

### 29.1 Feature Engineering

Possible features include:

```text
Previous transaction amount
Next transaction time
Seven-day moving average
Cumulative customer spending
Number of events before the current event
Difference from category average
User's rank within a segment
Time since previous login
```

Example:

```sql
SELECT
    customer_id,
    transaction_time,
    amount,

    LAG(amount) OVER (
        PARTITION BY customer_id
        ORDER BY transaction_time
    ) AS previous_amount,

    AVG(amount) OVER (
        PARTITION BY customer_id
        ORDER BY transaction_time
        ROWS BETWEEN 6 PRECEDING
                 AND CURRENT ROW
    ) AS moving_average_7_transactions,

    SUM(amount) OVER (
        PARTITION BY customer_id
        ORDER BY transaction_time
        ROWS BETWEEN UNBOUNDED PRECEDING
                 AND CURRENT ROW
    ) AS cumulative_spending

FROM transactions;
```

---

### 29.2 Time-Series Analysis

Window functions support:

* Rolling statistics
* Trend measurement
* Previous-period comparisons
* Growth calculations
* Anomaly detection
* Seasonal feature preparation

---

### 29.3 Experiment Analysis

For A/B testing, they can help:

* Rank experiments by conversion rate
* Calculate cumulative sample sizes
* Compare daily metrics with previous days
* Track moving averages of experiment performance
* Select the latest result for each experiment

---

### 29.4 Model Monitoring

Window functions can calculate:

* Rolling model accuracy
* Moving average latency
* Cumulative prediction volume
* Error rate by model version
* Difference between current and previous metrics
* Ranking of models within each dataset

---

## 30. Data Leakage Warning

Window functions can accidentally introduce future information into machine-learning features.

Unsafe example:

```sql
AVG(amount) OVER (
    PARTITION BY customer_id
    ORDER BY transaction_time
    ROWS BETWEEN 3 PRECEDING
             AND 3 FOLLOWING
)
```

The frame includes future transactions.

For predictive modeling, a safer historical feature is:

```sql
AVG(amount) OVER (
    PARTITION BY customer_id
    ORDER BY transaction_time
    ROWS BETWEEN 3 PRECEDING
             AND 1 PRECEDING
)
```

This window uses only previous rows and excludes the current transaction.

```text
Prediction time
      |
Past  |  Future
------|----------------
Safe  |  Data leakage
```

Always ask:

> Would this information have been available when the prediction was made?

---

## 31. `ROWS` versus `RANGE`

Two common frame types are `ROWS` and `RANGE`.

### `ROWS`

Counts physical rows.

```sql
ROWS BETWEEN 2 PRECEDING
         AND CURRENT ROW
```

This means:

```text
Current row plus the previous two physical rows
```

---

### `RANGE`

Groups rows according to the ordering value and may include multiple peer rows with equal values.

```sql
RANGE BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
```

When multiple rows have the same `ORDER BY` value, `RANGE` may include all tied rows.

For predictable row-by-row calculations, explicitly using `ROWS` is often clearer.

---

## 32. Performance Considerations

Window functions may require sorting large datasets.

For example:

```sql
ROW_NUMBER() OVER (
    PARTITION BY customer_id
    ORDER BY transaction_time
)
```

The database may need to:

1. Read matching rows.
2. Divide them by `customer_id`.
3. Sort each partition by `transaction_time`.
4. Calculate the window result.

Performance recommendations:

* Filter unnecessary rows early.
* Select only required columns.
* Create appropriate indexes.
* Avoid unnecessary window calculations.
* Reuse the same partition and ordering definitions when possible.
* Inspect the execution plan with `EXPLAIN`.
* Pre-aggregate data when row-level detail is unnecessary.
* Test queries on realistic data volumes.

A useful index might be:

```sql
CREATE INDEX idx_transactions_customer_time
ON transactions (customer_id, transaction_time);
```

The optimal index depends on the database and query plan.

---

## 33. Common Mistakes

### 33.1 Confusing `GROUP BY` with Window Functions

Incorrect expectation:

```sql
SUM(amount) OVER (
    PARTITION BY region
)
```

This does not return one row per region. It returns one result for every original row.

---

### 33.2 Forgetting `ORDER BY`

```sql
ROW_NUMBER() OVER (
    PARTITION BY region
)
```

Without ordering, the assigned row numbers may be unpredictable.

Better:

```sql
ROW_NUMBER() OVER (
    PARTITION BY region
    ORDER BY amount DESC, sale_id ASC
)
```

---

### 33.3 Filtering a Window Alias in `WHERE`

This usually fails:

```sql
SELECT
    *,
    ROW_NUMBER() OVER (
        PARTITION BY region
        ORDER BY amount DESC
    ) AS row_num
FROM sales
WHERE row_num = 1;
```

Use a CTE, subquery, or `QUALIFY`.

---

### 33.4 Ignoring Duplicate Ordering Values

This ordering may be non-deterministic:

```sql
ORDER BY amount DESC
```

A stable version is:

```sql
ORDER BY amount DESC, sale_id ASC
```

---

### 33.5 Incorrect `LAST_VALUE()` Frame

This may return the current value instead of the final partition value:

```sql
LAST_VALUE(amount) OVER (
    PARTITION BY region
    ORDER BY sale_date
)
```

Use:

```sql
LAST_VALUE(amount) OVER (
    PARTITION BY region
    ORDER BY sale_date
    ROWS BETWEEN UNBOUNDED PRECEDING
             AND UNBOUNDED FOLLOWING
)
```

---

### 33.6 Accidental Data Leakage

Using future rows in a predictive feature can make offline model performance unrealistically high.

---

### 33.7 Dividing by Zero

Unsafe:

```sql
amount / previous_amount
```

Safer:

```sql
amount / NULLIF(previous_amount, 0)
```

---

### 33.8 Assuming Every Database Uses the Same Syntax

Window function support is broad, but these features can differ:

* Date arithmetic
* Interval syntax
* `QUALIFY`
* Named windows
* Default frames
* Null ordering
* Percentile functions

Always check the documentation for the database being used.

---

## 34. Practical Exercise

Use a small sales database with the following columns:

```text
sale_id
customer_id
product_category
region
sale_date
amount
```

Complete the following tasks.

### Task 1: Rank Sales

Rank sales by amount within each region.

```sql
SELECT
    sale_id,
    region,
    amount,
    DENSE_RANK() OVER (
        PARTITION BY region
        ORDER BY amount DESC
    ) AS sales_rank
FROM sales;
```

---

### Task 2: Calculate Running Revenue

Calculate cumulative revenue by region and date.

```sql
SELECT
    region,
    sale_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date, sale_id
        ROWS BETWEEN UNBOUNDED PRECEDING
                 AND CURRENT ROW
    ) AS cumulative_revenue
FROM sales;
```

---

### Task 3: Compare with the Previous Sale

```sql
SELECT
    region,
    sale_date,
    amount,
    LAG(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date, sale_id
    ) AS previous_amount
FROM sales;
```

---

### Task 4: Calculate a Three-Row Moving Average

```sql
SELECT
    region,
    sale_date,
    amount,
    AVG(amount) OVER (
        PARTITION BY region
        ORDER BY sale_date, sale_id
        ROWS BETWEEN 2 PRECEDING
                 AND CURRENT ROW
    ) AS moving_average_3_rows
FROM sales;
```

---

### Task 5: Find the Top Three Sales per Category

```sql
WITH ranked_sales AS (
    SELECT
        sale_id,
        product_category,
        amount,
        ROW_NUMBER() OVER (
            PARTITION BY product_category
            ORDER BY amount DESC, sale_id ASC
        ) AS row_num
    FROM sales
)
SELECT
    sale_id,
    product_category,
    amount
FROM ranked_sales
WHERE row_num <= 3;
```

---

### Task 6: Create Three Insights

Write three observations based on your query results.

Example structure:

```text
Insight 1:
The North region generated the highest cumulative revenue.

Evidence:
Its cumulative revenue reached 125,000 by the end of the period.

Recommendation:
Prioritize inventory and marketing investment in the North region.
```

---

## 35. Mini Project

### SQL and Python Sales Analysis

Build a small reproducible project using SQL and Pandas.

Suggested workflow:

```text
Raw sales data
      |
      v
Load data into SQL database
      |
      v
Validate and clean records
      |
      v
Apply window functions
      |
      v
Export analytical table
      |
      v
Load results into Pandas
      |
      v
Create charts and insights
      |
      v
Write a README
```

Suggested SQL outputs:

* Revenue rank by region
* Running daily revenue
* Seven-day moving average
* Previous-period growth
* Top products per category
* Customer percentage of total revenue

Suggested Python charts:

* Cumulative revenue line chart
* Moving-average trend chart
* Top products bar chart
* Regional revenue contribution chart

Suggested project files:

```text
window-function-project/
|
|-- data/
|   |-- raw_sales.csv
|   `-- processed_sales.csv
|
|-- sql/
|   |-- create_tables.sql
|   |-- cleaning.sql
|   `-- window_analysis.sql
|
|-- notebooks/
|   `-- sales_report.ipynb
|
|-- outputs/
|   |-- charts/
|   `-- analytical_table.csv
|
`-- README.md
```

---

## 36. Quick Reference

| Goal                                          | Function or pattern                            |
| --------------------------------------------- | ---------------------------------------------- |
| Assign a unique sequence                      | `ROW_NUMBER()`                                 |
| Rank values with gaps                         | `RANK()`                                       |
| Rank values without gaps                      | `DENSE_RANK()`                                 |
| Divide rows into groups                       | `NTILE(n)`                                     |
| Retrieve previous value                       | `LAG()`                                        |
| Retrieve next value                           | `LEAD()`                                       |
| Calculate running total                       | `SUM() OVER (...)`                             |
| Calculate moving average                      | `AVG() OVER (...)`                             |
| Calculate group total without collapsing rows | `SUM() OVER (PARTITION BY ...)`                |
| Find the first value                          | `FIRST_VALUE()`                                |
| Find the last value                           | `LAST_VALUE()`                                 |
| Calculate relative rank                       | `PERCENT_RANK()`                               |
| Calculate cumulative distribution             | `CUME_DIST()`                                  |
| Find top N per group                          | Window function plus CTE or `QUALIFY`          |
| Keep latest record per entity                 | `ROW_NUMBER()` ordered by timestamp descending |

---

## 37. Completion Checklist

* [ ] I can explain window functions in one or two minutes.
* [ ] I understand the difference between `GROUP BY` and window functions.
* [ ] I can use `OVER()`.
* [ ] I can use `PARTITION BY`.
* [ ] I can define a stable `ORDER BY`.
* [ ] I can use `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`.
* [ ] I can calculate a running total.
* [ ] I can calculate a moving average.
* [ ] I can use `LAG()` and `LEAD()`.
* [ ] I can select the top N rows per group.
* [ ] I understand basic window-frame syntax.
* [ ] I can identify possible machine-learning data leakage.
* [ ] I have saved at least one reproducible SQL query.
* [ ] I have written at least three insights from the output.
* [ ] I have documented one caveat, assumption, or follow-up question.

---

## 38. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

Window functions help move analytical logic from manual spreadsheet operations into repeatable SQL queries that can support:

* Notebooks
* Dashboards
* ETL pipelines
* Feature engineering
* Experiment reports
* Model-monitoring systems
* Production APIs

---

## 39. Related Project

**Mini Project:** SQL and Python Data Analysis with a small sales database and a Pandas report.

Recommended portfolio artifacts:

* SQL query file
* Database schema
* Analytical output table
* Jupyter Notebook
* Charts
* Written insights
* README with setup instructions
* Notes about assumptions and SQL dialect differences

---

## 40. Summary

A SQL window function calculates values across related rows without removing the original row-level detail.

The most important concepts are:

```text
OVER()
PARTITION BY
ORDER BY
Window frame
```

The most frequently used functions are:

```text
ROW_NUMBER()
RANK()
DENSE_RANK()
LAG()
LEAD()
SUM()
AVG()
FIRST_VALUE()
LAST_VALUE()
```

Window functions are essential for ranking, running totals, moving statistics, time-series analysis, deduplication, behavioral analytics, and machine-learning feature engineering.

To make this knowledge practical, turn it into a reproducible SQL query, notebook, analytical table, dashboard, model feature pipeline, or portfolio project.
