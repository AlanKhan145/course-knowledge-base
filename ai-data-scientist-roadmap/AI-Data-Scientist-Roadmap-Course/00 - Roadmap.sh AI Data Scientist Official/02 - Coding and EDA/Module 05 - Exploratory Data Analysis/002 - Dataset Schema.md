# 002 — Dataset Schema

**Course:** 02 — Coding and EDA
**Module:** Module 05 — Exploratory Data Analysis
**Content Group:** Data Understanding
**Roadmap Source:** Exploratory Data Analysis / Data Understanding
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 002
**Suggested Duration:** 20 minutes

---

## 1. Overview

A **dataset schema** describes the structure and organization of a dataset.

It explains:

* What each row represents
* What each column means
* Which data type each column uses
* Which column is the target variable
* Which columns identify entities
* Which values are allowed
* Which fields may contain missing values
* How multiple tables or datasets are related

Understanding the schema is one of the first steps in Exploratory Data Analysis because it prevents incorrect assumptions about the data.

A well-defined schema helps data scientists answer questions such as:

* What is the unit of analysis?
* Which columns are numerical, categorical, temporal, or textual?
* Which fields can be used as model features?
* Which field represents the prediction target?
* Are there duplicated identifiers?
* Are data types consistent with the meaning of the columns?
* Are there columns that may cause data leakage?

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain a dataset schema in your own words.
* Identify the unit of analysis of a dataset.
* Distinguish between identifiers, features, targets, and metadata.
* Inspect column names, data types, missing values, and constraints.
* Detect schema-related data quality problems.
* Create a small schema document or data dictionary.
* Connect schema understanding to EDA, feature engineering, modeling, and deployment.

---

## 3. What Is a Dataset Schema?

A dataset schema is a formal or informal description of how data is structured.

For a tabular dataset, a schema usually includes:

| Schema Element     | Description                              | Example                    |
| ------------------ | ---------------------------------------- | -------------------------- |
| Table name         | Name of the dataset or table             | `customers`                |
| Row meaning        | What one row represents                  | One customer               |
| Column name        | Name of a variable                       | `monthly_charges`          |
| Data type          | Storage or logical type                  | `float`                    |
| Business meaning   | Real-world meaning of the column         | Monthly service fee        |
| Allowed values     | Valid values or range                    | Greater than or equal to 0 |
| Missing-value rule | Whether null values are allowed          | Not allowed                |
| Key                | Unique identifier or relationship field  | `customer_id`              |
| Role               | Identifier, feature, target, or metadata | Feature                    |

A schema is not only a list of data types. It should also describe the **semantic meaning** of each field.

For example, both `customer_id` and `tenure_months` may be stored as integers, but they have different meanings:

* `customer_id` is an identifier.
* `tenure_months` is a measurable numerical feature.

---

## 4. Dataset Schema in the Data Workflow

A dataset schema connects raw data to analysis, modeling, and deployment.

```text
Business Question
        |
        v
Dataset Collection
        |
        v
Schema Inspection
        |
        +--> Row meaning
        +--> Column meaning
        +--> Data types
        +--> Keys and relationships
        +--> Constraints
        +--> Feature and target roles
        |
        v
Data Quality Checks
        |
        v
Exploratory Data Analysis
        |
        v
Feature Engineering
        |
        v
Model Training
        |
        v
Validation and Deployment
```

Schema inspection should happen before detailed visualization or modeling.

Without schema understanding, an analyst may:

* Calculate an average on an identifier column.
* Treat a category code as a continuous number.
* Parse dates incorrectly.
* Include the target or future information as a feature.
* Count repeated events as independent customers.
* Join tables using the wrong key.

---

## 5. Main Components of a Dataset Schema

### 5.1 Unit of Analysis

The **unit of analysis** defines what one row represents.

Examples:

| Dataset                      | One Row Represents               |
| ---------------------------- | -------------------------------- |
| Customer table               | One customer                     |
| Transaction table            | One transaction                  |
| Website event log            | One user event                   |
| Medical dataset              | One patient visit                |
| Image classification dataset | One image                        |
| Time-series dataset          | One measurement at one timestamp |

This is one of the most important schema questions.

Consider a transaction dataset:

```text
customer_id | transaction_id | amount
C001        | T001           | 50.00
C001        | T002           | 75.00
C002        | T003           | 20.00
```

