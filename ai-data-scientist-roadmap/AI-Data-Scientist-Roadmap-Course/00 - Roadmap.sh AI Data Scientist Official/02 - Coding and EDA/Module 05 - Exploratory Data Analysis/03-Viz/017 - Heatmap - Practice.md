# 017 - Heatmap

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Visualization
**Roadmap Source:** Exploratory Data Analysis / Visualization
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 017
**Suggested Duration:** 20 minutes

---

## 1. Summary

A **heatmap** is a visualization that represents values in a matrix using colors.

Each cell corresponds to a combination of a row and a column. The color of the cell indicates the magnitude, intensity, frequency, or category of the value.

Heatmaps are commonly used in AI and Data Science to visualize:

* Correlations between numerical features
* Missing-value patterns
* Confusion matrices
* Customer activity by time
* Revenue by product and region
* Churn rates across customer segments
* Model performance across hyperparameter combinations

A heatmap is especially useful when a table contains many values that are difficult to compare directly.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain what a heatmap is.
* Identify questions that can be answered with a heatmap.
* Create a heatmap using Python.
* Create and interpret a correlation heatmap.
* Visualize missing-value patterns.
* Create a heatmap from a pivot table.
* Select an appropriate color scale.
* Convert visual patterns into business insights.
* Recognize common heatmap mistakes.

---

## 3. What Is a Heatmap?

A heatmap converts numerical values into colors.

Suppose a matrix contains a value `x[i, j]` at row `i` and column `j`.

The heatmap maps that value to a color:

```text
cell value -> color scale -> displayed color
```

For example:

| Product   | Monday | Tuesday | Wednesday |
| --------- | -----: | ------: | --------: |
| Product A |     20 |      40 |        60 |
| Product B |     80 |      30 |        50 |
| Product C |     10 |      90 |        70 |

Instead of comparing every number manually, a heatmap uses color intensity to reveal:

* High-value cells
* Low-value cells
* Repeated patterns
* Unusual combinations
* Groups of similar values

---

## 4. Heatmap in the EDA Workflow

A heatmap is normally created after inspecting and cleaning the dataset.

```text
Business question
        |
        v
Load dataset
        |
        v
Inspect schema
        |
        v
Check data quality
        |
        v
Clean and transform data
        |
        v
Create matrix or pivot table
        |
        v
Build heatmap
        |
        v
Validate patterns
        |
        v
Write insight and recommendation
```

A practical workflow is:

```text
schema
-> quality checks
-> distributions
-> relationships
-> heatmap
-> insight
-> caveat
-> recommendation
```

The heatmap should support a clear analytical question. It should not be created only because it looks attractive.

---

## 5. Questions a Heatmap Can Answer

### Feature Relationships

* Which numerical features are strongly correlated?
* Which features may contain redundant information?
* Which variables are associated with the target variable?
* Are there groups of similar features?

### Data Quality

* Which columns contain missing values?
* Do several columns become missing together?
* Are missing values concentrated in certain rows or periods?
* Is there a systematic missing-data pattern?

### Business Analysis

* Which customer segments have the highest churn rate?
* Which products perform best in each region?
* At what time is customer activity highest?
* Which weekday and hour combinations generate the most orders?

### Machine Learning

* Which classes are commonly confused by the model?
* Which hyperparameter combination gives the best score?
* Are some model features highly correlated?
* Does a suspicious feature reveal possible data leakage?

---

## 6. Common Types of Heatmaps

## 6.1 Correlation Heatmap

A correlation heatmap displays pairwise correlations between numerical variables.

A correlation coefficient usually ranges from `-1` to `1`.

| Correlation Value | General Interpretation              |
| ----------------: | ----------------------------------- |
|      Close to `1` | Strong positive linear relationship |
|      Close to `0` | Weak or no linear relationship      |
|     Close to `-1` | Strong negative linear relationship |

Examples:

* A correlation of `0.85` indicates a strong positive relationship.
* A correlation of `-0.70` indicates a strong negative relationship.
* A correlation of `0.05` indicates almost no linear relationship.

The diagonal of a correlation matrix is always `1` because every feature is perfectly correlated with itself.

