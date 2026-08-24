# 001 — Data Understanding

| Field                  | Details                                        |
| ---------------------- | ---------------------------------------------- |
| **Course**             | 02 — Coding and EDA                            |
| **Module**             | Module 05 — Exploratory Data Analysis          |
| **Content Group**      | Data Understanding                             |
| **Roadmap Source**     | Exploratory Data Analysis / Data Understanding |
| **Lesson Type**        | Exploratory Data Analysis                      |
| **Order in Module**    | 001                                            |
| **Suggested Duration** | 20 minutes                                     |

---

## 1. Overview

**Data Understanding** is the process of examining a dataset before performing detailed analysis or building a machine learning model.

The goal is to understand:

* What each row represents
* What each column means
* Where the data comes from
* Which variable is the target
* Which columns may be useful as features
* Whether the data contains missing, incorrect, duplicated, or unusual values
* Whether the dataset is suitable for answering the business question

After completing this lesson, you should understand how Data Understanding connects raw data to analysis, modeling, experimentation, and deployment.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain Data Understanding in your own words.
* Identify where Data Understanding appears in an AI or Data Science workflow.
* Inspect the structure, meaning, and quality of a dataset.
* Identify numerical, categorical, datetime, text, identifier, and target variables.
* Detect basic data quality problems.
* Connect dataset fields to a business or research question.
* Create a small notebook containing data checks, charts, insights, and recommendations.

---

## 3. What Is Data Understanding?

Data Understanding is the stage where a data practitioner develops a clear mental model of the dataset.

A dataset should not be treated as only a collection of rows and columns. It represents objects, events, measurements, users, transactions, or observations from a real system.

For example, in a customer churn dataset:

* One row may represent one customer.
* `customer_id` identifies the customer.
* `monthly_charges` describes the customer's monthly payment.
* `contract_type` describes the customer's subscription agreement.
* `tenure_months` shows how long the customer has stayed.
* `churn` indicates whether the customer stopped using the service.

Understanding these meanings is necessary before creating charts, calculating metrics, or training models.

---

## 4. Why Data Understanding Matters

Poor understanding of data can produce technically correct but practically incorrect results.

For example:

* A model may accidentally use information that became available only after the prediction event.
* An identifier column may be incorrectly treated as a useful feature.
* Missing values may represent a meaningful business condition rather than a data error.
* A customer-level analysis may incorrectly use transaction-level rows.
* A duplicated table may inflate counts and distort summary statistics.
* A target variable may be defined differently from the actual business objective.

A strong Data Understanding process reduces these risks.

> Modeling before understanding the data usually produces fragile, misleading, or unusable results.

---

## 5. Position in the Data Science Workflow

```text
Business Question
       |
       v
Data Collection
       |
       v
Data Understanding
       |
       v
Data Cleaning
       |
       v
Exploratory Data Analysis
       |
       v
Feature Engineering
       |
       v
Modeling or Statistical Analysis
       |
       v
Evaluation
       |
       v
Recommendation or Deployment
```

Data Understanding connects the original business question to the technical analysis.

It helps determine whether:

* The available data can answer the question.
* Additional data is required.
* The target variable is clearly defined.
* The dataset is reliable enough for modeling.
* Important assumptions need to be documented.

---

## 6. Core Questions

Before analyzing a dataset, answer the following questions.

### 6.1 Business Context

* What problem are we trying to solve?
* Who will use the result?
* What decision will be made from the analysis?
* What does success mean?
* Which metrics represent success?

### 6.2 Unit of Observation

The **unit of observation** describes what one row represents.

Examples:

| Dataset          | One Row Represents                 |
| ---------------- | ---------------------------------- |
| Customer dataset | One customer                       |
| Sales dataset    | One transaction                    |
| Website dataset  | One page view or session           |
| Medical dataset  | One patient visit                  |
| Sensor dataset   | One measurement at a specific time |
| Image dataset    | One image                          |
| Text dataset     | One document, review, or message   |