The unit of analysis is **one transaction**, not one customer.

Therefore, counting rows gives the number of transactions, not the number of unique customers.

```python
number_of_rows = len(df)
number_of_customers = df["customer_id"].nunique()
```

---

### 5.2 Columns and Business Meaning

Each column should have a clear definition.

For example:

| Column            | Business Meaning                               |
| ----------------- | ---------------------------------------------- |
| `customer_id`     | Unique identifier for a customer               |
| `tenure_months`   | Number of months since registration            |
| `monthly_charges` | Current monthly subscription fee               |
| `contract_type`   | Type of customer contract                      |
| `churn`           | Whether the customer stopped using the service |

Column names alone may not provide enough information.

For example, a column named `status` could represent:

* Account status
* Payment status
* Delivery status
* Model prediction status
* Subscription status

A data dictionary should remove this ambiguity.

---

### 5.3 Physical Data Type and Logical Data Type

A **physical data type** describes how a value is stored.

Examples:

* Integer
* Float
* String
* Boolean
* DateTime

A **logical data type** describes how the value should be interpreted.

Examples:

* Numerical
* Categorical
* Ordinal
* Identifier
* Date or time
* Free text
* Geographical coordinate

These two concepts are not always the same.

| Column               | Physical Type     | Logical Type |
| -------------------- | ----------------- | ------------ |
| `customer_id`        | Integer           | Identifier   |
| `postal_code`        | Integer or string | Categorical  |
| `satisfaction_score` | Integer           | Ordinal      |
| `registration_date`  | String            | Date         |
| `is_active`          | Integer           | Boolean      |
| `product_category`   | String            | Categorical  |

A common mistake is to treat every integer column as a continuous numerical variable.

---

### 5.4 Identifiers and Keys

An identifier uniquely represents an entity or record.

Examples:

* `customer_id`
* `transaction_id`
* `order_id`
* `product_id`
* `session_id`

A **primary key** should uniquely identify each row.

For example:

```python
df["customer_id"].is_unique
```

However, uniqueness depends on the unit of analysis.

In a transaction table, `customer_id` may appear multiple times because one customer can have many transactions.

```text
Customer Table
customer_id  --> unique

Transaction Table
transaction_id --> unique
customer_id    --> repeated foreign key
```

Useful key checks include:

```python
df["transaction_id"].is_unique
df["transaction_id"].duplicated().sum()
df["customer_id"].nunique()
```

---

### 5.5 Features

Features are variables used to describe an observation or make a prediction.

Examples in a customer churn dataset include:

* Customer tenure
* Monthly charges
* Contract type
* Number of support calls
* Payment method
* Internet service type

Features can be grouped into several types.

| Feature Type | Examples                            |
| ------------ | ----------------------------------- |
| Numerical    | Age, income, price                  |
| Categorical  | Country, contract type              |
| Ordinal      | Satisfaction level, education level |
| Temporal     | Registration date, event timestamp  |
| Text         | Review, message, description        |
| Boolean      | Is active, has subscription         |
| Image        | Medical scan, product photo         |
| Geospatial   | Latitude, longitude                 |

---

### 5.6 Target Variable

The target is the variable a supervised machine learning model attempts to predict.

Examples:

| Problem                   | Target               |
| ------------------------- | -------------------- |
| Customer churn prediction | `churn`              |
| House price prediction    | `sale_price`         |
| Fraud detection           | `is_fraud`           |
| Sentiment analysis        | `sentiment`          |
| Customer segmentation     | No predefined target |

The target should be identified before modeling.

```python
target_column = "churn"
feature_columns = [
    column
    for column in df.columns
    if column not in ["customer_id", target_column]
]
```

The target definition must also be precise.

For example, `churn = 1` could mean:

* The customer cancelled during the current month.
* The customer cancelled within the next 30 days.
* The customer has been inactive for 90 days.
* The customer did not renew a contract.

These definitions produce different modeling problems.

---

### 5.7 Metadata

Metadata provides supporting information that may not be used directly as a model feature.

Examples:

* Data source
* File creation time
* Record ingestion time
* Dataset version
* Annotation source
* Data collection method
* Original filename
* Model prediction timestamp

Metadata is useful for:

* Reproducibility
* Auditing
* Debugging
* Data lineage
* Monitoring
* Dataset version control

