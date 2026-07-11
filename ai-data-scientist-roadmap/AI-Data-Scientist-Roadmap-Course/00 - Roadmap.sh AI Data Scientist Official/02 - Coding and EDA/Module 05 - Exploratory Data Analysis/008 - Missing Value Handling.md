# 008 - Missing Value Handling

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Data Cleaning
**Roadmap Source:** Exploratory Data Analysis / Data Cleaning
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 008
**Suggested Duration:** 20 minutes

---

## 1. Overview

**Missing Value Handling** is the process of detecting, understanding, and treating missing data before analysis or model training.

Missing values may appear as:

* `NaN`
* `None`
* Empty strings
* `"Unknown"`
* `"N/A"`
* Special values such as `-1`, `999`, or `"?"`
* Missing timestamps
* Missing records caused by failed data collection

Handling missing values is not only a technical cleaning task. The pattern of missingness may reveal important information about the business process, data collection system, or user behavior.

A good missing-value workflow should answer:

1. Which columns contain missing values?
2. How much data is missing?
3. Why is the data missing?
4. Is the missingness related to the target variable?
5. Should the values be removed, imputed, flagged, or investigated?
6. How does the selected strategy affect the final analysis or model?

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain missing value handling in your own words.
* Detect missing values in numeric, categorical, datetime, and text columns.
* Calculate the number and percentage of missing values.
* Distinguish between MCAR, MAR, and MNAR missingness.
* Select an appropriate treatment strategy for each feature.
* Apply imputation without causing data leakage.
* Build a reproducible missing-value handling pipeline.
* Document assumptions, risks, and limitations related to missing data.

---

## 3. Why Missing Values Matter

Missing values can affect both exploratory analysis and machine learning.

### 3.1 Impact on statistical analysis

Missing values may:

* Change the calculated mean or median.
* Reduce the effective sample size.
* Distort feature distributions.
* Create misleading correlations.
* Hide important customer or system behavior.
* Produce incorrect charts and summary tables.

### 3.2 Impact on machine learning

Many machine-learning algorithms cannot directly process missing values.

For example, missing values may cause:

* Model training errors.
* Unstable predictions.
* Biased coefficients.
* Incorrect feature importance.
* Lower prediction accuracy.
* Differences between training and production behavior.

### 3.3 Missingness can be informative

A missing value may itself contain useful information.

For example:

* A missing income value may indicate that a customer refused to provide financial information.
* A missing cancellation reason may mean the customer is still active.
* A missing delivery timestamp may indicate a failed delivery.
* A missing support rating may mean the customer never contacted support.

Therefore, missing values should not always be treated as random errors.

---

## 4. Common Representations of Missing Data

A dataset may contain several different representations of missingness.

| Representation       | Example              | Detection method         |
| -------------------- | -------------------- | ------------------------ |
| Native missing value | `NaN`, `None`        | `isna()`                 |
| Empty string         | `""`                 | String comparison        |
| Whitespace           | `"   "`              | `str.strip()`            |
| Text placeholder     | `"N/A"`, `"Unknown"` | Value replacement        |
| Numeric placeholder  | `-1`, `999`          | Domain validation        |
| Invalid date         | `"0000-00-00"`       | Datetime parsing         |
| Impossible value     | Age = `-5`           | Business-rule validation |

Before analyzing missing values, convert all recognized placeholders into a consistent representation such as `NaN`.

```python
import numpy as np
import pandas as pd

missing_tokens = [
    "",
    " ",
    "N/A",
    "NA",
    "null",
    "NULL",
    "None",
    "Unknown",
    "?"
]

df = pd.read_csv(
    "customers.csv",
    na_values=missing_tokens
)
```

Numeric placeholders should only be replaced after checking the business meaning of the column.

```python
df["income"] = df["income"].replace(-1, np.nan)
df["age"] = df["age"].replace(999, np.nan)
```

---

