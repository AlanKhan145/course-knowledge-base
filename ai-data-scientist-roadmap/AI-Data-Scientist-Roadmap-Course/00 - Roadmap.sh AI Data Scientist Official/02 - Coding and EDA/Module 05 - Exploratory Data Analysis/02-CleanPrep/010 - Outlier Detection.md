# 010 - Outlier Detection

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Data Cleaning
**Roadmap Source:** Exploratory Data Analysis / Data Cleaning
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 010
**Suggested Duration:** 20 minutes

---

## 1. Summary

**Outlier Detection** is the process of identifying observations that are unusually different from the majority of the dataset.

An outlier may represent:

* A data entry error
* A measurement error
* A system failure
* A rare but valid event
* Fraudulent behavior
* An important business case
* A naturally extreme observation

Outlier detection is an important part of Exploratory Data Analysis because extreme values can affect:

* Summary statistics
* Data visualizations
* Correlation analysis
* Machine learning models
* Business decisions
* Production monitoring

The goal is not to automatically delete every unusual value. The goal is to understand why the value is unusual and decide how it should be handled.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain outlier detection in your own words.
* Distinguish between an outlier, an error, and a rare valid observation.
* Detect outliers using statistical and visual methods.
* Apply the IQR method and Z-score method.
* Investigate outliers using business and domain knowledge.
* Choose an appropriate outlier-handling strategy.
* Document assumptions, decisions, and limitations.
* Create a reproducible outlier analysis in Python.

---

## 3. What Is an Outlier?

An outlier is an observation that is significantly different from the typical pattern of the data.

Consider the following customer purchase values:

```text
20, 25, 27, 30, 32, 35, 5000
```

Most customers spend between `20` and `35`, but one customer spends `5000`.

The value `5000` is a potential outlier.

However, it may have different explanations:

1. The customer is a valid high-value corporate client.
2. The value was entered incorrectly.
3. The currency was recorded incorrectly.
4. The customer made an unusually large purchase.
5. The transaction is fraudulent.

Therefore:

```text
Unusual value does not always mean incorrect value.
```

---

## 4. Why Outlier Detection Matters

Outliers can strongly influence data analysis and machine learning results.

### 4.1 Effect on the Mean

Consider these values:

```text
10, 12, 13, 15, 100
```

The mean is:

```text
Mean = (10 + 12 + 13 + 15 + 100) / 5
Mean = 30
```

However, most values are between `10` and `15`.

The median is:

```text
Median = 13
```

The extreme value `100` pulls the mean upward.

### 4.2 Effect on Standard Deviation

Outliers increase the spread of the data and may produce a large standard deviation.

This can make the dataset appear more variable than it actually is for most observations.

### 4.3 Effect on Machine Learning Models

Outliers may affect models differently.

| Model                  | Sensitivity to Outliers              |
| ---------------------- | ------------------------------------ |
| Linear Regression      | High                                 |
| Logistic Regression    | Moderate to high                     |
| K-Nearest Neighbors    | High                                 |
| K-Means Clustering     | High                                 |
| Decision Tree          | Lower                                |
| Random Forest          | Lower                                |
| Gradient Boosting      | Depends on configuration             |
| Support Vector Machine | Moderate to high                     |
| Neural Network         | Depends on scaling and loss function |

Models based on distance, averages, or squared error are often more sensitive to extreme values.

---

## 5. Outlier, Anomaly, and Error

These concepts are related but not identical.

| Concept    | Meaning                                                  | Example                                 |
| ---------- | -------------------------------------------------------- | --------------------------------------- |
| Outlier    | A value far from most other observations                 | A salary of 1,000,000                   |
| Anomaly    | An observation that does not follow the expected pattern | A login from a new country at 3:00 AM   |
| Error      | An invalid value caused by incorrect data                | An age of 350                           |
| Rare event | An uncommon but valid observation                        | A customer making a very large purchase |

An observation can belong to more than one category.

For example, an age of `350` is both an outlier and a likely data error.