---

### 5.8 Constraints and Valid Values

Constraints describe which values are considered valid.

Examples:

```text
age >= 0
monthly_charges >= 0
churn in {0, 1}
contract_type in {"Monthly", "One Year", "Two Year"}
registration_date <= current_date
customer_id must not be null
```

Constraints can be expressed as validation checks.

```python
assert df["age"].dropna().ge(0).all()
assert df["monthly_charges"].dropna().ge(0).all()
assert df["churn"].dropna().isin([0, 1]).all()
```

A value can match the physical data type but still violate the business rule.

For example:

```text
age = -5
monthly_charges = -100
churn = 7
```

These values may be valid integers or floats, but they are not logically valid.

---

## 6. Example: Customer Churn Schema

Suppose one row represents one customer.

| Column            | Data Type | Logical Role        | Nullable | Description                              |
| ----------------- | --------- | ------------------- | -------- | ---------------------------------------- |
| `customer_id`     | String    | Identifier          | No       | Unique customer identifier               |
| `gender`          | Category  | Feature             | Yes      | Customer gender category                 |
| `senior_citizen`  | Boolean   | Feature             | No       | Whether the customer is a senior citizen |
| `tenure_months`   | Integer   | Feature             | No       | Number of months with the company        |
| `contract_type`   | Category  | Feature             | No       | Customer contract type                   |
| `monthly_charges` | Float     | Feature             | No       | Current monthly fee                      |
| `total_charges`   | Float     | Feature             | Yes      | Total amount charged                     |
| `support_calls`   | Integer   | Feature             | Yes      | Number of support calls                  |
| `signup_date`     | Date      | Feature or metadata | Yes      | Date the customer registered             |
| `churn`           | Boolean   | Target              | No       | Whether the customer churned             |

### Expected Constraints

```text
customer_id:
  - Must not be null
  - Must be unique

tenure_months:
  - Must be an integer
  - Must be greater than or equal to 0

monthly_charges:
  - Must be numerical
  - Must be greater than or equal to 0

total_charges:
  - Must be numerical when present
  - Should normally increase with tenure

churn:
  - Must contain only 0 or 1
```

---

## 7. Inspecting a Dataset Schema with Pandas

### 7.1 Load the Dataset

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")
```

---

### 7.2 Inspect the Dataset Shape

```python
rows, columns = df.shape

print(f"Rows: {rows}")
print(f"Columns: {columns}")
```

The shape helps confirm the size of the dataset, but it does not explain what each row represents.

---

### 7.3 Inspect Column Names

```python
print(df.columns.tolist())
```

Check for:

* Inconsistent naming conventions
* Leading or trailing spaces
* Duplicate column names
* Unclear abbreviations
* Special characters
* Mixed uppercase and lowercase styles

A basic normalization step could be:

```python
df.columns = (
    df.columns
    .str.strip()
    .str.lower()
    .str.replace(" ", "_")
)
```

---

### 7.4 Inspect Data Types

```python
df.info()
```

Or:

```python
print(df.dtypes)
```

Example output:

```text
customer_id         object
tenure_months        int64
monthly_charges    float64
total_charges       object
churn                int64
```

This output suggests a potential issue:

```text
total_charges -> object
```

A financial value should normally be numerical. The column may contain:

* Empty strings
* Spaces
* Currency symbols
* Invalid text
* Mixed formats

Convert it carefully:

```python
df["total_charges"] = pd.to_numeric(
    df["total_charges"],
    errors="coerce"
)
```

---

### 7.5 Inspect Sample Records

```python
df.head()
```

```python
df.sample(5, random_state=42)
```

Looking at sample records helps verify whether the values match the expected schema.

---

### 7.6 Inspect Missing Values

```python
missing_summary = pd.DataFrame({
    "missing_count": df.isna().sum(),
    "missing_rate": df.isna().mean()
})

print(missing_summary.sort_values(
    "missing_rate",
    ascending=False
))
```

The missing-value rate for column (j) can be calculated as:

```text
missing_rate_j = missing_values_j / total_rows
```

In Python:

```python
missing_rate = df.isna().mean()
```

---

### 7.7 Inspect Unique Values

For categorical columns:

```python
categorical_columns = df.select_dtypes(
    include=["object", "category"]
).columns

