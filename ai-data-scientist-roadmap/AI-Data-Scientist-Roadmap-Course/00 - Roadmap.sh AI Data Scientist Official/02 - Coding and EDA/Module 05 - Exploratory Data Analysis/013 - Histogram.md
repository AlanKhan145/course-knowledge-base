# 013 - Histogram

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Visualization
**Roadmap Source:** Exploratory Data Analysis / Visualization
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 013
**Suggested Duration:** 20 minutes

---

## 1. Summary

A **histogram** is a visualization used to understand the distribution of a numerical variable.

It divides numerical values into intervals called **bins** and shows how many observations fall into each interval.

Histograms help answer questions such as:

* Where are most values concentrated?
* Is the distribution symmetric or skewed?
* Are there multiple groups in the data?
* Are there unusually large or small values?
* Is a transformation needed before modeling?
* Does the production data differ from the training data?

Histograms are commonly used during Exploratory Data Analysis before selecting statistical tests, transformations, features, or machine learning models.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain what a histogram represents.
* Identify the main components of a histogram.
* Distinguish a histogram from a bar chart.
* Choose a reasonable number of bins.
* Interpret symmetric, skewed, uniform, and multimodal distributions.
* Detect possible outliers, data errors, and unusual patterns.
* Compare distributions between groups.
* Create histograms using Pandas and Matplotlib.
* Convert histogram observations into business-oriented insights.
* Document assumptions and limitations.

---

## 3. What Is a Histogram?

A histogram groups a continuous numerical variable into intervals.

Suppose the following customer ages are recorded:

```text
18, 19, 20, 22, 22, 24, 27, 31, 34, 35, 36, 41
```

The values can be grouped into bins:

| Age interval | Frequency |
| ------------ | --------: |
| 18 to 22     |         5 |
| 23 to 27     |         2 |
| 28 to 32     |         1 |
| 33 to 37     |         3 |
| 38 to 42     |         1 |

A simplified histogram representation is:

```text
Age interval    Frequency

18-22           #####
23-27           ##
28-32           #
33-37           ###
38-42           #
```

Each bar represents the number of observations within a numerical interval.

---

## 4. Main Components of a Histogram

A histogram contains the following components:

| Component  | Description                                       |
| ---------- | ------------------------------------------------- |
| X-axis     | Numerical intervals or bins                       |
| Y-axis     | Frequency, count, probability, or density         |
| Bin        | A numerical interval                              |
| Bar height | Number or proportion of observations in a bin     |
| Bin width  | Size of each numerical interval                   |
| Range      | Difference between the minimum and maximum values |

Example:

```text
Frequency
   |
 8 |             ####
 7 |             ####
 6 |       ####  ####
 5 |       ####  ####
 4 | ####  ####  ####
 3 | ####  ####  ####  ####
 2 | ####  ####  ####  ####
 1 | ####  ####  ####  ####
   +----------------------------> Value
      0-10  10-20 20-30 30-40
```

Unlike a bar chart, histogram bars normally touch because the bins represent adjacent numerical intervals.

---

## 5. Histogram Workflow in EDA

A histogram should be connected to a complete analytical process.

```text
Business question
        |
        v
Select a numerical variable
        |
        v
Check data type and missing values
        |
        v
Review minimum and maximum values
        |
        v
Choose a binning strategy
        |
        v
Create the histogram
        |
        v
Interpret shape, center, spread, and outliers
        |
        v
Compare important groups
        |
        v
Write an insight and recommendation
```

A histogram is not the final result.

The final result should include:

* The observed pattern
* Supporting numerical evidence
* A possible explanation
* A limitation or caveat
* A recommended next step

---

## 6. Histogram vs. Bar Chart

Histograms and bar charts may look similar, but they represent different types of data.