---

## 6. Types of Outliers

### 6.1 Global Outlier

A global outlier is unusual compared with the entire dataset.

Example:

```text
Most transaction values: 10 to 500
Potential outlier: 50,000
```

### 6.2 Contextual Outlier

A contextual outlier is unusual only in a specific context.

Example:

```text
Temperature of 35 degrees Celsius:
- Normal during summer
- Unusual during winter
```

### 6.3 Collective Outlier

A group of observations may be unusual together, even when individual observations appear normal.

Example:

```text
A user performs 100 small transactions in one minute.
```

Each transaction may appear normal, but the sequence is unusual.

### 6.4 Univariate Outlier

A univariate outlier is detected by analyzing one variable.

Example:

```text
Detecting extreme salary values using only the salary column.
```

### 6.5 Multivariate Outlier

A multivariate outlier is unusual because of the combination of multiple variables.

Example:

```text
Age = 18
Annual income = 500,000
Work experience = 0
```

Each value may be valid independently, but the combination may be unusual.

---

## 7. Outlier Detection Workflow

A practical outlier-detection workflow is:

```text
Business question
       |
       v
Understand the variable
       |
       v
Check data type and valid range
       |
       v
Calculate summary statistics
       |
       v
Visualize the distribution
       |
       v
Apply statistical rules
       |
       v
Inspect suspicious records
       |
       v
Use domain knowledge
       |
       v
Choose a handling strategy
       |
       v
Validate and document the result
```

A shorter version is:

```text
Detect -> Investigate -> Decide -> Validate -> Document
```

---

## 8. Before Detecting Outliers

Before applying any formula, understand the variable.

Ask the following questions:

* What does the variable represent?
* What is its unit?
* What is its expected range?
* Can negative values occur?
* Is the distribution naturally skewed?
* Are extreme values possible in the real world?
* Are there different customer or product groups?
* Was the value measured or manually entered?
* Does the value depend on time, location, or category?

For example, an income of `500,000` may be an outlier in one customer group but normal in another.

---

## 9. Summary Statistics

Start by calculating basic descriptive statistics.

```python
import pandas as pd

df = pd.read_csv("customers.csv")

print(df["annual_income"].describe())
```

Typical output:

```text
count      1000.00
mean      52000.00
std       18000.00
min        5000.00
25%       40000.00
50%       50000.00
75%       62000.00
max      500000.00
```

Important values include:

* Minimum
* Maximum
* Mean
* Median
* Standard deviation
* First quartile
* Third quartile

A very large gap between the maximum and the third quartile may indicate possible outliers.

---

## 10. Visual Outlier Detection

Visualizations are often the fastest way to detect unusual values.

### 10.1 Box Plot

A box plot displays:

* First quartile
* Median
* Third quartile
* Interquartile range
* Potential outliers

```python
import matplotlib.pyplot as plt

df["annual_income"].plot(kind="box")
plt.title("Annual Income Box Plot")
plt.ylabel("Annual Income")
plt.show()
```

A simplified box plot structure:

```text
Potential outlier
       *
       |
----|--[====|====]--|----
    Q1    Median    Q3
```

Points outside the whiskers are commonly treated as potential outliers.

They are not automatically errors.

### 10.2 Histogram

A histogram helps identify:

* Long tails
* Skewness
* Multiple distributions
* Extreme values

```python
df["annual_income"].plot(
    kind="hist",
    bins=30,
    edgecolor="black"
)

plt.title("Distribution of Annual Income")
plt.xlabel("Annual Income")
plt.show()
```

### 10.3 Scatter Plot

A scatter plot is useful for detecting multivariate outliers.

```python
df.plot(
    kind="scatter",
    x="age",
    y="annual_income"
)

plt.title("Age vs Annual Income")
plt.show()
```

A point may not be extreme in one variable but may be unusual relative to another variable.

---

## 11. IQR Method

The Interquartile Range method is one of the most common outlier-detection techniques.

### 11.1 Quartiles

