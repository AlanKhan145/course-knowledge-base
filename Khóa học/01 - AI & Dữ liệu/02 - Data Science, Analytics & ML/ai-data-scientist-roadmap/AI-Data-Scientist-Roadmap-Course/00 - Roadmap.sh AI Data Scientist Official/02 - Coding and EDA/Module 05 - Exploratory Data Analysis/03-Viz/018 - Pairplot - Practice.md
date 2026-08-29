# 018 - Pairplot

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Visualization
**Roadmap Source:** Exploratory Data Analysis / Visualization
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 018
**Suggested Duration:** 20 minutes

---

## 1. Overview

A **pairplot** is a visualization that displays the pairwise relationships between multiple numerical variables in a dataset.

It creates a grid of plots:

* The diagonal usually shows the distribution of each individual variable.
* The off-diagonal cells show relationships between pairs of variables.
* A categorical variable can be used to color the observations by group or class.

Pairplots are especially useful during Exploratory Data Analysis because they provide a quick overview of:

* Feature distributions
* Linear and nonlinear relationships
* Class separation
* Clusters
* Outliers
* Correlated features

A pairplot is commonly created using the `seaborn.pairplot()` function.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain what a pairplot is in your own words.
* Identify the diagonal and off-diagonal components of a pairplot.
* Create a pairplot using Seaborn.
* Use color to compare different categories or target classes.
* Detect correlations, clusters, class separation, and outliers.
* Recognize when a pairplot becomes too large or difficult to interpret.
* Translate visual patterns into actionable analytical insights.

---

## 3. Main Concept

A pairplot compares every selected numerical variable with every other selected numerical variable.

Suppose a dataset contains three numerical features:

* `age`
* `monthly_charges`
* `tenure`

The resulting pairplot can be represented conceptually as follows:

| Variable            | Age                     | Monthly Charges              | Tenure                     |
| ------------------- | ----------------------- | ---------------------------- | -------------------------- |
| **Age**             | Age distribution        | Age vs. Monthly Charges      | Age vs. Tenure             |
| **Monthly Charges** | Monthly Charges vs. Age | Monthly Charges distribution | Monthly Charges vs. Tenure |
| **Tenure**          | Tenure vs. Age          | Tenure vs. Monthly Charges   | Tenure distribution        |

The diagonal cells describe one variable at a time.

The off-diagonal cells describe the relationship between two variables.

---

## 4. Pairplot Structure

A pairplot contains two main components.

### 4.1 Diagonal Plots

The diagonal plots show the distribution of each numerical feature.

They are usually displayed as:

* Histograms
* Kernel Density Estimation plots

The diagonal helps answer questions such as:

* Is the feature normally distributed?
* Is the distribution skewed?
* Are there multiple peaks?
* Are there extreme values?
* Do different classes have different distributions?

### 4.2 Off-Diagonal Plots

The off-diagonal plots usually contain scatter plots.

They help answer questions such as:

* Are two variables positively related?
* Are two variables negatively related?
* Is the relationship nonlinear?
* Are there visible clusters?
* Can the target classes be separated?
* Are there unusual observations?

---

## 5. Pairplot in the EDA Workflow

A pairplot is usually created after the initial data inspection and cleaning steps.

```text
Business Question
        |
        v
Load Dataset
        |
        v
Inspect Schema and Data Types
        |
        v
Handle Missing Values and Duplicates
        |
        v
Select Relevant Numerical Features
        |
        v
Create Pairplot
        |
        v
Identify Relationships, Clusters and Outliers
        |
        v
Validate with Statistics
        |
        v
Write Insights and Recommendations
```

A pairplot should not replace statistical analysis. It is primarily a visual discovery tool used to generate hypotheses.

---

## 6. Basic Syntax

```python
import seaborn as sns
import matplotlib.pyplot as plt

sns.pairplot(data=df)

plt.show()
```

The `data` parameter receives the Pandas DataFrame that contains the variables to visualize.

---

## 7. Basic Example

Seaborn includes the Iris dataset, which contains measurements for three flower species.

```python
import seaborn as sns
import matplotlib.pyplot as plt

iris = sns.load_dataset("iris")

sns.pairplot(iris)

plt.show()
```