for column in categorical_columns:
    print(f"\nColumn: {column}")
    print(df[column].value_counts(dropna=False).head(20))
```

This can reveal inconsistent categories such as:

```text
Monthly
monthly
MONTHLY
Month-to-month
month to month
```

---

### 7.8 Check Key Uniqueness

```python
duplicate_ids = df["customer_id"].duplicated().sum()

print(f"Duplicate customer IDs: {duplicate_ids}")
```

A reusable function:

```python
def check_unique_key(dataframe, key):
    duplicate_count = dataframe[key].duplicated().sum()
    missing_count = dataframe[key].isna().sum()

    return {
        "column": key,
        "is_unique": dataframe[key].is_unique,
        "duplicate_count": duplicate_count,
        "missing_count": missing_count,
    }


result = check_unique_key(df, "customer_id")
print(result)
```

---

## 8. Building a Schema Summary Automatically

The following function creates a simple schema profile.

```python
import pandas as pd


def build_schema_summary(dataframe):
    rows = []

    for column in dataframe.columns:
        series = dataframe[column]

        rows.append({
            "column": column,
            "dtype": str(series.dtype),
            "non_null_count": int(series.notna().sum()),
            "missing_count": int(series.isna().sum()),
            "missing_rate": round(float(series.isna().mean()), 4),
            "unique_count": int(series.nunique(dropna=True)),
            "is_unique": bool(series.is_unique),
            "sample_values": series.dropna()
                                   .astype(str)
                                   .unique()[:3]
                                   .tolist(),
        })

    return pd.DataFrame(rows)


schema_summary = build_schema_summary(df)
print(schema_summary)
```

Example output:

| Column            |   Dtype | Missing Rate | Unique Count | Is Unique |
| ----------------- | ------: | -----------: | -----------: | --------: |
| `customer_id`     |  object |        0.000 |        7,043 |      True |
| `tenure_months`   |   int64 |        0.000 |           73 |     False |
| `contract_type`   |  object |        0.000 |            3 |     False |
| `monthly_charges` | float64 |        0.000 |        1,585 |     False |
| `churn`           |   int64 |        0.000 |            2 |     False |

---

## 9. Creating a Data Dictionary

A data dictionary documents the schema in a human-readable format.

```python
data_dictionary = pd.DataFrame([
    {
        "column": "customer_id",
        "description": "Unique identifier for each customer",
        "logical_type": "identifier",
        "role": "metadata",
        "nullable": False,
    },
    {
        "column": "tenure_months",
        "description": "Number of months the customer has used the service",
        "logical_type": "numerical",
        "role": "feature",
        "nullable": False,
    },
    {
        "column": "contract_type",
        "description": "Current customer contract category",
        "logical_type": "categorical",
        "role": "feature",
        "nullable": False,
    },
    {
        "column": "monthly_charges",
        "description": "Current monthly service charge",
        "logical_type": "numerical",
        "role": "feature",
        "nullable": False,
    },
    {
        "column": "churn",
        "description": "Whether the customer left the service",
        "logical_type": "boolean",
        "role": "target",
        "nullable": False,
    },
])

data_dictionary.to_csv(
    "data_dictionary.csv",
    index=False
)
```

A useful data dictionary may contain:

| Field              | Purpose                                    |
| ------------------ | ------------------------------------------ |
| Column name        | Technical field name                       |
| Description        | Business meaning                           |
| Physical type      | Storage type                               |
| Logical type       | Analytical interpretation                  |
| Role               | Identifier, feature, target, or metadata   |
| Nullable           | Whether missing values are allowed         |
| Valid range        | Minimum and maximum values                 |
| Allowed categories | Valid categorical values                   |
| Unit               | USD, kilograms, seconds, months, and so on |
| Source             | Origin of the field                        |
| Notes              | Assumptions, caveats, or transformations   |

---

## 10. Schema Validation

Schema validation checks whether the actual dataset matches the expected structure.

### 10.1 Required Column Check

```python
required_columns = {
    "customer_id",
    "tenure_months",
    "contract_type",
    "monthly_charges",
    "churn",
}

missing_columns = required_columns - set(df.columns)

if missing_columns:
    raise ValueError(
        f"Missing required columns: {sorted(missing_columns)}"
    )