The first quartile, `Q1`, is the 25th percentile.

The third quartile, `Q3`, is the 75th percentile.

The interquartile range is:

```text
IQR = Q3 - Q1
```

The typical lower and upper boundaries are:

```text
Lower bound = Q1 - 1.5 * IQR
Upper bound = Q3 + 1.5 * IQR
```

A value outside these boundaries is considered a potential outlier.

### 11.2 Example

Suppose:

```text
Q1 = 20
Q3 = 40
```

Calculate the IQR:

```text
IQR = 40 - 20
IQR = 20
```

Calculate the lower boundary:

```text
Lower bound = 20 - 1.5 * 20
Lower bound = -10
```

Calculate the upper boundary:

```text
Upper bound = 40 + 1.5 * 20
Upper bound = 70
```

Potential outliers are values:

```text
Less than -10 or greater than 70
```

### 11.3 Python Implementation

```python
column = "annual_income"

q1 = df[column].quantile(0.25)
q3 = df[column].quantile(0.75)

iqr = q3 - q1

lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr

outliers = df[
    (df[column] < lower_bound)
    | (df[column] > upper_bound)
]

print("Q1:", q1)
print("Q3:", q3)
print("IQR:", iqr)
print("Lower bound:", lower_bound)
print("Upper bound:", upper_bound)
print("Number of potential outliers:", len(outliers))
```

### 11.4 Add an Outlier Flag

Instead of immediately removing records, create an indicator column.

```python
df["income_outlier_iqr"] = (
    (df["annual_income"] < lower_bound)
    | (df["annual_income"] > upper_bound)
)
```

Review the flagged records:

```python
df.loc[
    df["income_outlier_iqr"],
    ["customer_id", "annual_income"]
]
```

This preserves the original data while supporting investigation.

---

## 12. Z-Score Method

The Z-score measures how many standard deviations a value is from the mean.

The formula is:

```text
Z-score = (value - mean) / standard deviation
```

A common rule is:

```text
Potential outlier if absolute Z-score is greater than 3
```

### 12.1 Example

Suppose:

```text
Value = 100
Mean = 50
Standard deviation = 10
```

Then:

```text
Z-score = (100 - 50) / 10
Z-score = 5
```

The value is five standard deviations above the mean.

### 12.2 Python Implementation

```python
mean_value = df["annual_income"].mean()
std_value = df["annual_income"].std()

df["income_z_score"] = (
    df["annual_income"] - mean_value
) / std_value

z_score_outliers = df[
    df["income_z_score"].abs() > 3
]

print(z_score_outliers)
```

### 12.3 When to Use Z-Score

The Z-score method is most suitable when:

* The variable is approximately normally distributed.
* The mean is representative.
* The standard deviation is meaningful.
* The dataset does not contain too many extreme values.

It may perform poorly on highly skewed distributions because the mean and standard deviation are sensitive to outliers.

---

## 13. Modified Z-Score

The modified Z-score is more robust because it uses the median and Median Absolute Deviation.

The basic process is:

```text
1. Calculate the median.
2. Calculate the absolute distance from the median.
3. Calculate the median absolute deviation.
4. Calculate the modified Z-score.
```

A common threshold is:

```text
Potential outlier if absolute modified Z-score is greater than 3.5
```

### Python Implementation

```python
import numpy as np

column = "annual_income"

median_value = df[column].median()

absolute_deviation = np.abs(
    df[column] - median_value
)

mad = np.median(absolute_deviation)

if mad == 0:
    df["modified_z_score"] = 0.0
else:
    df["modified_z_score"] = (
        0.6745
        * (df[column] - median_value)
        / mad
    )

modified_z_outliers = df[
    df["modified_z_score"].abs() > 3.5
]

print(modified_z_outliers)
```

The modified Z-score is often more appropriate than the standard Z-score for skewed or contaminated datasets.

---

## 14. Domain-Based Outlier Detection

Statistical methods are not sufficient for every dataset.

Domain rules can identify values that are logically invalid.

Examples:

| Variable         | Possible domain rule                |
| ---------------- | ----------------------------------- |
| Age              | Must be between 0 and 120           |
| Percentage       | Must be between 0 and 100           |
| Product quantity | Cannot be negative                  |
| Exam score       | Must be between 0 and maximum score |
| Latitude         | Must be between -90 and 90          |
| Longitude        | Must be between -180 and 180        |
| Transaction date | Cannot be after the current date    |
| Delivery time    | Should not be negative              |

Example:

```python
invalid_age = df[
    (df["age"] < 0)
    | (df["age"] > 120)
]

print(invalid_age)
```

Domain-based detection can be more meaningful than statistical detection.

For example, an age of `130` may not exceed the IQR boundary in a corrupted dataset, but it is still logically invalid.

---

## 15. Group-Based Outlier Detection

A value may be normal globally but unusual within its group.

Suppose salaries differ significantly by job level.

Applying one global threshold may incorrectly flag senior employees as outliers.

A better approach is to detect outliers within each job level.

```python
def add_group_outlier_flag(group):
    q1 = group["salary"].quantile(0.25)
    q3 = group["salary"].quantile(0.75)
    iqr = q3 - q1

    lower_bound = q1 - 1.5 * iqr
    upper_bound = q3 + 1.5 * iqr

    group["salary_outlier"] = (
        (group["salary"] < lower_bound)
        | (group["salary"] > upper_bound)
    )

    return group

df = (
    df.groupby(
        "job_level",
        group_keys=False
    )
    .apply(add_group_outlier_flag)
)
```

Possible grouping variables include:

* Customer segment
* Product category
* Country
* Department
* Store
* Device type
* Time period
* Job level

---

## 16. Time-Series Outliers

For time-series data, an observation may be unusual relative to nearby values rather than the entire dataset.

Example:

```text
Daily sales:
100, 105, 102, 98, 101, 900, 103
```

The value `900` may represent:

* A promotion
* A data error
* A system duplication
* A special event
* Fraud

A rolling average can help detect local outliers.

```python
window_size = 7

df["rolling_mean"] = (
    df["sales"]
    .rolling(window=window_size)
    .mean()
)

df["rolling_std"] = (
    df["sales"]
    .rolling(window=window_size)
    .std()
)

df["rolling_z_score"] = (
    df["sales"] - df["rolling_mean"]
) / df["rolling_std"]

df["sales_outlier"] = (
    df["rolling_z_score"].abs() > 3
)
```

Time-series outlier detection should consider:

* Trend
* Seasonality
* Holidays
* Promotions
* Product launches
* Weekday effects
* System downtime

---

## 17. Multivariate Outlier Detection

Univariate methods analyze one feature at a time.

However, some observations are only unusual when multiple variables are considered together.

Example:

| Age |  Income | Experience |
| --: | ------: | ---------: |
|  45 |  90,000 |         20 |
|  38 |  70,000 |         15 |
|  18 | 500,000 |          0 |

The third row may not be impossible, but it is unusual compared with the relationship among the variables.

Common multivariate outlier-detection algorithms include:

* Isolation Forest
* Local Outlier Factor
* One-Class SVM
* DBSCAN
* Mahalanobis Distance
* Autoencoder-based anomaly detection

### Isolation Forest Example

```python
from sklearn.ensemble import IsolationForest

features = df[
    ["age", "annual_income", "years_experience"]
].copy()

model = IsolationForest(
    contamination=0.02,
    random_state=42
)

df["isolation_flag"] = model.fit_predict(features)

outliers = df[
    df["isolation_flag"] == -1
]

print(outliers)
```

The output values are typically:

```text
 1 = normal observation
-1 = potential outlier
```

The `contamination` parameter estimates the expected proportion of outliers.

It should not be selected without investigation.

---

## 18. Comparison of Outlier Detection Methods