| Characteristic     | Histogram                     | Bar chart                 |
| ------------------ | ----------------------------- | ------------------------- |
| Data type          | Numerical                     | Categorical               |
| X-axis             | Continuous intervals          | Separate categories       |
| Bar order          | Determined by numerical order | Can usually be rearranged |
| Space between bars | Normally no space             | Usually contains space    |
| Main purpose       | Show a distribution           | Compare categories        |
| Example            | Customer age                  | Customer country          |

### Histogram Example

```text
Age
18-25 | #######
26-35 | ###########
36-45 | ######
46-55 | ###
```

### Bar Chart Example

```text
Country
Vietnam   | ###########
Thailand  | ######
Singapore | ####
```

Use a histogram for variables such as:

* Age
* Income
* Transaction value
* Response time
* Temperature
* Customer tenure
* Model prediction probability

Use a bar chart for variables such as:

* Country
* Product category
* Subscription plan
* Payment method
* Device type

---

## 7. Understanding Bins

A **bin** is an interval used to group numerical values.

For example:

```text
0-10
10-20
20-30
30-40
```

The number of bins strongly affects the appearance of a histogram.

### Too Few Bins

```text
Frequency
   |
   |       ########
   |       ########
   | ####  ########
   | ####  ########
   +----------------
      Low     High
```

Possible problem:

* Important patterns are hidden.
* Multiple groups may appear as one group.
* Outliers may not be visible.

### Too Many Bins

```text
Frequency
   |
   |      #  #
   | #  # ## # #
   | ## # ## ### ##
   +----------------
```

Possible problem:

* The chart becomes noisy.
* Random variation may look meaningful.
* The overall distribution becomes difficult to understand.

### Reasonable Number of Bins

```text
Frequency
   |
   |          ####
   |      ########
   |  ############
   |################
   +----------------
```

A useful histogram should reveal the overall pattern without hiding important details.

---

## 8. Common Bin Selection Methods

### 8.1 Square-Root Rule

A simple approximation is:

```text
Number of bins = square root of the number of observations
```

For 100 observations:

```text
Number of bins = square root of 100 = 10
```

This rule is simple but does not consider the shape or spread of the data.

---

### 8.2 Sturges' Rule

Sturges' rule estimates the number of bins using:

```text
Number of bins = 1 + log2(n)
```

Where:

* `n` is the number of observations.
* `log2` is the logarithm with base 2.

This method often works reasonably well for small or approximately normal datasets.

---

### 8.3 Freedman-Diaconis Rule

The Freedman-Diaconis rule uses the data spread and sample size.

```text
Bin width =
2 * IQR / cube root of n
```

Where:

* `IQR` is the interquartile range.
* `n` is the number of observations.

This method is more resistant to outliers than methods based on the full range.

NumPy and Matplotlib can apply automatic strategies:

```python
plt.hist(
    data,
    bins="fd",
)
```

Other common options include:

```python
bins="auto"
bins="sturges"
bins="sqrt"
```

No binning rule is universally correct. Compare several reasonable choices before drawing conclusions.

---

## 9. Common Distribution Shapes

### 9.1 Symmetric Distribution

A symmetric distribution has similar shapes on both sides of its center.

```text
Frequency
   |
   |          ####
   |       ##########
   |     ##############
   |   ##################
   | ######################
   +--------------------------> Value
```

Possible interpretation:

* Mean and median may be similar.
* Values are concentrated around the center.
* Extreme values are relatively uncommon.

A normal distribution is a common example of a symmetric distribution.

---

### 9.2 Right-Skewed Distribution

A right-skewed distribution has a long tail toward larger values.

```text
Frequency
   |
   | ########
   | ###########
   | #######
   | ####
   | ##
   | #
   +--------------------------> Value
```

Common examples:

* Customer income
* House prices
* Transaction amounts
* Website session duration
* Insurance claims

Typical relationship:

```text
Mean > Median
```

A small number of large values pulls the mean to the right.

Possible transformations include:

* Log transformation
* Square-root transformation
* Winsorization
* Robust scaling

Transformations should be justified by the analytical or modeling objective.

