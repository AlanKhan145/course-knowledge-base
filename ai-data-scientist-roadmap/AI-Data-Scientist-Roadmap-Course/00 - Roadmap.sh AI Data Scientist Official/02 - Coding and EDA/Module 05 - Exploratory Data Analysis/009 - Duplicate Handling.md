# 009 - Duplicate Handling

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Data Cleaning
**Roadmap Source:** Exploratory Data Analysis / Data Cleaning
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 009
**Suggested Duration:** 20 minutes

---

## 1. Summary

This lesson explains **Duplicate Handling** in the context of AI and Data Science.

Duplicate records are rows or entities that appear more than once in a dataset. Some duplicates are accidental and should be removed, while others represent valid repeated events and must be preserved.

After this lesson, you should be able to:

* Detect exact and partial duplicates.
* Distinguish invalid duplicates from legitimate repeated records.
* Select an appropriate deduplication strategy.
* Document duplicate-handling decisions.
* Build a reproducible duplicate-cleaning workflow.

Duplicate handling is not simply calling `drop_duplicates()`. It requires understanding:

* What one row represents.
* Which columns define a unique entity or event.
* Why duplicate records exist.
* Whether removing them would destroy valid information.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain duplicate handling in your own words.
* Identify where duplicate handling belongs in an EDA workflow.
* Detect exact duplicates using Python or SQL.
* Detect duplicates based on business keys.
* Separate valid repeated events from data-quality problems.
* Apply a reproducible deduplication rule.
* Measure and report the impact of duplicate removal.
* Record assumptions, caveats, and unresolved cases.

---

## 3. What Is a Duplicate?

A duplicate is a record that repeats information already represented elsewhere in the dataset.

Consider the following table:

| customer_id | name  | email                                         | city    |
| ----------: | ----- | --------------------------------------------- | ------- |
|         101 | Alice | [alice@example.com](mailto:alice@example.com) | Hanoi   |
|         102 | Bob   | [bob@example.com](mailto:bob@example.com)     | Da Nang |
|         101 | Alice | [alice@example.com](mailto:alice@example.com) | Hanoi   |

The first and third rows describe the same customer and contain identical values. They are **exact duplicates**.

However, duplicate detection becomes more difficult when values differ slightly:

| customer_id | name         | email                                         | city   |
| ----------: | ------------ | --------------------------------------------- | ------ |
|         101 | Alice Nguyen | [alice@example.com](mailto:alice@example.com) | Hanoi  |
|         101 | Alice N.     | [alice@example.com](mailto:alice@example.com) | Ha Noi |

These records may still represent the same person, even though the rows are not identical.

---

## 4. Why Duplicate Handling Matters

Duplicates can distort analysis and machine-learning results.

### 4.1 Biased Statistics

Repeated rows can overrepresent certain customers, products, or events.

For example, if a high-value transaction is duplicated, the calculated revenue will be too high.

### 4.2 Incorrect Counts

Duplicates can inflate:

* Number of customers.
* Number of orders.
* Number of website visits.
* Number of positive cases.
* Number of support tickets.

### 4.3 Biased Model Training

If some observations appear multiple times, the model may give those observations more influence during training.

### 4.4 Data Leakage

If duplicate or near-duplicate records appear in both the training and test sets, evaluation results may become unrealistically high.

### 4.5 Unreliable Business Decisions

Duplicate records may lead to incorrect conclusions, such as:

* Overestimating customer demand.
* Sending the same promotion multiple times.
* Reporting incorrect revenue.
* Miscalculating churn rates.
* Creating duplicate customer profiles.

---

## 5. Duplicate Types

Duplicate records can be divided into several categories.

### 5.1 Exact Duplicates

All column values are identical.

| order_id | customer_id | amount |
| -------: | ----------: | -----: |
|     5001 |         101 |    120 |
|     5001 |         101 |    120 |

These duplicates are usually easy to detect.

---

### 5.2 Key-Based Duplicates

Rows share the same unique identifier but contain different values.

| customer_id | name         | city             |
| ----------: | ------------ | ---------------- |
|         101 | Alice Nguyen | Hanoi            |
|         101 | Alice Nguyen | Ho Chi Minh City |