The dataset includes:

* `sepal_length`
* `sepal_width`
* `petal_length`
* `petal_width`
* `species`

Because `species` is categorical, it is not automatically displayed as a numerical axis.

---

## 8. Using Color with `hue`

The `hue` parameter colors observations according to a categorical variable.

```python
sns.pairplot(
    data=iris,
    hue="species"
)

plt.show()
```

This makes it easier to determine whether different groups or target classes are visually separable.

For example, the Iris pairplot often shows that:

* The `setosa` class is clearly separated by petal measurements.
* The `versicolor` and `virginica` classes overlap more strongly.
* Petal features may be more useful for classification than sepal features.

---

## 9. Selecting Relevant Features

A pairplot becomes difficult to read when too many variables are included.

It is usually better to select a small set of relevant columns.

```python
selected_columns = [
    "sepal_length",
    "sepal_width",
    "petal_length",
    "petal_width",
    "species"
]

sns.pairplot(
    data=iris[selected_columns],
    hue="species"
)

plt.show()
```

A practical pairplot often contains approximately three to six numerical variables.

For `n` variables, the plot contains approximately:

$$
n \times n
$$

cells.

For example:

| Number of variables | Number of cells |
| ------------------: | --------------: |
|                   3 |               9 |
|                   4 |              16 |
|                   5 |              25 |
|                   8 |              64 |
|                  10 |             100 |

The number of plots grows quickly as more variables are added.

---

## 10. Common Pairplot Parameters

### 10.1 `vars`

Select specific numerical variables.

```python
sns.pairplot(
    data=iris,
    vars=[
        "sepal_length",
        "sepal_width",
        "petal_length"
    ]
)
```

### 10.2 `hue`

Color observations by category or target class.

```python
sns.pairplot(
    data=iris,
    hue="species"
)
```

### 10.3 `diag_kind`

Control the plot shown on the diagonal.

Using histograms:

```python
sns.pairplot(
    data=iris,
    hue="species",
    diag_kind="hist"
)
```

Using density plots:

```python
sns.pairplot(
    data=iris,
    hue="species",
    diag_kind="kde"
)
```

### 10.4 `kind`

Control the plots outside the diagonal.

Using scatter plots:

```python
sns.pairplot(
    data=iris,
    kind="scatter"
)
```

Using regression plots:

```python
sns.pairplot(
    data=iris,
    kind="reg"
)
```

Using two-dimensional density plots:

```python
sns.pairplot(
    data=iris,
    kind="kde"
)
```

### 10.5 `corner`

Display only the lower half of the matrix.

```python
sns.pairplot(
    data=iris,
    hue="species",
    corner=True
)
```

This removes duplicated plots and creates a cleaner visualization.

### 10.6 `plot_kws`

Customize the off-diagonal plots.

```python
sns.pairplot(
    data=iris,
    hue="species",
    plot_kws={
        "alpha": 0.6,
        "s": 40
    }
)
```

Here:

* `alpha` controls transparency.
* `s` controls marker size.

---

## 11. Interpreting a Pairplot

A pairplot can reveal several common patterns.

### 11.1 Positive Relationship

When one variable increases as another variable increases, the points tend to move from the lower-left corner to the upper-right corner.

```text
y
^
|          *
|       *
|    *
| *
+-----------------> x
```

Possible interpretation:

> Customers with longer tenure may also have higher total charges.

---

### 11.2 Negative Relationship

When one variable increases while another decreases, the points tend to move from the upper-left corner to the lower-right corner.

```text
y
^
| *
|    *
|       *
|          *
+-----------------> x
```

Possible interpretation:

> Product price may decrease as the discount percentage increases.

---

### 11.3 Weak or No Relationship

When the points appear randomly distributed, there may be little visible relationship between the variables.

```text
y
^
|    *      *
| *     *
|      *       *
|  *       *
+-----------------> x
```

Possible interpretation:

> Age may have little direct relationship with monthly spending.

However, the absence of a visual pattern does not prove that no relationship exists.

---

### 11.4 Nonlinear Relationship

Some variables may have curved, exponential, or other nonlinear relationships.

```text
y
^
|             *
|          *
|      *
|   *
| *
+-----------------> x
```