## 5. Types of Missingness

Understanding why values are missing helps determine the correct treatment strategy.

### 5.1 Missing Completely at Random — MCAR

Data is **Missing Completely at Random** when the probability of a value being missing is unrelated to both observed and unobserved variables.

Example:

* A sensor randomly fails for a few seconds.
* A small number of records are lost during file transfer.
* A questionnaire page is accidentally damaged.

Under MCAR, removing incomplete records is less likely to introduce bias, especially when the missing percentage is small.

### 5.2 Missing at Random — MAR

Data is **Missing at Random** when missingness depends on other observed variables.

Example:

* Younger customers are less likely to provide income information.
* Customers from a specific region are less likely to complete a survey.
* Mobile users are more likely to skip a long form field.

The value is not missing completely randomly, but the missingness can potentially be explained using available features.

Under MAR, model-based or group-based imputation may be appropriate.

### 5.3 Missing Not at Random — MNAR

Data is **Missing Not at Random** when the missingness depends on the missing value itself or another unobserved factor.

Example:

* Customers with very high debt avoid reporting their debt.
* Dissatisfied employees skip the satisfaction survey.
* Patients with severe symptoms are more likely to miss follow-up visits.

MNAR is difficult to solve using standard imputation because the missingness mechanism is related to information that is not fully observed.

It often requires:

* Domain knowledge
* Additional data collection
* Sensitivity analysis
* Explicit missingness modeling
* Clear documentation of assumptions

---

## 6. Missingness Classification Summary

| Type | Missingness depends on         | Example                                     | Common response                               |
| ---- | ------------------------------ | ------------------------------------------- | --------------------------------------------- |
| MCAR | Nothing systematic             | Random sensor failure                       | Deletion or simple imputation                 |
| MAR  | Observed variables             | Income missing more often for younger users | Conditional or model-based imputation         |
| MNAR | Missing value or hidden factor | High-debt users hide debt                   | Domain investigation and sensitivity analysis |

> In real-world projects, the missingness type is rarely known with certainty. Treat MCAR, MAR, and MNAR as hypotheses that should be investigated rather than automatically assumed.

---

## 7. Missing Value Analysis Workflow

```text
Load raw data
    |
    v
Standardize missing-value representations
    |
    v
Measure missing count and percentage
    |
    v
Inspect missingness by column and row
    |
    v
Compare missingness with target and other features
    |
    v
Investigate possible business or system causes
    |
    v
Choose a handling strategy
    |
    v
Fit transformations using training data only
    |
    v
Validate distributions and model performance
    |
    v
Document decisions, assumptions, and limitations
```

---

## 8. Detecting Missing Values

### 8.1 Check whether the dataset contains missing values

```python
df.isna().any()
```

### 8.2 Count missing values by column

```python
missing_count = df.isna().sum()
print(missing_count)
```

### 8.3 Calculate missing percentages

```python
missing_percentage = df.isna().mean().mul(100)

missing_report = pd.DataFrame({
    "missing_count": df.isna().sum(),
    "missing_percentage": missing_percentage
}).sort_values(
    by="missing_percentage",
    ascending=False
)

print(missing_report)
```

Example output:

| Feature          | Missing count | Missing percentage |
| ---------------- | ------------: | -----------------: |
| `monthly_income` |           420 |              21.0% |
| `support_rating` |           184 |               9.2% |
| `contract_type`  |            30 |               1.5% |
| `customer_id`    |             0 |               0.0% |

### 8.4 Count missing values by row

```python
df["missing_feature_count"] = df.isna().sum(axis=1)
```

Rows with many missing values may represent:

* Failed data ingestion
* Incomplete forms
* Test records
* Broken integrations
* A specific customer segment

### 8.5 Inspect rows with missing values

```python
rows_with_missing = df[df.isna().any(axis=1)]
print(rows_with_missing.head())
```

---

## 9. Visualizing Missingness

