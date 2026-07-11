# 005 - Feature Type

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Data Understanding
**Roadmap Source:** Exploratory Data Analysis / Data Understanding
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 005
**Suggested Duration:** 20 minutes

---

## 1. Overview

A **feature type** describes the meaning and analytical behavior of a variable in a dataset.

Understanding feature types is one of the first steps in Exploratory Data Analysis because the feature type determines:

* Which data-quality checks should be performed.
* Which summary statistics are meaningful.
* Which visualizations should be used.
* Which transformations may be required.
* How the feature can be provided to a machine learning model.
* Which assumptions may be made during analysis.

For example:

* Calculating an average is meaningful for customer age.
* Calculating an average is usually meaningless for customer ID.
* A histogram is suitable for income.
* A bar chart is more suitable for subscription type.
* An ordered satisfaction level should not always be treated as an unordered category.

A column's storage type and its analytical feature type are not always the same.

For example, a column stored as an integer may actually represent:

* A quantity.
* A binary flag.
* An ordinal category.
* A year.
* A customer identifier.

Therefore, feature types must be determined from both the data and the business context.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain what a feature type is in your own words.
* Distinguish between numerical, categorical, datetime, text, identifier, and geospatial features.
* Identify the analytical role of each feature in a dataset.
* Detect cases where the stored data type does not match the real feature type.
* Select appropriate statistics and visualizations for different feature types.
* Apply suitable preprocessing methods before machine learning.
* Document assumptions and uncertain feature classifications.
* Create a small feature-type report for a real dataset.

---

## 3. Why Feature Types Matter

Feature types affect almost every stage of a data workflow.

```text
Raw dataset
     |
     v
Inspect columns and sample values
     |
     v
Identify semantic feature types
     |
     v
Choose quality checks and statistics
     |
     v
Choose visualizations
     |
     v
Apply transformations
     |
     v
Prepare features for modeling
     |
     v
Generate insights and recommendations
```

Incorrectly identifying a feature type can produce misleading analysis.

### Example

Suppose a dataset contains the following column:

```text
satisfaction_level = [1, 2, 3, 4, 5]
```

The values are stored as integers, but they represent ordered categories:

```text
1 = Very dissatisfied
2 = Dissatisfied
3 = Neutral
4 = Satisfied
5 = Very satisfied
```

This feature should usually be treated as an **ordinal categorical feature**, not simply as a continuous numerical feature.

The distance between levels 1 and 2 may not have exactly the same meaning as the distance between levels 4 and 5.

---

## 4. Storage Type vs. Semantic Feature Type

A **storage type** describes how a value is stored by a programming language or database.

Common storage types include:

* Integer
* Floating-point number
* String
* Boolean
* Date
* Timestamp

A **semantic feature type** describes what the value means in the real-world problem.

Consider the following dataset:

| Column            | Stored Type | Semantic Feature Type |
| ----------------- | ----------: | --------------------- |
| `customer_id`     |     Integer | Identifier            |
| `age`             |     Integer | Numerical, discrete   |
| `monthly_fee`     |       Float | Numerical, continuous |
| `is_active`       |     Integer | Binary categorical    |
| `plan_level`      |     Integer | Ordinal categorical   |
| `signup_date`     |      String | Datetime              |
| `city`            |      String | Nominal categorical   |
| `customer_review` |      String | Text                  |

The stored type alone is not enough to determine the correct analytical treatment.

---

## 5. Main Feature Types

A practical feature-type taxonomy is shown below.

```text
Feature
|
+-- Numerical
|   |
|   +-- Continuous
|   +-- Discrete
|
+-- Categorical
|   |
|   +-- Nominal
|   +-- Ordinal
|   +-- Binary
|
+-- Datetime
|
+-- Text
|
+-- Identifier
|
+-- Geospatial
|
+-- Structured or composite
```

---

## 6. Numerical Features

Numerical features represent measurable or countable quantities.

Mathematical operations such as addition, subtraction, averaging, and comparison are generally meaningful.