The duplicate key may indicate:

* A data-entry problem.
* A customer profile update.
* Multiple source systems.
* An incorrectly defined primary key.

---

### 5.3 Partial Duplicates

Some important columns are identical, while other columns differ.

| name         | email                                         | signup_date |
| ------------ | --------------------------------------------- | ----------- |
| Alice Nguyen | [alice@example.com](mailto:alice@example.com) | 2026-01-10  |
| Alice Nguyen | [alice@example.com](mailto:alice@example.com) | 2026-01-11  |

The correct decision depends on whether the date difference is valid.

---

### 5.4 Near Duplicates

Records represent the same entity but contain formatting differences, spelling errors, or inconsistent values.

| name          | phone         |
| ------------- | ------------- |
| Tran An Khanh | 0912 345 678  |
| Trần An Khánh | +84 912345678 |

Near duplicates often require:

* Text normalization.
* Phone-number standardization.
* Address normalization.
* Fuzzy matching.
* Entity resolution.

---

### 5.5 Legitimate Repeated Events

Not every repeated value is an error.

| customer_id | product_id | purchase_date |
| ----------: | ---------: | ------------- |
|         101 |         55 | 2026-03-01    |
|         101 |         55 | 2026-04-01    |

The same customer may purchase the same product multiple times. These are valid repeated events, not duplicates.

---

## 6. Duplicate Handling Workflow

A reliable duplicate-handling workflow follows several stages.

```text
Understand row meaning
        |
        v
Define uniqueness rules
        |
        v
Detect exact duplicates
        |
        v
Detect key-based duplicates
        |
        v
Investigate duplicate causes
        |
        v
Choose a handling strategy
        |
        v
Validate the cleaned dataset
        |
        v
Document rules and results
```

A broader EDA workflow may look like this:

```text
Business question
      |
      v
Dataset schema
      |
      v
Data-quality checks
      |
      +--> Missing values
      |
      +--> Duplicates
      |
      +--> Invalid values
      |
      v
Distributions and relationships
      |
      v
Insights and recommendations
```

---

## 7. Step 1: Understand What One Row Represents

Before removing duplicates, define the dataset's **unit of observation**.

Examples:

| Dataset             | One Row Represents               |
| ------------------- | -------------------------------- |
| Customer table      | One customer                     |
| Order table         | One order                        |
| Order-item table    | One product in one order         |
| Website-event table | One user event                   |
| Sensor table        | One measurement at one timestamp |
| Employee table      | One employee                     |
| Medical visit table | One patient visit                |

This definition determines which columns should be unique.

For example:

* A customer table may require `customer_id` to be unique.
* An order table may require `order_id` to be unique.
* An event table may use a combination of `user_id`, `event_type`, and `event_timestamp`.
* An order-item table may use `order_id` and `product_id`.

---

## 8. Step 2: Define the Uniqueness Rule

A **business key** is a column or combination of columns that should uniquely identify a record.

Examples:

```text
Customer:
customer_id

Order:
order_id

Order item:
order_id + product_id + line_number

Sensor measurement:
sensor_id + measurement_timestamp

Daily customer snapshot:
customer_id + snapshot_date
```

A uniqueness rule should come from the business meaning of the dataset, not only from technical convenience.

---

## 9. Detecting Exact Duplicates with Pandas

Consider the following dataset:

```python
import pandas as pd

df = pd.DataFrame(
    {
        "customer_id": [101, 102, 101, 103, 102],
        "name": [
            "Alice",
            "Bob",
            "Alice",
            "Carol",
            "Bob",
        ],
        "city": [
            "Hanoi",
            "Da Nang",
            "Hanoi",
            "Hue",
            "Da Nang",
        ],
    }
)

print(df)
```

Output:

```text
   customer_id   name     city
0          101  Alice    Hanoi
1          102    Bob  Da Nang
2          101  Alice    Hanoi
3          103  Carol      Hue
4          102    Bob  Da Nang
```

### 9.1 Identify Exact Duplicate Rows