---

### 9.3 Left-Skewed Distribution

A left-skewed distribution has a long tail toward smaller values.

```text
Frequency
   |
   |                    ########
   |                ############
   |             ##########
   |         ######
   |     ###
   |  #
   +--------------------------> Value
```

Typical relationship:

```text
Mean < Median
```

Possible examples:

* Scores from an easy examination
* Customer satisfaction with mostly high ratings
* Product quality measurements near the maximum limit

---

### 9.4 Uniform Distribution

A uniform distribution has approximately equal frequencies across its range.

```text
Frequency
   |
   | ####  ####  ####  ####
   | ####  ####  ####  ####
   | ####  ####  ####  ####
   +--------------------------> Value
```

Possible interpretations:

* Values may have been sampled evenly.
* The process may intentionally generate random values.
* The variable may have been discretized.
* Data collection rules may limit the observed shape.

---

### 9.5 Bimodal Distribution

A bimodal distribution contains two major peaks.

```text
Frequency
   |
   |      ####          ####
   |    ########      ########
   | ############    ############
   +------------------------------> Value
```

Possible explanations:

* Two customer segments
* Two operational processes
* Two measurement devices
* Two geographical markets
* A mixture of weekday and weekend behavior

A bimodal distribution should usually be investigated by segmenting the data.

---

### 9.6 Multimodal Distribution

A multimodal distribution contains several peaks.

```text
Frequency
   |
   |    ###       ####       ###
   |  #######   ########   #######
   +--------------------------------> Value
```

Possible explanations:

* Several subpopulations
* Multiple pricing tiers
* Seasonal behavior
* Different data collection systems
* Rounded or grouped measurements

---

### 9.7 Distribution with Possible Outliers

```text
Frequency
   |
   |     #######
   |   ###########
   | ###############
   |                  #
   |                         #
   +-----------------------------> Value
```

Isolated bars far from the main distribution may indicate:

* Valid rare observations
* Data-entry errors
* Unit inconsistencies
* Sensor failures
* Fraudulent activity
* Exceptional customer behavior

A histogram can suggest outliers, but it should not be the only outlier-detection method.

Also inspect:

* Box plots
* Quantiles
* Z-scores
* Interquartile range
* Domain-specific thresholds

---

## 10. Count, Probability, and Density

The Y-axis of a histogram may represent different quantities.

### Count Histogram

The Y-axis shows the number of observations in each bin.

```python
plt.hist(
    df["monthly_charge"],
    bins=20,
)
```

Use count when the absolute number of observations matters.

---

### Probability or Proportion Histogram

The histogram can show relative frequency instead of raw counts.

This is useful when comparing datasets with different sample sizes.

---

### Density Histogram

A density histogram is scaled so that the total area under the bars equals 1.

```python
plt.hist(
    df["monthly_charge"],
    bins=20,
    density=True,
)
```

Density is useful when:

* Comparing distributions with different sample sizes
* Overlaying probability density functions
* Interpreting distributions statistically

The bar heights themselves are not necessarily probabilities. The total bar area represents 1.

---

## 11. Creating a Histogram with Pandas

Create a sample dataset:

```python
import pandas as pd

df = pd.DataFrame(
    {
        "monthly_charge": [
            18,
            20,
            22,
            25,
            27,
            29,
            30,
            31,
            33,
            35,
            38,
            40,
            42,
            45,
            49,
            55,
            62,
            75,
            90,
            120,
        ]
    }
)
```

Create a basic histogram:

```python
df["monthly_charge"].plot.hist(
    bins=8,
    title="Distribution of Monthly Charges",
)
```

A more complete example:

```python
import matplotlib.pyplot as plt

df["monthly_charge"].plot.hist(
    bins=8,
    edgecolor="black",
)

plt.title("Distribution of Monthly Charges")
plt.xlabel("Monthly Charge")
plt.ylabel("Number of Customers")
plt.tight_layout()
plt.show()
```

