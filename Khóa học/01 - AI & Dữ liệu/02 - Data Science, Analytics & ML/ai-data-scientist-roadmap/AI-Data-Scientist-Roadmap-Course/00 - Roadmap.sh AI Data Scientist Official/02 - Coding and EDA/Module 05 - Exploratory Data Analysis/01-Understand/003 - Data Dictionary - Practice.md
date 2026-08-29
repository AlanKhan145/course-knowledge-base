# 003 — Data Dictionary

**Course:** 02 — Coding and EDA
**Module:** Module 05 — Exploratory Data Analysis
**Content Group:** Data Understanding
**Roadmap Source:** Exploratory Data Analysis / Data Understanding
**Lesson Type:** Exploratory Data Analysis
**Lesson Order:** 003
**Suggested Duration:** 20 minutes

---

## 1. Overview

A **Data Dictionary** is a structured document that explains the meaning, format, source, and rules of every field in a dataset.

It acts as a reference guide for analysts, data scientists, engineers, and business stakeholders. Before cleaning data, creating visualizations, or training a machine learning model, a data scientist should understand what each variable represents and how it should be interpreted.

A good data dictionary helps answer questions such as:

* What does each column represent?
* What data type should each column have?
* Which unit of measurement is used?
* Which values are valid?
* Can the column contain missing values?
* Is the column a feature, target, identifier, or metadata field?
* Does the column contain sensitive information?
* How was the field created or collected?

Without a data dictionary, analysts may misunderstand variables, apply incorrect transformations, create data leakage, or communicate misleading conclusions.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain the purpose of a data dictionary in your own words.
* Identify the main components of a data dictionary.
* Distinguish between a dataset schema and a data dictionary.
* Create a basic data dictionary for a CSV dataset.
* Use a data dictionary to support data cleaning and validation.
* Identify possible data-quality risks from variable definitions.
* Connect data dictionary information to EDA and machine learning workflows.
* Document assumptions, caveats, and business rules clearly.

---

## 3. What Is a Data Dictionary?

A data dictionary is a table or document containing metadata about the variables in a dataset.

It describes the data rather than storing the actual observations.

For example, consider the following dataset:

| customer_id | age | monthly_charge | contract_type | churn |
| ----------- | --: | -------------: | ------------- | ----- |
| C001        |  28 |          59.90 | Monthly       | Yes   |
| C002        |  43 |          89.50 | Annual        | No    |
| C003        |  35 |          72.00 | Monthly       | Yes   |

The dataset contains actual customer records. Its data dictionary explains what each column means.

| Column           | Description                                    | Data Type        | Example   |
| ---------------- | ---------------------------------------------- | ---------------- | --------- |
| `customer_id`    | Unique identifier for each customer            | String           | `C001`    |
| `age`            | Customer age in completed years                | Integer          | `28`      |
| `monthly_charge` | Current monthly service charge in USD          | Float            | `59.90`   |
| `contract_type`  | Type of customer contract                      | Category         | `Monthly` |
| `churn`          | Whether the customer stopped using the service | Boolean/Category | `Yes`     |

The data dictionary gives meaning and context to the raw values.

---

## 4. Data Dictionary vs. Dataset Schema

A **dataset schema** and a **data dictionary** are related, but they are not identical.

### 4.1 Dataset Schema

A schema mainly describes the technical structure of the dataset.

It usually includes:

* Column names
* Data types
* Nullability
* Primary keys
* Foreign keys
* Constraints
* Table relationships

Example:

```text
customer_id      VARCHAR      NOT NULL
age              INTEGER      NULL
monthly_charge   DECIMAL      NOT NULL
contract_type    VARCHAR      NOT NULL
churn            BOOLEAN      NOT NULL
```

### 4.2 Data Dictionary

A data dictionary provides additional semantic and business context.

It may include:

* Human-readable definitions
* Units of measurement
* Valid value ranges
* Allowed categories
* Data source
* Missing-value meaning
* Business rules
* Transformation logic
* Sensitivity classification
* Known limitations

### 4.3 Comparison