Misunderstanding the unit of observation can lead to incorrect calculations.

For example, counting rows in a transaction dataset gives the number of transactions, not necessarily the number of customers.

### 6.3 Dataset Structure

Inspect:

* Number of rows
* Number of columns
* Column names
* Data types
* Index structure
* Primary key or identifier
* Target variable
* Feature variables
* Time range
* Data source

### 6.4 Data Meaning

For every important column, determine:

* What does the column represent?
* What unit is used?
* What values are valid?
* Can the column contain missing values?
* When was the value recorded?
* Is the value observed directly or calculated?
* Is the column available at prediction time?

---

## 7. Data Dictionary

A **data dictionary** describes the meaning and expected structure of each column.

Example:

| Column            | Type     | Description                    | Example   | Possible Issue                 |
| ----------------- | -------- | ------------------------------ | --------- | ------------------------------ |
| `customer_id`     | String   | Unique customer identifier     | `C1024`   | Duplicate IDs                  |
| `age`             | Integer  | Customer age in years          | `34`      | Negative or unrealistic values |
| `monthly_charges` | Float    | Monthly subscription fee       | `79.50`   | Missing or negative values     |
| `contract_type`   | Category | Subscription contract type     | `Monthly` | Inconsistent labels            |
| `tenure_months`   | Integer  | Number of months as a customer | `18`      | Values below zero              |
| `churn`           | Binary   | Whether the customer left      | `1`       | Ambiguous target definition    |

A data dictionary should ideally include:

* Column name
* Business meaning
* Data type
* Unit
* Valid range
* Allowed categories
* Missing-value meaning
* Source system
* Update frequency
* Known limitations

---

## 8. Common Feature Types

### 8.1 Numerical Features

Numerical features contain measurable quantities.

Examples:

* Age
* Price
* Revenue
* Temperature
* Number of purchases
* Account balance

Numerical features can be:

* **Continuous:** price, height, temperature
* **Discrete:** number of orders, number of complaints

Questions to ask:

* What is the minimum and maximum value?
* Are there impossible values?
* Is the distribution strongly skewed?
* Are there extreme outliers?
* Is the unit consistent?

### 8.2 Categorical Features

Categorical features describe groups or labels.

Examples:

* Country
* Product category
* Contract type
* Customer segment
* Payment method

Categorical features may be:

* **Nominal:** categories with no natural order
* **Ordinal:** categories with a meaningful order

Example of ordinal values:

```text
Low < Medium < High
```

Questions to ask:

* How many unique categories exist?
* Are category labels consistent?
* Are some categories rare?
* Is there an unexpected category?
* Should missing values be treated as a separate category?

### 8.3 Datetime Features

Datetime features represent dates or times.

Examples:

* Registration date
* Transaction timestamp
* Last login time
* Product delivery date

Datetime columns can provide derived features such as:

* Year
* Month
* Day of week
* Hour
* Customer tenure
* Time since last purchase

Questions to ask:

* What timezone is used?
* What time period does the dataset cover?
* Are there future dates?
* Are timestamps recorded consistently?
* Is there a risk of using future information?

### 8.4 Text Features

Text features contain unstructured language.

Examples:

* Customer reviews
* Support messages
* Product descriptions
* News articles

Questions to ask:

* What language is used?
* Are empty strings different from missing values?
* Does the text contain personal information?
* Is text length meaningful?
* Does the text require cleaning or tokenization?

### 8.5 Identifier Features

Identifiers uniquely distinguish records.

Examples:

* `customer_id`
* `order_id`
* `transaction_id`
* `device_id`

Identifiers are useful for:

* Joining tables
* Detecting duplicates
* Tracking records

However, they are usually not directly useful as machine learning features.

### 8.6 Target Variable

The target is the outcome that a model attempts to predict.

Examples:

| Problem                   | Target         |
| ------------------------- | -------------- |
| Customer churn prediction | `churn`        |
| House price prediction    | `sale_price`   |
| Fraud detection           | `is_fraud`     |
| Demand forecasting        | `future_sales` |
| Sentiment classification  | `sentiment`    |

The target variable must have a clear definition.

For example, “churn” could mean:

* Subscription cancellation
* No activity for 30 days
* No purchase for 90 days
* Account deletion

These definitions are not equivalent.

---

## 9. Initial Dataset Inspection

A basic inspection should include:

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

print(df.head())
print(df.shape)
print(df.columns)
print(df.info())
print(df.describe(include="all"))
```

### What Each Command Shows

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `df.head()`     | Displays the first rows                   |
| `df.shape`      | Returns the number of rows and columns    |
| `df.columns`    | Lists column names                        |
| `df.info()`     | Shows data types and missing-value counts |
| `df.describe()` | Produces summary statistics               |

---

## 10. Schema Inspection

Create a simple schema summary:

```python
schema_summary = pd.DataFrame({
    "column": df.columns,
    "data_type": df.dtypes.astype(str),
    "missing_count": df.isna().sum(),
    "missing_percentage": df.isna().mean() * 100,
    "unique_values": df.nunique()
})

schema_summary
```

This summary helps identify:

* Columns with incorrect data types
* Columns with many missing values
* Identifier-like columns
* Constant columns
* High-cardinality categorical columns

---

## 11. Data Quality Dimensions

Data quality should be evaluated from multiple perspectives.

### 11.1 Completeness

Completeness measures whether required values are present.

```python
missing_summary = (
    df.isna()
      .sum()
      .sort_values(ascending=False)
      .to_frame("missing_count")
)

missing_summary["missing_percentage"] = (
    missing_summary["missing_count"] / len(df) * 100
)
```

A high missing percentage does not automatically mean a column should be removed. First investigate why the values are missing.

### 11.2 Uniqueness

Uniqueness checks whether records or identifiers are duplicated.

```python
duplicate_rows = df.duplicated().sum()
duplicate_customer_ids = df["customer_id"].duplicated().sum()

print("Duplicate rows:", duplicate_rows)
print("Duplicate customer IDs:", duplicate_customer_ids)
```

### 11.3 Validity

Validity checks whether values follow expected rules.

Examples:

```python
invalid_age = df[(df["age"] < 0) | (df["age"] > 120)]

invalid_charges = df[df["monthly_charges"] < 0]

invalid_contracts = df[
    ~df["contract_type"].isin(["Monthly", "One Year", "Two Year"])
]
```

### 11.4 Consistency

Consistency checks whether values agree across columns or systems.

Examples:

* `end_date` should not be earlier than `start_date`.
* A cancelled subscription should have a cancellation date.
* Currency units should be consistent.
* Category labels should use consistent spelling.

### 11.5 Accuracy

Accuracy measures whether values correctly represent reality.

Accuracy is difficult to verify from the dataset alone. It may require:

* Comparing records with source systems
* Reviewing samples manually
* Consulting domain experts
* Comparing data with known reference values

### 11.6 Timeliness

Timeliness checks whether the data is recent enough for the intended use.

Questions include:

* When was the dataset last updated?
* How frequently is it refreshed?
* Does the time period match the current business environment?
* Has user behavior changed since the data was collected?

---

## 12. Univariate Analysis

Univariate analysis examines one variable at a time.

### Numerical Variable

```python
df["monthly_charges"].describe()
```

Histogram:

```python
import matplotlib.pyplot as plt

df["monthly_charges"].hist(bins=30)

plt.title("Distribution of Monthly Charges")
plt.xlabel("Monthly Charges")
plt.ylabel("Number of Customers")
plt.show()
```

Questions to answer:

* What is the center of the distribution?
* How spread out are the values?
* Is the distribution symmetric or skewed?
* Are there unusual values?
* Are there multiple peaks?

### Categorical Variable

```python
contract_counts = df["contract_type"].value_counts(dropna=False)
contract_counts
```

Bar chart:

```python
contract_counts.plot(kind="bar")