A nonlinear pattern may suggest:

* Feature transformation
* Polynomial features
* Tree-based models
* Nonlinear machine learning models

---

### 11.5 Clusters

Separate groups of observations may indicate natural customer segments or hidden categories.

```text
y
^
|  ***                ***
| ****               ****
|  ***                ***
|
+--------------------------> x
```

Clusters may suggest:

* Customer segmentation
* Different behavioral groups
* Different data-generating processes
* Hidden categorical variables

---

### 11.6 Class Separation

When `hue` is used, pairplots can show whether different target classes occupy different regions.

Good class separation suggests that the selected features may be useful for classification.

Poor class separation may suggest that:

* The features are weak predictors.
* Additional features are required.
* Nonlinear decision boundaries may be necessary.
* Feature engineering may improve performance.

---

### 11.7 Outliers

Observations located far away from the main group may be outliers.

```text
y
^
|                     *
|
|       ****
|      *****
|       ***
+--------------------------> x
```

An outlier may represent:

* A data-entry error
* A measurement error
* A rare but valid observation
* A special customer segment
* Fraud or abnormal behavior

Outliers should be investigated rather than automatically removed.

---

## 12. Pairplot and Correlation

Pairplots and correlation matrices are related but answer different questions.

| Pairplot                              | Correlation Matrix                             |
| ------------------------------------- | ---------------------------------------------- |
| Shows visual relationships            | Shows numerical correlation values             |
| Can reveal nonlinear patterns         | Usually measures linear association            |
| Shows clusters and outliers           | Does not directly show individual observations |
| Can compare categories using color    | Usually does not show class separation         |
| Becomes expensive with many variables | More scalable for many variables               |

A useful EDA workflow is:

```text
Pairplot
   |
   v
Identify suspicious or interesting relationships
   |
   v
Calculate correlation coefficients
   |
   v
Validate patterns with statistical analysis
```

Example:

```python
correlation_matrix = iris.corr(numeric_only=True)

print(correlation_matrix)
```

---

## 13. Customer Churn Example

Suppose a customer churn dataset contains:

* `tenure`
* `monthly_charges`
* `total_charges`
* `support_calls`
* `churn`

A pairplot can be created as follows:

```python
import seaborn as sns
import matplotlib.pyplot as plt

selected_columns = [
    "tenure",
    "monthly_charges",
    "total_charges",
    "support_calls",
    "churn"
]

sns.pairplot(
    data=df[selected_columns],
    hue="churn",
    diag_kind="hist",
    corner=True,
    plot_kws={
        "alpha": 0.5,
        "s": 35
    }
)

plt.show()
```

Possible observations:

1. `tenure` and `total_charges` may have a strong positive relationship.
2. Churned customers may be concentrated among customers with short tenure.
3. Customers with high monthly charges may show a higher churn rate.
4. Customers with many support calls may form a high-risk churn group.
5. Extreme values in `total_charges` may require further investigation.

These observations should then be validated using:

* Grouped statistics
* Correlation analysis
* Hypothesis testing
* Predictive modeling

---

## 14. Example Insight Writing

A chart alone is not a complete analytical output.

Weak statement:

> The pairplot shows tenure and total charges.

Better statement:

> The pairplot indicates a strong positive relationship between customer tenure and total charges, which is expected because customers accumulate charges over time.

Actionable statement:

> Customers with short tenure and high monthly charges appear more concentrated in the churn group. The retention team should evaluate onboarding quality and early pricing dissatisfaction for customers in their first six months.

A useful insight usually contains:

```text
Observation
    +
Interpretation
    +
Business Impact
    +
Recommended Action
```

Example:

```text
Observation:
Churned customers are concentrated at low tenure values.

Interpretation:
Early-stage customers may not experience enough value to remain subscribed.

Business Impact:
The company may be losing customers before recovering acquisition costs.

Recommendation:
Create an onboarding and retention campaign for customers during their
first three months.
```

---

## 15. Complete Python Demo

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Load the example dataset
iris = sns.load_dataset("iris")

# Inspect the dataset
print(iris.head())
print(iris.info())
print(iris.isna().sum())