| Aspect                | Dataset Schema             | Data Dictionary                                   |
| --------------------- | -------------------------- | ------------------------------------------------- |
| Primary purpose       | Define technical structure | Explain meaning and usage                         |
| Column names          | Yes                        | Yes                                               |
| Data types            | Yes                        | Yes                                               |
| Business definition   | Usually limited            | Yes                                               |
| Units                 | Usually not included       | Yes                                               |
| Valid values          | Sometimes                  | Usually                                           |
| Data source           | Rarely                     | Usually                                           |
| Missing-value meaning | Rarely                     | Usually                                           |
| Business rules        | Limited                    | Detailed                                          |
| Intended audience     | Engineers and systems      | Analysts, engineers, scientists, and stakeholders |

A schema tells you **how the data is stored**.

A data dictionary tells you **what the data means**.

---

## 5. Why a Data Dictionary Matters

### 5.1 Prevents Misinterpretation

A column named `revenue` may represent:

* Gross revenue
* Net revenue
* Monthly revenue
* Annual revenue
* Revenue before refunds
* Revenue after discounts

Without a definition, different analysts may interpret the same field differently.

---

### 5.2 Supports Data Cleaning

The dictionary provides rules that can be converted into validation checks.

Example:

| Column           | Rule                                        |
| ---------------- | ------------------------------------------- |
| `age`            | Must be between 18 and 100                  |
| `monthly_charge` | Must be greater than or equal to 0          |
| `contract_type`  | Must be `Monthly`, `Quarterly`, or `Annual` |
| `churn`          | Must be `Yes` or `No`                       |

These rules help identify invalid or suspicious records.

---

### 5.3 Improves Reproducibility

When field definitions and transformations are documented, another analyst can reproduce the same analysis.

For example:

```text
tenure_months:
Number of complete months between account_start_date
and the dataset snapshot date.
```

This definition is more reproducible than simply stating that the column represents customer tenure.

---

### 5.4 Reduces Data Leakage

A data dictionary may reveal that a feature was created after the target event.

Suppose the objective is to predict whether a customer will churn.

A variable such as `account_closed_date` should not be used because it is only known after churn has already occurred.

```text
Prediction time
      |
      v
Available information --------> Model prediction
      |
      +---- Future information must not be used
```

Understanding when each variable becomes available is essential for preventing data leakage.

---

### 5.5 Improves Collaboration

A shared data dictionary creates a common language between:

* Business teams
* Data analysts
* Data engineers
* Data scientists
* Machine learning engineers
* Software engineers
* Product managers

It reduces repeated questions and inconsistent assumptions.

---

## 6. Typical Data Dictionary Fields

A practical data dictionary may contain the following columns.

| Field            | Meaning                                             |
| ---------------- | --------------------------------------------------- |
| `column_name`    | Exact field name in the dataset                     |
| `display_name`   | Human-readable name                                 |
| `description`    | Business or analytical meaning                      |
| `data_type`      | Expected data type                                  |
| `role`           | Identifier, feature, target, timestamp, or metadata |
| `unit`           | Unit of measurement                                 |
| `allowed_values` | Valid categories or values                          |
| `valid_range`    | Minimum and maximum expected values                 |
| `nullable`       | Whether missing values are allowed                  |
| `unique`         | Whether values should be unique                     |
| `default_value`  | Value used when no input is provided                |
| `source`         | System or process that created the field            |
| `calculation`    | Formula used to derive the field                    |
| `example`        | Example value                                       |
| `sensitivity`    | Public, internal, confidential, or personal         |
| `notes`          | Caveats, assumptions, or limitations                |

Not every project needs every field. The dictionary should contain enough information to support correct usage.

---

## 7. Variable Roles

Each variable should have a clearly defined role.

### 7.1 Identifier

An identifier uniquely identifies an observation.

Examples:

* `customer_id`
* `transaction_id`
* `order_id`

Identifiers are usually not useful as predictive features unless meaningful information is derived from them.

---

### 7.2 Feature

A feature is an input variable used in analysis or modeling.

Examples:

* `age`
* `monthly_charge`
* `tenure_months`
* `support_ticket_count`

---

### 7.3 Target