### 9.1 Missing percentage bar chart

```python
import matplotlib.pyplot as plt

missing_percentage = (
    df.isna()
      .mean()
      .mul(100)
      .sort_values(ascending=False)
)

missing_percentage = missing_percentage[
    missing_percentage > 0
]

missing_percentage.plot(
    kind="bar",
    figsize=(10, 5)
)

plt.title("Missing Values by Feature")
plt.xlabel("Feature")
plt.ylabel("Missing values (%)")
plt.xticks(rotation=45, ha="right")
plt.tight_layout()
plt.show()
```

### 9.2 Missingness indicator

Create a binary feature that records whether the original value was missing.

```python
df["income_was_missing"] = (
    df["monthly_income"]
    .isna()
    .astype(int)
)
```

This allows you to examine whether missingness is related to the target.

```python
churn_by_missingness = (
    df.groupby("income_was_missing")["churn"]
      .mean()
)

print(churn_by_missingness)
```

If customers with missing income have a significantly different churn rate, the missingness pattern may contain predictive information.

---

## 10. Main Missing-Value Handling Strategies

There is no single strategy that is correct for every dataset.

The main options are:

1. Remove rows.
2. Remove columns.
3. Fill with a constant.
4. Use simple statistical imputation.
5. Use group-based imputation.
6. Use time-based imputation.
7. Use model-based imputation.
8. Add missingness indicators.
9. Leave missing values for models that support them.
10. Collect or recover the original data.

---

## 11. Strategy 1: Remove Rows

Remove rows when:

* The missing percentage is very small.
* Missingness is approximately random.
* The dataset is large enough.
* The missing feature is essential.
* Imputation would introduce unreasonable assumptions.

```python
df_clean = df.dropna(
    subset=["target", "customer_id"]
)
```

Remove rows where any value is missing:

```python
df_complete = df.dropna()
```

This approach should be used carefully because it can:

* Reduce the sample size.
* Remove rare groups.
* Introduce selection bias.
* Change the target distribution.

Before removing rows, compare the original and remaining data.

```python
print("Original rows:", len(df))
print("Remaining rows:", len(df_complete))
print("Removed rows:", len(df) - len(df_complete))
```

---

## 12. Strategy 2: Remove Columns

Consider removing a feature when:

* Most values are missing.
* The feature is not important to the business question.
* The data cannot be reliably recovered.
* The feature would be unavailable during prediction.
* Imputation would be mostly artificial.

```python
df = df.drop(columns=["secondary_phone"])
```

A fixed threshold such as 50% or 80% can be useful for screening, but it should not automatically determine the decision.

A feature with 90% missing values may still be valuable if:

* It represents a rare but important event.
* The presence of the value is highly informative.
* The feature is required for compliance or risk analysis.

---

## 13. Strategy 3: Constant-Value Imputation

Replace missing values with a predefined constant.

### Categorical feature

```python
df["occupation"] = df["occupation"].fillna("Unknown")
```

### Numeric feature

```python
df["number_of_complaints"] = (
    df["number_of_complaints"]
    .fillna(0)
)
```

Use zero only when zero has a valid business meaning.

For example:

* Missing complaint count may mean no complaint was recorded.
* Missing income does not normally mean zero income.
* Missing account balance does not necessarily mean a zero balance.

Constant imputation is useful when:

* Missingness represents a valid category.
* The model needs a clear missing-state value.
* A missing indicator is included.
* The constant is outside the normal range and documented.

---

## 14. Strategy 4: Mean, Median, and Mode Imputation

### 14.1 Mean imputation

```python
mean_income = df["monthly_income"].mean()

df["monthly_income"] = (
    df["monthly_income"]
    .fillna(mean_income)
)
```

Mean imputation is appropriate when:

* The distribution is approximately symmetric.
* There are few extreme outliers.
* Missingness is limited.

However, mean imputation may:

* Reduce variance.
* Create an artificial concentration near the mean.
* Distort relationships between features.