---

## 6.2 Missing-Value Heatmap

A missing-value heatmap shows where values are present or missing.

Each cell can be represented as:

```text
0 = value is present
1 = value is missing
```

This heatmap helps identify whether missing values are:

* Randomly distributed
* Concentrated in one feature
* Concentrated in one time period
* Shared by multiple features
* Associated with a particular group of records

---

## 6.3 Confusion Matrix Heatmap

A confusion matrix compares actual labels with predicted labels.

For binary classification:

|                 | Predicted Negative | Predicted Positive |
| --------------- | -----------------: | -----------------: |
| Actual Negative |      True Negative |     False Positive |
| Actual Positive |     False Negative |      True Positive |

A heatmap makes it easier to identify:

* Correct predictions
* False positives
* False negatives
* Classes that the model frequently confuses

---

## 6.4 Pivot-Table Heatmap

A pivot-table heatmap displays an aggregated metric across two categorical dimensions.

Examples:

* Revenue by region and product category
* Churn rate by age group and contract type
* Orders by weekday and hour
* Average score by course and semester
* Conversion rate by traffic source and device type

The aggregated metric may be:

* Count
* Sum
* Mean
* Median
* Percentage
* Conversion rate
* Churn rate

---

## 6.5 Hyperparameter Heatmap

A hyperparameter heatmap compares model performance across parameter combinations.

Example:

| Maximum Depth | Learning Rate 0.01 | Learning Rate 0.05 | Learning Rate 0.10 |
| ------------: | -----------------: | -----------------: | -----------------: |
|             3 |               0.81 |               0.84 |               0.83 |
|             5 |               0.83 |               0.87 |               0.85 |
|             8 |               0.82 |               0.86 |               0.81 |

This heatmap can reveal:

* The best-performing combination
* A stable performance region
* Sensitive parameter settings
* Possible overfitting areas

---

## 7. Main Components of a Heatmap

A readable heatmap should include:

* A descriptive title
* Row labels
* Column labels
* Colored cells
* A color bar
* Clear units
* Optional cell annotations

```text
                     Column labels
               C1       C2       C3
            +--------+--------+--------+
Row label 1 | value  | value  | value  |
            +--------+--------+--------+
Row label 2 | value  | value  | value  |
            +--------+--------+--------+
Row label 3 | value  | value  | value  |
            +--------+--------+--------+

Color bar: low value ---------------- high value
```

Without clear labels and a color bar, the reader may not understand what the colors represent.

---

## 8. Choosing a Color Scale

## 8.1 Sequential Color Scale

Use a sequential color scale when values progress from low to high.

Examples:

* Revenue
* Number of orders
* Website visits
* Missing-value percentage
* Average response time

Concept:

```text
Low -> Medium -> High
```

Common palettes:

* `Blues`
* `Greens`
* `YlOrRd`
* `viridis`

Example:

```python
sns.heatmap(data, cmap="Blues")
```

---

## 8.2 Diverging Color Scale

Use a diverging color scale when the data has a meaningful center.

Examples:

* Correlation from `-1` to `1`
* Profit and loss around `0`
* Difference from a baseline
* Positive and negative residuals

Concept:

```text
Negative <- Center -> Positive
```

Common palettes:

* `coolwarm`
* `RdBu`
* `vlag`

For a correlation heatmap, use a fixed range:

```python
sns.heatmap(
    correlation_matrix,
    cmap="coolwarm",
    vmin=-1,
    vmax=1,
    center=0
)
```

This ensures that the same correlation value has the same color across different charts.

---

## 9. Python Setup

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
```

Optional display settings:

```python
pd.set_option("display.max_columns", None)
sns.set_theme(style="white")
```

---

## 10. Demo 1: Basic Heatmap

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sales = pd.DataFrame(
    {
        "Monday": [20, 80, 10],
        "Tuesday": [40, 30, 90],
        "Wednesday": [60, 50, 70]
    },
    index=["Product A", "Product B", "Product C"]
)

plt.figure(figsize=(8, 4))

sns.heatmap(
    sales,
    annot=True,
    fmt="d",
    cmap="Blues",
    linewidths=0.5
)

plt.title("Product Sales by Day")
plt.xlabel("Day")
plt.ylabel("Product")
plt.tight_layout()
plt.show()
```