Examples include:

* Age
* Salary
* Product price
* Number of purchases
* Account balance
* Delivery time
* Temperature

Numerical features are commonly divided into continuous and discrete features.

---

### 6.1 Continuous Numerical Features

A continuous feature can theoretically take any value within an interval.

Examples:

* Height
* Weight
* Temperature
* Monthly income
* Response time
* Distance
* Product price

Example values:

```text
height_cm = [165.2, 170.8, 174.5, 181.1]
```

Useful summary statistics include:

* Mean
* Median
* Standard deviation
* Minimum
* Maximum
* Quantiles
* Interquartile range

Useful visualizations include:

* Histogram
* Box plot
* Density plot
* Violin plot
* Scatter plot

Potential preprocessing methods include:

* Standardization
* Min-max normalization
* Log transformation
* Winsorization
* Outlier treatment
* Missing-value imputation

---

### 6.2 Discrete Numerical Features

A discrete feature represents countable values, usually integers.

Examples:

* Number of purchases
* Number of support tickets
* Number of children
* Number of website visits
* Number of failed login attempts

Example values:

```text
support_tickets = [0, 1, 1, 3, 5, 8]
```

A discrete feature has a limited or countable set of possible values.

Useful visualizations include:

* Bar chart
* Histogram with integer bins
* Count plot
* Box plot

A discrete feature may need to be treated as categorical when it has only a few meaningful levels.

For example:

```text
number_of_devices = [1, 2, 3, 4]
```

This may be analyzed numerically, but a bar chart may communicate its distribution better than a smooth density plot.

---

## 7. Categorical Features

Categorical features represent groups, labels, states, or classes.

Examples include:

* Country
* Product category
* Payment method
* Customer segment
* Education level
* Churn status

Categorical features are commonly divided into nominal, ordinal, and binary features.

---

### 7.1 Nominal Categorical Features

A nominal feature contains categories without a natural order.

Examples:

* Country
* Browser type
* Payment method
* Product category
* Department
* Device type

Example:

```text
payment_method = [
    "Credit Card",
    "Bank Transfer",
    "Digital Wallet",
    "Cash"
]
```

There is no meaningful ranking between these categories.

Useful statistics include:

* Frequency
* Proportion
* Number of unique categories
* Most common category

Useful visualizations include:

* Bar chart
* Count plot
* Stacked bar chart
* Mosaic plot

Common preprocessing methods include:

* One-hot encoding
* Frequency encoding
* Target encoding
* Grouping rare categories
* Missing-category assignment

Assigning arbitrary numeric values may create a false order.

For example, this encoding is potentially misleading:

```text
Credit Card = 1
Bank Transfer = 2
Digital Wallet = 3
```

The values do not imply that Digital Wallet is greater than Bank Transfer.

---

### 7.2 Ordinal Categorical Features

An ordinal feature contains categories with a meaningful order.

Examples:

* Low, Medium, High
* Beginner, Intermediate, Advanced
* Poor, Fair, Good, Excellent
* Bronze, Silver, Gold
* Satisfaction levels from 1 to 5

Example:

```text
service_quality = [
    "Poor",
    "Fair",
    "Good",
    "Excellent"
]
```

The correct order is:

```text
Poor < Fair < Good < Excellent
```

However, the distance between categories may not be equal.

For example, the difference between `Poor` and `Fair` may not be equivalent to the difference between `Good` and `Excellent`.

Common preprocessing methods include:

* Ordinal encoding
* Ordered categorical data types
* Rank-based transformations

Example mapping:

```python
quality_order = {
    "Poor": 1,
    "Fair": 2,
    "Good": 3,
    "Excellent": 4
}
```

The ordering should be based on domain knowledge, not alphabetical order.

---

### 7.3 Binary Features

A binary feature contains two possible states.

Examples:

* Yes or No
* True or False
* Active or Inactive
* Churned or Retained
* Fraud or Legitimate
* Purchased or Not Purchased

Example:

```text
has_churned = [0, 1, 0, 0, 1]
```

Binary features are often stored as:

* `0` and `1`
* `True` and `False`
* `Yes` and `No`
* `Y` and `N`

Before analysis, verify which value represents the positive class.

For example:

```text
1 = Customer churned
0 = Customer remained active
```

Useful visualizations include:

* Bar chart
* Percentage chart
* Stacked bar chart
* Grouped proportion chart

---

## 8. Datetime Features

Datetime features represent points or periods in time.

Examples:

* Signup date
* Transaction timestamp
* Delivery date
* Account creation time
* Last login time
* Contract start date

Example:

```text
signup_date = "2026-07-11"
```

Datetime features are valuable because new features can be derived from them.

```text
Datetime feature
|
+-- Year
+-- Quarter
+-- Month
+-- Week
+-- Day
+-- Day of week
+-- Hour
+-- Weekend flag
+-- Time since an event
+-- Time between two events
```

Example:

```python
df["signup_date"] = pd.to_datetime(df["signup_date"])

df["signup_year"] = df["signup_date"].dt.year
df["signup_month"] = df["signup_date"].dt.month
df["signup_day_of_week"] = df["signup_date"].dt.day_name()
df["is_weekend"] = df["signup_date"].dt.dayofweek >= 5
```

Useful visualizations include:

* Line chart
* Time-series plot
* Calendar heatmap
* Monthly bar chart
* Rolling average plot

Important checks include:

* Invalid date formats
* Time-zone inconsistencies
* Future dates that should not exist
* Duplicate timestamps
* Missing time periods
* Irregular sampling intervals

Datetime features should not remain as unprocessed strings during analysis.

---

## 9. Text Features

Text features contain free-form or semi-structured language.

Examples:

* Customer reviews
* Support messages
* Product descriptions
* Survey responses
* Social media posts
* Email subjects

Example:

```text
"The application is easy to use, but customer support is slow."
```

Basic text EDA may include:

* Text length
* Word count
* Missing-text percentage
* Most frequent words
* Language detection
* Duplicate-text detection
* Sentiment distribution
* Topic distribution

Example:

```python
df["review_length"] = df["customer_review"].str.len()
df["review_word_count"] = df["customer_review"].str.split().str.len()
```

Possible preprocessing methods include:

* Lowercasing
* Tokenization
* Removing or preserving punctuation
* Stop-word handling
* Stemming
* Lemmatization
* TF-IDF vectorization
* Embedding generation

Text preprocessing must depend on the downstream task.

Removing punctuation may be acceptable for topic classification but harmful for sentiment, code analysis, or named-entity recognition.

---

## 10. Identifier Features

Identifier features uniquely identify records or entities.

Examples:

* Customer ID
* Transaction ID
* Product code
* Order number
* Employee ID
* Session ID

Example:

```text
customer_id = [10001, 10002, 10003, 10004]
```

An identifier may be stored as a number, but arithmetic operations are usually meaningless.

For example:

```text
Average customer ID = 10002.5
```

This value provides no useful business information.

Identifiers are mainly used for:

* Joining tables
* Tracking entities
* Detecting duplicates
* Grouping records
* Creating train-test splits by entity

Identifiers should usually not be used directly as model inputs.

However, information derived from an identifier may be useful.

For example:

```text
customer_id
    |
    +-- Number of transactions
    +-- Customer lifetime
    +-- Average order value
    +-- Days since last purchase
```

Be careful because high-cardinality identifiers can cause:

* Overfitting
* Data leakage
* Excessive memory usage
* Poor generalization

---

## 11. Geospatial Features

Geospatial features represent physical locations.

Examples:

* Latitude
* Longitude
* Postal code
* City
* Region
* Geographic coordinates
* Polygon boundaries

Example:

```text
latitude = 10.7769
longitude = 106.7009
```

Useful derived features include:

* Distance between locations
* Distance to the nearest store
* Region membership
* Urban or rural classification
* Geographic clusters
* Density of nearby events