```

---

### 10.2 Unexpected Column Check

```python
expected_columns = {
    "customer_id",
    "gender",
    "senior_citizen",
    "tenure_months",
    "contract_type",
    "monthly_charges",
    "total_charges",
    "support_calls",
    "signup_date",
    "churn",
}

unexpected_columns = set(df.columns) - expected_columns

print("Unexpected columns:", sorted(unexpected_columns))
```

Unexpected columns are not always errors. However, they should be reviewed.

---

### 10.3 Data Type Check

```python
expected_dtypes = {
    "customer_id": "object",
    "tenure_months": "int64",
    "monthly_charges": "float64",
    "churn": "int64",
}

for column, expected_dtype in expected_dtypes.items():
    actual_dtype = str(df[column].dtype)

    if actual_dtype != expected_dtype:
        print(
            f"{column}: expected {expected_dtype}, "
            f"found {actual_dtype}"
        )
```

Exact Pandas data types may vary across environments, so business-oriented validation is often safer.

```python
from pandas.api.types import (
    is_numeric_dtype,
    is_string_dtype,
)

assert is_string_dtype(df["customer_id"])
assert is_numeric_dtype(df["monthly_charges"])
assert is_numeric_dtype(df["churn"])
```

---

### 10.4 Category Validation

```python
allowed_contracts = {
    "Monthly",
    "One Year",
    "Two Year",
}

invalid_contracts = (
    set(df["contract_type"].dropna())
    - allowed_contracts
)

print("Invalid contract types:", invalid_contracts)
```

---

### 10.5 Range Validation

```python
invalid_tenure = df.loc[
    df["tenure_months"] < 0,
    ["customer_id", "tenure_months"]
]

invalid_charges = df.loc[
    df["monthly_charges"] < 0,
    ["customer_id", "monthly_charges"]
]
```

---

### 10.6 Target Validation

```python
allowed_target_values = {0, 1}

actual_target_values = set(
    df["churn"].dropna().unique()
)

invalid_target_values = (
    actual_target_values
    - allowed_target_values
)

assert not invalid_target_values, (
    f"Invalid churn values: {invalid_target_values}"
)
```

---

## 11. Schema Problems Commonly Found During EDA

### 11.1 Numerical Data Stored as Text

```text
"100.50"
"$250.00"
"1,500"
"N/A"
"unknown"
```

Solution:

```python
df["amount"] = (
    df["amount"]
    .astype(str)
    .str.replace("$", "", regex=False)
    .str.replace(",", "", regex=False)
)

df["amount"] = pd.to_numeric(
    df["amount"],
    errors="coerce"
)
```

---

### 11.2 Dates Stored as Strings

```python
df["signup_date"] = pd.to_datetime(
    df["signup_date"],
    errors="coerce"
)
```

Then inspect invalid dates:

```python
invalid_date_count = df["signup_date"].isna().sum()
print(invalid_date_count)
```

---

### 11.3 Category Codes Treated as Numbers

Consider this field:

```text
education_level:
1 = High School
2 = Bachelor's Degree
3 = Master's Degree
4 = Doctorate
```

Although it is stored as an integer, it is an ordinal category.

```python
education_mapping = {
    1: "High School",
    2: "Bachelor",
    3: "Master",
    4: "Doctorate",
}

df["education_label"] = (
    df["education_level"]
    .map(education_mapping)
)
```

---

### 11.4 Multiple Values in One Column

```text
skills = "Python,SQL,Machine Learning"
```

This violates the idea of one value per field in a normalized table.

Depending on the task, the column may need to be:

* Split into multiple boolean features
* Moved into a separate relationship table
* Processed as text
* Converted to a list structure

```python
df["skills_list"] = df["skills"].str.split(",")
```

---

### 11.5 Inconsistent Units

A height column might mix:

```text
170 cm
1.75 m
5 feet 8 inches
```

Before analysis, values should be converted to one standard unit.

```text
Raw values
    |
    v
Detect unit
    |
    v
Convert to standard unit
    |
    v
Store normalized value
    |
    v
Document the transformation
```

---

### 11.6 Duplicate or Ambiguous Columns

Examples:

```text
price
product_price
final_price
price_new
```

The analyst must determine:

* Whether the columns represent different concepts
* Which column is authoritative
* Whether one is derived from another
* Whether older columns should be removed

---

### 11.7 Schema Drift

**Schema drift** occurs when the structure of incoming data changes over time.

Examples:

* A required column disappears.
* A column is renamed.
* A numerical column becomes text.
* New category values appear.
* Date formatting changes.
* Measurement units change.

```text
Training Dataset Schema
          |
          v