### Interpretation

The heatmap suggests that:

* Product C has its highest sales on Tuesday.
* Product B performs best on Monday.
* Product A increases from Monday to Wednesday.
* Tuesday has the highest single sales value.

These are only observations. Before making a business decision, check:

* A longer time period
* Product prices
* Revenue and profit
* Marketing campaigns
* Inventory availability

---

## 11. Demo 2: Correlation Heatmap

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("customer_churn.csv")

numeric_df = df.select_dtypes(include="number")

correlation_matrix = numeric_df.corr(method="pearson")

plt.figure(figsize=(10, 8))

sns.heatmap(
    correlation_matrix,
    annot=True,
    fmt=".2f",
    cmap="coolwarm",
    vmin=-1,
    vmax=1,
    center=0,
    square=True,
    linewidths=0.5
)

plt.title("Correlation Heatmap of Numerical Features")
plt.tight_layout()
plt.show()
```

### Example Interpretation

Suppose the heatmap shows:

| Feature Pair                      | Correlation |
| --------------------------------- | ----------: |
| Monthly charges and total charges |      `0.82` |
| Tenure and churn                  |     `-0.41` |
| Support calls and churn           |      `0.48` |

Possible interpretations:

1. Monthly charges and total charges may contain overlapping information.
2. Customers with longer tenure appear less likely to churn.
3. Customers with more support calls appear more likely to churn.

These relationships do not prove causation.

---

## 12. Removing Duplicate Correlation Information

A correlation matrix is symmetric.

```text
correlation(X, Y) = correlation(Y, X)
```

Therefore, the upper and lower triangles contain duplicate values.

You can hide one triangle:

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

correlation_matrix = numeric_df.corr()

mask = np.triu(
    np.ones_like(correlation_matrix, dtype=bool)
)

plt.figure(figsize=(10, 8))

sns.heatmap(
    correlation_matrix,
    mask=mask,
    annot=True,
    fmt=".2f",
    cmap="coolwarm",
    vmin=-1,
    vmax=1,
    center=0,
    linewidths=0.5
)

plt.title("Lower-Triangle Correlation Heatmap")
plt.tight_layout()
plt.show()
```

This is usually easier to read when the dataset contains many numerical features.

---

## 13. Pearson, Spearman, and Kendall Correlation

Different correlation methods answer different questions.

| Method   | Best Used For           | Main Characteristic                      |
| -------- | ----------------------- | ---------------------------------------- |
| Pearson  | Linear relationships    | Measures linear association              |
| Spearman | Monotonic relationships | Uses feature ranks                       |
| Kendall  | Rank relationships      | Useful for smaller samples or tied ranks |

### Pearson Correlation

```python
pearson_corr = numeric_df.corr(method="pearson")
```

### Spearman Correlation

```python
spearman_corr = numeric_df.corr(method="spearman")
```

### Kendall Correlation

```python
kendall_corr = numeric_df.corr(method="kendall")
```

A low Pearson correlation does not always mean that two variables are unrelated.

For example:

```text
Y = X squared
```

This relationship may be strong but nonlinear. A scatter plot should be used to inspect important feature pairs.

---

## 14. Demo 3: Missing-Value Heatmap

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("customer_churn.csv")

plt.figure(figsize=(12, 6))

sns.heatmap(
    df.isna(),
    cbar=False,
    yticklabels=False,
    cmap="viridis"
)

plt.title("Missing-Value Pattern")
plt.xlabel("Features")
plt.ylabel("Rows")
plt.tight_layout()
plt.show()
```

### Missing-Value Percentage

The heatmap should be combined with a numerical summary:

```python
missing_summary = (
    df.isna()
    .mean()
    .mul(100)
    .sort_values(ascending=False)
    .rename("missing_percent")
    .to_frame()
)