---

## 12. Creating a Histogram with Matplotlib

```python
import matplotlib.pyplot as plt

plt.hist(
    df["monthly_charge"],
    bins=8,
    edgecolor="black",
)

plt.title("Distribution of Monthly Charges")
plt.xlabel("Monthly Charge")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()
```

Use automatic bin selection:

```python
plt.hist(
    df["monthly_charge"],
    bins="auto",
    edgecolor="black",
)

plt.title("Distribution of Monthly Charges")
plt.xlabel("Monthly Charge")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()
```

Use the Freedman-Diaconis rule:

```python
plt.hist(
    df["monthly_charge"],
    bins="fd",
    edgecolor="black",
)

plt.title("Distribution of Monthly Charges")
plt.xlabel("Monthly Charge")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()
```

---

## 13. Handling Missing Values

Missing values should be inspected before creating a histogram.

Count missing values:

```python
missing_count = df["monthly_charge"].isna().sum()

print(
    "Missing values:",
    missing_count,
)
```

Calculate the missing-value percentage:

```python
missing_percentage = (
    df["monthly_charge"]
    .isna()
    .mean()
    * 100
)

print(
    "Missing percentage:",
    round(missing_percentage, 2),
)
```

Create a histogram using non-missing values:

```python
values = df["monthly_charge"].dropna()

plt.hist(
    values,
    bins="auto",
    edgecolor="black",
)

plt.title("Distribution of Monthly Charges")
plt.xlabel("Monthly Charge")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()
```

A histogram does not show missing values automatically.

The missing-value count should therefore be reported separately.

---

## 14. Checking the Data Before Plotting

Before creating a histogram, verify the following:

### Data Type

```python
print(
    df["monthly_charge"].dtype
)
```

Convert text to numerical values when necessary:

```python
df["monthly_charge"] = pd.to_numeric(
    df["monthly_charge"],
    errors="coerce",
)
```

### Summary Statistics

```python
print(
    df["monthly_charge"].describe()
)
```

### Quantiles

```python
print(
    df["monthly_charge"].quantile(
        [
            0.00,
            0.25,
            0.50,
            0.75,
            0.90,
            0.95,
            0.99,
            1.00,
        ]
    )
)
```

### Range

```python
minimum = df["monthly_charge"].min()
maximum = df["monthly_charge"].max()

print("Minimum:", minimum)
print("Maximum:", maximum)
```

These checks help identify:

* Invalid values
* Incorrect units
* Extreme observations
* Conversion errors
* Unexpected ranges

---

## 15. Comparing Distributions Between Groups

Suppose the dataset contains a churn column.

```python
df = pd.DataFrame(
    {
        "monthly_charge": [
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            70,
            80,
            95,
        ],
        "churn": [
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            1,
            1,
        ],
    }
)
```

Separate the groups:

```python
retained = df.loc[
    df["churn"] == 0,
    "monthly_charge",
]

churned = df.loc[
    df["churn"] == 1,
    "monthly_charge",
]
```

Create overlapping histograms:

```python
import matplotlib.pyplot as plt

plt.hist(
    retained,
    bins=6,
    alpha=0.6,
    label="Retained",
)

plt.hist(
    churned,
    bins=6,
    alpha=0.6,
    label="Churned",
)

plt.title("Monthly Charge by Churn Status")
plt.xlabel("Monthly Charge")
plt.ylabel("Number of Customers")
plt.legend()
plt.tight_layout()
plt.show()
```

When comparing groups, use the same:

* Bin boundaries
* X-axis range
* Measurement units
* Missing-value treatment

Otherwise, the comparison may be misleading.

---

## 16. Using Separate Histograms for Groups

Overlapping histograms may become difficult to read.

A clearer alternative is to create separate charts.

```python
retained.plot.hist(
    bins=6,
    title="Monthly Charge for Retained Customers",
)
```