### 14.2 Median imputation

```python
median_income = df["monthly_income"].median()

df["monthly_income"] = (
    df["monthly_income"]
    .fillna(median_income)
)
```

Median imputation is often safer for skewed numeric variables.

Typical examples include:

* Income
* Transaction amount
* Customer lifetime value
* House price
* Session duration

### 14.3 Mode imputation

```python
most_common_contract = (
    df["contract_type"]
    .mode()
    .iloc[0]
)

df["contract_type"] = (
    df["contract_type"]
    .fillna(most_common_contract)
)
```

Mode imputation is commonly used for categorical features, but it may overrepresent the majority category.

---

## 15. Choosing Between Mean and Median

| Distribution              | Recommended starting strategy     |
| ------------------------- | --------------------------------- |
| Approximately symmetric   | Mean                              |
| Strongly skewed           | Median                            |
| Contains extreme outliers | Median                            |
| Multimodal distribution   | Group-based or model-based method |
| Time-dependent values     | Time-series method                |
| Category values           | Mode or `"Unknown"`               |

Inspect the distribution before selecting a method.

```python
df["monthly_income"].hist(bins=30)
plt.title("Monthly Income Distribution")
plt.xlabel("Monthly income")
plt.ylabel("Frequency")
plt.show()
```

---

## 16. Strategy 5: Group-Based Imputation

A global mean or median may ignore important differences between groups.

For example, income may depend on:

* Job role
* Region
* Customer segment
* Education level
* Age group

Group-based imputation preserves more local structure.

```python
df["monthly_income"] = (
    df.groupby("job_level")["monthly_income"]
      .transform(
          lambda series: series.fillna(series.median())
      )
)
```

A fallback value should be included when an entire group is missing.

```python
group_median = (
    df.groupby("job_level")["monthly_income"]
      .transform("median")
)

global_median = df["monthly_income"].median()

df["monthly_income"] = (
    df["monthly_income"]
    .fillna(group_median)
    .fillna(global_median)
)
```

Group-based imputation is useful when the grouping feature is:

* Available at prediction time.
* Strongly related to the missing feature.
* Reliable and not itself heavily missing.
* Defined using domain knowledge.

---

## 17. Strategy 6: Time-Series Imputation

For ordered or time-dependent data, row order matters.

### 17.1 Forward fill

Use the most recent available value.

```python
df = df.sort_values("timestamp")

df["temperature"] = (
    df["temperature"]
    .ffill()
)
```

### 17.2 Backward fill

Use the next available value.

```python
df["temperature"] = (
    df["temperature"]
    .bfill()
)
```

### 17.3 Linear interpolation

```python
df["temperature"] = (
    df["temperature"]
    .interpolate(method="linear")
)
```

### 17.4 Grouped forward fill

For customer-level or device-level data, never fill across different entities.

```python
df = df.sort_values(
    ["device_id", "timestamp"]
)

df["temperature"] = (
    df.groupby("device_id")["temperature"]
      .ffill()
)
```

Time-based imputation should consider:

* Maximum acceptable time gap.
* Seasonal patterns.
* Sudden changes.
* Whether future information is allowed.
* Whether the task is forecasting or historical analysis.

Using backward fill in a forecasting pipeline may leak future information.

---

## 18. Strategy 7: Model-Based Imputation

More advanced methods predict missing values using other features.

Examples include:

* K-nearest neighbors imputation
* Iterative imputation
* Regression-based imputation
* Random forest imputation
* Multiple imputation

### KNN imputation

```python
from sklearn.impute import KNNImputer

numeric_columns = [
    "age",
    "monthly_income",
    "monthly_charges"
]

imputer = KNNImputer(n_neighbors=5)

df[numeric_columns] = imputer.fit_transform(
    df[numeric_columns]
)
```

Model-based methods may preserve feature relationships better than simple imputation.

However, they are:

* More computationally expensive.
* More difficult to explain.
* Sensitive to feature scaling.
* Capable of overfitting.
* Still based on assumptions about missingness.

Use advanced methods only when they provide measurable benefits.

---

## 19. Strategy 8: Add Missingness Indicators

A missingness indicator records whether the original value was missing.

```python
df["income_missing"] = (
    df["monthly_income"]
    .isna()
    .astype(int)
)

df["monthly_income"] = (
    df["monthly_income"]
    .fillna(df["monthly_income"].median())
)
```

This approach preserves two pieces of information:

1. The imputed numeric value.
2. The fact that the original value was missing.

Missing indicators are especially useful when:

* Missingness may be related to customer behavior.
* Missingness may be associated with the target.
* A constant or median imputation is used.
* The production system may frequently receive missing inputs.

Do not create indicators for every feature without evaluation. Too many indicators may increase noise and complexity.

---

## 20. Decision Guide

```text
Is the missing feature required?
    |
    +-- No --> Consider removing the feature
    |
    +-- Yes
          |
          v
Is the missing percentage very small and approximately random?
          |
          +-- Yes --> Consider removing affected rows
          |
          +-- No
                |
                v
Does missingness have a meaningful business interpretation?
                |
                +-- Yes --> Add a missing category or indicator
                |
                +-- No
                      |
                      v
What is the feature type?
                      |
                      +-- Numeric
                      |     |
                      |     +-- Symmetric --> Mean
                      |     +-- Skewed/outliers --> Median
                      |     +-- Group-dependent --> Group median
                      |     +-- Complex relationships --> Model-based method
                      |
                      +-- Categorical
                      |     |
                      |     +-- Missing is meaningful --> "Unknown"
                      |     +-- Missing is random --> Mode
                      |
                      +-- Time series
                            |
                            +-- Short gaps --> Forward fill/interpolation
                            +-- Long gaps --> Investigate or use domain model
```

---

## 21. Data Leakage During Imputation

One of the most common mistakes is calculating imputation values using the entire dataset before splitting it.

Incorrect workflow:

```python
df["income"] = df["income"].fillna(
    df["income"].median()
)

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2
)
```

The median is calculated using both training and test data. This allows information from the test set to influence training.

Correct workflow:

```python
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

imputer = SimpleImputer(strategy="median")

X_train_imputed = imputer.fit_transform(X_train)
X_test_imputed = imputer.transform(X_test)
```

The rule is:

> Fit the imputer on the training data and use the fitted imputer to transform validation, test, and production data.

---

## 22. Building a Reproducible Pipeline

Use a machine-learning pipeline to combine imputation and modeling.

```python
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression

numeric_features = [
    "age",
    "monthly_income",
    "monthly_charges"
]

categorical_features = [
    "contract_type",
    "payment_method",
    "region"
]

numeric_pipeline = Pipeline(
    steps=[
        (
            "imputer",
            SimpleImputer(
                strategy="median",
                add_indicator=True
            )
        )
    ]
)

categorical_pipeline = Pipeline(
    steps=[
        (
            "imputer",
            SimpleImputer(
                strategy="most_frequent"
            )
        ),
        (
            "encoder",
            OneHotEncoder(
                handle_unknown="ignore"
            )
        )
    ]
)

preprocessor = ColumnTransformer(
    transformers=[
        (
            "numeric",
            numeric_pipeline,
            numeric_features
        ),
        (
            "categorical",
            categorical_pipeline,
            categorical_features
        )
    ]
)

model = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        (
            "classifier",
            LogisticRegression(max_iter=1000)
        )
    ]
)

model.fit(X_train, y_train)
predictions = model.predict(X_test)
```

Benefits of using a pipeline:

* Prevents data leakage.
* Ensures consistent transformations.
* Simplifies deployment.
* Improves experiment reproducibility.
* Makes cross-validation safer.
* Keeps preprocessing and modeling together.