print(missing_summary)
```

### Questions to Ask

* Which columns contain the most missing values?
* Do multiple columns become missing together?
* Are missing values concentrated in particular rows?
* Are missing values associated with a customer segment?
* Did missingness begin after a system or schema change?

Do not automatically replace every missing value with zero or the mean. First investigate why the values are missing.

---

## 15. Demo 4: Churn Segment Heatmap

Suppose we want to analyze churn rate by contract type and age group.

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("customer_churn.csv")

df["age_group"] = pd.cut(
    df["age"],
    bins=[0, 25, 40, 60, 100],
    labels=["18-25", "26-40", "41-60", "61+"]
)

churn_pivot = pd.pivot_table(
    df,
    values="churn",
    index="contract_type",
    columns="age_group",
    aggfunc="mean",
    observed=False
)

plt.figure(figsize=(9, 5))

sns.heatmap(
    churn_pivot,
    annot=True,
    fmt=".1%",
    cmap="YlOrRd",
    vmin=0,
    vmax=1,
    linewidths=0.5
)

plt.title("Churn Rate by Contract Type and Age Group")
plt.xlabel("Age Group")
plt.ylabel("Contract Type")
plt.tight_layout()
plt.show()
```

### Possible Insight

Suppose customers aged 18 to 25 with month-to-month contracts have the highest churn rate.

A weak observation would be:

> The darkest cell is the 18–25 month-to-month segment.

A stronger insight would be:

> Younger customers with month-to-month contracts have the highest churn rate. The company should investigate whether onboarding, pricing, or weak contract commitment contributes to this pattern.

---

## 16. Demo 5: Customer Activity by Weekday and Hour

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

events = pd.read_csv(
    "customer_events.csv",
    parse_dates=["event_time"]
)

events["weekday"] = events["event_time"].dt.day_name()
events["hour"] = events["event_time"].dt.hour

weekday_order = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

activity = pd.pivot_table(
    events,
    values="event_id",
    index="weekday",
    columns="hour",
    aggfunc="count",
    fill_value=0
)

activity = activity.reindex(weekday_order)

plt.figure(figsize=(14, 5))

sns.heatmap(
    activity,
    cmap="Blues",
    linewidths=0.2
)

plt.title("Customer Activity by Weekday and Hour")
plt.xlabel("Hour of Day")
plt.ylabel("Weekday")
plt.tight_layout()
plt.show()
```

### Business Applications

This heatmap can support decisions about:

* Customer-support staffing
* Marketing campaign timing
* Server-capacity planning
* Push-notification scheduling
* Promotion periods

Raw activity counts may be misleading when the number of active customers differs across days. Consider normalizing by active users or total exposure.

---

## 17. Demo 6: Confusion Matrix Heatmap

```python
from sklearn.metrics import confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns

y_true = [0, 0, 1, 1, 1, 0, 1, 0]
y_pred = [0, 1, 1, 1, 0, 0, 1, 0]

matrix = confusion_matrix(y_true, y_pred)

plt.figure(figsize=(5, 4))

sns.heatmap(
    matrix,
    annot=True,
    fmt="d",
    cmap="Blues",
    xticklabels=["No Churn", "Churn"],
    yticklabels=["No Churn", "Churn"]
)

plt.title("Customer Churn Confusion Matrix")
plt.xlabel("Predicted Label")
plt.ylabel("Actual Label")
plt.tight_layout()
plt.show()
```

### Normalized Confusion Matrix

When class sizes are different, percentages may be easier to interpret.

```python
normalized_matrix = confusion_matrix(
    y_true,
    y_pred,
    normalize="true"
)

plt.figure(figsize=(5, 4))

sns.heatmap(
    normalized_matrix,
    annot=True,
    fmt=".1%",
    cmap="Blues",
    vmin=0,
    vmax=1,
    xticklabels=["No Churn", "Churn"],
    yticklabels=["No Churn", "Churn"]
)