The approximate great-circle distance between two locations can be calculated using the Haversine formula:

```text
a = sin²(delta_latitude / 2)
    + cos(latitude_1) * cos(latitude_2)
    * sin²(delta_longitude / 2)

c = 2 * atan2(sqrt(a), sqrt(1 - a))

distance = Earth_radius * c
```

Useful visualizations include:

* Point maps
* Choropleth maps
* Density maps
* Geographic heatmaps
* Cluster maps

Postal codes should often be treated as categorical or geographic identifiers rather than ordinary numbers.

---

## 12. Structured and Composite Features

Some columns contain multiple pieces of information in a single value.

Examples:

```text
"Ho Chi Minh City, Vietnam"
"1920x1080"
"12 GB"
"Premium - Annual"
"10.7769,106.7009"
```

These features may need to be separated.

Example:

```python
df[["city", "country"]] = df["location"].str.split(
    ",",
    n=1,
    expand=True
)
```

Composite features may hide useful information and should be inspected carefully.

---

## 13. Feature Role vs. Feature Type

Feature type and feature role are related but different concepts.

A feature type describes the nature of the data.

A feature role describes how the column is used in the analysis or model.

Common feature roles include:

| Role              | Description                                  |
| ----------------- | -------------------------------------------- |
| Input feature     | Used to make predictions                     |
| Target variable   | The value the model predicts                 |
| Identifier        | Used to identify or join records             |
| Grouping variable | Used to divide data into segments            |
| Timestamp         | Defines time order                           |
| Metadata          | Provides context but may not enter the model |
| Leakage feature   | Contains unavailable or future information   |
| Weight            | Controls the importance of observations      |

Example:

| Column              | Feature Type         | Feature Role              |
| ------------------- | -------------------- | ------------------------- |
| `customer_id`       | Identifier           | Record identifier         |
| `monthly_fee`       | Continuous numerical | Input feature             |
| `contract_type`     | Nominal categorical  | Input feature             |
| `signup_date`       | Datetime             | Metadata or derived input |
| `churn`             | Binary categorical   | Target variable           |
| `cancellation_date` | Datetime             | Potential leakage feature |

A column may have a valid feature type but still be inappropriate for modeling because of its role.

---

## 14. Feature Types and EDA Decisions

Different feature types require different EDA approaches.

| Feature Type         | Main Questions                                | Recommended Visualizations        |
| -------------------- | --------------------------------------------- | --------------------------------- |
| Continuous numerical | What is the distribution? Are there outliers? | Histogram, box plot               |
| Discrete numerical   | Which counts are common?                      | Bar chart, integer histogram      |
| Nominal categorical  | Which categories are most frequent?           | Bar chart                         |
| Ordinal categorical  | How are ordered levels distributed?           | Ordered bar chart                 |
| Binary               | What is the positive-class rate?              | Percentage bar chart              |
| Datetime             | How does the value change over time?          | Line chart                        |
| Text                 | What themes, lengths, or sentiments appear?   | Frequency chart, length histogram |
| Geospatial           | Where are events concentrated?                | Map, density map                  |
| Identifier           | Are values unique and valid?                  | Uniqueness table                  |

---

## 15. Feature Types and Model Preprocessing

Machine learning models usually require features to be converted into numeric representations.

```text
Raw feature
     |
     v
Identify feature type
     |
     v
Apply type-specific preprocessing
     |
     v
Create model-ready representation
```

Typical preprocessing choices are shown below.

| Feature Type         | Common Preprocessing                   |
| -------------------- | -------------------------------------- |
| Continuous numerical | Scaling, log transform, imputation     |
| Discrete numerical   | Imputation, scaling, binning           |
| Nominal categorical  | One-hot, frequency, or target encoding |
| Ordinal categorical  | Ordered integer encoding               |
| Binary               | Convert to 0 and 1                     |
| Datetime             | Extract temporal components            |
| Text                 | TF-IDF or embeddings                   |
| Geospatial           | Distance, region, or spatial encoding  |
| Identifier           | Usually remove or aggregate            |