```python
churned.plot.hist(
    bins=6,
    title="Monthly Charge for Churned Customers",
)
```

Separate histograms are useful when:

* There are many groups.
* Distributions overlap strongly.
* Sample sizes differ significantly.
* Each group requires a different interpretation.

Always keep the same bin boundaries when the goal is comparison.

---

## 17. Histogram and Log Transformation

Right-skewed variables may be easier to analyze after a log transformation.

Original distribution:

```text
Frequency
   |
   | ###########
   | #######
   | ####
   | ##
   | #
   +--------------------------> Value
```

Log-transformed distribution:

```text
Frequency
   |
   |        #######
   |     ############
   |  ##################
   |     ############
   |        #######
   +--------------------------> Log value
```

Example:

```python
import numpy as np

df["log_monthly_charge"] = np.log1p(
    df["monthly_charge"]
)
```

Create the transformed histogram:

```python
plt.hist(
    df["log_monthly_charge"].dropna(),
    bins="auto",
    edgecolor="black",
)

plt.title("Log-Transformed Monthly Charge")
plt.xlabel("log(1 + Monthly Charge)")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()
```

Use `log1p` instead of a standard logarithm when zero values are possible.

Do not transform data only to make the histogram look normal. The transformation should support the statistical or modeling objective.

---

## 18. Interpreting a Histogram

A useful histogram interpretation should consider the following dimensions.

### Shape

* Symmetric
* Right-skewed
* Left-skewed
* Uniform
* Bimodal
* Multimodal

### Center

* Where are most values concentrated?
* Is the mean close to the median?
* What is the typical range?

### Spread

* Are values tightly concentrated?
* Is the range very large?
* Is the interquartile range wide?

### Outliers

* Are there isolated observations?
* Could they be errors?
* Are they important business events?

### Gaps

* Are some numerical ranges empty?
* Could the gaps indicate separate groups?
* Were values rounded or restricted?

### Peaks

* Is there one dominant group?
* Are there multiple subpopulations?
* Could different processes generate the data?

---

## 19. From Chart to Business Insight

A histogram becomes valuable when it supports a decision.

### Weak Observation

> Monthly charges are right-skewed.

### Stronger Insight

> Most customers pay between 20 and 60 units per month, while a small group pays more than 100. Because the distribution is strongly right-skewed, the median is more representative than the mean for reporting the typical monthly charge.

---

### Weak Observation

> Customer age has two peaks.

### Stronger Insight

> Customer age has peaks around 25 and 48 years, suggesting two major customer segments. Churn, product usage, and preferred communication channels should be analyzed separately for these groups.

---

### Weak Observation

> Some delivery times are very high.

### Stronger Insight

> Most orders are delivered within three days, but a small group requires more than ten days. These cases should be investigated by warehouse, destination, carrier, and product type because they may represent operational failures.

---

## 20. Practical Demo

### 20.1 Create a Customer Dataset

```python
import pandas as pd

df = pd.DataFrame(
    {
        "customer_id": range(1, 21),
        "monthly_charge": [
            18,
            20,
            22,
            24,
            27,
            29,
            31,
            33,
            35,
            38,
            40,
            42,
            45,
            49,
            55,
            62,
            75,
            90,
            120,
            150,
        ],
        "churn": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            1,
            1,
            1,
            1,
            1,
        ],
    }
)
```

---

### 20.2 Inspect the Variable

```python
print(
    df["monthly_charge"].describe()
)
```

Calculate skewness:

```python
skewness = df["monthly_charge"].skew()

print(
    "Skewness:",
    round(skewness, 2),
)
```

A positive skewness value suggests right skew.

---

### 20.3 Create the Main Histogram

```python
import matplotlib.pyplot as plt

plt.hist(
    df["monthly_charge"],
    bins="auto",
    edgecolor="black",
)

plt.title("Distribution of Monthly Charges")
plt.xlabel("Monthly Charge")
plt.ylabel("Number of Customers")
plt.tight_layout()
plt.show()
```