Expected Production Schema
          |
          v
Incoming Production Data
          |
          +--> Same schema: continue
          |
          +--> Different schema: alert, reject, or transform
```

Schema drift can break:

* Data pipelines
* Feature engineering
* Model inference
* Dashboards
* APIs
* Monitoring systems

---

## 12. Dataset Schema and Machine Learning

Schema understanding affects the entire machine learning workflow.

### 12.1 Feature Selection

Identifiers usually should not be treated as predictive numerical features.

```python
excluded_columns = [
    "customer_id",
    "churn",
]

X = df.drop(columns=excluded_columns)
y = df["churn"]
```

---

### 12.2 Feature Encoding

Categorical and numerical features require different preprocessing.

```python
numerical_features = [
    "tenure_months",
    "monthly_charges",
    "support_calls",
]

categorical_features = [
    "gender",
    "contract_type",
]
```

Example preprocessing pipeline:

```python
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

numerical_pipeline = Pipeline([
    (
        "imputer",
        SimpleImputer(strategy="median")
    ),
    (
        "scaler",
        StandardScaler()
    ),
])

categorical_pipeline = Pipeline([
    (
        "imputer",
        SimpleImputer(strategy="most_frequent")
    ),
    (
        "encoder",
        OneHotEncoder(
            handle_unknown="ignore"
        )
    ),
])

preprocessor = ColumnTransformer([
    (
        "numerical",
        numerical_pipeline,
        numerical_features
    ),
    (
        "categorical",
        categorical_pipeline,
        categorical_features
    ),
])
```

---

### 12.3 Data Leakage

Schema inspection can reveal columns that contain future or target-related information.

Suppose the target is customer churn.

Potential leakage columns include:

* `cancellation_date`
* `account_closed`
* `final_refund_amount`
* `days_since_cancellation`
* `churn_reason`

These fields may only become available after churn occurs.

```text
Prediction Time
      |
      +--> Available before prediction: valid feature
      |
      +--> Created after the outcome: possible leakage
```

A feature should generally be available at the exact time the prediction is made.

---

### 12.4 Training and Inference Consistency

The model must receive the same schema during training and production inference.

```text
Training Input
  - tenure_months: integer
  - monthly_charges: float
  - contract_type: category

Production Input
  - tenure_months: integer
  - monthly_charges: float
  - contract_type: category
```

Problems occur when production data contains:

```text
tenure_months: "twelve"
monthly_charges: "$50"
contract_type: "monthly_contract"
```

Schema validation should happen before model inference.

---

## 13. Dataset Schema and Relational Data

Many projects use multiple tables.

Example:

```text
CUSTOMERS
---------
customer_id
name
signup_date
country

ORDERS
------
order_id
customer_id
order_date
total_amount

ORDER_ITEMS
-----------
order_id
product_id
quantity
unit_price
```

Relationships:

```text
CUSTOMERS
    |
    | one customer
    |
    | has many
    v
ORDERS
    |
    | one order
    |
    | has many
    v
ORDER_ITEMS
```

Key relationships:

```text
customers.customer_id = orders.customer_id

orders.order_id = order_items.order_id
```

Before joining tables, check the relationship type:

* One-to-one
* One-to-many
* Many-to-one
* Many-to-many

An incorrect join can multiply rows and distort statistics.

```python
orders_with_customers = orders.merge(
    customers,
    on="customer_id",
    how="left",
    validate="many_to_one",
)
```

The `validate` parameter helps verify the expected relationship.

---

## 14. From Schema to EDA Insights

Schema inspection is not the final result. It prepares the dataset for reliable analysis.

```text
Schema
   |
   v
Data Quality Checks
   |
   v
Distributions
   |
   v
Relationships
   |
   v
Business Insight
   |
   v
Recommendation
```

Example:

```text
Schema observation:
contract_type is a categorical feature with three valid categories.

EDA observation:
Monthly-contract customers have a higher churn rate.

Business insight:
Short-term customers may have lower switching costs.

