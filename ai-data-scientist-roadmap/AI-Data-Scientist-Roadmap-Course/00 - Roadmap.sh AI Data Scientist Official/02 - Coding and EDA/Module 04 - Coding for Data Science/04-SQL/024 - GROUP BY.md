# 024 — SQL `GROUP BY`

**Course:** 02 — Coding and EDA
**Module:** Module 04 — Coding for Data Science
**Content Group:** SQL
**Roadmap Source:** Coding for Data Science / SQL
**Lesson Type:** Coding
**Lesson Order:** 024
**Suggested Duration:** 20 minutes

---

## 1. Summary

The SQL `GROUP BY` clause combines rows that contain the same values into groups.

It is usually used with aggregate functions such as:

* `COUNT()` — counts rows
* `SUM()` — calculates a total
* `AVG()` — calculates an average
* `MIN()` — finds the minimum value
* `MAX()` — finds the maximum value

For AI Engineers and Data Scientists, `GROUP BY` is useful for:

* Summarizing datasets
* Calculating business metrics
* Checking class distributions
* Comparing model experiments
* Creating model features
* Monitoring APIs and pipelines
* Preparing tables for dashboards
* Producing reproducible reports

Example question:

> What is the total revenue for each product category?

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain how `GROUP BY` works.
* Group rows by one column.
* Group rows by multiple columns.
* Use aggregate functions with grouped data.
* Understand the difference between `WHERE` and `HAVING`.
* Sort grouped results with `ORDER BY`.
* Handle `NULL` values correctly.
* Apply `GROUP BY` to data science problems.

---

## 3. Why `GROUP BY` Matters

Raw datasets often contain one row per event, transaction, user, prediction, or observation.

However, analysis usually requires summarized information.

| Raw data                    | Required result                  |
| --------------------------- | -------------------------------- |
| One row per transaction     | Revenue per category             |
| One row per order           | Spending per customer            |
| One row per prediction      | Accuracy per model               |
| One row per API request     | Average latency per endpoint     |
| One row per training sample | Number of samples per class      |
| One row per experiment      | Average metric per model version |

The basic workflow is:

```
Raw rows
    |
    v
Choose grouping columns
    |
    v
Create groups
    |
    v
Apply aggregate functions
    |
    v
Summary table
```

Example:

```
Individual sales transactions
    |
    v
Group rows by category
    |
    v
Calculate total revenue
    |
    v
Revenue summary by category
```

---

## 4. Basic Syntax

```
SELECT
    group_column,
    AGGREGATE_FUNCTION(value_column) AS result_name
FROM table_name
GROUP BY group_column;
```

Example:

```
SELECT
    category,
    SUM(revenue) AS total_revenue
FROM sales
GROUP BY category;
```

Possible result:

| category    | total_revenue |
| ----------- | ------------: |
| Electronics |         12500 |
| Clothing    |          8300 |
| Books       |          4200 |

Each output row represents one unique category.

---

## 5. Example Dataset

Assume that the `sales` table contains the following data:

| order_id | category    | region | quantity | unit_price | order_date |
| -------: | ----------- | ------ | -------: | ---------: | ---------- |
|        1 | Electronics | North  |        2 |        500 | 2026-01-05 |
|        2 | Clothing    | South  |        3 |         40 | 2026-01-06 |
|        3 | Electronics | North  |        1 |        800 | 2026-01-07 |
|        4 | Books       | South  |        5 |         20 | 2026-01-08 |
|        5 | Clothing    | North  |        4 |         35 | 2026-01-09 |
|        6 | Electronics | South  |        2 |        600 | 2026-01-10 |

Revenue for one row is calculated as:

```
Revenue = Quantity × Unit Price
```

In SQL:

```
quantity * unit_price
```

Example:

```
Revenue = 2 × 500 = 1000
```

---

## 6. Using Aggregate Functions

### 6.1 Count Rows in Each Group

```
SELECT
    category,
    COUNT(*) AS number_of_orders
FROM sales
GROUP BY category;
```

Result:

| category    | number_of_orders |
| ----------- | ---------------: |
| Books       |                1 |
| Clothing    |                2 |
| Electronics |                3 |

This query answers:

> How many orders belong to each category?

---

### 6.2 Calculate Total Quantity