The target is the outcome that a model attempts to predict.

Examples:

* `churn`
* `fraud_flag`
* `house_price`
* `customer_lifetime_value`

---

### 7.4 Timestamp

A timestamp describes when an event occurred.

Examples:

* `signup_date`
* `transaction_time`
* `last_login_at`

Timestamps require careful interpretation because they may contain time zones, date formats, or future information.

---

### 7.5 Metadata

Metadata provides supporting context but may not directly represent the main event.

Examples:

* `data_source`
* `import_batch_id`
* `record_created_at`
* `processing_version`

---

## 8. Data Dictionary Workflow

A data dictionary should be created or reviewed before detailed EDA.

```text
Business Question
       |
       v
Inspect Dataset Schema
       |
       v
Create or Review Data Dictionary
       |
       v
Define Validation Rules
       |
       v
Run Data-Quality Checks
       |
       v
Explore Distributions and Relationships
       |
       v
Generate Insights
       |
       v
Write Recommendations and Caveats
```

The data dictionary connects technical fields to business meaning.

---

## 9. Example: Customer Churn Data Dictionary

Consider a telecommunications churn dataset.

| Column Name       | Description                                             | Type     | Role       | Unit / Values                    | Nullable | Example      |
| ----------------- | ------------------------------------------------------- | -------- | ---------- | -------------------------------- | -------- | ------------ |
| `customer_id`     | Unique customer identifier                              | String   | Identifier | Unique alphanumeric value        | No       | `C00125`     |
| `age`             | Customer age in completed years                         | Integer  | Feature    | 18–100 years                     | Yes      | `34`         |
| `tenure_months`   | Number of complete months since account activation      | Integer  | Feature    | 0–240 months                     | No       | `18`         |
| `monthly_charge`  | Current recurring monthly charge                        | Float    | Feature    | USD, value >= 0                  | No       | `79.90`      |
| `contract_type`   | Current service contract category                       | Category | Feature    | `Monthly`, `Quarterly`, `Annual` | No       | `Monthly`    |
| `support_tickets` | Number of support tickets in the previous 90 days       | Integer  | Feature    | Value >= 0                       | Yes      | `3`          |
| `last_login_date` | Most recent login before the snapshot date              | Date     | Feature    | `YYYY-MM-DD`                     | Yes      | `2026-06-18` |
| `churn`           | Whether the customer left during the observation period | Category | Target     | `Yes`, `No`                      | No       | `Yes`        |

---

## 10. Business Rules and Validation Rules

A definition becomes more useful when it includes testable rules.

### 10.1 Example Rules

```text
customer_id:
- Must not be missing.
- Must be unique.
- Must match the pattern C followed by digits.

age:
- May be missing.
- Must be an integer.
- Valid values are between 18 and 100.

monthly_charge:
- Must not be missing.
- Must be numeric.
- Must be greater than or equal to 0.

contract_type:
- Must be one of:
  Monthly, Quarterly, Annual.

churn:
- Must not be missing.
- Must be either Yes or No.
```

### 10.2 From Documentation to Code

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

assert df["customer_id"].notna().all()
assert df["customer_id"].is_unique

valid_age = df["age"].dropna().between(18, 100)
assert valid_age.all()

assert df["monthly_charge"].ge(0).all()

valid_contracts = {"Monthly", "Quarterly", "Annual"}
assert df["contract_type"].isin(valid_contracts).all()

valid_targets = {"Yes", "No"}
assert df["churn"].isin(valid_targets).all()
```

These assertions convert documentation into automated quality checks.

---

## 11. Creating a Data Dictionary with Python

A basic dictionary can be created from the dataset structure.

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

dictionary = pd.DataFrame({
    "column_name": df.columns,
    "data_type": df.dtypes.astype(str).values,
    "missing_count": df.isna().sum().values,
    "missing_percentage": (
        df.isna().mean().mul(100).round(2).values
    ),
    "unique_count": df.nunique(dropna=True).values,
    "example_value": [
        df[column].dropna().iloc[0]
        if df[column].notna().any()
        else None
        for column in df.columns
    ],
})

print(dictionary)
```

Possible output:

| column_name    | data_type | missing_count | missing_percentage | unique_count | example_value |
| -------------- | --------- | ------------: | -----------------: | -----------: | ------------- |
| customer_id    | object    |             0 |               0.00 |         5000 | C001          |
| age            | float64   |            45 |               0.90 |           72 | 28            |
| monthly_charge | float64   |             0 |               0.00 |         2350 | 59.90         |
| contract_type  | object    |             0 |               0.00 |            3 | Monthly       |
| churn          | object    |             0 |               0.00 |            2 | Yes           |

This automatically generated table is only a starting point. Business definitions and rules must still be added manually or obtained from domain experts.

---

## 12. Extended Data Dictionary Template

The following structure can be saved as a CSV, spreadsheet, database table, or Markdown document.

```text
column_name
display_name
description
data_type
role
unit
allowed_values
valid_range
nullable
unique
source
calculation
example
sensitivity
owner
last_updated
notes
```

Example:

| Column           | Description                                      |
| ---------------- | ------------------------------------------------ |
| `column_name`    | `monthly_charge`                                 |
| `display_name`   | Monthly Charge                                   |
| `description`    | Current recurring service fee charged each month |
| `data_type`      | Float                                            |
| `role`           | Feature                                          |
| `unit`           | USD                                              |
| `allowed_values` | Numeric values                                   |
| `valid_range`    | Greater than or equal to 0                       |
| `nullable`       | No                                               |
| `unique`         | No                                               |
| `source`         | Billing system                                   |
| `calculation`    | Sum of active monthly service fees               |
| `example`        | `79.90`                                          |
| `sensitivity`    | Internal                                         |
| `owner`          | Billing Analytics Team                           |
| `last_updated`   | `2026-07-01`                                     |
| `notes`          | Does not include one-time installation fees      |

---

## 13. Missing Values in a Data Dictionary

Missing values can have different meanings.

A blank value may mean:

* The information was not collected.
* The value is unknown.
* The field is not applicable.
* A system error occurred.
* The customer refused to provide the information.
* The value has not yet been calculated.

These meanings should not automatically be treated as equivalent.

Example:

| Raw Value        | Meaning                   |
| ---------------- | ------------------------- |
| `NaN`            | Value not recorded        |
| `Unknown`        | Information unavailable   |
| `Not Applicable` | Field does not apply      |
| `-1`             | Legacy missing-value code |
| Empty string     | Possible ingestion error  |

A good dictionary documents missing-value codes explicitly.

```text
income:
- NULL means the customer did not provide income information.
- 0 means reported income is zero.
- -1 is an invalid legacy code and should be converted to NULL.
```

---

## 14. Units and Measurement Scales

Units must be clearly documented.

A column called `weight` could be measured in:

* Kilograms
* Grams
* Pounds
* Tons

A column called `duration` could be measured in:

* Seconds
* Minutes
* Hours
* Days

Incorrect units can lead to incorrect analysis or model behavior.

### Example

```text
response_time:
Definition: Time between request receipt and response completion
Data type: Float
Unit: Milliseconds
Valid range: Greater than or equal to 0
```

Measurement scale should also be considered.

| Scale    | Description                     | Example                  |
| -------- | ------------------------------- | ------------------------ |
| Nominal  | Categories without order        | Country, product type    |
| Ordinal  | Categories with order           | Low, Medium, High        |
| Interval | Numeric scale without true zero | Temperature in Celsius   |
| Ratio    | Numeric scale with true zero    | Income, weight, duration |

The measurement scale influences which statistics and transformations are appropriate.

---

## 15. Derived Variables

Some variables are calculated from other fields.

Their formulas should be documented.

Example:

```text
average_order_value =
total_revenue / number_of_orders
```

A complete dictionary entry should include:

```text
Column: average_order_value

Definition:
Average revenue generated per completed order.

Formula:
total_revenue / number_of_completed_orders

Special rule:
Return NULL when number_of_completed_orders equals 0.

Unit:
USD per order
```

Documenting derived variables prevents inconsistent calculations across reports and notebooks.

---

## 16. Time-Dependent Definitions