The exact method depends on:

* Dataset size
* Number of unique values
* Model type
* Business meaning
* Missing-value pattern
* Risk of leakage

---

## 16. Example Dataset

Consider a customer churn dataset:

| Column               | Example Value         | Feature Type         | Role              |
| -------------------- | --------------------- | -------------------- | ----------------- |
| `customer_id`        | `C10452`              | Identifier           | Identifier        |
| `age`                | `35`                  | Discrete numerical   | Input             |
| `monthly_fee`        | `49.95`               | Continuous numerical | Input             |
| `contract_type`      | `Monthly`             | Nominal categorical  | Input             |
| `satisfaction_level` | `High`                | Ordinal categorical  | Input             |
| `has_support_plan`   | `Yes`                 | Binary categorical   | Input             |
| `signup_date`        | `2025-03-18`          | Datetime             | Input or metadata |
| `feedback`           | `Service is too slow` | Text                 | Input             |
| `latitude`           | `10.7769`             | Geospatial           | Input             |
| `longitude`          | `106.7009`            | Geospatial           | Input             |
| `churn`              | `1`                   | Binary categorical   | Target            |

---

## 17. Python Demo: Inspecting Feature Types

### 17.1 Load the Dataset

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

print(df.head())
print(df.shape)
print(df.dtypes)
```

---

### 17.2 Inspect Unique Values

```python
for column in df.columns:
    print(f"\nColumn: {column}")
    print(f"Data type: {df[column].dtype}")
    print(f"Unique values: {df[column].nunique(dropna=False)}")
    print(df[column].head().tolist())
```

This helps detect columns such as:

* Integer identifiers
* Numeric binary flags
* Dates stored as strings
* Low-cardinality numerical columns
* High-cardinality categorical columns

---

### 17.3 Create a Feature-Type Table

```python
feature_types = pd.DataFrame(
    {
        "feature": [
            "customer_id",
            "age",
            "monthly_fee",
            "contract_type",
            "satisfaction_level",
            "has_support_plan",
            "signup_date",
            "feedback",
            "churn",
        ],
        "stored_type": [
            "object",
            "int64",
            "float64",
            "object",
            "object",
            "object",
            "object",
            "object",
            "int64",
        ],
        "semantic_type": [
            "identifier",
            "discrete numerical",
            "continuous numerical",
            "nominal categorical",
            "ordinal categorical",
            "binary categorical",
            "datetime",
            "text",
            "binary categorical",
        ],
        "role": [
            "identifier",
            "input",
            "input",
            "input",
            "input",
            "input",
            "input",
            "input",
            "target",
        ],
    }
)

print(feature_types)
```

---

### 17.4 Convert Columns to Appropriate Types

```python
df["signup_date"] = pd.to_datetime(
    df["signup_date"],
    errors="coerce"
)

df["contract_type"] = df["contract_type"].astype("category")

df["has_support_plan"] = df["has_support_plan"].map(
    {
        "No": 0,
        "Yes": 1,
    }
)

satisfaction_order = [
    "Low",
    "Medium",
    "High",
]

df["satisfaction_level"] = pd.Categorical(
    df["satisfaction_level"],
    categories=satisfaction_order,
    ordered=True,
)
```

Using `errors="coerce"` converts invalid dates to missing datetime values, which can then be investigated.

---

## 18. Automatic Type Detection

A simple function can suggest possible feature types.

```python
import pandas as pd


def suggest_feature_type(series: pd.Series) -> str:
    unique_count = series.nunique(dropna=True)
    total_count = len(series)
    unique_ratio = unique_count / total_count if total_count else 0

    if pd.api.types.is_bool_dtype(series):
        return "binary categorical"

    if pd.api.types.is_datetime64_any_dtype(series):
        return "datetime"

    if pd.api.types.is_numeric_dtype(series):
        if unique_count == 2:
            return "binary categorical"

        if pd.api.types.is_integer_dtype(series):
            if unique_ratio > 0.95:
                return "possible identifier"
            return "discrete numerical"

        return "continuous numerical"

    if unique_count == 2:
        return "binary categorical"

    if unique_ratio > 0.95:
        return "possible identifier or free text"

    if unique_count < 20:
        return "categorical"

    return "text or high-cardinality categorical"