# Select relevant variables
selected_columns = [
    "sepal_length",
    "sepal_width",
    "petal_length",
    "petal_width",
    "species"
]

# Create the pairplot
pair_grid = sns.pairplot(
    data=iris[selected_columns],
    hue="species",
    diag_kind="hist",
    corner=True,
    plot_kws={
        "alpha": 0.6,
        "s": 40
    }
)

# Add a title
pair_grid.fig.suptitle(
    "Pairwise Relationships in the Iris Dataset",
    y=1.02
)

plt.show()
```

---

## 16. Pairplot Before Modeling

A pairplot can support several modeling decisions.

### 16.1 Feature Selection

Features that clearly separate classes may be useful predictors.

### 16.2 Multicollinearity Detection

Two features with an almost perfectly linear relationship may contain redundant information.

This can affect models such as:

* Linear regression
* Logistic regression
* Generalized linear models

### 16.3 Model Selection

A pairplot may suggest which model family is appropriate.

| Visual pattern                | Possible modeling implication                   |
| ----------------------------- | ----------------------------------------------- |
| Clear linear relationships    | Linear models may work well                     |
| Curved relationships          | Feature transformation or nonlinear models      |
| Multiple clusters             | Clustering or segmented models                  |
| Strong class separation       | Classification may be relatively easy           |
| Heavy overlap between classes | More features or complex models may be required |
| Strong outliers               | Robust scaling or robust models may be useful   |

---

## 17. Pairplot Limitations

Pairplots are useful, but they have several limitations.

### 17.1 Poor Scalability

The number of plots grows quadratically with the number of variables.

For many features, use:

* A correlation heatmap
* Feature selection
* Principal Component Analysis
* Individual scatter plots
* Dimensionality reduction

### 17.2 Overplotting

Large datasets may produce dense clouds of overlapping points.

Possible solutions include:

* Sampling the dataset
* Reducing marker size
* Adding transparency
* Using hexbin plots
* Using density plots

Example:

```python
sample_df = df.sample(
    n=min(2000, len(df)),
    random_state=42
)

sns.pairplot(
    data=sample_df,
    vars=["tenure", "monthly_charges", "total_charges"],
    hue="churn",
    plot_kws={"alpha": 0.4, "s": 20}
)
```

### 17.3 Categorical Variables

Pairplots mainly work with numerical variables.

Categorical variables are usually used through `hue`, not as continuous axes.

### 17.4 Missing Values

Rows containing missing values may be excluded from specific plots.

Always inspect missing data before interpreting the result.

### 17.5 Visual Patterns Do Not Prove Causality

A visible relationship between two variables does not prove that one variable causes the other.

The relationship may be caused by:

* Confounding variables
* Selection bias
* Data leakage
* Time effects
* Coincidence

---

## 18. Common Mistakes

### Mistake 1: Plotting Every Feature

A pairplot with too many variables becomes unreadable and computationally expensive.

Better approach:

```python
important_features = [
    "tenure",
    "monthly_charges",
    "total_charges",
    "support_calls",
    "churn"
]
```

Select variables related to the business question.

---

### Mistake 2: Ignoring Data Quality

Incorrect data types, missing values, and invalid values can create misleading patterns.

Check the dataset first:

```python
print(df.info())
print(df.isna().sum())
print(df.duplicated().sum())
print(df.describe())
```

---

### Mistake 3: Using the Wrong `hue` Variable

The `hue` variable should usually be a meaningful category, such as:

* Target class
* Customer segment
* Product category
* Region
* Experimental group

Using a continuous variable with too many unique values may produce an unreadable legend.

---

### Mistake 4: Assuming Correlation Means Causation

A pairplot reveals association, not causal relationships.

Additional analysis is required before making causal claims.

---

### Mistake 5: Reporting Only Visual Descriptions

Weak conclusion:

> There are blue and orange points.

Better conclusion:

> Churned customers are concentrated among low-tenure and high-monthly-charge observations, suggesting that early pricing dissatisfaction may contribute to customer loss.

---

### Mistake 6: Ignoring Duplicate Information

The upper and lower halves of a standard pairplot contain mirrored relationships.

Use the `corner=True` parameter when a more compact chart is preferred.

---

### Mistake 7: Not Saving the Analysis

Manual analysis that cannot be reproduced is difficult to audit or update.

Save:

* The raw dataset
* Cleaning steps
* Feature-selection decisions
* Plotting code
* Statistical validation
* Final insights
* Assumptions and caveats

---

## 19. Practical Exercise

Use a small CSV dataset and complete the following steps.

### Task 1: Load and Inspect the Dataset

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

print(df.head())
print(df.info())
print(df.describe())
```