```python
duplicate_mask = df.duplicated()

print(duplicate_mask)
```

Output:

```text
0    False
1    False
2     True
3    False
4     True
dtype: bool
```

By default, Pandas marks the second and later occurrences as duplicates.

---

### 9.2 Display Duplicate Rows

```python
duplicate_rows = df[df.duplicated()]

print(duplicate_rows)
```

---

### 9.3 Display All Members of Duplicate Groups

Use `keep=False` to mark every row in each duplicate group.

```python
all_duplicate_rows = df[df.duplicated(keep=False)]

print(all_duplicate_rows)
```

This is useful when investigating which record should be preserved.

---

### 9.4 Count Exact Duplicates

```python
duplicate_count = df.duplicated().sum()

print(f"Number of duplicate rows: {duplicate_count}")
```

---

### 9.5 Calculate the Duplicate Rate

```python
duplicate_rate = df.duplicated().mean() * 100

print(f"Duplicate rate: {duplicate_rate:.2f}%")
```

The duplicate rate can be defined as:

```text
Duplicate rate = Duplicate row count / Total row count
```

For reporting:

```text
Duplicate percentage = Duplicate rate x 100
```

---

## 10. Detecting Duplicates Based on Selected Columns

A complete row may not be identical, but important business columns may be duplicated.

```python
df = pd.DataFrame(
    {
        "customer_id": [101, 101, 102, 103],
        "name": [
            "Alice Nguyen",
            "Alice N.",
            "Bob Tran",
            "Carol Le",
        ],
        "email": [
            "alice@example.com",
            "alice@example.com",
            "bob@example.com",
            "carol@example.com",
        ],
        "updated_at": [
            "2026-01-01",
            "2026-03-01",
            "2026-02-01",
            "2026-02-10",
        ],
    }
)
```

### 10.1 Detect Duplicate Customer IDs

```python
duplicate_customer_ids = df[
    df.duplicated(subset=["customer_id"], keep=False)
]

print(duplicate_customer_ids)
```

---

### 10.2 Detect Duplicate Emails

```python
duplicate_emails = df[
    df.duplicated(subset=["email"], keep=False)
]

print(duplicate_emails)
```

---

### 10.3 Detect Duplicates Using Multiple Columns

```python
duplicate_customers = df[
    df.duplicated(
        subset=["name", "email"],
        keep=False,
    )
]

print(duplicate_customers)
```

The selected columns should reflect the business definition of uniqueness.

---

## 11. Inspecting Duplicate Groups

Group duplicate records before deciding how to handle them.

```python
duplicate_groups = (
    df.groupby("customer_id")
    .filter(lambda group: len(group) > 1)
    .sort_values("customer_id")
)

print(duplicate_groups)
```

You can also count how many times each key appears:

```python
customer_counts = (
    df["customer_id"]
    .value_counts()
    .rename_axis("customer_id")
    .reset_index(name="record_count")
)

print(customer_counts)
```

Display only duplicated keys:

```python
duplicated_keys = customer_counts[
    customer_counts["record_count"] > 1
]

print(duplicated_keys)
```

---

## 12. Removing Exact Duplicates

Use `drop_duplicates()` to remove duplicate rows.

```python
clean_df = df.drop_duplicates()
```

By default, Pandas keeps the first occurrence.

---

### 12.1 Keep the First Occurrence

```python
clean_df = df.drop_duplicates(keep="first")
```

Use this when:

* The first record is considered the original.
* The data is ordered from oldest to newest.
* Later rows are known accidental copies.

---

### 12.2 Keep the Last Occurrence

```python
clean_df = df.drop_duplicates(keep="last")
```

Use this when:

* The last record contains the latest update.
* The data is ordered by update time.
* Newer records should replace older records.

---

### 12.3 Remove All Duplicated Records

```python
clean_df = df.drop_duplicates(keep=False)
```

This removes every row that belongs to a duplicate group.

Use this carefully because valid information may be lost.

---

## 13. Keeping the Most Recent Record

Suppose a customer appears multiple times because the profile was updated.

```python
df["updated_at"] = pd.to_datetime(df["updated_at"])
```