| Method               | Best for                            | Main limitation                |
| -------------------- | ----------------------------------- | ------------------------------ |
| Domain rules         | Known valid ranges                  | Requires domain knowledge      |
| Box plot             | Quick visual inspection             | Mostly univariate              |
| IQR                  | Skewed numerical data               | May flag valid extremes        |
| Z-score              | Approximately normal data           | Sensitive to extreme values    |
| Modified Z-score     | Robust numerical detection          | Still univariate               |
| Scatter plot         | Relationships between two variables | Difficult with many features   |
| Group-based IQR      | Segmented datasets                  | Small groups may be unstable   |
| Isolation Forest     | Multivariate data                   | Less interpretable             |
| Local Outlier Factor | Local density anomalies             | Sensitive to parameter choices |
| Rolling statistics   | Time-series data                    | Must account for seasonality   |

No method is universally best.

A strong analysis often combines several methods.

---

## 19. Outlier Detection Example

Consider a customer dataset:

| customer_id | age | annual_income | monthly_spend |
| ----------: | --: | ------------: | ------------: |
|           1 |  25 |        35,000 |           500 |
|           2 |  31 |        48,000 |           750 |
|           3 |  29 |        45,000 |           680 |
|           4 |  42 |        70,000 |         1,100 |
|           5 |  35 |       500,000 |        45,000 |
|           6 | 250 |        60,000 |           900 |

Potential findings:

* Customer `5` has extremely high income and spending.
* Customer `6` has an invalid age.
* Customer `5` may be a valid premium customer.
* Customer `6` is likely a data-quality error.

The correct actions may be different:

```text
Customer 5:
Investigate and possibly retain.

Customer 6:
Correct, replace, or exclude after checking the source.
```

---

## 20. What Should You Do With Outliers?

After detecting an outlier, choose an appropriate treatment.

### 20.1 Keep the Observation

Keep the value when:

* It is valid.
* It represents an important business case.
* It is part of the real production distribution.
* The model must handle similar cases.

Example:

```text
A legitimate high-value customer should not be removed only because the customer is rare.
```

### 20.2 Correct the Observation

Correct the value when:

* The correct value can be verified.
* The error came from data entry.
* The unit was recorded incorrectly.
* The decimal position is wrong.

Example:

```text
Recorded weight: 700 kg
Verified weight: 70 kg
```

### 20.3 Remove the Observation

Remove the value when:

* It is clearly invalid.
* It cannot be corrected.
* It is unrelated to the target population.
* It results from a failed measurement.

Removal must be documented.

### 20.4 Replace the Observation

Possible replacement methods include:

* Median
* Group median
* Quantile boundary
* Domain-specific value
* Model-based estimate

Replacing values may reduce variability and introduce bias, so it should be used carefully.

### 20.5 Cap the Observation

Capping limits extreme values to selected boundaries.

Example:

```python
lower_limit = df["annual_income"].quantile(0.01)
upper_limit = df["annual_income"].quantile(0.99)

df["annual_income_capped"] = df[
    "annual_income"
].clip(
    lower=lower_limit,
    upper=upper_limit
)
```

This technique is also called:

* Winsorization
* Clipping
* Capping

### 20.6 Transform the Variable

A transformation may reduce the influence of extreme values.

Example using a logarithmic transformation:

```python
import numpy as np

df["log_income"] = np.log1p(
    df["annual_income"]
)
```

This is useful for positive, highly skewed variables such as:

* Income
* Revenue
* Transaction amount
* House price
* Website traffic

### 20.7 Create an Outlier Feature

An outlier may contain useful predictive information.

Instead of deleting it, create a binary feature:

```python
df["is_high_income_outlier"] = (
    df["annual_income"] > upper_bound
).astype(int)
```

This allows a model to learn whether unusual behavior is associated with the target variable.

### 20.8 Use a Robust Model

Some models and statistical methods are less sensitive to outliers.

Possible choices include:

* Tree-based models
* Median-based summaries
* Robust regression
* Huber loss
* Quantile regression
* Robust scaling

---

## 21. Robust Scaling

Standard scaling uses the mean and standard deviation, which can be affected by outliers.