plt.title("Normalized Confusion Matrix")
plt.xlabel("Predicted Label")
plt.ylabel("Actual Label")
plt.tight_layout()
plt.show()
```

---

## 18. Demo 7: Hyperparameter Heatmap

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

results = pd.DataFrame(
    {
        "max_depth": [3, 3, 3, 5, 5, 5, 8, 8, 8],
        "learning_rate": [
            0.01, 0.05, 0.10,
            0.01, 0.05, 0.10,
            0.01, 0.05, 0.10
        ],
        "validation_auc": [
            0.81, 0.84, 0.83,
            0.83, 0.87, 0.85,
            0.82, 0.86, 0.81
        ]
    }
)

performance_matrix = results.pivot(
    index="max_depth",
    columns="learning_rate",
    values="validation_auc"
)

plt.figure(figsize=(7, 5))

sns.heatmap(
    performance_matrix,
    annot=True,
    fmt=".3f",
    cmap="viridis"
)

plt.title("Validation AUC by Hyperparameter Combination")
plt.xlabel("Learning Rate")
plt.ylabel("Maximum Depth")
plt.tight_layout()
plt.show()
```

The best single score is not always the best final configuration.

Also consider:

* Cross-validation variance
* Training time
* Model complexity
* Overfitting risk
* Stability across random seeds
* Test-set performance

---

## 19. Annotation Formatting

Annotations show exact values inside heatmap cells.

### Integer Values

```python
sns.heatmap(data, annot=True, fmt="d")
```

### Decimal Values

```python
sns.heatmap(data, annot=True, fmt=".2f")
```

### Percentage Values

```python
sns.heatmap(data, annot=True, fmt=".1%")
```

Annotations work well for small matrices. They may make a large heatmap difficult to read.

For large matrices:

* Remove annotations.
* Display only selected features.
* Hide one correlation triangle.
* Increase the figure size.
* Divide the matrix into smaller groups.

---

## 20. Sorting Rows and Columns

The order of rows and columns can reveal or hide patterns.

Weekdays should not be sorted alphabetically.

Incorrect order:

```text
Friday
Monday
Saturday
Sunday
Thursday
Tuesday
Wednesday
```

Correct logical order:

```python
weekday_order = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
```

Age groups should also follow numerical order:

```text
18-25
26-40
41-60
61+
```

Logical ordering makes patterns easier to interpret.

---

## 21. Scaling and Normalization

A heatmap can be misleading when values have very different scales.

For example, one row may contain values around `10`, while another contains values around `10,000`.

The smaller row may appear almost uniform even when it contains meaningful variation.

### Row-Wise Standardization

```python
row_standardized = data.sub(
    data.mean(axis=1),
    axis=0
).div(
    data.std(axis=1),
    axis=0
)
```

Raw and normalized heatmaps answer different questions.

### Raw Values

```text
Which category has the largest absolute value?
```

### Normalized Values

```text
Which values are unusually high or low relative to the same group?
```

Always state whether the heatmap displays raw or normalized values.

---

## 22. Correlation Does Not Imply Causation

A correlation heatmap identifies association, not causality.

A strong correlation may exist because:

```text
Strong correlation
        |
        +--> X may influence Y
        |
        +--> Y may influence X
        |
        +--> A third variable influences both
        |
        +--> Both variables share a time trend
        |
        +--> The dataset contains leakage
        |
        +--> The pattern occurred by chance
```

A correlation heatmap should be used to generate hypotheses, not final causal conclusions.

---

## 23. Multicollinearity and Redundant Features

Highly correlated input features may create multicollinearity.

Possible consequences include:

* Unstable linear-model coefficients
* Difficult coefficient interpretation
* Increased standard errors
* Redundant model inputs
* Additional computational cost

Possible actions include:

* Remove one redundant feature.
* Combine related features.
* Apply regularization.
* Use dimensionality reduction.
* Compare model performance with and without the feature.
* Calculate the Variance Inflation Factor.

A common heuristic is to inspect feature pairs where:

```text
absolute correlation >= 0.8
```

This is not a universal rule. The appropriate threshold depends on the domain, model, and business objective.

---

## 24. Data Leakage Detection

A correlation heatmap may reveal suspiciously strong relationships with the target.

Examples:

* `cancellation_date` predicting churn
* `final_payment_status` predicting loan default
* `diagnosis_result` predicting disease
* `refund_processed` predicting refund requests

The key question is:

```text
Was this feature available at prediction time?
```