Sort the records and keep the most recent one:

```python
clean_df = (
    df.sort_values("updated_at")
    .drop_duplicates(
        subset=["customer_id"],
        keep="last",
    )
)
```

This strategy means:

```text
For each customer_id:
    preserve the record with the latest updated_at value
```

A more explicit approach is:

```python
clean_df = df.loc[
    df.groupby("customer_id")["updated_at"].idxmax()
]
```

---

## 14. Aggregating Duplicate Records

Sometimes duplicate rows contain complementary information and should be merged rather than deleted.

Example data:

| customer_id | purchase_amount | support_calls |
| ----------: | --------------: | ------------: |
|         101 |             100 |             1 |
|         101 |             250 |             2 |
|         102 |              80 |             0 |

If each row represents a transaction, aggregation may be appropriate:

```python
customer_summary = (
    df.groupby("customer_id", as_index=False)
    .agg(
        total_purchase_amount=("purchase_amount", "sum"),
        total_support_calls=("support_calls", "sum"),
        record_count=("customer_id", "size"),
    )
)
```

The correct aggregation depends on the variable:

| Variable Type | Possible Aggregation         |
| ------------- | ---------------------------- |
| Revenue       | Sum                          |
| Age           | Latest value or median       |
| Timestamp     | Minimum or maximum           |
| Category      | Most recent or most frequent |
| Boolean flag  | Maximum or logical OR        |
| Customer name | Most recent non-null value   |

---

## 15. Standardizing Values Before Duplicate Detection

Formatting differences can hide duplicate entities.

Example:

```text
Alice@example.com
alice@example.com
 alice@example.com
```

These values should probably be treated as the same email address.

### 15.1 Normalize Text

```python
df["email_normalized"] = (
    df["email"]
    .str.strip()
    .str.lower()
)
```

Normalize names:

```python
df["name_normalized"] = (
    df["name"]
    .str.strip()
    .str.lower()
    .str.replace(r"\s+", " ", regex=True)
)
```

---

### 15.2 Normalize Phone Numbers

```python
df["phone_normalized"] = (
    df["phone"]
    .astype("string")
    .str.replace(r"\D", "", regex=True)
)
```

This removes spaces, hyphens, parentheses, and other non-digit characters.

---

### 15.3 Normalize Dates

```python
df["signup_date"] = pd.to_datetime(
    df["signup_date"],
    errors="coerce",
)
```

---

### 15.4 Detect Duplicates After Normalization

```python
duplicate_contacts = df[
    df.duplicated(
        subset=[
            "name_normalized",
            "email_normalized",
        ],
        keep=False,
    )
]
```

Always preserve the original columns so that normalization can be audited.

---

## 16. Near-Duplicate Detection

Exact matching may not detect records such as:

```text
Nguyen Van An
Nguyễn Văn An
Nguyen V. An
NGUYEN VAN AN
```

Near-duplicate detection may involve:

* Edit distance.
* Token similarity.
* Phonetic matching.
* Address normalization.
* Email matching.
* Phone-number matching.
* Date-of-birth comparison.
* Entity-resolution models.

A conceptual matching rule could be:

```text
Possible duplicate when:

normalized phone is identical

OR

normalized email is identical

OR

name similarity is high
AND date of birth is identical
```

Near-duplicate matching should usually produce a review list rather than deleting records automatically.

---

## 17. Duplicate Detection in SQL

### 17.1 Detect Exact Duplicate Groups

```sql
SELECT
    customer_id,
    name,
    email,
    COUNT(*) AS record_count
FROM customers
GROUP BY
    customer_id,
    name,
    email
HAVING COUNT(*) > 1;
```

---

### 17.2 Detect Duplicate Business Keys

```sql
SELECT
    customer_id,
    COUNT(*) AS record_count
FROM customers
GROUP BY customer_id
HAVING COUNT(*) > 1;
```

---

### 17.3 Inspect All Duplicate Records

```sql
SELECT *
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM customers
    GROUP BY customer_id
    HAVING COUNT(*) > 1
)
ORDER BY customer_id;
```

---

### 17.4 Keep the Most Recent Record