```

Apply it to a dataset:

```python
suggestions = []

for column in df.columns:
    suggestions.append(
        {
            "feature": column,
            "stored_type": str(df[column].dtype),
            "unique_count": df[column].nunique(dropna=True),
            "suggested_type": suggest_feature_type(df[column]),
        }
    )

suggestion_df = pd.DataFrame(suggestions)

print(suggestion_df)
```

Automatic detection is only a starting point.

The final feature type should be confirmed using:

* Business definitions
* Data documentation
* Sample values
* Valid-value ranges
* Relationships with other columns
* Domain knowledge

---

## 19. Feature-Type Validation Questions

For every feature, ask the following questions.

### Meaning

* What does this column represent?
* What is its unit?
* Is it measured, counted, ranked, labeled, or generated?
* Is there a business definition?

### Values

* What values are valid?
* Are missing values allowed?
* Are there unexpected values?
* Are there special codes such as `-1`, `999`, or `Unknown`?

### Structure

* Is the value atomic or composite?
* Is it stored in the correct format?
* Does it contain leading zeros?
* Is capitalization consistent?

### Analytical Use

* Is averaging meaningful?
* Is category order meaningful?
* Should this feature be plotted as a distribution or as category counts?
* Could it introduce data leakage?
* Should it be included in the model?

---

## 20. Feature-Type Profile

A useful EDA artifact is a feature-type profile.

| Feature              | Semantic Type        | Role   | Unit  | Missing Rate | Unique Values | Main Concern            |
| -------------------- | -------------------- | ------ | ----- | -----------: | ------------: | ----------------------- |
| `customer_id`        | Identifier           | ID     | None  |         0.0% |        10,000 | Check uniqueness        |
| `age`                | Discrete numerical   | Input  | Years |         1.2% |            68 | Invalid negative values |
| `monthly_fee`        | Continuous numerical | Input  | USD   |         0.5% |         2,450 | Right-skewed            |
| `contract_type`      | Nominal categorical  | Input  | None  |         0.0% |             3 | Category spelling       |
| `satisfaction_level` | Ordinal categorical  | Input  | Level |         8.4% |             3 | Missingness             |
| `signup_date`        | Datetime             | Input  | Date  |         0.3% |         8,200 | Invalid dates           |
| `feedback`           | Text                 | Input  | None  |        35.0% |         5,640 | Sparse text             |
| `churn`              | Binary categorical   | Target | None  |         0.0% |             2 | Class imbalance         |

This table becomes part of the data documentation and can be reused in later modeling stages.

---

## 21. Common Feature-Type Mistakes

### 21.1 Treating an Identifier as a Numerical Feature

Incorrect:

```python
df["customer_id"].mean()
```

Although the operation is technically valid for integer IDs, it has no useful analytical meaning.

Better approach:

```python
df["customer_id"].is_unique
```

---

### 21.2 Treating Postal Codes as Numbers

A postal code may contain numeric characters, but mathematical operations are meaningless.

For example:

```text
10001 + 10002
```

The result does not represent a useful geographic concept.

Postal codes should usually be treated as categorical or geographic features.

---

### 21.3 Treating Dates as Plain Strings

Incorrect:

```text
"2025-12-01"
"2026-01-15"
```

When stored as strings, chronological operations become difficult.

Better approach:

```python
df["date"] = pd.to_datetime(df["date"])
```

---

### 21.4 Ignoring Ordinal Order

Alphabetical ordering may be incorrect.

Incorrect:

```text
High
Low
Medium
```

Correct logical order:

```text
Low < Medium < High
```

---

### 21.5 Using One-Hot Encoding for Extremely High Cardinality

A feature such as product ID may contain hundreds of thousands of categories.

One-hot encoding can create:

* Excessive memory usage
* Sparse feature matrices
* Overfitting
* Slow training

Possible alternatives include:

* Frequency encoding
* Target encoding with leakage protection
* Hash encoding
* Category grouping
* Entity embeddings
* Aggregate features

---

### 21.6 Assuming Every Integer Is Numerical

The following integer columns have different meanings:

| Column        | Values           | Correct Interpretation |
| ------------- | ---------------- | ---------------------- |
| `age`         | 18, 25, 40       | Numerical              |
| `churn`       | 0, 1             | Binary categorical     |
| `rating`      | 1, 2, 3, 4, 5    | Ordinal                |
| `year`        | 2024, 2025, 2026 | Datetime component     |
| `customer_id` | 1001, 1002, 1003 | Identifier             |

---

### 21.7 Relying Only on Automatic Type Inference

Pandas may report:

```text
object
```

However, `object` may represent:

* Categories
* Text
* Dates
* Identifiers
* Mixed values
* Invalid numerical data

Always inspect the column's meaning and sample values.

---

## 22. Mini EDA Workflow

Use the following workflow for feature-type analysis:

```text
1. Load the raw dataset
        |
        v