Robust scaling uses the median and IQR.

```python
from sklearn.preprocessing import RobustScaler

scaler = RobustScaler()

df[["income_scaled", "spend_scaled"]] = (
    scaler.fit_transform(
        df[["annual_income", "monthly_spend"]]
    )
)
```

Robust scaling does not remove outliers, but it reduces their influence during feature scaling.

---

## 22. Avoiding Data Leakage

Outlier thresholds must be calculated using only the training data.

Incorrect process:

```text
Full dataset
    |
    v
Calculate thresholds
    |
    v
Split into train and test
```

This allows information from the test set to influence preprocessing.

Correct process:

```text
Full dataset
    |
    v
Split into train and test
    |
    v
Calculate thresholds from training data
    |
    v
Apply the same thresholds to train and test
```

Example:

```python
from sklearn.model_selection import train_test_split

train_df, test_df = train_test_split(
    df,
    test_size=0.2,
    random_state=42
)

q1 = train_df["annual_income"].quantile(0.25)
q3 = train_df["annual_income"].quantile(0.75)
iqr = q3 - q1

lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr

train_df["income_outlier"] = (
    (train_df["annual_income"] < lower_bound)
    | (train_df["annual_income"] > upper_bound)
)

test_df["income_outlier"] = (
    (test_df["annual_income"] < lower_bound)
    | (test_df["annual_income"] > upper_bound)
)
```

---

## 23. Reusable IQR Function

A reusable function improves consistency and reproducibility.

```python
import pandas as pd

def detect_iqr_outliers(
    dataframe: pd.DataFrame,
    column: str,
    multiplier: float = 1.5
) -> pd.DataFrame:
    """
    Return rows that fall outside the IQR boundaries.
    """

    q1 = dataframe[column].quantile(0.25)
    q3 = dataframe[column].quantile(0.75)
    iqr = q3 - q1

    lower_bound = q1 - multiplier * iqr
    upper_bound = q3 + multiplier * iqr

    mask = (
        (dataframe[column] < lower_bound)
        | (dataframe[column] > upper_bound)
    )

    return dataframe.loc[mask].copy()
```

Usage:

```python
income_outliers = detect_iqr_outliers(
    dataframe=df,
    column="annual_income"
)

print(income_outliers)
```

---

## 24. Reusable Outlier Summary Function

```python
import pandas as pd

def summarize_iqr_outliers(
    dataframe: pd.DataFrame,
    columns: list[str]
) -> pd.DataFrame:
    """
    Create an IQR-based outlier summary.
    """

    results = []

    for column in columns:
        series = dataframe[column].dropna()

        q1 = series.quantile(0.25)
        q3 = series.quantile(0.75)
        iqr = q3 - q1

        lower_bound = q1 - 1.5 * iqr
        upper_bound = q3 + 1.5 * iqr

        outlier_mask = (
            (series < lower_bound)
            | (series > upper_bound)
        )

        outlier_count = int(outlier_mask.sum())
        total_count = int(series.shape[0])

        outlier_percentage = (
            outlier_count / total_count * 100
            if total_count > 0
            else 0
        )

        results.append(
            {
                "column": column,
                "lower_bound": lower_bound,
                "upper_bound": upper_bound,
                "outlier_count": outlier_count,
                "outlier_percentage": outlier_percentage
            }
        )

    return pd.DataFrame(results)
```

Usage:

```python
numeric_columns = [
    "age",
    "annual_income",
    "monthly_spend"
]

outlier_summary = summarize_iqr_outliers(
    dataframe=df,
    columns=numeric_columns
)

print(outlier_summary)
```

Example output:

| column        | lower_bound | upper_bound | outlier_count | outlier_percentage |
| ------------- | ----------: | ----------: | ------------: | -----------------: |
| age           |        10.5 |        70.5 |             2 |               0.20 |
| annual_income |       5,000 |     120,000 |            15 |               1.50 |
| monthly_spend |        -200 |       3,000 |            28 |               2.80 |