```sql
WITH ranked_customers AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY updated_at DESC
        ) AS row_rank
    FROM customers
)
SELECT *
FROM ranked_customers
WHERE row_rank = 1;
```

This query creates a ranking inside each customer group and preserves the newest record.

---

## 18. Duplicate Handling Strategies

There is no single correct strategy for every dataset.

### Strategy 1: Remove Exact Copies

Use when rows are completely identical and repeated because of ingestion or export errors.

```python
df = df.drop_duplicates()
```

---

### Strategy 2: Keep the First Record

Use when the earliest record is authoritative.

```python
df = df.drop_duplicates(
    subset=["customer_id"],
    keep="first",
)
```

---

### Strategy 3: Keep the Latest Record

Use when the newest record contains the latest state.

```python
df = (
    df.sort_values("updated_at")
    .drop_duplicates(
        subset=["customer_id"],
        keep="last",
    )
)
```

---

### Strategy 4: Aggregate Records

Use when repeated rows are valid events that should be summarized.

```python
summary = (
    df.groupby("customer_id", as_index=False)
    .agg(total_amount=("amount", "sum"))
)
```

---

### Strategy 5: Merge Complementary Values

Use when different rows contain different non-null values.

Example:

| customer_id | phone      | email                                         |
| ----------: | ---------- | --------------------------------------------- |
|         101 | 0912345678 | null                                          |
|         101 | null       | [alice@example.com](mailto:alice@example.com) |

The records can be merged into:

| customer_id | phone      | email                                         |
| ----------: | ---------- | --------------------------------------------- |
|         101 | 0912345678 | [alice@example.com](mailto:alice@example.com) |

---

### Strategy 6: Flag for Manual Review

Use when duplicate cases are ambiguous or high risk.

```python
df["possible_duplicate"] = df.duplicated(
    subset=["email_normalized"],
    keep=False,
)
```

This is safer than automatic deletion in sensitive datasets.

---

### Strategy 7: Preserve Repeated Events

Use when repeated records represent legitimate behavior, such as:

* Multiple purchases.
* Multiple page views.
* Repeated medical visits.
* Repeated sensor measurements.
* Recurring subscription payments.

In these cases, do not deduplicate without additional evidence.

---

## 19. Choosing a Duplicate Strategy

Use the following decision process:

```text
Are all column values identical?
        |
   +----+----+
   |         |
  Yes        No
   |         |
Investigate  Do rows share a business key?
ingestion         |
error        +----+----+
   |         |         |
Remove       Yes        No
exact         |         |
copies   Is one record  Are they near duplicates?
         more reliable?       |
              |          +----+----+
         +----+----+     |         |
         |         |    Yes        No
        Yes        No     |         |
         |         |   Normalize    Preserve
Keep best   Merge,       and review
record      aggregate,
            or review
```

---

## 20. Duplicate Handling and Machine Learning

Duplicate records can affect machine-learning workflows in several ways.

### 20.1 Biased Training Distribution

Repeated records increase the effective weight of certain observations.

### 20.2 Train-Test Leakage

A duplicate observation may appear in both training and test sets.

Example:

```text
Original record -> training set
Duplicate record -> test set
```

The model may appear highly accurate because it has already seen nearly identical data.

---

### 20.3 Incorrect Class Distribution

If duplicates occur more frequently in one target class, class balance may become misleading.

```python
df.groupby("target").size()
```

Compare the class distribution before and after deduplication:

```python
before_distribution = df["target"].value_counts(
    normalize=True
)

clean_df = df.drop_duplicates()

after_distribution = clean_df["target"].value_counts(
    normalize=True
)
```

---

### 20.4 Group-Aware Data Splitting

When multiple rows belong to the same customer, patient, device, or account, use a group-aware split.

```python
from sklearn.model_selection import GroupShuffleSplit

splitter = GroupShuffleSplit(
    n_splits=1,
    test_size=0.2,
    random_state=42,
)

train_index, test_index = next(
    splitter.split(
        df,
        y=df["target"],
        groups=df["customer_id"],
    )
)

train_df = df.iloc[train_index]
test_df = df.iloc[test_index]
```