---

## 23. Target Variable Missingness

Missing target values require special treatment.

```python
df["churn"].isna().sum()
```

For supervised learning, rows with missing targets are usually excluded from model training.

```python
labeled_df = df.dropna(subset=["churn"])
```

Do not normally impute the target using mean, median, or mode because this creates artificial labels.

Rows without targets may still be useful for:

* Unsupervised learning
* Semi-supervised learning
* Future prediction
* Data quality analysis
* Production inference

Always investigate why the target is missing.

---

## 24. Demo: Customer Churn Dataset

Assume the dataset contains:

| Feature          | Type        | Possible missingness                       |
| ---------------- | ----------- | ------------------------------------------ |
| `customer_id`    | Identifier  | Data ingestion error                       |
| `age`            | Numeric     | Customer did not provide birth information |
| `monthly_income` | Numeric     | Customer refused to answer                 |
| `contract_type`  | Categorical | Legacy system issue                        |
| `support_rating` | Numeric     | Customer never contacted support           |
| `churn`          | Target      | Labeling process incomplete                |

### Step 1: Create a missing-value report

```python
missing_report = (
    df.isna()
      .agg(["sum", "mean"])
      .T
      .rename(
          columns={
              "sum": "missing_count",
              "mean": "missing_ratio"
          }
      )
)

missing_report["missing_percentage"] = (
    missing_report["missing_ratio"] * 100
)

missing_report = missing_report.sort_values(
    "missing_percentage",
    ascending=False
)

print(missing_report)
```

### Step 2: Examine missingness against churn

```python
df["income_missing"] = (
    df["monthly_income"]
    .isna()
    .astype(int)
)

income_missing_churn = (
    df.groupby("income_missing")["churn"]
      .agg(["count", "mean"])
)

print(income_missing_churn)
```

### Step 3: Define treatment rules

Example decisions:

| Feature          | Strategy                               | Reason                                    |
| ---------------- | -------------------------------------- | ----------------------------------------- |
| `customer_id`    | Remove invalid rows                    | Required unique identifier                |
| `age`            | Median imputation                      | Numeric and mildly skewed                 |
| `monthly_income` | Segment median plus indicator          | Missingness may be informative            |
| `contract_type`  | `"Unknown"` category                   | Legacy records form a meaningful group    |
| `support_rating` | Missing indicator or separate category | Missing may mean no support interaction   |
| `churn`          | Remove from supervised training        | Target should not be artificially imputed |

### Step 4: Validate after imputation

```python
print(
    df[
        [
            "age",
            "monthly_income",
            "support_rating"
        ]
    ].isna().sum()
)
```

Compare distributions before and after treatment.

```python
before = raw_df["monthly_income"].describe()
after = df["monthly_income"].describe()

comparison = pd.DataFrame({
    "before": before,
    "after": after
})

print(comparison)
```

---

## 25. Evaluating an Imputation Strategy

Do not evaluate a strategy only by checking that no `NaN` values remain.

Evaluate whether the method:

* Preserves the feature distribution.
* Preserves relationships between variables.
* Improves or maintains validation performance.
* Produces reasonable business values.
* Works consistently in production.
* Avoids future information.
* Is explainable to stakeholders.

You can compare multiple strategies through cross-validation.

```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(
    model,
    X,
    y,
    cv=5,
    scoring="roc_auc"
)

print("Mean ROC-AUC:", scores.mean())
print("Standard deviation:", scores.std())
```

Possible experiments:

* Mean versus median imputation
* Median versus group median
* Imputation with versus without missing indicators
* Simple imputation versus KNN imputation
* Feature removal versus imputation

---

## 26. Missing Values in Production

Missing-value handling must also work after deployment.

Production systems should define:

* Which features are required.
* Which features are optional.
* Default values for optional features.
* Validation rules.
* Acceptable missing percentages.
* Monitoring thresholds.
* Alert conditions.
* Fallback behavior.