---

### 20.4 Compare Churn Groups

```python
retained = df.loc[
    df["churn"] == 0,
    "monthly_charge",
]

churned = df.loc[
    df["churn"] == 1,
    "monthly_charge",
]

bin_edges = [
    0,
    25,
    50,
    75,
    100,
    125,
    150,
    175,
]

plt.hist(
    retained,
    bins=bin_edges,
    alpha=0.6,
    label="Retained",
)

plt.hist(
    churned,
    bins=bin_edges,
    alpha=0.6,
    label="Churned",
)

plt.title("Monthly Charge Distribution by Churn")
plt.xlabel("Monthly Charge")
plt.ylabel("Number of Customers")
plt.legend()
plt.tight_layout()
plt.show()
```

Possible interpretation:

> Churned customers are more concentrated in the higher monthly-charge ranges. This suggests that price may be associated with churn, but contract type, tenure, support usage, and customer segment should also be investigated.

---

## 21. Evaluating Histogram Quality

Before presenting a histogram, check the following.

### Chart Design

* Does the title explain the variable?
* Are the X-axis and Y-axis labeled?
* Are the units clear?
* Is the bin count reasonable?
* Is the chart readable?
* Is the X-axis range appropriate?

### Data Quality

* Were missing values reported?
* Were invalid values checked?
* Were units standardized?
* Were extreme values investigated?
* Was the correct numerical column used?

### Analytical Quality

* Does the interpretation discuss shape and spread?
* Are claims supported by statistics?
* Were important groups compared?
* Is there a business implication?
* Is at least one caveat documented?

---

## 22. Common Mistakes

### Mistake 1: Using a Histogram for Categorical Data

Incorrect variables:

* Country
* Product type
* Subscription plan

Use a bar chart for categorical variables.

---

### Mistake 2: Using Too Few Bins

Too few bins can hide:

* Multiple peaks
* Gaps
* Outliers
* Local concentration

Compare several reasonable bin counts.

---

### Mistake 3: Using Too Many Bins

Too many bins can make random variation look meaningful.

Choose bins that reveal the overall distribution without excessive noise.

---

### Mistake 4: Ignoring Missing Values

A histogram normally excludes missing values automatically.

Always report the missing count and percentage separately.

---

### Mistake 5: Comparing Groups with Different Bins

Different bin boundaries can create misleading visual differences.

Use identical bins when comparing groups.

---

### Mistake 6: Treating Every Extreme Value as an Error

An extreme value may represent:

* A valid premium customer
* A rare event
* Fraud
* A system failure
* A new market segment

Investigate before removing it.

---

### Mistake 7: Using Only the Mean

For skewed distributions, the mean may not represent the typical observation.

Also report:

* Median
* Quantiles
* Interquartile range
* Minimum and maximum

---

### Mistake 8: Writing No Insight

A chart without interpretation is incomplete.

Each histogram should answer:

```text
What pattern is visible?
Why might it matter?
What should be investigated or done next?
```

---

### Mistake 9: Hiding Important Values by Limiting the Axis

Restricting the X-axis may remove outliers or important business cases.

When zooming into the main distribution:

* State that the axis is limited.
* Report excluded observations.
* Provide a second chart when necessary.

---

## 23. Practical Exercise

Choose a small CSV dataset containing at least three numerical variables.

Possible variables include:

* Customer age
* Monthly charge
* Customer tenure
* Transaction amount
* Delivery time
* Product rating
* Model prediction score

### Tasks

1. Load the CSV file into Pandas.
2. Inspect the dataset schema.
3. Identify numerical variables.
4. Check missing and invalid values.
5. Calculate summary statistics.
6. Create one histogram for each selected variable.
7. Compare at least two binning strategies.
8. Describe the shape of each distribution.
9. Identify possible outliers or unusual gaps.
10. Compare one numerical variable between two groups.
11. Decide whether a transformation is useful.
12. Write three business-oriented insights.
13. Document at least one caveat.
14. Save the notebook and generated charts.