---

## 25. Comparing Data Before and After Treatment

Always compare the dataset before and after handling outliers.

```python
before_summary = df["annual_income"].describe()

df["annual_income_capped"] = df[
    "annual_income"
].clip(
    lower=lower_bound,
    upper=upper_bound
)

after_summary = df[
    "annual_income_capped"
].describe()

comparison = pd.DataFrame(
    {
        "before": before_summary,
        "after": after_summary
    }
)

print(comparison)
```

Check whether outlier treatment changes:

* Mean
* Median
* Standard deviation
* Minimum
* Maximum
* Correlation
* Class distribution
* Model performance
* Business interpretation

---

## 26. Outlier Reporting

A useful outlier report should contain more than a count.

Recommended fields:

| Field              | Description                            |
| ------------------ | -------------------------------------- |
| Feature            | Variable being analyzed                |
| Detection method   | IQR, Z-score, rule, or model           |
| Lower threshold    | Minimum acceptable boundary            |
| Upper threshold    | Maximum acceptable boundary            |
| Outlier count      | Number of flagged records              |
| Outlier percentage | Percentage of flagged records          |
| Likely cause       | Error, rare event, or unknown          |
| Action             | Keep, cap, correct, or remove          |
| Reason             | Business and statistical justification |
| Caveat             | Limitation of the decision             |

Example:

```text
Feature: annual_income
Method: Group-based IQR
Outliers: 18 records
Percentage: 1.8%
Decision: Retain and create an outlier indicator
Reason: Records belong to verified premium customers
Caveat: Premium customer status was validated only for active accounts
```

---

## 27. Common Mistakes

### 27.1 Automatically Removing Every Outlier

Why it is problematic:

* Rare values may be valid.
* Valuable customer segments may disappear.
* Fraud signals may be removed.
* The production distribution may contain similar cases.

Better approach:

```text
Detect first, investigate second, decide third.
```

### 27.2 Using Only One Method

One statistical rule may not capture all types of outliers.

Better approach:

* Use visualizations.
* Apply statistical methods.
* Apply domain rules.
* Inspect the records.
* Compare multiple detection methods.

### 27.3 Ignoring Distribution Shape

The Z-score method may be inappropriate for a heavily skewed variable.

Better approach:

* Inspect the histogram.
* Consider IQR or modified Z-score.
* Consider a log transformation.
* Analyze meaningful groups separately.

### 27.4 Ignoring Business Context

An extreme purchase may represent a valuable enterprise customer rather than an error.

Better approach:

* Check customer type.
* Check transaction history.
* Check source systems.
* Consult domain experts.

### 27.5 Calculating Thresholds Before the Train-Test Split

This creates data leakage.

Better approach:

* Split the data first.
* Fit thresholds on training data.
* Apply the same rules to validation and test data.

### 27.6 Changing Raw Data Directly

Overwriting the original dataset makes the analysis difficult to reproduce.

Better approach:

```text
data/
├── raw/
├── interim/
├── processed/
└── reports/
```

### 27.7 Reporting Only a Chart

A chart is not the final insight.

A strong conclusion explains:

* What was detected
* Why it matters
* What action was taken
* How the action changed the results
* What uncertainty remains

---

## 28. Practical Exercise

Use a small customer dataset containing:

```text
customer_id
age
annual_income
monthly_spend
tenure_months
support_tickets
churn
```

### Task 1: Inspect the Data

* Load the dataset.
* Check the schema.
* Calculate summary statistics.
* Identify impossible values.

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