plt.title("Customers by Contract Type")
plt.xlabel("Contract Type")
plt.ylabel("Number of Customers")
plt.show()
```

Questions to answer:

* Which category is most common?
* Are some categories underrepresented?
* Are there invalid labels?
* Does one category dominate the dataset?

---

## 13. Bivariate Analysis

Bivariate analysis examines the relationship between two variables.

Examples:

* Numerical feature versus target
* Categorical feature versus target
* Numerical feature versus numerical feature
* Time versus business metric

### Churn Rate by Contract Type

```python
churn_by_contract = (
    df.groupby("contract_type")["churn"]
      .mean()
      .sort_values(ascending=False)
)

churn_by_contract
```

```python
churn_by_contract.plot(kind="bar")

plt.title("Churn Rate by Contract Type")
plt.xlabel("Contract Type")
plt.ylabel("Churn Rate")
plt.show()
```

### Monthly Charges by Churn Status

```python
df.groupby("churn")["monthly_charges"].describe()
```

Box plot:

```python
df.boxplot(
    column="monthly_charges",
    by="churn"
)

plt.title("Monthly Charges by Churn Status")
plt.suptitle("")
plt.xlabel("Churn")
plt.ylabel("Monthly Charges")
plt.show()
```

---

## 14. Relationship Analysis

The next step is to examine how variables interact.

```text
Schema
  |
  v
Quality Checks
  |
  v
Individual Distributions
  |
  v
Relationships Between Variables
  |
  v
Patterns and Anomalies
  |
  v
Business Insight
  |
  v
Recommendation
```

Possible relationship questions include:

* Does churn increase when monthly charges increase?
* Do customers with longer tenure churn less often?
* Does contract type affect churn?
* Are some payment methods associated with higher churn?
* Does customer behavior change over time?

---

## 15. Correlation Analysis

Correlation measures the strength of association between numerical variables.

```python
numeric_columns = df.select_dtypes(include="number")

correlation_matrix = numeric_columns.corr()
correlation_matrix
```

Important limitations:

* Correlation does not prove causation.
* Pearson correlation mainly detects linear relationships.
* Outliers can strongly affect correlation.
* Two variables may be related through another hidden variable.
* Categorical variables require different analysis techniques.

---

## 16. Target Distribution

For a classification problem, inspect the target balance.

```python
target_counts = df["churn"].value_counts()
target_percentage = df["churn"].value_counts(normalize=True) * 100

print(target_counts)
print(target_percentage)
```

Example interpretation:

```text
Churn = 0: 73%
Churn = 1: 27%
```

This indicates moderate class imbalance.

Class imbalance can affect:

* Model training
* Evaluation metrics
* Threshold selection
* Sampling strategy
* Business interpretation

Accuracy alone may be misleading for imbalanced datasets.

---

## 17. Data Leakage

Data leakage occurs when a model receives information that would not be available when making a real prediction.

Examples:

* Using `cancellation_date` to predict churn
* Using final exam scores to predict whether a student will pass
* Using refund status to predict fraudulent transactions
* Calculating features with future transactions

Ask this question for every feature:

> Would this information be available at the exact moment when the prediction must be made?

If the answer is no, the feature may cause leakage.

---

## 18. Assumptions and Caveats

A Data Understanding report should document assumptions.

Examples:

* Each row represents one unique customer.
* The `churn` column is assumed to use `1` for churned customers.
* Monthly charges are assumed to use the same currency.
* Missing values in `internet_service` may represent customers without internet service.
* The dataset may not include customers who joined after the extraction date.
* The analysis shows association, not causation.

Documenting assumptions makes the analysis easier to review and reproduce.

---

## 19. From Observation to Insight

A chart alone is not an insight.

A useful insight should contain:

1. **Observation:** What happened?
2. **Evidence:** Which metric or chart supports it?
3. **Interpretation:** Why might it matter?
4. **Recommendation:** What action should be considered?
5. **Caveat:** What uncertainty remains?

### Weak Statement

> Monthly customers have higher churn.

### Stronger Insight

> Customers with monthly contracts have a substantially higher churn rate than customers with one-year or two-year contracts. This suggests that long-term commitments may improve retention. The business could test discounted annual plans for high-risk monthly customers. However, the relationship may also reflect differences in customer tenure or pricing.

---

## 20. Practical Demo

### Step 1: Load the Dataset

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")
```