---

## 24. Suggested Notebook Structure

```text
01. Business Question
02. Dataset Overview
03. Schema and Data Types
04. Data Quality Checks
05. Numerical Feature Inventory
06. Summary Statistics
07. Histogram Analysis
08. Bin Selection Comparison
09. Distribution Shape Interpretation
10. Group Distribution Comparison
11. Outlier Investigation
12. Transformation Experiment
13. Business Insights
14. Caveats and Recommendations
```

---

## 25. Suggested Output Table

Use a summary table to connect each histogram to an analytical conclusion.

| Variable       | Distribution shape | Main range      | Possible issue      | Recommended action                         |
| -------------- | ------------------ | --------------- | ------------------- | ------------------------------------------ |
| Age            | Bimodal            | 20 to 55        | Two customer groups | Analyze segments separately                |
| Monthly charge | Right-skewed       | 20 to 70        | High-value tail     | Compare median and apply robust methods    |
| Tenure         | Left-skewed        | 24 to 72 months | Few new customers   | Examine acquisition and retention patterns |
| Delivery time  | Right-skewed       | 1 to 5 days     | Extreme delays      | Investigate delayed orders                 |

---

## 26. Completion Checklist

* [ ] I can explain what a histogram represents.
* [ ] I can distinguish a histogram from a bar chart.
* [ ] I understand how bins affect the visualization.
* [ ] I can identify common distribution shapes.
* [ ] I can recognize skewness, multiple peaks, gaps, and possible outliers.
* [ ] I can create a histogram using Pandas.
* [ ] I can create a histogram using Matplotlib.
* [ ] I can compare distributions between groups.
* [ ] I can report missing values separately.
* [ ] I can support visual observations with summary statistics.
* [ ] I can write a business-oriented insight from a histogram.
* [ ] I have documented at least one assumption or limitation.
* [ ] I have saved a notebook, chart, report, or portfolio artifact.

---

## 27. Related Outcome

Understand, clean, visualize, and explain datasets using business-oriented insights.

After completing this lesson, you should be able to use histograms to identify distribution patterns that influence:

* Data cleaning
* Feature engineering
* Statistical testing
* Model selection
* Transformation decisions
* Business recommendations
* Production monitoring

---

## 28. Related Project

### Mini Project: Customer Churn EDA

Use histograms to analyze:

* Customer age
* Monthly charge
* Customer tenure
* Number of support requests
* Total spending
* Model prediction probability

Compare distributions by:

* Churn status
* Contract type
* Customer segment
* Subscription plan
* Country or region

Suggested project structure:

```text
customer-churn-eda/
|
|-- data/
|   |-- raw/
|   `-- processed/
|
|-- notebooks/
|   `-- histogram-analysis.ipynb
|
|-- reports/
|   |-- figures/
|   |   |-- monthly-charge-histogram.png
|   |   |-- tenure-histogram.png
|   |   `-- churn-comparison-histogram.png
|   |
|   `-- histogram-insights.md
|
|-- src/
|   `-- visualization.py
|
|-- requirements.txt
`-- README.md
```

---

## 29. Summary

A **histogram** visualizes the distribution of a numerical variable by grouping values into bins.

A useful histogram helps reveal:

* Distribution shape
* Typical values
* Data spread
* Skewness
* Multiple groups
* Gaps
* Possible outliers
* Differences between segments

The main principles are:

1. Verify the data type and data quality before plotting.
2. Select bins carefully.
3. Use identical bins when comparing groups.
4. Report missing values separately.
5. Support visual observations with numerical statistics.
6. Investigate unusual patterns instead of removing them automatically.
7. Connect each chart to a business question.
8. End the analysis with an insight, caveat, and recommendation.

Turn this lesson into a notebook, reusable visualization function, dashboard, analytical report, or portfolio artifact so that the knowledge becomes practical and reusable.