This prevents the same entity from appearing in both datasets.

---

## 21. Measuring the Impact of Deduplication

Always compare the dataset before and after cleaning.

```python
rows_before = len(df)

clean_df = df.drop_duplicates()

rows_after = len(clean_df)
rows_removed = rows_before - rows_after

removal_rate = (
    rows_removed / rows_before * 100
    if rows_before > 0
    else 0
)
```

Report the result:

```python
print(f"Rows before: {rows_before}")
print(f"Rows after: {rows_after}")
print(f"Rows removed: {rows_removed}")
print(f"Removal rate: {removal_rate:.2f}%")
```

A cleaning report could contain:

| Metric                      |  Value |
| --------------------------- | -----: |
| Rows before cleaning        | 10,000 |
| Exact duplicates            |    120 |
| Key-based duplicate records |     85 |
| Rows removed                |    150 |
| Rows merged                 |     35 |
| Rows requiring review       |     20 |
| Final row count             |  9,850 |

---

## 22. Reusable Duplicate-Audit Function

```python
import pandas as pd


def duplicate_report(
    df: pd.DataFrame,
    subset: list[str] | None = None,
) -> dict[str, float | int]:
    """
    Return duplicate statistics for a DataFrame.

    Parameters
    ----------
    df:
        Input DataFrame.

    subset:
        Columns used to define duplicates.
        If None, all columns are used.
    """

    total_rows = len(df)

    duplicate_mask = df.duplicated(
        subset=subset,
        keep="first",
    )

    duplicate_rows = int(duplicate_mask.sum())

    duplicate_rate = (
        duplicate_rows / total_rows * 100
        if total_rows > 0
        else 0.0
    )

    return {
        "total_rows": total_rows,
        "duplicate_rows": duplicate_rows,
        "unique_rows": total_rows - duplicate_rows,
        "duplicate_rate_percent": round(
            duplicate_rate,
            2,
        ),
    }
```

Example usage:

```python
exact_report = duplicate_report(df)

customer_report = duplicate_report(
    df,
    subset=["customer_id"],
)

print(exact_report)
print(customer_report)
```

---

## 23. Reproducible Deduplication Function

```python
import pandas as pd


def keep_latest_record(
    df: pd.DataFrame,
    key_columns: list[str],
    timestamp_column: str,
) -> pd.DataFrame:
    """
    Keep the most recent record for each business key.
    """

    required_columns = key_columns + [timestamp_column]

    missing_columns = [
        column
        for column in required_columns
        if column not in df.columns
    ]

    if missing_columns:
        raise ValueError(
            f"Missing required columns: {missing_columns}"
        )

    result = df.copy()

    result[timestamp_column] = pd.to_datetime(
        result[timestamp_column],
        errors="coerce",
    )

    result = (
        result.sort_values(timestamp_column)
        .drop_duplicates(
            subset=key_columns,
            keep="last",
        )
        .reset_index(drop=True)
    )

    return result
```

Example:

```python
clean_df = keep_latest_record(
    df=df,
    key_columns=["customer_id"],
    timestamp_column="updated_at",
)
```

---

## 24. Validation After Duplicate Handling

Do not assume that deduplication was successful. Validate the result.

### 24.1 Verify Key Uniqueness

```python
assert not clean_df["customer_id"].duplicated().any()
```

---

### 24.2 Verify Row Counts

```python
assert len(clean_df) <= len(df)
```

---

### 24.3 Check That Important Totals Remain Reasonable

```python
revenue_before = df["amount"].sum()
revenue_after = clean_df["amount"].sum()

print(f"Revenue before: {revenue_before}")
print(f"Revenue after: {revenue_after}")
```

A large change may indicate that valid events were incorrectly removed.

---

### 24.4 Compare Target Distribution

```python
comparison = pd.concat(
    {
        "before": df["target"].value_counts(
            normalize=True
        ),
        "after": clean_df["target"].value_counts(
            normalize=True
        ),
    },
    axis=1,
)

print(comparison)
```

---

### 24.5 Check Remaining Duplicates