### Step 2: Inspect the Dataset

```python
print(df.head())
print(df.shape)
df.info()
```

### Step 3: Check Missing Values

```python
missing_values = (
    df.isna()
      .mean()
      .mul(100)
      .sort_values(ascending=False)
)

missing_values
```

### Step 4: Check Duplicate Records

```python
print("Duplicate rows:", df.duplicated().sum())
```

### Step 5: Inspect the Target

```python
df["churn"].value_counts(normalize=True)
```

### Step 6: Inspect Important Features

```python
df["contract_type"].value_counts(dropna=False)
df["monthly_charges"].describe()
df["tenure_months"].describe()
```

### Step 7: Analyze Relationships

```python
df.groupby("contract_type")["churn"].mean()
```

### Step 8: Write Insights

Example:

```text
Insight 1:
Customers with monthly contracts have the highest churn rate.

Insight 2:
Customers with shorter tenure are more likely to churn.

Insight 3:
Customers with high monthly charges appear to have a higher churn rate.
```

### Step 9: Add Caveats

```text
- The dataset may not represent all customer segments.
- Churn patterns may change over time.
- The observed relationships do not prove causation.
- Additional behavioral data may improve the analysis.
```

---

## 21. Recommended Notebook Structure

```text
01. Problem Definition
02. Dataset Description
03. Data Dictionary
04. Schema Inspection
05. Data Quality Checks
06. Target Analysis
07. Univariate Analysis
08. Relationship Analysis
09. Key Insights
10. Recommendations
11. Assumptions and Caveats
12. Next Steps
```

This structure makes the notebook easier to review and reproduce.

---

## 22. Practical Exercise

Choose a small CSV dataset and create an exploratory notebook.

### Required Tasks

1. Describe the business or research question.
2. Define what one row represents.
3. Display the dataset shape.
4. Create a data dictionary for important columns.
5. Identify numerical, categorical, datetime, text, identifier, and target columns.
6. Check missing values.
7. Check duplicated records.
8. Check invalid or impossible values.
9. Analyze the target distribution.
10. Create at least three charts or summary tables.
11. Write three business-oriented insights.
12. Add at least one recommendation.
13. Document assumptions and caveats.
14. Save all cleaning and transformation steps in code.

### Suggested Output

```text
data-understanding/
|
|-- data/
|   |-- raw/
|   |   `-- customer_churn.csv
|   `-- processed/
|       `-- customer_churn_clean.csv
|
|-- notebooks/
|   `-- 01_data_understanding.ipynb
|
|-- reports/
|   `-- data_understanding_report.md
|
|-- src/
|   `-- data_checks.py
|
|-- requirements.txt
`-- README.md
```

---

## 23. Common Mistakes

### 23.1 Starting Modeling Too Early

Building a model before understanding the data can hide:

* Target leakage
* Incorrect labels
* Invalid features
* Sampling bias
* Duplicate records

### 23.2 Performing Manual, Unrecorded Cleaning

Manual spreadsheet edits are difficult to reproduce.

Prefer scripted transformations:

```python
df["contract_type"] = (
    df["contract_type"]
      .str.strip()
      .str.title()
)
```

### 23.3 Overwriting Raw Data

Keep raw data unchanged.

Recommended structure:

```text
data/
|-- raw/
`-- processed/
```