2. Inspect shape, columns, and samples
        |
        v
3. Review stored data types
        |
        v
4. Calculate unique and missing values
        |
        v
5. Assign semantic feature types
        |
        v
6. Assign feature roles
        |
        v
7. Validate using business context
        |
        v
8. Convert incorrect storage types
        |
        v
9. Select type-specific charts
        |
        v
10. Document insights, caveats, and recommendations
```

---

## 23. Practical Exercise

Choose a small CSV dataset and create a notebook named:

```text
005_feature_type_analysis.ipynb
```

Your notebook should include the following sections.

### Part 1: Load and Inspect the Data

Display:

* Dataset shape
* First five rows
* Column names
* Stored data types
* Missing-value counts
* Unique-value counts

### Part 2: Build a Feature-Type Dictionary

Create a table with these columns:

```text
feature_name
stored_type
semantic_type
feature_role
unit
example_values
missing_rate
unique_count
notes
```

### Part 3: Correct Data Types

Examples:

* Convert date strings to datetime.
* Convert nominal variables to categorical values.
* Define ordered categorical values.
* Convert binary labels to consistent values.
* Preserve identifiers as strings when necessary.

### Part 4: Create Type-Specific Visualizations

Create at least:

* One numerical distribution chart.
* One categorical frequency chart.
* One datetime trend chart, when available.
* One relationship chart involving the target variable.

### Part 5: Write Three Insights

Each insight should include:

1. **Observation**
2. **Evidence**
3. **Business interpretation**
4. **Recommended action**
5. **Caveat**

Example:

> Customers using monthly contracts have a higher churn rate than customers using annual contracts. In the current sample, monthly-contract customers account for 62% of churned records. This suggests that commitment length may be associated with retention. The company should test annual-plan incentives, but causal conclusions cannot be made from this observational dataset alone.

---

## 24. Suggested Deliverable

Create a feature-type report with the following structure:

```markdown
# Feature-Type Report

## Dataset Overview

## Feature Dictionary

## Numerical Features

## Categorical Features

## Datetime Features

## Text and Identifier Features

## Data-Type Corrections

## Key Insights

## Data-Quality Concerns

## Modeling Recommendations