```text
Feature available before prediction
        |
        v
Potentially valid feature

Feature created after the target event
        |
        v
Possible data leakage
        |
        v
Remove or redesign the feature
```

A very high target correlation should trigger investigation rather than automatic excitement.

---

## 25. Heatmap Versus Other Charts

| Analytical Question                              | Recommended Visualization |
| ------------------------------------------------ | ------------------------- |
| Compare values across two categorical dimensions | Heatmap                   |
| Examine two numerical variables                  | Scatter plot              |
| Understand one numerical distribution            | Histogram                 |
| Compare category totals                          | Bar chart                 |
| Detect outliers across groups                    | Box plot                  |
| Track a value over time                          | Line chart                |
| Inspect pairwise correlations                    | Correlation heatmap       |
| Read exact values                                | Table                     |

A heatmap is most useful when the data naturally forms a matrix.

---

## 26. How to Interpret a Heatmap

Follow these steps:

### Step 1: Read the Title

Identify:

* The metric
* The population
* The time period
* The analytical purpose

### Step 2: Inspect the Axes

Understand what the rows and columns represent.

### Step 3: Read the Color Bar

Determine which colors represent:

* High values
* Low values
* Positive values
* Negative values

### Step 4: Find Extreme Cells

Look for the highest, lowest, or most unusual combinations.

### Step 5: Look for Clusters

Identify groups of similar values.

### Step 6: Look for Gradients

Check whether values increase or decrease systematically.

### Step 7: Look for Gaps

Identify empty, missing, or low-activity regions.

### Step 8: Validate Numerically

Check:

* Exact values
* Sample sizes
* Distributions
* Confidence intervals
* Possible confounding variables

### Step 9: Connect to the Business Question

Explain why the pattern matters.

### Step 10: Write a Recommendation

Suggest a decision, experiment, or next analytical step.

---

## 27. From Heatmap to Business Insight

A strong analysis follows this process:

```text
Observation
    |
    v
Interpretation
    |
    v
Business implication
    |
    v
Recommendation
    |
    v
Caveat
```

### Example

**Observation**

Customers aged 18 to 25 with month-to-month contracts have the highest churn rate.

**Interpretation**

Flexible contracts may make it easier for younger customers to leave when they experience pricing or service issues.

**Business implication**

This group may represent an important retention opportunity.

**Recommendation**

Test an onboarding campaign or short-term loyalty offer for new customers in this segment.

**Caveat**

The segment may have a smaller sample size than other groups.

---

## 28. Sample Size Matters

A high percentage may be based on very few observations.

| Segment   | Churned | Total Customers | Churn Rate |
| --------- | ------: | --------------: | ---------: |
| Segment A |       2 |               3 |      66.7% |
| Segment B |     500 |           1,000 |      50.0% |

Segment A has a higher churn rate, but its estimate is less reliable.

Create both a rate matrix and a count matrix:

```python
rate_matrix = pd.pivot_table(
    df,
    values="churn",
    index="contract_type",
    columns="age_group",
    aggfunc="mean"
)

count_matrix = pd.pivot_table(
    df,
    values="customer_id",
    index="contract_type",
    columns="age_group",
    aggfunc="count"
)
```

Never make an important decision from a heatmap without checking sample sizes.

---

## 29. Common Mistakes

## 29.1 Creating a Heatmap Without a Question

### Problem

The chart is created only because it looks interesting.

### Better Approach

Start with a question:

```text
Which customer segments have the highest churn rate?
```

Then choose the correct rows, columns, and metric.

---

## 29.2 Treating Correlation as Causation

### Problem

A strong correlation is described as proof that one variable causes another.

### Better Approach

Use causal language only when supported by experiments or causal inference.

---

## 29.3 Using the Wrong Color Scale

### Problem

A sequential palette is used for values ranging from negative to positive.

### Better Approach

Use a diverging palette centered at zero.

---

## 29.4 Using Automatic Color Ranges

### Problem

Two heatmaps use different automatic ranges, making comparison misleading.

### Better Approach

Set consistent limits:

```python
vmin=0
vmax=1
```

For correlations:

```python
vmin=-1
vmax=1
center=0
```

---

## 29.5 Adding Too Many Numbers