### 23.4 Ignoring the Unit of Observation

A row may represent a transaction rather than a customer.

Always define the unit of observation before calculating totals or averages.

### 23.5 Treating Every Missing Value as an Error

A missing value may indicate:

* Not applicable
* Not collected
* Unknown
* System error
* Customer refusal
* Absence of a service

Investigate the meaning before filling or removing it.

### 23.6 Using Identifier Columns as Features

Identifiers may create artificial patterns and poor generalization.

Examples:

* Customer ID
* Order ID
* Transaction ID

### 23.7 Creating Charts Without Interpretation

Every important chart should be followed by:

* An observation
* An explanation
* A business implication
* A caveat

### 23.8 Confusing Correlation With Causation

A relationship between variables does not prove that one variable causes the other.

### 23.9 Ignoring Time

Random train-test splitting may be inappropriate for time-dependent data.

Time-aware analysis may require:

```text
Past Data -> Training Set
Future Data -> Validation or Test Set
```

---

## 24. Completion Checklist

### Conceptual Understanding

* [ ] I can explain Data Understanding in one or two minutes.
* [ ] I can explain why it is necessary before modeling.
* [ ] I can define the unit of observation.
* [ ] I can distinguish features, identifiers, and targets.

### Dataset Inspection

* [ ] I know the number of rows and columns.
* [ ] I have inspected column names and data types.
* [ ] I have identified missing values.
* [ ] I have checked duplicated records.
* [ ] I have reviewed numerical ranges.
* [ ] I have reviewed categorical values.
* [ ] I have inspected the target distribution.

### Analysis

* [ ] I have created at least three charts or summary tables.
* [ ] I have analyzed important relationships.
* [ ] I have checked for possible data leakage.
* [ ] I have written at least three insights.
* [ ] I have included at least one recommendation.

### Reproducibility

* [ ] I kept the raw dataset unchanged.
* [ ] I saved cleaning and transformation steps as code.
* [ ] I documented assumptions and caveats.
* [ ] Another person can rerun my notebook.
* [ ] I have identified questions for further analysis.

---

## 25. Expected Outcome

After this lesson, you should be able to:

> Understand, inspect, clean, visualize, and explain datasets using business-oriented insights.

You should also be able to convert the lesson into a practical artifact such as:

* A Jupyter notebook
* A data quality report
* A SQL analysis
* A dashboard
* A reusable validation script
* A portfolio case study
* A preprocessing pipeline

---

## 26. Related Project

### Mini Project: Customer Churn Exploratory Data Analysis

Build a small EDA project that includes:

* Business problem definition
* Dataset description
* Data dictionary
* Schema inspection
* Missing-value analysis
* Duplicate detection
* Churn distribution
* Churn analysis by customer features
* At least three visualizations
* Three or more insights
* Business recommendations
* Assumptions and limitations
* Reproducible cleaning code

### Example Questions

* Which customer groups have the highest churn rate?
* Does contract type affect churn?
* Is tenure related to churn?
* Are monthly charges associated with churn?
* Which variables should be investigated further?
* What retention strategies could be tested?

---

## 27. Summary

**Data Understanding** is a foundational stage in the AI and Data Science workflow.

It connects dataset fields to the business question and helps determine whether the data is meaningful, reliable, and suitable for analysis.

A complete Data Understanding process usually includes:

```text
Business Question
        |
        v
Dataset Context
        |
        v
Schema and Data Dictionary
        |
        v
Data Quality Checks
        |
        v
Distribution Analysis
        |
        v
Relationship Analysis
        |
        v
Insights and Recommendations
        |
        v
Assumptions and Next Steps
```

Do not stop at reading definitions. Turn this topic into a notebook, query, chart, validation script, dashboard, model experiment, API, or portfolio report so that the knowledge becomes practical and reusable.

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