```
SELECT
    category,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY category;
```

Possible result:

| category    | total_quantity |
| ----------- | -------------: |
| Books       |              5 |
| Clothing    |              7 |
| Electronics |              5 |

---

### 6.3 Calculate Average Price

```
SELECT
    category,
    AVG(unit_price) AS average_unit_price
FROM sales
GROUP BY category;
```

To round the result to two decimal places:

```
SELECT
    category,
    ROUND(AVG(unit_price), 2) AS average_unit_price
FROM sales
GROUP BY category;
```

The average formula is:

```
Group Average = Sum of Values in the Group / Number of Rows in the Group
```

Example:

```
Electronics Average Price
= (500 + 800 + 600) / 3
= 633.33
```

---

### 6.4 Find Minimum and Maximum Values

```
SELECT
    category,
    MIN(unit_price) AS minimum_price,
    MAX(unit_price) AS maximum_price
FROM sales
GROUP BY category;
```

Possible result:

| category    | minimum_price | maximum_price |
| ----------- | ------------: | ------------: |
| Books       |            20 |            20 |
| Clothing    |            35 |            40 |
| Electronics |           500 |           800 |

---

### 6.5 Calculate Revenue by Category

```
SELECT
    category,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY category;
```

The calculation is:

```
Group Revenue
= Sum of Quantity × Unit Price for Every Row in the Group
```

Example:

```
Electronics Revenue
= (2 × 500) + (1 × 800) + (2 × 600)
= 1000 + 800 + 1200
= 3000
```

---

## 7. Grouping by Multiple Columns

You can group data by more than one column.

```
SELECT
    region,
    category,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY
    region,
    category;
```

The query creates groups using unique combinations such as:

```
North + Electronics
North + Clothing
South + Electronics
South + Clothing
South + Books
```

Possible result:

| region | category    | total_revenue |
| ------ | ----------- | ------------: |
| North  | Clothing    |           140 |
| North  | Electronics |          1800 |
| South  | Books       |           100 |
| South  | Clothing    |           120 |
| South  | Electronics |          1200 |

Adding more grouping columns creates more detailed groups.

One grouping column:

```
GROUP BY category
```

Two grouping columns:

```
GROUP BY category, region
```

Three grouping columns:

```
GROUP BY category, region, order_date
```

---

## 8. `WHERE` and `HAVING`

Both `WHERE` and `HAVING` filter data, but they operate at different stages.

| Clause   | Filters           | Execution stage |
| -------- | ----------------- | --------------- |
| `WHERE`  | Individual rows   | Before grouping |
| `HAVING` | Aggregated groups | After grouping  |

---

### 8.1 Filter Rows with `WHERE`

```
SELECT
    category,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
WHERE region = 'North'
GROUP BY category;
```

Processing steps:

```
Read the sales table
    |
    v
Keep rows from the North region
    |
    v
Group remaining rows by category
    |
    v
Calculate total revenue
```

---

### 8.2 Filter Groups with `HAVING`

```
SELECT
    category,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY category
HAVING SUM(quantity * unit_price) > 500;
```

This query keeps only categories whose total revenue is greater than `500`.

---

### 8.3 Use `WHERE` and `HAVING` Together

```
SELECT
    category,
    COUNT(*) AS number_of_orders,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
WHERE order_date >= '2026-01-01'
GROUP BY category
HAVING COUNT(*) >= 2;
```

This query:

1. Keeps orders from January 1, 2026 onward.
2. Groups the remaining rows by category.
3. Counts orders in each category.
4. Keeps categories with at least two orders.

---

## 9. Logical SQL Execution Order

SQL queries are not logically executed from top to bottom.

The common logical order is:

```
1. FROM
2. JOIN
3. WHERE
4. GROUP BY
5. HAVING
6. SELECT
7. DISTINCT
8. ORDER BY
9. LIMIT
```

Example:

```
SELECT
    category,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
WHERE region = 'North'
GROUP BY category
HAVING SUM(quantity * unit_price) > 500
ORDER BY total_revenue DESC;
```

Logical processing:

```
FROM sales
    |
    v
WHERE region = 'North'
    |
    v
GROUP BY category
    |
    v
Calculate SUM
    |
    v
HAVING total revenue > 500
    |
    v
SELECT output columns
    |
    v
ORDER BY total revenue
```