Recommendation:
Design retention campaigns for monthly-contract customers.
```

Each insight should contain:

1. Evidence
2. Interpretation
3. Caveat
4. Recommendation

---

## 15. Practical Demo

### Step 1: Load the Dataset

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")
```

### Step 2: Inspect the Basic Schema

```python
print(df.shape)
print(df.columns.tolist())
print(df.dtypes)
```

### Step 3: Define Column Roles

```python
schema_roles = {
    "identifier": ["customer_id"],
    "numerical_features": [
        "tenure_months",
        "monthly_charges",
        "support_calls",
    ],
    "categorical_features": [
        "gender",
        "contract_type",
    ],
    "target": ["churn"],
}
```

### Step 4: Check Data Quality

```python
print(df.isna().sum())
print(df["customer_id"].duplicated().sum())
print(df["churn"].value_counts(dropna=False))
```

### Step 5: Validate Constraints

```python
assert df["customer_id"].notna().all()
assert df["tenure_months"].dropna().ge(0).all()
assert df["monthly_charges"].dropna().ge(0).all()
assert df["churn"].dropna().isin([0, 1]).all()
```

### Step 6: Save the Schema Profile

```python
schema_summary = build_schema_summary(df)

schema_summary.to_csv(
    "outputs/schema_summary.csv",
    index=False
)
```

---

## 16. Practice Exercise

Choose a small CSV dataset and create an EDA notebook.

Your notebook should include the following sections.

### Part A: Dataset Context

Write down:

* Dataset name
* Data source
* Business or research question
* Unit of analysis
* Number of rows
* Number of columns
* Target variable, if one exists

### Part B: Schema Inspection

For every column, identify:

* Column name
* Physical data type
* Logical data type
* Business meaning
* Role
* Missing-value rule
* Valid range or categories

### Part C: Quality Checks

Check for:

* Missing values
* Duplicate rows
* Duplicate identifiers
* Invalid categories
* Incorrect data types
* Impossible numerical values
* Invalid timestamps
* Unexpected columns

### Part D: EDA Insights

Produce at least three insights supported by:

* A chart
* A summary table
* A statistical measure

Each insight should include:

```text
Observation:
What pattern did you find?

Evidence:
Which chart or metric supports it?

Interpretation:
Why might this pattern exist?

Caveat:
What uncertainty or limitation remains?

Recommendation:
What should be investigated or done next?
```

### Part E: Reproducibility

Save:

```text
project/
|
+-- data/
|   +-- raw/
|   +-- processed/
|
+-- notebooks/
|   +-- 01_schema_and_eda.ipynb
|
+-- outputs/
|   +-- schema_summary.csv
|   +-- data_dictionary.csv
|   +-- figures/
|
+-- src/
|   +-- validation.py
|
+-- README.md
+-- requirements.txt
```

Do not overwrite the original raw data.

---

## 17. Common Mistakes

### Mistake 1: Starting with Charts Before Understanding the Schema

A chart may look correct while representing the wrong unit of analysis.

**Better approach:**

```text
Business question
    -> row meaning
    -> schema
    -> data quality
    -> visualization
```

---

### Mistake 2: Trusting Inferred Data Types

CSV files do not store strict data types. Pandas must infer them.

A numerical column may be loaded as text because of one invalid value.

**Better approach:**

* Inspect inferred types.
* Compare them with logical types.
* Convert values explicitly.
* Record conversion failures.

---

### Mistake 3: Treating Identifiers as Numerical Features

A customer ID such as `10025` is not necessarily larger or more important than `10024`.

**Better approach:**

* Mark identifier columns explicitly.
* Exclude them from numerical summaries.
* Avoid passing them directly into most models.

---

### Mistake 4: Ignoring the Unit of Measurement

The value `100` is ambiguous without a unit.

It could mean:

* 100 dollars
* 100 kilograms
* 100 seconds
* 100 milliseconds
* 100 centimeters

**Better approach:**

Include the unit in the data dictionary.

---

### Mistake 5: Assuming Missing Values Are Random

A missing value may have business meaning.

Examples:

* No support call was recorded.
* A customer refused to answer.
* The system failed to collect the value.
* The field does not apply to that customer.
* A value was removed for privacy reasons.

**Better approach:**

Investigate the mechanism and document assumptions before filling missing values.

---

### Mistake 6: Modifying Raw Data Manually