Some variables depend on a particular observation date.

Example:

```text
tenure_months =
Complete months between account_start_date
and snapshot_date
```

The `snapshot_date` must be documented because the value changes over time.

```text
Account start date -----> Snapshot date -----> Future
       |                       |
       +---- tenure window ----+
```

For machine learning projects, every feature should ideally include an availability time.

| Feature                         | Available at Prediction Time? |
| ------------------------------- | ----------------------------- |
| Customer age                    | Yes                           |
| Previous 90-day support tickets | Yes                           |
| Future cancellation date        | No                            |
| Final refund amount             | No                            |

---

## 17. Sensitive and Personal Data

A data dictionary should identify sensitive fields.

Examples include:

* Full name
* Email address
* Phone number
* Home address
* National identifier
* Financial information
* Health information
* Precise location
* Authentication credentials

Example classification:

| Column           | Sensitivity  |
| ---------------- | ------------ |
| `customer_id`    | Internal     |
| `full_name`      | Personal     |
| `email`          | Personal     |
| `monthly_charge` | Confidential |
| `contract_type`  | Internal     |
| `churn`          | Internal     |

Sensitive fields may require:

* Masking
* Encryption
* Access control
* Aggregation
* Anonymization
* Removal before model training

Passwords, API keys, and authentication tokens should never be included as model features or shared analytical data.

---

## 18. Data Dictionary Quality Checklist

A useful data dictionary should be:

### Complete

Every important field should have a definition.

### Clear

Descriptions should avoid vague language.

Weak definition:

```text
status:
The customer status.
```

Better definition:

```text
status:
The customer's subscription state at the dataset snapshot date.
Allowed values are Active, Suspended, Cancelled, and Pending.
```

### Consistent

The same terminology should be used across datasets and reports.

### Testable

Rules should be specific enough to convert into validation checks.

### Versioned

Changes to field definitions should be recorded.

### Owned

Important fields should have a responsible team or person.

### Accessible

The dictionary should be easy for project members to find and update.

---

## 19. Common Mistakes

### 19.1 Documenting Only Data Types

A field type such as `float64` does not explain what the variable means.

Add:

* Business definition
* Unit
* Valid range
* Source
* Missing-value interpretation

---

### 19.2 Using Vague Descriptions

Avoid definitions such as:

```text
score:
A score for the customer.
```

Use a precise definition:

```text
risk_score:
A model-generated score from 0 to 1 representing the estimated
probability that the customer will churn within 30 days.
```

---

### 19.3 Ignoring Units

Mixing dollars and cents, kilograms and pounds, or seconds and milliseconds can produce major errors.

---

### 19.4 Ignoring Time Context

A field may represent its value:

* At account creation
* At transaction time
* At prediction time
* At dataset extraction time
* At the end of the observation period

This timing must be documented.

---

### 19.5 Treating Missing Values as Zero

A missing value does not necessarily represent zero.

For example:

```text
support_ticket_count = 0
```

may mean the customer created no tickets.

```text
support_ticket_count = NULL
```

may mean the support system was unavailable.

---

### 19.6 Failing to Update the Dictionary

When data pipelines change, the dictionary must also change.

Otherwise, the documentation becomes misleading.

---

### 19.7 Creating Documentation That Cannot Be Validated

Definitions such as “reasonable value” or “normal range” are difficult to test.

Use explicit constraints whenever possible.

---

## 20. Practical Exercise

Use a small customer churn CSV dataset.

### Task 1: Inspect the Dataset

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

print(df.head())
print(df.info())
print(df.describe(include="all"))
```

---

### Task 2: Create an Initial Data Profile

For every column, calculate:

* Data type
* Missing-value count
* Missing-value percentage
* Unique-value count
* Minimum and maximum for numeric fields
* Most common value
* Example value

---

### Task 3: Create the Data Dictionary

Include at least:

| Field                  | Required |
| ---------------------- | -------- |
| Column name            | Yes      |
| Description            | Yes      |
| Data type              | Yes      |
| Variable role          | Yes      |
| Unit or allowed values | Yes      |
| Missing-value meaning  | Yes      |
| Valid range            | Yes      |
| Example value          | Yes      |
| Notes or caveats       | Yes      |

---

### Task 4: Write Validation Checks

Create checks for:

* Unique customer identifiers
* Valid age range
* Non-negative charges
* Allowed contract categories
* Valid target labels
* Correct date formats

---

### Task 5: Produce Three Insights

Each insight should include:

1. A business question
2. A chart or summary table
3. An interpretation
4. A caveat
5. A recommendation

Example:

```text
Insight:
Customers with monthly contracts have a higher churn rate
than customers with annual contracts.