---

## 10. Sorting Grouped Results

Use `ORDER BY` after `GROUP BY`.

```
SELECT
    category,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY category
ORDER BY total_revenue DESC;
```

`DESC` sorts from highest to lowest.

`ASC` sorts from lowest to highest.

To return only the top three categories:

```
SELECT
    category,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY category
ORDER BY total_revenue DESC
LIMIT 3;
```

---

## 11. Grouping by Date

Date grouping is useful for:

* Daily reports
* Weekly reports
* Monthly revenue
* User activity monitoring
* Model performance monitoring
* Time-series analysis

Database systems use different date functions.

### PostgreSQL

```
SELECT
    DATE_TRUNC('month', order_date) AS order_month,
    SUM(quantity * unit_price) AS monthly_revenue
FROM sales
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY order_month;
```

### MySQL

```
SELECT
    DATE_FORMAT(order_date, '%Y-%m') AS order_month,
    SUM(quantity * unit_price) AS monthly_revenue
FROM sales
GROUP BY DATE_FORMAT(order_date, '%Y-%m')
ORDER BY order_month;
```

### SQLite

```
SELECT
    STRFTIME('%Y-%m', order_date) AS order_month,
    SUM(quantity * unit_price) AS monthly_revenue
FROM sales
GROUP BY STRFTIME('%Y-%m', order_date)
ORDER BY order_month;
```

### Daily Grouping

```
SELECT
    order_date,
    COUNT(*) AS number_of_orders
FROM sales
GROUP BY order_date
ORDER BY order_date;
```

---

## 12. Conditional Aggregation

Conditional aggregation uses `CASE` inside an aggregate function.

It allows several metrics to be calculated in one query.

```
SELECT
    category,
    COUNT(*) AS total_orders,
    SUM(
        CASE
            WHEN region = 'North' THEN 1
            ELSE 0
        END
    ) AS north_orders,
    SUM(
        CASE
            WHEN region = 'South' THEN 1
            ELSE 0
        END
    ) AS south_orders
FROM sales
GROUP BY category;
```

Conditional revenue:

```
SELECT
    category,
    SUM(
        CASE
            WHEN region = 'North'
            THEN quantity * unit_price
            ELSE 0
        END
    ) AS north_revenue,
    SUM(
        CASE
            WHEN region = 'South'
            THEN quantity * unit_price
            ELSE 0
        END
    ) AS south_revenue
FROM sales
GROUP BY category;
```

This technique is useful for:

* Dashboard metrics
* Regional comparisons
* Class-level statistics
* Model monitoring
* Data-quality reports

---

## 13. Counting Distinct Values

`COUNT(DISTINCT column)` counts unique non-`NULL` values.

Assume the table contains a `customer_id` column.

```
SELECT
    category,
    COUNT(*) AS number_of_orders,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM sales
GROUP BY category;
```

The metrics answer different questions:

| Expression                    | Meaning                           |
| ----------------------------- | --------------------------------- |
| `COUNT(*)`                    | Number of rows                    |
| `COUNT(customer_id)`          | Number of non-`NULL` customer IDs |
| `COUNT(DISTINCT customer_id)` | Number of unique customers        |

---

## 14. Handling `NULL` Values

### 14.1 Grouping `NULL` Values

Rows whose grouping column is `NULL` are normally placed into one group.

```
SELECT
    region,
    COUNT(*) AS row_count
FROM sales
GROUP BY region;
```

Possible result:

| region | row_count |
| ------ | --------: |
| North  |         3 |
| South  |         3 |
| `NULL` |         2 |

Use `COALESCE()` to replace `NULL` with a readable value.

```
SELECT
    COALESCE(region, 'Unknown') AS region_name,
    COUNT(*) AS row_count
FROM sales
GROUP BY COALESCE(region, 'Unknown');
```

---

### 14.2 Aggregate Functions and `NULL`

Most aggregate functions ignore `NULL` values.

Assume this column:

| unit_price |
| ---------: |
|         10 |
|         20 |
|     `NULL` |

The results are:

```
COUNT(*) = 3

COUNT(unit_price) = 2

SUM(unit_price) = 30

AVG(unit_price) = 15
```

Important difference:

* `COUNT(*)` counts all rows.
* `COUNT(column)` counts only non-`NULL` values.

---

## 15. Rules for Selected Columns

In a grouped query, every selected column should normally be:

1. Included in `GROUP BY`, or
2. Used inside an aggregate function.

Correct:

```
SELECT
    category,
    region,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY
    category,
    region;
```

Incorrect:

```
SELECT
    category,
    region,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY category;
```

The second query is ambiguous because one category may appear in multiple regions.

The database cannot determine which region should represent the category.

Correct alternatives include:

```
SELECT
    category,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY category;
```

Or:

```
SELECT
    category,
    region,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY
    category,
    region;
```

---

## 16. `GROUP BY` Versus `DISTINCT`

`DISTINCT` removes duplicate rows from the result.

```
SELECT DISTINCT category
FROM sales;
```

Possible result:

| category    |
| ----------- |
| Electronics |
| Clothing    |
| Books       |

`GROUP BY` creates groups that can be aggregated.

```
SELECT
    category,
    COUNT(*) AS number_of_orders
FROM sales
GROUP BY category;
```

Use `DISTINCT` when you only need unique values.

Use `GROUP BY` when you need calculations for each group.

---

## 17. `GROUP BY` Versus Window Functions

`GROUP BY` reduces rows.

```
SELECT
    category,
    AVG(unit_price) AS category_average_price
FROM sales
GROUP BY category;
```

Possible output:

| category    | category_average_price |
| ----------- | ---------------------: |
| Books       |                     20 |
| Clothing    |                   37.5 |
| Electronics |                 633.33 |

A window function keeps the original rows.

```
SELECT
    order_id,
    category,
    unit_price,
    AVG(unit_price) OVER (
        PARTITION BY category
    ) AS category_average_price
FROM sales;
```

Comparison:

| Feature                          | `GROUP BY` | Window function |
| -------------------------------- | ---------- | --------------- |
| Keeps original rows              | No         | Yes             |
| Returns one row per group        | Yes        | No              |
| Suitable for summary tables      | Yes        | Sometimes       |
| Compares each row with its group | No         | Yes             |

Use a window function when you need both:

* Row-level data
* Group-level metrics

---

## 18. Data Science Examples

### 18.1 Check Class Distribution

```
SELECT
    target_class,
    COUNT(*) AS sample_count
FROM training_data
GROUP BY target_class
ORDER BY sample_count DESC;
```

Class proportion formula:

```
Class Proportion
= Number of Samples in the Class / Total Number of Samples
```

Example:

```
Class A Proportion
= 250 / 1000
= 0.25
= 25%
```

SQL implementation:

```
SELECT
    target_class,
    COUNT(*) AS sample_count,
    ROUND(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (),
        2
    ) AS sample_percentage
FROM training_data
GROUP BY target_class
ORDER BY sample_count DESC;
```

This query is useful for detecting class imbalance.

---

### 18.2 Compare Model Performance

Assume an `experiment_runs` table contains:

* `model_name`
* `accuracy`
* `precision`
* `recall`
* `f1_score`

Query:

```
SELECT
    model_name,
    COUNT(*) AS number_of_runs,
    ROUND(AVG(accuracy), 4) AS average_accuracy,
    ROUND(AVG(f1_score), 4) AS average_f1_score,
    MAX(f1_score) AS best_f1_score
FROM experiment_runs
GROUP BY model_name
ORDER BY average_f1_score DESC;
```

Average model score:

```
Average Score
= Sum of Scores from All Runs / Number of Runs
```

---

### 18.3 Monitor API Latency

```
SELECT
    endpoint,
    COUNT(*) AS request_count,
    ROUND(AVG(latency_ms), 2) AS average_latency_ms,
    MIN(latency_ms) AS minimum_latency_ms,
    MAX(latency_ms) AS maximum_latency_ms
FROM api_logs
GROUP BY endpoint
ORDER BY average_latency_ms DESC;
```

This query can identify slow endpoints.

---

### 18.4 Analyze Missing Values

```
SELECT
    data_source,
    COUNT(*) AS total_rows,
    SUM(
        CASE
            WHEN feature_value IS NULL THEN 1
            ELSE 0
        END
    ) AS missing_rows
FROM observations
GROUP BY data_source;
```

Missing-rate formula:

```
Missing Rate
= Number of Missing Rows / Total Number of Rows
```

SQL implementation:

```
SELECT
    data_source,
    COUNT(*) AS total_rows,
    SUM(
        CASE
            WHEN feature_value IS NULL THEN 1
            ELSE 0
        END
    ) AS missing_rows,
    ROUND(
        SUM(
            CASE
                WHEN feature_value IS NULL THEN 1.0
                ELSE 0.0
            END
        ) / COUNT(*),
        4
    ) AS missing_rate
FROM observations
GROUP BY data_source;
```

---

### 18.5 Create Customer Features

```
SELECT
    customer_id,
    COUNT(*) AS order_count,
    SUM(order_value) AS lifetime_value,
    AVG(order_value) AS average_order_value,
    MAX(order_date) AS latest_order_date
FROM customer_orders
GROUP BY customer_id;
```

Possible result:

| customer_id | order_count | lifetime_value | average_order_value | latest_order_date |
| ----------: | ----------: | -------------: | ------------------: | ----------------- |
|         101 |           8 |           2400 |                 300 | 2026-06-20        |
|         102 |           3 |            450 |                 150 | 2026-05-14        |

This summary table can be used for:

* Customer segmentation
* Churn prediction
* Customer lifetime value prediction
* Recommendation systems
* Marketing analysis

---

## 19. Complete Query Example

```
SELECT
    region,
    category,
    COUNT(*) AS number_of_orders,
    SUM(quantity) AS total_quantity,
    ROUND(AVG(unit_price), 2) AS average_unit_price,
    SUM(quantity * unit_price) AS total_revenue
FROM sales
WHERE order_date >= '2026-01-01'
GROUP BY
    region,
    category
HAVING SUM(quantity * unit_price) >= 100
ORDER BY
    total_revenue DESC;
```

This query:

1. Reads data from the `sales` table.
2. Keeps orders from January 1, 2026 onward.
3. Groups rows by region and category.
4. Counts the number of orders.
5. Calculates total quantity.
6. Calculates average unit price.
7. Calculates total revenue.
8. Removes groups with revenue below `100`.
9. Sorts groups from highest to lowest revenue.

---

## 20. Common Mistakes

### Mistake 1: Selecting a Non-Grouped Column

Incorrect:

```
SELECT
    category,
    order_date,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY category;
```

`order_date` is neither grouped nor aggregated.

Correct:

```
SELECT
    category,
    MAX(order_date) AS latest_order_date,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY category;
```

---

### Mistake 2: Using an Aggregate Function in `WHERE`

Incorrect:

```
SELECT
    category,
    SUM(quantity) AS total_quantity
FROM sales
WHERE SUM(quantity) > 5
GROUP BY category;
```

Correct:

```
SELECT
    category,
    SUM(quantity) AS total_quantity
FROM sales
GROUP BY category
HAVING SUM(quantity) > 5;
```

Use:

* `WHERE` for row conditions
* `HAVING` for aggregate conditions

---

### Mistake 3: Confusing `COUNT(*)` and `COUNT(column)`

```
COUNT(*)
```

Counts all rows.

```
COUNT(unit_price)
```

Counts only rows where `unit_price` is not `NULL`.

---

### Mistake 4: Grouping at the Wrong Level

One group per category:

```
GROUP BY category
```

One group per category and region:

```
GROUP BY category, region
```

One group per category, region, and date:

```
GROUP BY category, region, order_date
```

Too many grouping columns may produce overly detailed results.

---

### Mistake 5: Forgetting That Grouping Removes Detail

`GROUP BY` returns one row per group.

Individual transaction rows are no longer available in the result.

Use a window function when both row details and group metrics are required.

---

### Mistake 6: Ignoring `NULL` Groups

Missing values may appear as a separate group.

Use:

```
COALESCE(region, 'Unknown')
```

to create a readable group name.

---

### Mistake 7: Using Manual Spreadsheet Calculations

Manual aggregation is difficult to reproduce and maintain.

Prefer saved SQL queries that can be rerun whenever the source data changes.

---

## 21. Practical Exercise

Create a small sales table or import a CSV file with these columns:

```
order_id
customer_id
category
region
quantity
unit_price
order_date
```

Write SQL queries to answer these questions:

1. How many orders belong to each category?
2. What is the total quantity sold by category?
3. What is the total revenue for each region?
4. What is the average unit price for each category?
5. Which categories generated more than `1000` in revenue?
6. How many unique customers purchased from each category?
7. What is the monthly revenue trend?
8. Which region has the highest average unit price?
9. What percentage of all orders belongs to each category?
10. Which category has the highest total revenue?

Order value formula:

```
Order Value = Quantity × Unit Price
```

Category percentage formula:

```
Category Percentage
= Category Order Count / Total Order Count × 100
```

Example solution:

```
SELECT
    category,
    COUNT(*) AS order_count,
    ROUND(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (),
        2
    ) AS order_percentage
FROM sales
GROUP BY category
ORDER BY order_count DESC;
```

---

## 22. Mini Project

### SQL and Python Sales Analysis

Build a small reproducible analysis project.

Suggested project structure:

```
sql-group-by-project/
|
|-- data/
|   |-- sales_raw.csv
|   `-- sales_clean.csv
|
|-- sql/
|   |-- create_tables.sql
|   `-- group_by_analysis.sql
|
|-- notebooks/
|   `-- sales_analysis.ipynb
|
|-- reports/
|   `-- sales_summary.md
|
|-- charts/
|   |-- revenue_by_category.png
|   `-- monthly_revenue.png
|
`-- README.md
```

Suggested workflow:

```
Load raw CSV
    |
    v
Create SQL table
    |
    v
Validate and clean data
    |
    v
Run GROUP BY queries
    |
    v
Load results into Pandas
    |
    v
Create tables and charts
    |
    v
Write three insights
    |
    v
Document reproduction steps
```

Suggested outputs:

* Revenue by category
* Revenue by region
* Monthly revenue trend
* Number of unique customers
* Average order value
* Three written insights
* One recommendation
* Reproducible SQL scripts
* A documented notebook

---

## 23. Completion Checklist

* [ ] I can explain `GROUP BY` in one or two minutes.
* [ ] I can group rows using one column.
* [ ] I can group rows using multiple columns.
* [ ] I can use `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()`.
* [ ] I understand the difference between `WHERE` and `HAVING`.
* [ ] I can sort grouped results with `ORDER BY`.
* [ ] I understand how aggregate functions handle `NULL`.
* [ ] I can use conditional aggregation with `CASE`.
* [ ] I can calculate a percentage for each group.
* [ ] I know the difference between `GROUP BY` and `DISTINCT`.
* [ ] I know when to use a window function.
* [ ] I have saved at least one reproducible SQL query.
* [ ] I have written at least one insight from grouped data.
* [ ] I have documented at least one assumption or limitation.

---

## 24. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

`GROUP BY` supports:

* Exploratory data analysis
* Feature engineering
* Business intelligence
* Experiment analysis
* Model monitoring
* Data-quality reporting
* Dashboard development
* Reproducible research

---

## 25. Key Takeaways

* `GROUP BY` combines rows that share the same values.
* Aggregate functions calculate one result for each group.
* Every selected column should normally be grouped or aggregated.
* `WHERE` filters rows before grouping.
* `HAVING` filters groups after aggregation.
* Multiple grouping columns create more detailed groups.
* `COUNT(*)` and `COUNT(column)` handle `NULL` differently.
* Conditional aggregation calculates multiple metrics in one query.
* `DISTINCT` returns unique values but does not calculate aggregates.
* Window functions preserve rows, while `GROUP BY` reduces rows.
* Saved SQL queries make analysis reproducible.

---

## 26. Final Summary

`GROUP BY` is one of the most important SQL tools for AI and Data Science.

It transforms detailed rows into useful summary tables for:

* Analysis
* Feature engineering
* Experiment comparison
* Data validation
* Model monitoring
* Visualization
* Reporting

A reusable query pattern is:

```
SELECT
    grouping_column,
    AGGREGATE_FUNCTION(value_column) AS metric
FROM table_name
WHERE row_condition
GROUP BY grouping_column
HAVING aggregate_condition
ORDER BY metric DESC;
```

Do not stop after reading the syntax.

Apply `GROUP BY` to a real dataset and create at least one:

* SQL query
* Summary table
* Notebook
* Chart
* Dashboard
* Report
* Portfolio artifact