Example validation logic:

```python
def validate_input(record: dict) -> list[str]:
    errors = []

    if record.get("customer_id") is None:
        errors.append("customer_id is required")

    age = record.get("age")

    if age is not None and not 0 <= age <= 120:
        errors.append("age must be between 0 and 120")

    return errors
```

Monitor missing rates over time:

```python
current_missing_rate = (
    production_df["monthly_income"]
    .isna()
    .mean()
)

if current_missing_rate > 0.30:
    print("Warning: monthly_income missing rate is above 30%")
```

A sudden increase in missingness may indicate:

* API changes
* Broken form fields
* Schema drift
* Failed database joins
* Tracking errors
* Changes in customer behavior

---

## 27. Common Mistakes

### 27.1 Replacing every missing numeric value with zero

Zero may be a valid value and may create incorrect business meaning.

### 27.2 Dropping all incomplete rows

This may remove a large or systematically different group of observations.

### 27.3 Applying one method to every feature

Numeric, categorical, temporal, and target features require different treatment.

### 27.4 Imputing before the train-test split

This causes data leakage.

### 27.5 Ignoring the reason for missingness

Missingness may reveal a system problem or important customer behavior.

### 27.6 Using future values in time-series imputation

Backward filling may introduce future information into historical predictions.

### 27.7 Removing high-missingness features automatically

A sparse feature may still contain valuable information.

### 27.8 Failing to store the original missingness

After imputation, the information that a value was originally missing may be lost.

### 27.9 Changing the raw dataset directly

The raw data should remain unchanged and reproducible.

### 27.10 Failing to document decisions

Future team members need to know:

* Which values were considered missing.
* Which strategy was used.
* Which statistics were fitted.
* Why the strategy was selected.
* What limitations remain.

---

## 28. Recommended Project Structure

```text
project/
|
|-- data/
|   |-- raw/
|   |   `-- customers.csv
|   |
|   |-- processed/
|       `-- customers_clean.csv
|
|-- notebooks/
|   |-- 01_data_understanding.ipynb
|   `-- 02_missing_value_analysis.ipynb
|
|-- src/
|   |-- preprocessing.py
|   `-- validation.py
|
|-- reports/
|   |-- missing_value_report.csv
|   `-- cleaning_changelog.md
|
|-- models/
|   `-- churn_pipeline.joblib
|
`-- README.md
```

The raw dataset should remain unchanged.

All cleaning steps should be implemented in notebooks, scripts, or pipelines that can be executed again.

---

## 29. Cleaning Changelog Example

```markdown
## Missing-Value Decisions

### monthly_income

- Missing percentage: 21.0%
- Suspected mechanism: MAR or MNAR
- Observation: Missingness is higher among new customers
- Strategy: Median imputation by customer segment
- Additional feature: monthly_income_missing
- Risk: Reported income may differ systematically from unreported income

### contract_type

- Missing percentage: 1.5%
- Suspected cause: Legacy records
- Strategy: Replace missing values with "Unknown"
- Reason: Missingness represents a meaningful system state

### churn