print(df.info())
print(df.describe())
```

### Task 2: Visualize Numerical Features

Create:

* A histogram for annual income
* A box plot for monthly spending
* A scatter plot of income versus spending

### Task 3: Apply Outlier Detection

Use:

* Domain rules for age
* IQR for annual income
* IQR for monthly spending
* Scatter plots for multivariate inspection

### Task 4: Investigate Flagged Records

For each potential outlier, check:

* Customer segment
* Churn label
* Account status
* Transaction history
* Possible data entry error

### Task 5: Compare Handling Strategies

Compare:

1. Keeping the original values
2. Removing invalid records
3. Capping extreme values
4. Applying a log transformation
5. Creating an outlier indicator

### Task 6: Write Three Insights

Example insights:

1. High-spending outliers represent only 1.4% of customers but contribute 18% of total monthly revenue.
2. Most invalid age values originate from one data source.
3. Churn is higher among customers with unusually high support-ticket counts.

Each insight should include:

* Evidence
* Business meaning
* Recommendation
* Caveat

---

## 29. Suggested Notebook Structure

```text
01. Business question
02. Dataset overview
03. Schema inspection
04. Data-quality checks
05. Summary statistics
06. Distribution visualizations
07. Domain-rule validation
08. IQR detection
09. Z-score or modified Z-score
10. Multivariate investigation
11. Outlier treatment comparison
12. Business insights
13. Recommendations
14. Caveats
15. Next steps
```

---

## 30. Mini Project Application

### Project: Customer Churn EDA

Investigate whether unusual customer behavior is associated with churn.

Possible outlier-related questions:

* Do customers with unusually high monthly charges churn more often?
* Are customers with many support tickets more likely to leave?
* Are extreme tenure values valid?
* Do premium customers appear as spending outliers?
* Are some outliers caused by duplicated or corrupted records?

Possible project outputs:

* Jupyter Notebook
* Outlier summary table
* Box plots and histograms
* Customer-segment analysis
* Data-cleaning changelog
* Business recommendation report
* Reusable Python detection functions

---

## 31. Completion Checklist

* [ ] I can explain outlier detection in one or two minutes.
* [ ] I understand that an outlier is not automatically an error.
* [ ] I can use a box plot to identify potential outliers.
* [ ] I can calculate IQR boundaries.
* [ ] I can calculate Z-scores.
* [ ] I understand when the modified Z-score is useful.
* [ ] I can apply domain rules to detect invalid values.
* [ ] I can detect outliers within meaningful groups.
* [ ] I understand how outliers affect machine learning models.
* [ ] I know several methods for handling outliers.
* [ ] I calculate preprocessing thresholds from training data only.
* [ ] I preserve the raw dataset.
* [ ] I document every correction or removal.
* [ ] I have written at least one caveat or assumption.
* [ ] I can convert the analysis into a portfolio artifact.

---

## 32. Related Outcome

After completing this lesson, you should be better able to:

> Understand, clean, visualize, and explain datasets using business-oriented insights.

You should also be able to distinguish between:

```text
A value that is statistically unusual
```

and:

```text
A value that should actually be removed
```

---

## 33. Key Takeaways

1. An outlier is an unusual observation, not necessarily an incorrect observation.
2. Outlier detection should combine statistics, visualization, and domain knowledge.
3. The IQR method is useful for skewed numerical data.
4. The Z-score method is more suitable for approximately normal data.
5. Group-level and time-based context can change whether a value is unusual.
6. Outliers may be kept, corrected, removed, capped, transformed, or flagged.
7. Outlier treatment can affect model performance and business conclusions.
8. Thresholds must be learned from training data to prevent data leakage.
9. Raw data and cleaning decisions should be preserved.
10. Every outlier decision should include evidence, reasoning, and a caveat.

---

## 34. Final Summary

**Outlier Detection** is a core skill in Exploratory Data Analysis and data cleaning.

A reliable process is:

```text
Understand the variable
        |
        v
Detect unusual observations
        |
        v
Investigate their causes
        |
        v
Choose a justified action
        |
        v
Compare the results
        |
        v
Document the decision
```

The objective is not to produce a perfectly smooth dataset.

The objective is to produce a dataset that accurately represents the real problem while minimizing errors, bias, and unnecessary information loss.

Turn this topic into a practical artifact such as:

* A reproducible notebook
* An outlier-detection function
* A data-quality report
* A visualization dashboard
* A model experiment
* A validation API
* A portfolio case study