```python
remaining_duplicates = clean_df.duplicated(
    subset=["customer_id"]
).sum()

print(
    f"Remaining duplicated customer IDs: "
    f"{remaining_duplicates}"
)
```

---

## 25. Common Mistakes

### 25.1 Removing Duplicates Without Understanding the Row Meaning

Repeated customer IDs may be valid in a transaction table.

**Better approach:** Define the unit of observation before deduplicating.

---

### 25.2 Using Every Column as the Duplicate Key

A small difference in timestamp or status can hide duplicate entities.

**Better approach:** Define business-key columns explicitly.

---

### 25.3 Using Only One Column as the Key

A name alone may not uniquely identify a person.

**Better approach:** Use a reliable identifier or a combination of fields.

---

### 25.4 Keeping the First Record Without Sorting

The first row in the current file may not be the oldest or most reliable record.

**Better approach:** Sort by a timestamp or data-quality score before deduplication.

---

### 25.5 Deleting Near Duplicates Automatically

Similar names do not always refer to the same person.

**Better approach:** Create a review queue for uncertain matches.

---

### 25.6 Deduplicating After Train-Test Splitting

Duplicates may already have leaked across the datasets.

**Better approach:** Clean or group the data before splitting.

---

### 25.7 Modifying the Raw Dataset

Overwriting raw data makes the cleaning process difficult to audit.

**Better approach:** Preserve raw data and create a cleaned output file.

---

### 25.8 Reporting Only the Final Row Count

The reader cannot understand what was changed.

**Better approach:** Report the number of exact duplicates, key-based duplicates, removed rows, merged rows, and review cases.

---

## 26. Practical Exercise

Use a small CSV dataset containing customer or transaction data.

### Task 1: Load and Inspect the Dataset

```python
import pandas as pd

df = pd.read_csv("customers.csv")

print(df.head())
print(df.shape)
print(df.info())
```

---

### Task 2: Find Exact Duplicates

```python
exact_duplicates = df[df.duplicated(keep=False)]

print(exact_duplicates)
```

Answer:

* How many exact duplicate rows exist?
* What percentage of the dataset do they represent?
* Are they likely ingestion errors?

---

### Task 3: Define a Business Key

Choose columns that should uniquely identify one record.

Examples:

```python
business_key = ["customer_id"]
```

or:

```python
business_key = [
    "email",
    "phone",
]
```

Explain why the selected columns define uniqueness.

---

### Task 4: Inspect Key-Based Duplicates

```python
key_duplicates = df[
    df.duplicated(
        subset=business_key,
        keep=False,
    )
].sort_values(business_key)

print(key_duplicates)
```

Classify duplicate groups as:

* Accidental copy.
* Updated record.
* Valid repeated event.
* Possible near duplicate.
* Unresolved case.

---

### Task 5: Apply a Handling Rule

Possible rule:

```text
Remove exact duplicate rows.

For repeated customer IDs, preserve the record with the latest
updated_at value.

Do not remove repeated transaction records when transaction_id
is different.
```

Implement the rule:

```python
clean_df = df.drop_duplicates()

clean_df["updated_at"] = pd.to_datetime(
    clean_df["updated_at"],
    errors="coerce",
)

clean_df = (
    clean_df.sort_values("updated_at")
    .drop_duplicates(
        subset=["customer_id"],
        keep="last",
    )
)
```

---

### Task 6: Validate the Result

```python
assert not clean_df.duplicated().any()

assert not clean_df.duplicated(
    subset=["customer_id"]
).any()
```

---

### Task 7: Write Three Insights

Example insights:

1. Exact duplicates represented 2.4% of the original dataset.
2. Most duplicated customer IDs came from profile updates rather than repeated ingestion.
3. Deduplication reduced the apparent customer churn rate from 18.7% to 17.9%.

Each insight should include:

* Evidence.
* Business meaning.
* Caveat.
* Recommended action.

---

## 27. Mini Project Application: Customer Churn EDA

Apply duplicate handling to a customer churn dataset.

### Suggested Workflow