- Missing percentage: 0.4%
- Strategy: Exclude affected rows from supervised model training
- Reason: Target labels should not be artificially imputed
```

---

## 30. Practical Exercise

Choose a small CSV dataset such as:

* Customer churn
* House prices
* Employee attrition
* Loan default
* Retail transactions
* Healthcare appointments

Complete the following tasks.

### Task 1: Detect missing values

* Standardize all missing-value representations.
* Calculate the count and percentage of missing values.
* Identify rows with many missing features.

### Task 2: Investigate missingness

For each affected feature:

* Identify its data type.
* Inspect its distribution.
* Compare missingness across groups.
* Compare missingness with the target variable.
* Propose a possible cause.

### Task 3: Select strategies

Choose at least three different treatment strategies, such as:

* Median imputation
* `"Unknown"` category
* Group-based imputation
* Missingness indicator
* Row removal

### Task 4: Validate the result

Compare:

* Row count before and after cleaning
* Feature distributions
* Missing percentages
* Target distribution
* Model validation score

### Task 5: Write three insights

Each insight should contain:

1. Evidence from a chart or table.
2. A business interpretation.
3. A caveat or assumption.
4. A recommended next action.

Example:

> Customers with missing income information have a churn rate of 31%, compared with 18% among customers with reported income. This may indicate lower engagement or incomplete onboarding. However, the missingness may also be caused by legacy records. The onboarding data collection process should be reviewed before treating missing income as a causal churn signal.

---

## 31. Completion Checklist

* [ ] I can explain missing value handling in one or two minutes.
* [ ] I can identify native and non-standard missing-value representations.
* [ ] I can calculate missing counts and percentages.
* [ ] I understand the difference between MCAR, MAR, and MNAR.
* [ ] I can choose a strategy based on feature type and business meaning.
* [ ] I do not automatically replace all missing numeric values with zero.
* [ ] I fit imputers using training data only.
* [ ] I can use a preprocessing pipeline to prevent data leakage.
* [ ] I have compared distributions before and after imputation.
* [ ] I have documented at least one assumption or limitation.
* [ ] I have created a notebook, chart, report, or reusable preprocessing script.

---

## 32. Related Outcome

Understand, clean, visualize, and explain datasets using business-oriented insights.

Missing-value handling supports this outcome by ensuring that:

* Analysis is based on reliable data.
* Feature distributions are interpreted correctly.
* Model evaluation is not affected by leakage.
* Data-quality issues are communicated clearly.
* Recommendations reflect both evidence and uncertainty.

---

## 33. Related Project

### Mini Project: Customer Churn EDA

Build a customer churn analysis containing:

1. Dataset schema and data dictionary
2. Missing-value report
3. Duplicate and invalid-value checks
4. Missingness analysis by customer segment
5. Reproducible preprocessing pipeline
6. Churn distribution analysis
7. Feature relationships
8. At least three charts
9. Business insights and recommendations
10. Data-quality caveats

Suggested portfolio artifacts:

```text
customer-churn-eda/
|
|-- README.md
|-- data/
|-- notebooks/
|   `-- churn_eda.ipynb
|-- src/
|   `-- preprocessing.py
|-- reports/
|   |-- missing_value_report.csv
|   `-- insight_report.md
`-- requirements.txt
```

---

## 34. Key Takeaways

* Missing values are both a data-quality problem and a possible source of information.
* Before treating missing data, investigate how much is missing and why.
* MCAR, MAR, and MNAR describe different possible missingness mechanisms.
* Row or column deletion should be based on impact, not only a fixed percentage.
* Median imputation is often appropriate for skewed numeric features.
* Categorical missingness may be represented using an `"Unknown"` category.
* Group-based and time-based methods can preserve more structure than global imputation.
* Missingness indicators may improve analysis when missingness is informative.
* Imputers must be fitted using training data only.
* A reproducible preprocessing pipeline is safer than manual notebook transformations.
* Every missing-value decision should include evidence, assumptions, and limitations.

---

## 35. Summary

**Missing Value Handling** is an essential step in exploratory data analysis and machine learning.

The goal is not simply to eliminate every `NaN` value. The goal is to understand the missingness mechanism, preserve useful information, avoid bias and leakage, and create a reproducible strategy that works during both experimentation and production.

A strong workflow follows this sequence:

```text
Detect
  -> Measure
  -> Investigate
  -> Select a strategy
  -> Apply reproducibly
  -> Validate
  -> Document
  -> Monitor
```

Turn this lesson into a practical artifact such as:

* An EDA notebook
* A missing-value report
* A reusable preprocessing function
* A scikit-learn pipeline
* A data-quality dashboard
* An API validation module
* A portfolio case study