Manual spreadsheet editing is difficult to reproduce.

**Better approach:**

* Keep raw data unchanged.
* Perform cleaning in code.
* Save the processed dataset separately.
* Maintain a cleaning changelog.

---

### Mistake 7: Ignoring Schema Changes

A notebook may work today but fail when new data arrives.

**Better approach:**

* Define an expected schema.
* Validate incoming data.
* Report missing and unexpected columns.
* Monitor category and data type changes.

---

### Mistake 8: Producing Charts Without Insights

A chart is evidence, not a complete conclusion.

**Better approach:**

For each chart, explain:

* What happened
* Why it matters
* What may explain it
* What limitation exists
* What action should follow

---

## 18. Completion Checklist

Use this checklist to evaluate your understanding.

### Conceptual Understanding

* [ ] I can explain a dataset schema in one or two minutes.
* [ ] I can identify what one row represents.
* [ ] I understand the difference between physical and logical data types.
* [ ] I can distinguish identifiers, features, targets, and metadata.
* [ ] I understand keys, constraints, and valid values.

### Technical Skills

* [ ] I can inspect a dataset using `shape`, `columns`, `dtypes`, and `info()`.
* [ ] I can detect missing values and duplicated identifiers.
* [ ] I can validate required columns and category values.
* [ ] I can convert incorrect data types safely.
* [ ] I can generate a schema summary using Python.
* [ ] I can create a data dictionary.

### Analytical Skills

* [ ] I can connect schema problems to EDA errors.
* [ ] I can identify potential data leakage.
* [ ] I can explain how schema affects preprocessing and modeling.
* [ ] I can document at least one caveat or assumption.
* [ ] I can turn EDA evidence into a business-oriented recommendation.

### Portfolio Artifact

* [ ] I have a notebook, query, chart, validation script, or technical note for this lesson.
* [ ] I preserved the original raw data.
* [ ] I saved the schema summary and data dictionary.
* [ ] I documented the cleaning and transformation steps.
* [ ] Another person can reproduce my analysis.

---

## 19. Expected Outcome

After completing this lesson, you should be able to:

> Understand, validate, clean, visualize, and explain a dataset using a clearly documented schema and business-oriented insights.

A strong result should include:

* A clear definition of the unit of analysis
* A schema summary
* A data dictionary
* Data quality checks
* Reproducible cleaning code
* Three or more evidence-based insights
* Caveats and assumptions
* Actionable recommendations

---

## 20. Related Project

### Mini Project: Customer Churn EDA

Build a small customer churn analysis project containing:

1. Dataset and business question
2. Dataset schema and data dictionary
3. Missing-value and duplicate analysis
4. Numerical and categorical distributions
5. Churn rate analysis
6. Feature relationships
7. Potential leakage review
8. Three business insights
9. Three recommendations
10. A short insight report

Suggested outputs:

```text
customer-churn-eda/
|
+-- data/
|   +-- raw/
|   +-- processed/
|
+-- notebooks/
|   +-- churn_eda.ipynb
|
+-- outputs/
|   +-- schema_summary.csv
|   +-- data_dictionary.csv
|   +-- churn_insights.md
|   +-- figures/
|
+-- src/
|   +-- clean_data.py
|   +-- validate_schema.py
|
+-- README.md
+-- requirements.txt
```

---

## 21. Summary

A **dataset schema** describes the structure, meaning, relationships, and constraints of a dataset.

Before modeling, you should understand:

* What one row represents
* What each column means
* Which data types are expected
* Which columns are identifiers
* Which columns are features
* Which column is the target
* Which values are valid
* Which fields may be missing
* How tables are related
* Which fields may create data leakage

The recommended workflow is:

```text
Business Question
        |
        v
Understand Row Meaning
        |
        v
Inspect Dataset Schema
        |
        v
Validate Data Quality
        |
        v
Explore Distributions and Relationships
        |
        v
Write Insights and Caveats
        |
        v
Make Actionable Recommendations
```

Do not treat schema inspection as documentation work only. It is a technical foundation for reliable EDA, feature engineering, model training, APIs, monitoring systems, and production data pipelines.

Turn this lesson into a concrete artifact such as:

* An EDA notebook
* A schema validation script
* A data dictionary
* A database query
* A dashboard
* A model preprocessing pipeline
* An API validation layer
* A portfolio case study