```text
Load raw churn data
        |
        v
Inspect schema and row meaning
        |
        v
Check exact duplicates
        |
        v
Check duplicated customer IDs
        |
        v
Normalize email and phone values
        |
        v
Keep the latest customer snapshot
        |
        v
Validate target distribution
        |
        v
Continue churn analysis
```

### Questions to Investigate

* Does each customer have only one row?
* Are duplicated customer records identical?
* Do duplicate records have different churn labels?
* Are some customers present in both training and test data?
* Does deduplication change the churn rate?
* Which source system produces the most duplicates?

### Suggested Deliverables

* `duplicate_audit.ipynb`
* `clean_customers.csv`
* `duplicate_cases.csv`
* `cleaning_report.md`
* Before-and-after summary table
* Churn distribution comparison
* Data-cleaning decision log

---

## 28. Example Cleaning Decision Log

```text
Rule ID: DUP-001

Problem:
Exact duplicate rows were found after combining monthly exports.

Detection:
All columns were compared using DataFrame.duplicated().

Decision:
Keep the first occurrence and remove later identical copies.

Reason:
The rows were introduced by repeated file ingestion.

Impact:
120 of 10,000 rows were removed.

Validation:
Customer count and total revenue were compared before and after
cleaning.

Caveat:
Records with the same customer_id but different updated_at values
were not treated as exact duplicates.
```

A decision log makes the cleaning process reproducible and auditable.

---

## 29. Completion Checklist

* [ ] I can explain duplicate handling in one or two minutes.
* [ ] I understand the difference between exact, partial, and near duplicates.
* [ ] I can define the unit of observation for a dataset.
* [ ] I can define a business key.
* [ ] I can detect duplicates using Pandas.
* [ ] I can detect duplicate keys using SQL.
* [ ] I can decide whether to remove, merge, aggregate, preserve, or review duplicate records.
* [ ] I can keep the latest record using a timestamp.
* [ ] I can calculate and report the duplicate rate.
* [ ] I can validate the dataset after deduplication.
* [ ] I understand how duplicates can create train-test leakage.
* [ ] I preserve raw data and document cleaning rules.
* [ ] I have created a notebook, query, chart, report, or reusable function for this lesson.
* [ ] I have recorded at least one caveat, assumption, or unresolved duplicate case.

---

## 30. Related Outcome

Understand, clean, visualize, and explain datasets using business-oriented insights.

Duplicate handling contributes to this outcome by ensuring that:

* Counts represent real entities or events.
* Statistical summaries are not distorted.
* Machine-learning evaluation is trustworthy.
* Business recommendations are based on reliable data.

---

## 31. Related Project

**Mini Project:** Customer Churn EDA

Suggested project components:

* Schema inspection.
* Missing-value analysis.
* Duplicate detection.
* Customer-key validation.
* Churn distribution analysis.
* Feature relationship analysis.
* Cleaning decision log.
* Insight report.
* Reproducible notebook.

---

## 32. Key Takeaways

* A duplicate is defined by business meaning, not only by identical rows.
* Always determine what one row represents before removing records.
* Exact duplicates, key-based duplicates, near duplicates, and repeated events require different strategies.
* Normalize values before detecting near duplicates.
* Sort records before keeping the first or last occurrence.
* Repeated transactions are not automatically duplicate errors.
* Duplicate records can bias statistics, model training, and evaluation.
* Deduplication should occur before train-test splitting.
* Always validate important metrics before and after cleaning.
* Preserve raw data and document every deduplication rule.

---

## 33. Conclusion

**Duplicate Handling** is an essential step in Exploratory Data Analysis and data cleaning.

The main objective is not to remove every repeated value. The objective is to determine whether repeated records represent:

* Accidental copies.
* Updated entity states.
* Legitimate repeated events.
* Conflicting records.
* Possible entity matches.

A strong duplicate-handling process produces more than a cleaned dataset. It should also produce:

* A duplicate audit.
* A clear uniqueness rule.
* A reproducible cleaning script.
* A validation report.
* Documented assumptions and caveats.

Turn this lesson into a practical portfolio artifact such as a notebook, SQL query, data-quality report, reusable cleaning function, dashboard metric, or automated validation pipeline.