### Problem

A large heatmap contains annotations in every cell.

### Better Approach

Remove annotations or display fewer features.

---

## 29.6 Ignoring Nonlinear Relationships

### Problem

A low Pearson correlation is interpreted as no relationship.

### Better Approach

Use scatter plots and consider Spearman correlation.

---

## 29.7 Including Identifier Columns

### Problem

Columns such as the following are included:

* `customer_id`
* `transaction_id`
* `row_number`

### Better Approach

Exclude identifiers unless they have a meaningful analytical purpose.

---

## 29.8 Ignoring Data Leakage

### Problem

Features created after the target event are included.

### Better Approach

Check when every feature becomes available.

---

## 29.9 Using Manual and Non-Reproducible Steps

### Problem

The analyst manually edits the data before creating the heatmap.

### Better Approach

Store all cleaning, transformation, aggregation, and visualization steps in code.

---

## 29.10 Describing Colors Instead of Insights

Weak statement:

> The upper-right cell is dark red.

Better statement:

> Customers with month-to-month contracts and frequent support calls have the highest churn rate, suggesting a potential retention opportunity.

---

## 30. Reusable Heatmap Function

```python
from typing import Optional

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns


def plot_heatmap(
    data: pd.DataFrame,
    title: str,
    x_label: str = "",
    y_label: str = "",
    cmap: str = "Blues",
    annot: bool = True,
    fmt: str = ".2f",
    vmin: Optional[float] = None,
    vmax: Optional[float] = None,
    center: Optional[float] = None,
    figsize: tuple[int, int] = (10, 6)
) -> None:
    """Create a labeled heatmap from a pandas DataFrame."""

    if data.empty:
        raise ValueError("The input DataFrame must not be empty.")

    plt.figure(figsize=figsize)

    sns.heatmap(
        data,
        annot=annot,
        fmt=fmt,
        cmap=cmap,
        vmin=vmin,
        vmax=vmax,
        center=center,
        linewidths=0.5
    )

    plt.title(title)
    plt.xlabel(x_label)
    plt.ylabel(y_label)
    plt.tight_layout()
    plt.show()
```

Example:

```python
plot_heatmap(
    data=correlation_matrix,
    title="Feature Correlation Heatmap",
    x_label="Features",
    y_label="Features",
    cmap="coolwarm",
    vmin=-1,
    vmax=1,
    center=0
)
```

---

## 31. Practical Exercise

Use a small customer churn CSV dataset.

### Task 1: Inspect the Dataset

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

print(df.head())
print(df.shape)
print(df.info())
print(df.isna().sum())
```

### Task 2: Clean the Data

* Remove duplicate rows.
* Correct invalid data types.
* Investigate missing values.
* Exclude identifier columns.
* Convert the target variable into numerical form.

Example:

```python
df = df.drop_duplicates()