## Assumptions and Caveats
```

---

## 25. Common Mistakes

* Assuming the programming-language data type is the true feature type.
* Treating identifiers as measurable quantities.
* Ignoring ordinal relationships.
* Leaving datetime values as strings.
* Encoding categories without checking their meaning.
* Using charts that do not match the feature type.
* Applying averages to variables where averages are meaningless.
* Ignoring high-cardinality categorical features.
* Removing identifiers before checking duplicates or entity-level leakage.
* Mixing missing values with valid categories without documentation.
* Creating charts without writing interpretations.
* Performing manual transformations that cannot be reproduced.
* Failing to save the raw dataset and cleaning changelog.
* Using future information as a predictive feature.
* Making recommendations without stating assumptions or caveats.

---

## 26. Completion Checklist

* [ ] I can explain a feature type in one or two minutes.
* [ ] I understand the difference between stored and semantic data types.
* [ ] I can distinguish continuous and discrete numerical features.
* [ ] I can distinguish nominal, ordinal, and binary categorical features.
* [ ] I can identify datetime, text, identifier, and geospatial features.
* [ ] I can assign both a type and a role to each feature.
* [ ] I can select appropriate statistics for each feature type.
* [ ] I can select appropriate visualizations for each feature type.
* [ ] I can detect columns whose stored type is incorrect.
* [ ] I can identify possible high-cardinality problems.
* [ ] I can identify possible data-leakage features.
* [ ] I have created a notebook, table, chart, or report for this lesson.
* [ ] I documented at least one assumption or caveat.
* [ ] I wrote at least one actionable recommendation.

---

## 27. Related Outcome

After completing this lesson, you should be better able to:

> Understand, clean, visualize, and explain datasets using business-oriented insights.

Feature-type analysis supports:

* Data-quality validation
* Exploratory Data Analysis
* Feature engineering
* Statistical analysis
* Machine learning preprocessing
* Model interpretation
* Dashboard design
* Data documentation
* Reproducible analysis

---

## 28. Related Project

### Mini Project: Customer Churn EDA

Build a customer churn analysis containing:

* A dataset overview.
* A feature-type dictionary.
* Missing-value analysis.
* Numerical feature distributions.
* Categorical feature frequencies.
* Churn analysis by customer segment.
* Churn analysis by contract type.
* Churn analysis by payment method.
* Analysis of important related features.
* At least three evidence-based insights.
* Business recommendations.
* Assumptions and limitations.

Suggested project structure:

```text
customer-churn-eda/
|
+-- data/
|   +-- raw/
|   |   +-- customer_churn.csv
|   |
|   +-- processed/
|       +-- customer_churn_clean.csv
|
+-- notebooks/
|   +-- 01_feature_types.ipynb
|   +-- 02_data_quality.ipynb
|   +-- 03_churn_analysis.ipynb
|
+-- reports/
|   +-- feature_dictionary.csv
|   +-- churn_eda_report.md
|
+-- src/
|   +-- preprocessing.py
|
+-- README.md
+-- requirements.txt
```

---

## 29. Key Takeaways

1. A feature type describes the analytical meaning of a variable.
2. Storage types and semantic feature types are not always the same.
3. Numerical features may be continuous or discrete.
4. Categorical features may be nominal, ordinal, or binary.
5. Datetime, text, identifier, and geospatial features require specialized treatment.
6. Feature type determines suitable statistics, charts, transformations, and encodings.
7. Feature role determines whether a column should be used as an input, target, identifier, or metadata.
8. Automatic type detection must be validated with domain knowledge.
9. Incorrect feature classification can create misleading insights or poor models.
10. Every feature-type decision should be documented with assumptions and caveats.

---

## 30. Summary

**Feature Type** is a foundational topic in Exploratory Data Analysis.

Before calculating statistics, creating charts, engineering features, or training a model, a data scientist must understand what each column actually represents.

A reliable feature-type workflow is:

```text
Understand the business meaning
        |
        v
Inspect values and storage types
        |
        v
Assign semantic feature types
        |
        v
Assign analytical roles
        |
        v
Perform type-specific validation
        |
        v
Select suitable charts and transformations
        |
        v
Document insights and caveats
```

Turn this knowledge into a practical artifact such as:

* A reproducible notebook
* A feature dictionary
* A data-quality report
* A visualization dashboard
* A preprocessing pipeline
* A machine learning experiment
* A portfolio case study

The goal is not only to label columns, but to make correct and explainable decisions about how each feature should be analyzed and used.