Caveat:
Contract type may be related to customer tenure and pricing.

Recommendation:
Compare churn rates after controlling for tenure and monthly charge.
```

---

## 21. Suggested Notebook Structure

```text
01_business_context
02_load_raw_data
03_inspect_schema
04_create_data_dictionary
05_validate_business_rules
06_clean_data
07_analyze_distributions
08_analyze_relationships
09_write_insights
10_document_caveats
11_export_results
```

This structure makes the analysis easier to reproduce and review.

---

## 22. Expected Outputs

At the end of the lesson, you should produce at least one of the following artifacts:

* A Markdown data dictionary
* A CSV data dictionary
* A spreadsheet containing variable definitions
* A notebook that generates the dictionary automatically
* A set of automated validation rules
* A data-quality report
* A schema validation script
* A portfolio note explaining the dataset

A strong portfolio artifact may contain:

```text
data/
├── raw/
│   └── customer_churn.csv
├── processed/
│   └── customer_churn_clean.csv
├── metadata/
│   └── data_dictionary.csv
├── notebooks/
│   └── churn_eda.ipynb
├── reports/
│   └── churn_insight_report.md
└── README.md
```

---

## 23. Completion Checklist

* [ ] I can explain a data dictionary in one or two minutes.
* [ ] I understand the difference between a schema and a data dictionary.
* [ ] I can identify identifiers, features, targets, timestamps, and metadata.
* [ ] I created a dictionary for a real or sample dataset.
* [ ] I documented data types, units, valid values, and missing-value meanings.
* [ ] I converted at least three documented rules into validation code.
* [ ] I identified at least one possible data-leakage field.
* [ ] I documented at least one caveat or assumption.
* [ ] I produced a notebook, table, report, or reusable metadata file.
* [ ] I can explain how the dictionary supports EDA and modeling.

---

## 24. Related Outcome

Understand, clean, visualize, and explain datasets using business-oriented insights.

A data dictionary supports this outcome by connecting raw columns to:

* Business meaning
* Data-quality expectations
* Analytical assumptions
* Modeling decisions
* Actionable recommendations

---

## 25. Related Project

### Mini Project: Customer Churn EDA

Create an exploratory analysis that includes:

* Raw data inspection
* Dataset schema
* Data dictionary
* Missing-value analysis
* Duplicate detection
* Invalid-value checks
* Churn distribution
* Churn by contract type
* Churn by tenure
* Churn by monthly charge
* Related-feature analysis
* Three business insights
* Caveats and recommendations

Suggested project workflow:

```text
Raw Dataset
     |
     v
Schema Inspection
     |
     v
Data Dictionary
     |
     v
Quality Validation
     |
     v
Cleaning
     |
     v
Exploratory Analysis
     |
     v
Churn Insights
     |
     v
Business Recommendations
```

---

## 26. Summary

A **Data Dictionary** is a structured reference that explains the meaning, format, origin, rules, and limitations of each variable in a dataset.

It helps data professionals:

* Understand data before modeling
* Detect invalid or inconsistent values
* Prevent incorrect assumptions
* Avoid data leakage
* Improve reproducibility
* Communicate with technical and business teams
* Build trustworthy analytical and machine learning systems

A data dictionary should not be treated as optional documentation. It should be an active part of the data workflow and should be connected to validation code, cleaning logic, EDA, model development, and reporting.

The core workflow is:

```text
Understand the business question
            |
            v
Understand every variable
            |
            v
Validate the data
            |
            v
Explore patterns
            |
            v
Generate insights
            |
            v
Recommend actions
```

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