### Task 2: Check Data Quality

```python
print(df.isna().sum())
print(df.duplicated().sum())
```

### Task 3: Select Numerical Variables

Choose three to six numerical features related to the business problem.

Example:

```python
selected_features = [
    "tenure",
    "monthly_charges",
    "total_charges",
    "support_calls"
]
```

### Task 4: Create a Basic Pairplot

```python
import seaborn as sns
import matplotlib.pyplot as plt

sns.pairplot(
    data=df,
    vars=selected_features
)

plt.show()
```

### Task 5: Add the Target Variable

```python
sns.pairplot(
    data=df,
    vars=selected_features,
    hue="churn",
    diag_kind="hist",
    corner=True,
    plot_kws={"alpha": 0.5}
)

plt.show()
```

### Task 6: Write Three Insights

For each insight, include:

1. The visual observation
2. A possible explanation
3. The business impact
4. A recommended next step
5. A caveat or assumption

---

## 20. Suggested Notebook Structure

```text
01. Business Question
02. Dataset Description
03. Schema Inspection
04. Missing-Value Analysis
05. Duplicate Analysis
06. Feature Selection
07. Pairplot Without Target Color
08. Pairplot With Target Color
09. Correlation Validation
10. Key Insights
11. Business Recommendations
12. Caveats and Next Questions
```

---

## 21. Completion Checklist

* [ ] I can explain a pairplot in one or two minutes.
* [ ] I understand the difference between diagonal and off-diagonal plots.
* [ ] I can create a pairplot using `seaborn.pairplot()`.
* [ ] I can select relevant features using the `vars` parameter.
* [ ] I can compare target classes using the `hue` parameter.
* [ ] I can identify correlations, clusters, class separation, and outliers.
* [ ] I understand that visual relationships do not prove causality.
* [ ] I can reduce overplotting using sampling, transparency, or smaller markers.
* [ ] I have written at least three insights based on the visualization.
* [ ] I have documented at least one caveat, assumption, or follow-up question.

---

## 22. Related Outcome

Understand, clean, visualize, and explain datasets using business-oriented insights.

---

## 23. Related Project

### Mini Project: Customer Churn EDA

Create an exploratory analysis that includes:

* Dataset schema inspection
* Missing-value handling
* Duplicate handling
* Numerical distribution analysis
* Pairplot of important variables
* Churn-class comparison
* Correlation validation
* At least three business insights
* At least two actionable recommendations
* A section describing assumptions and limitations

Suggested pairplot features:

```python
features = [
    "tenure",
    "monthly_charges",
    "total_charges",
    "support_calls",
    "churn"
]
```

Expected portfolio artifacts:

* A reproducible Jupyter Notebook
* A cleaned dataset or data-cleaning script
* A pairplot image
* An insight report
* A README explaining the business problem and findings

---

## 24. Summary

A **pairplot** is a compact visualization for examining pairwise relationships among several numerical variables.

It combines:

* Univariate distribution analysis
* Bivariate relationship analysis
* Outlier detection
* Cluster discovery
* Class comparison
* Early feature evaluation

The main purpose of a pairplot is not simply to create a visually attractive chart. Its purpose is to help an analyst discover patterns, generate hypotheses, evaluate useful features, identify data-quality issues, and communicate meaningful insights.

A strong pairplot analysis follows this process:

```text
Select Relevant Features
        |
        v
Create Pairplot
        |
        v
Observe Distributions and Relationships
        |
        v
Identify Clusters, Outliers and Class Separation
        |
        v
Validate with Statistics
        |
        v
Write Insight, Caveat and Recommendation
```

Turn this lesson into a reproducible notebook, chart, analytical report, or portfolio project so that the knowledge becomes practical and demonstrable.

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