df["churn"] = df["churn"].map(
    {
        "No": 0,
        "Yes": 1
    }
)
```

### Task 3: Create a Correlation Heatmap

```python
numeric_df = df.select_dtypes(include="number")
correlation_matrix = numeric_df.corr()
```

Create the heatmap and identify important feature relationships.

### Task 4: Create a Missing-Value Heatmap

```python
missing_matrix = df.isna()
```

Describe whether the missing values appear random or structured.

### Task 5: Create a Segment Heatmap

Create a pivot table showing churn rate by:

* Contract type
* Age group

### Task 6: Validate the Pattern

Create another pivot table showing customer counts for each segment.

### Task 7: Write Three Insights

For every insight, include:

1. Observation
2. Interpretation
3. Business implication
4. Recommendation
5. Caveat

---

## 32. Suggested Notebook Structure

```text
01_business_question
02_data_loading
03_schema_inspection
04_data_quality_checks
05_data_cleaning
06_feature_preparation
07_correlation_heatmap
08_missing_value_heatmap
09_segment_heatmap
10_pattern_validation
11_business_insights
12_caveats_and_next_steps
```

This structure makes the analysis easier to review and reproduce.

---

## 33. Example Insights

### Insight 1: Contract Type and Churn

Month-to-month customers have a higher churn rate than customers with annual contracts.

**Possible explanation:** Flexible contracts reduce switching costs.

**Recommendation:** Test a loyalty incentive that encourages customers to choose longer contracts.

**Caveat:** Contract type may be associated with customer tenure, age, or pricing.

---

### Insight 2: Support Calls and Churn

The correlation heatmap shows a positive association between support-call frequency and churn.

**Possible explanation:** Customers who repeatedly contact support may be experiencing unresolved problems.

**Recommendation:** Create an alert for customers with repeated support contacts and route them to a retention workflow.

**Caveat:** Support calls may be a symptom of dissatisfaction rather than the direct cause of churn.

---

### Insight 3: Tenure and Churn

Customer tenure has a negative association with churn.

**Possible explanation:** Long-term customers may have greater product familiarity, accumulated benefits, or higher switching costs.

**Recommendation:** Improve onboarding and early customer support during the first months of the customer lifecycle.

**Caveat:** Acquisition channel and customer cohort may influence the relationship.

---

## 34. Completion Checklist

* [ ] I can explain a heatmap in one or two minutes.
* [ ] I understand how colors represent matrix values.
* [ ] I can create a basic heatmap using Python.
* [ ] I can create a correlation heatmap.
* [ ] I understand Pearson and Spearman correlation.
* [ ] I can create a missing-value heatmap.
* [ ] I can create a pivot-table heatmap.
* [ ] I can visualize a confusion matrix.
* [ ] I can choose an appropriate color scale.
* [ ] I know that correlation does not imply causation.
* [ ] I check sample sizes before making recommendations.
* [ ] I exclude meaningless identifier columns.
* [ ] I investigate possible data leakage.
* [ ] I can write insights, caveats, and recommendations.
* [ ] My analysis can be reproduced from the raw dataset.

---

## 35. Related Outcome

Understand, clean, visualize, and explain datasets using business-oriented insights.

---

## 36. Related Project

### Mini Project: Customer Churn EDA

Build an exploratory analysis that includes:

* Dataset and schema inspection
* Missing-value analysis
* Duplicate handling
* Numerical distributions
* Categorical distributions
* Correlation heatmap
* Customer-segment heatmap
* Sample-size validation
* At least three business insights
* Caveats and assumptions
* Recommended retention actions
* A reproducible notebook
* A concise insight report

### Suggested Project Structure

```text
customer-churn-eda/
├── data/
│   ├── raw/
│   │   └── customer_churn.csv
│   └── processed/
│       └── customer_churn_clean.csv
├── notebooks/
│   └── customer_churn_eda.ipynb
├── reports/
│   ├── figures/
│   │   ├── correlation_heatmap.png
│   │   ├── missing_value_heatmap.png
│   │   └── churn_segment_heatmap.png
│   └── insight_report.md
├── src/
│   └── visualization.py
├── requirements.txt
└── README.md
```

---

## 37. Key Takeaways

* A heatmap visualizes matrix values using colors.
* Heatmaps are useful for correlations, missing values, confusion matrices, customer segments, time activity, and model tuning.
* A sequential color scale is suitable for low-to-high values.
* A diverging color scale is suitable for values around a meaningful center.
* Correlation identifies association, not causation.
* A low linear correlation does not rule out a nonlinear relationship.
* Sample size must be checked before making decisions.
* Suspiciously strong target correlations may indicate data leakage.
* A heatmap should answer a clear business or modeling question.
* A useful analysis includes an insight, caveat, and actionable recommendation.

---

## 38. Conclusion

A **heatmap** is an important visualization tool in the AI and Data Scientist roadmap because it transforms a dense table or matrix into an easier-to-understand visual pattern.

However, the heatmap itself is not the final result.

A complete analysis should move through the following process:

```text
Matrix
    |
    v
Visual pattern
    |
    v
Numerical validation
    |
    v
Domain interpretation
    |
    v
Caveat
    |
    v
Actionable recommendation
```

Turn this lesson into a practical artifact such as:

* A reproducible notebook
* A correlation report
* A missing-data analysis
* A model evaluation chart
* A dashboard component
* A customer churn portfolio project

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
