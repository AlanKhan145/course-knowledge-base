# 012 - Encoding Categorical Variables

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Data Cleaning
**Roadmap Source:** Exploratory Data Analysis / Data Cleaning
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 012
**Suggested Duration:** 20 minutes

---

## 1. Summary

This lesson explains **Encoding Categorical Variables** in the context of AI and Data Science.

Categorical variables contain labels or groups instead of continuous numerical values.

Common examples include:

* Country
* Product category
* Subscription plan
* Education level
* Device type
* Payment method

Most machine learning algorithms require numerical input. Therefore, categorical values usually need to be transformed into numerical representations before model training.

After completing this lesson, you should understand:

* Why categorical encoding is necessary
* How to identify different categorical variable types
* How common encoding methods work
* How to choose an appropriate encoding method
* How to prevent data leakage
* How to handle missing and unknown categories

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain categorical variable encoding in your own words.
* Distinguish between nominal, ordinal, binary, and high-cardinality variables.
* Apply binary, ordinal, one-hot, frequency, and target encoding.
* Select an encoding method based on the feature and model type.
* Handle missing, rare, and unknown categories.
* Prevent data leakage during preprocessing.
* Build a reproducible preprocessing pipeline.
* Document encoding assumptions and limitations.

---

## 3. What Is a Categorical Variable?

A categorical variable represents a value from a limited set of groups or labels.

Example dataset:

| customer_id | country   | plan     | satisfaction | churn |
| ----------: | --------- | -------- | ------------ | ----: |
|         101 | Vietnam   | Basic    | Low          |     1 |
|         102 | Thailand  | Premium  | High         |     0 |
|         103 | Vietnam   | Standard | Medium       |     0 |
|         104 | Singapore | Premium  | High         |     0 |

Categorical columns:

* `country`
* `plan`
* `satisfaction`

Numerical or binary columns:

* `customer_id`
* `churn`

Most machine learning models cannot directly process text values such as `Vietnam`, `Premium`, or `High`.

These values must be converted into numerical features.

---

## 4. Why Is Encoding Necessary?

Machine learning models perform mathematical operations on input features.

A simple linear model calculates a prediction using the following structure:

```text
prediction =
    weight_1 * feature_1
    + weight_2 * feature_2
    + bias
```

A model cannot multiply a numerical weight by a text value such as `Premium`.

Categorical encoding transforms text labels into numerical representations.

```text
Raw categorical values
          |
          v
Clean and standardize categories
          |
          v
Select an encoding method
          |
          v
Create numerical features
          |
          v
Train the machine learning model
```

Encoding is not simply replacing text with random numbers.

The selected encoding method may introduce assumptions about:

* Order
* Distance
* Similarity
* Frequency
* Relationship with the target

---

## 5. Types of Categorical Variables

### 5.1 Nominal Variables

Nominal variables contain categories without a meaningful order.

Examples:

* Country
* Device type
* Browser
* Payment method
* Product category

Example:

```text
country = Vietnam, Thailand, Singapore
```

The following relationship is not meaningful:

```text
Vietnam < Thailand < Singapore
```

Common encoding methods:

* One-hot encoding
* Frequency encoding
* Feature hashing
* Target encoding

---

### 5.2 Ordinal Variables

Ordinal variables contain categories with a meaningful order.

Examples:

```text
satisfaction = Low, Medium, High

education = High School, Bachelor, Master, PhD

risk_level = Low, Moderate, High, Critical
```

For satisfaction, the order is:

```text
Low < Medium < High
```

A possible numerical representation is:

| Satisfaction | Encoded value |
| ------------ | ------------: |
| Low          |             0 |
| Medium       |             1 |
| High         |             2 |

However, this representation may imply that the distance between categories is equal.

```text
High - Medium = Medium - Low
```

That assumption may not always be correct.

---

### 5.3 Binary Variables

Binary variables contain exactly two categories.

Examples:

* Yes or No
* Active or Inactive
* Verified or Not Verified
* Fraud or Not Fraud
* Churned or Not Churned

A common encoding is:

| Original value | Encoded value |
| -------------- | ------------: |
| No             |             0 |
| Yes            |             1 |

---

### 5.4 High-Cardinality Variables

A high-cardinality variable contains many unique categories.

Examples:

* Product ID
* Postal code
* User ID
* Merchant ID
* City
* Search query
* Company name

Suppose a feature contains 50,000 unique categories.

One-hot encoding could create up to 50,000 new columns.

This may cause:

* High memory usage
* Slow model training
* Sparse data
* Overfitting
* Difficult deployment
* Difficult feature monitoring

Possible alternatives include:

* Frequency encoding
* Target encoding
* Feature hashing
* Rare-category grouping
* Learned embeddings

---

## 6. Encoding Workflow

A reliable encoding workflow should include the following steps:

```text
Business question
        |
        v
Identify categorical columns
        |
        v
Clean category values
        |
        v
Classify variable type
        |
        +----------------------+
        |                      |
        v                      v
     Nominal                Ordinal
        |                      |
        v                      v
Check cardinality       Define valid order
        |                      |
        +----------+-----------+
                   |
                   v
         Select encoding method
                   |
                   v
       Split train and test data
                   |
                   v
       Fit encoder on training data
                   |
                   v
Transform validation and test data
                   |
                   v
        Train and evaluate model
                   |
                   v
     Document assumptions and risks
```

The most important rule is:

> Fit the encoder using training data only.

---

## 7. Common Encoding Methods

### 7.1 Binary Encoding

Binary encoding maps two categories to `0` and `1`.

```python
import pandas as pd

df = pd.DataFrame(
    {
        "email_verified": [
            "Yes",
            "No",
            "Yes",
            "No",
        ]
    }
)

df["email_verified_encoded"] = df["email_verified"].map(
    {
        "No": 0,
        "Yes": 1,
    }
)

print(df)
```

Expected output:

```text
  email_verified  email_verified_encoded
0            Yes                       1
1             No                       0
2            Yes                       1
3             No                       0
```

Use binary encoding when:

* The feature contains exactly two categories.
* The positive and negative meanings are clear.
* The mapping is documented.

---

### 7.2 Label Encoding

Label encoding assigns an integer to each category.

Example:

| Plan     | Encoded value |
| -------- | ------------: |
| Basic    |             0 |
| Premium  |             1 |
| Standard |             2 |

```python
import pandas as pd
from sklearn.preprocessing import LabelEncoder

df = pd.DataFrame(
    {
        "plan": [
            "Basic",
            "Premium",
            "Standard",
            "Premium",
        ]
    }
)

encoder = LabelEncoder()

df["plan_encoded"] = encoder.fit_transform(
    df["plan"]
)

print(df)
```

For nominal variables, this encoding may incorrectly suggest an order:

```text
Basic < Premium < Standard
```

It may also suggest numerical distances that have no business meaning.

Label encoding is commonly used for:

* Target variables
* Ordered categories
* Some tree-based model workflows

Avoid using arbitrary label encoding for nominal variables unless the model and experiment justify it.

---

### 7.3 Ordinal Encoding

Ordinal encoding assigns numerical values according to a predefined order.

```python
import pandas as pd
from sklearn.preprocessing import OrdinalEncoder

df = pd.DataFrame(
    {
        "satisfaction": [
            "Low",
            "High",
            "Medium",
            "Low",
        ]
    }
)

encoder = OrdinalEncoder(
    categories=[
        ["Low", "Medium", "High"]
    ],
    handle_unknown="use_encoded_value",
    unknown_value=-1,
)

df["satisfaction_encoded"] = encoder.fit_transform(
    df[["satisfaction"]]
)

print(df)
```

Expected mapping:

| Satisfaction | Encoded value |
| ------------ | ------------: |
| Unknown      |            -1 |
| Low          |             0 |
| Medium       |             1 |
| High         |             2 |

Use ordinal encoding when:

* The categories have a valid order.
* The order is defined by domain knowledge.
* Unknown categories have an explicit handling rule.

Do not create an ordinal order based only on alphabetical sorting.

---

### 7.4 One-Hot Encoding

One-hot encoding creates one binary column for each category.

Original data:

| customer_id | plan     |
| ----------: | -------- |
|         101 | Basic    |
|         102 | Premium  |
|         103 | Standard |
|         104 | Premium  |

Encoded data:

| customer_id | plan_Basic | plan_Premium | plan_Standard |
| ----------: | ---------: | -----------: | ------------: |
|         101 |          1 |            0 |             0 |
|         102 |          0 |            1 |             0 |
|         103 |          0 |            0 |             1 |
|         104 |          0 |            1 |             0 |

Using Pandas:

```python
import pandas as pd

df = pd.DataFrame(
    {
        "plan": [
            "Basic",
            "Premium",
            "Standard",
            "Premium",
        ]
    }
)

encoded_df = pd.get_dummies(
    df,
    columns=["plan"],
    dtype=int,
)

print(encoded_df)
```

Using Scikit-learn:

```python
import pandas as pd
from sklearn.preprocessing import OneHotEncoder

df = pd.DataFrame(
    {
        "plan": [
            "Basic",
            "Premium",
            "Standard",
            "Premium",
        ]
    }
)

encoder = OneHotEncoder(
    handle_unknown="ignore",
    sparse_output=False,
)

encoded_array = encoder.fit_transform(
    df[["plan"]]
)

encoded_df = pd.DataFrame(
    encoded_array,
    columns=encoder.get_feature_names_out(
        ["plan"]
    ),
)

print(encoded_df)
```

Use one-hot encoding when:

* The feature is nominal.
* Cardinality is low or moderate.
* The model should not assume a category order.
* The additional feature count is manageable.

Possible disadvantages:

* It creates many columns.
* It can increase memory usage.
* It may produce sparse data.
* It may be inefficient for high-cardinality variables.

---

### 7.5 Dummy Variable Encoding

Dummy variable encoding is similar to one-hot encoding, but one category is removed.

Suppose the original categories are:

```text
Basic
Standard
Premium
```

Dummy encoding may generate only:

```text
plan_Standard
plan_Premium
```

When both values are zero, the category is interpreted as `Basic`.

```python
encoded_df = pd.get_dummies(
    df,
    columns=["plan"],
    drop_first=True,
    dtype=int,
)
```

This method is sometimes used in linear regression to reduce perfect multicollinearity.

---

### 7.6 Frequency Encoding

Frequency encoding replaces each category with its occurrence count or proportion.

Example:

| City      | Count | Frequency |
| --------- | ----: | --------: |
| Hanoi     |     4 |      0.40 |
| Bangkok   |     3 |      0.30 |
| Singapore |     2 |      0.20 |
| Tokyo     |     1 |      0.10 |

```python
import pandas as pd

df = pd.DataFrame(
    {
        "city": [
            "Hanoi",
            "Hanoi",
            "Bangkok",
            "Singapore",
            "Hanoi",
            "Bangkok",
            "Tokyo",
            "Hanoi",
            "Singapore",
            "Bangkok",
        ]
    }
)

frequency_map = df["city"].value_counts(
    normalize=True
)

df["city_frequency"] = df["city"].map(
    frequency_map
)

print(df)
```

Advantages:

* Produces only one numerical column.
* Works with high-cardinality features.
* Uses less memory than one-hot encoding.
* Preserves category prevalence information.

Limitations:

* Different categories may have the same frequency.
* Frequency does not represent semantic meaning.
* Rare-category values may be unstable.
* The frequency mapping must be fitted using training data only.

---

### 7.7 Target Encoding

Target encoding replaces each category with a statistic calculated from the target variable.

For binary classification, the statistic is often the average target value.

Example:

| Plan     | Number of customers | Churned customers | Churn rate |
| -------- | ------------------: | ----------------: | ---------: |
| Basic    |                 100 |                35 |       0.35 |
| Standard |                 150 |                30 |       0.20 |
| Premium  |                  80 |                 8 |       0.10 |

The encoded values become:

```text
Basic    -> 0.35
Standard -> 0.20
Premium  -> 0.10
```

Basic formula:

```text
Target encoding for category c
=
Sum of target values for category c
/
Number of records in category c
```

Target encoding can be useful for high-cardinality features.

However, it has a serious risk:

> Target encoding can cause data leakage.

Incorrect workflow:

```text
Use the complete dataset
        |
        v
Calculate category target averages
        |
        v
Split into training and test data
```

Correct workflow:

```text
Split into training and test data
        |
        v
Calculate target averages using training data
        |
        v
Transform training and test data separately
```

Safer techniques include:

* Out-of-fold target encoding
* Cross-validation encoding
* Smoothing
* Regularization
* Rare-category grouping

---

### 7.8 Feature Hashing

Feature hashing maps categories into a fixed number of feature buckets.

```text
Category value
      |
      v
Hash function
      |
      v
One of K feature buckets
```

Advantages:

* Fixed output size
* Memory efficient
* Supports very high-cardinality features
* Can process unseen categories

Limitations:

* Hash collisions may occur.
* Encoded features are difficult to interpret.
* Original category values may not be recoverable.

Feature hashing is often used for:

* Text features
* Recommendation systems
* Advertising systems
* Streaming data
* Online machine learning

---

### 7.9 Learned Embeddings

Embeddings represent categories as dense numerical vectors.

Example:

```text
Basic    -> [0.12, -0.31, 0.80]
Standard -> [0.55, 0.10, 0.24]
Premium  -> [0.91, 0.42, -0.08]
```

Embeddings can learn relationships between categories during model training.

They are commonly used in:

* Neural networks
* Recommendation systems
* Natural language processing
* Large-scale tabular models

Embeddings usually require:

* More data
* More complex models
* More training time
* Additional monitoring

---

## 8. Encoding Method Comparison

| Method             | Suitable for                       |             Output size | Main advantage           | Main risk                   |
| ------------------ | ---------------------------------- | ----------------------: | ------------------------ | --------------------------- |
| Binary encoding    | Two categories                     |                1 column | Simple and interpretable | Incorrect mapping           |
| Label encoding     | Target or ordered data             |                1 column | Compact                  | Introduces false order      |
| Ordinal encoding   | Ordered categories                 |                1 column | Preserves ranking        | Assumes numerical spacing   |
| One-hot encoding   | Low-cardinality nominal data       | One column per category | No artificial order      | High dimensionality         |
| Frequency encoding | High-cardinality data              |                1 column | Memory efficient         | Categories may share values |
| Target encoding    | High-cardinality supervised tasks  |                1 column | Uses target relationship | Leakage and overfitting     |
| Feature hashing    | Extremely high-cardinality data    |              Fixed size | Scalable                 | Hash collisions             |
| Embeddings         | Large datasets and neural networks |            Configurable | Learns relationships     | More complex                |

---

## 9. Choosing an Encoding Method

A practical decision process is:

```text
Is the feature categorical?
          |
          v
Does it contain exactly two categories?
          |
     +----+----+
     |         |
    Yes        No
     |         |
     v         v
  Binary    Does it have a meaningful order?
 encoding        |
            +----+----+
            |         |
           Yes        No
            |         |
            v         v
         Ordinal   Is cardinality low?
         encoding       |
                   +----+----+
                   |         |
                  Yes        No
                   |         |
                   v         v
                One-hot   Consider:
                encoding  - Frequency encoding
                          - Target encoding
                          - Feature hashing
                          - Rare grouping
                          - Embeddings
```

This is only a starting point.

The final decision also depends on:

* Dataset size
* Model type
* Memory constraints
* Interpretability requirements
* Production environment
* Unknown-category behavior
* Category stability over time

---

## 10. Model-Specific Considerations

### 10.1 Linear and Logistic Regression

Linear models are sensitive to the numerical meaning of features.

Recommended methods:

* One-hot encoding for nominal variables
* Ordinal encoding for ordered variables
* Carefully validated target encoding for high-cardinality variables

Avoid arbitrary label encoding for nominal features.

---

### 10.2 Decision Trees and Random Forests

Tree-based models split numerical values into ranges.

An integer-encoded category may produce a split such as:

```text
country_code <= 1.5
```

This split assumes that category codes have a meaningful numerical order.

Safer options include:

* One-hot encoding
* Frequency encoding
* Native categorical feature support
* Carefully designed ordinal encoding

---

### 10.3 Gradient Boosting Models

Some gradient boosting libraries support categorical features directly.

Possible benefits include:

* Fewer manually generated columns
* Better handling of high-cardinality data
* Reduced feature explosion
* Learned category relationships

The exact behavior depends on the selected model and library.

---

### 10.4 Neural Networks

Common encoding strategies include:

* One-hot encoding for small category sets
* Embeddings for medium- or high-cardinality features
* Feature hashing for very large category sets

Embeddings are especially useful when categories contain hidden relationships.

---

## 11. Handling Missing and Unknown Categories

Categorical features may contain:

* Missing values
* Categories that appear only in test data
* New production categories
* Typographical variations
* Deprecated values

### 11.1 Create an Explicit Missing Category

```python
df["plan"] = df["plan"].fillna(
    "Missing"
)
```

This keeps missingness as a potentially useful signal.

---

### 11.2 Handle Unknown One-Hot Categories

```python
from sklearn.preprocessing import OneHotEncoder

encoder = OneHotEncoder(
    handle_unknown="ignore"
)
```

When a new category appears, the encoder does not fail.

---

### 11.3 Handle Unknown Ordinal Categories

```python
from sklearn.preprocessing import OrdinalEncoder

encoder = OrdinalEncoder(
    categories=[
        ["Low", "Medium", "High"]
    ],
    handle_unknown="use_encoded_value",
    unknown_value=-1,
)
```

Make sure `-1` is not used by a valid category.

---

### 11.4 Group Rare Categories

Rare categories can be grouped into an `Other` category.

```python
minimum_count = 10

category_counts = df["city"].value_counts()

rare_categories = category_counts[
    category_counts < minimum_count
].index

df["city_grouped"] = df["city"].replace(
    rare_categories,
    "Other",
)
```

Benefits:

* Reduces dimensionality
* Improves model stability
* Reduces overfitting
* Simplifies monitoring

---

## 12. Cleaning Categories Before Encoding

Inconsistent labels can create duplicate categories.

Problematic values:

```text
Premium
premium
PREMIUM
Premium 
 premium
```

These values may be treated as different categories.

Clean the values first:

```python
df["plan"] = (
    df["plan"]
    .astype("string")
    .str.strip()
    .str.lower()
)
```

Standardize aliases:

```python
plan_mapping = {
    "basic plan": "basic",
    "standard plan": "standard",
    "premium plan": "premium",
    "pro": "premium",
}

df["plan"] = df["plan"].replace(
    plan_mapping
)
```

Always inspect the unique values again after cleaning.

```python
print(
    df["plan"].value_counts(
        dropna=False
    )
)
```

---

## 13. Preventing Data Leakage

Data leakage happens when information unavailable at prediction time enters the training process.

### Incorrect Workflow

```text
Complete dataset
      |
      v
Fit the encoder
      |
      v
Split into train and test data
```

This allows information from the test set to influence preprocessing.

### Correct Workflow

```text
Complete dataset
      |
      v
Split into train and test data
      |
      v
Fit encoder on training data
      |
      +---------------------------+
      |                           |
      v                           v
Transform training data   Transform test data
```

This rule applies to:

* Category mappings
* Frequency mappings
* Rare-category thresholds
* Target statistics
* Missing-value strategies
* Scaling
* Feature selection

---

## 14. Building a Reproducible Pipeline

Suppose a churn dataset contains:

* `country`: nominal
* `plan`: nominal
* `satisfaction`: ordinal
* `monthly_charge`: numerical

A Scikit-learn preprocessing pipeline can be built as follows:

```python
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import (
    OneHotEncoder,
    OrdinalEncoder,
    StandardScaler,
)

nominal_features = [
    "country",
    "plan",
]

ordinal_features = [
    "satisfaction",
]

numeric_features = [
    "monthly_charge",
]

nominal_pipeline = Pipeline(
    steps=[
        (
            "imputer",
            SimpleImputer(
                strategy="most_frequent"
            ),
        ),
        (
            "encoder",
            OneHotEncoder(
                handle_unknown="ignore"
            ),
        ),
    ]
)

ordinal_pipeline = Pipeline(
    steps=[
        (
            "imputer",
            SimpleImputer(
                strategy="most_frequent"
            ),
        ),
        (
            "encoder",
            OrdinalEncoder(
                categories=[
                    ["Low", "Medium", "High"]
                ],
                handle_unknown="use_encoded_value",
                unknown_value=-1,
            ),
        ),
    ]
)

numeric_pipeline = Pipeline(
    steps=[
        (
            "imputer",
            SimpleImputer(
                strategy="median"
            ),
        ),
        (
            "scaler",
            StandardScaler(),
        ),
    ]
)

preprocessor = ColumnTransformer(
    transformers=[
        (
            "nominal",
            nominal_pipeline,
            nominal_features,
        ),
        (
            "ordinal",
            ordinal_pipeline,
            ordinal_features,
        ),
        (
            "numeric",
            numeric_pipeline,
            numeric_features,
        ),
    ]
)

model_pipeline = Pipeline(
    steps=[
        (
            "preprocessor",
            preprocessor,
        ),
        (
            "classifier",
            LogisticRegression(
                max_iter=1000
            ),
        ),
    ]
)
```

Train the complete pipeline:

```python
model_pipeline.fit(
    X_train,
    y_train,
)
```

Generate predictions:

```python
predictions = model_pipeline.predict(
    X_test
)
```

Advantages of using a pipeline:

* Reduces data leakage risk
* Keeps transformations reproducible
* Handles unknown categories consistently
* Simplifies model deployment
* Keeps preprocessing attached to the model

---

## 15. EDA Before Encoding

Before encoding a categorical feature, inspect:

* Number of unique categories
* Missing-value percentage
* Most frequent categories
* Rare-category proportion
* Spelling consistency
* Relationship with the target
* Category changes over time
* Business meaning

Example:

```python
categorical_columns = [
    "country",
    "plan",
    "satisfaction",
]

for column in categorical_columns:
    print(f"\nColumn: {column}")

    print(
        "Unique values:",
        df[column].nunique(
            dropna=False
        ),
    )

    print(
        df[column]
        .value_counts(
            dropna=False
        )
        .head(10)
    )
```

Calculate category percentages:

```python
for column in categorical_columns:
    percentages = (
        df[column]
        .value_counts(
            normalize=True,
            dropna=False,
        )
        .mul(100)
        .round(2)
    )

    print(f"\nColumn: {column}")
    print(percentages)
```

---

## 16. Practical Demo

### 16.1 Create an Example Dataset

```python
import pandas as pd

df = pd.DataFrame(
    {
        "customer_id": [
            101,
            102,
            103,
            104,
            105,
            106,
        ],
        "country": [
            "Vietnam",
            "Thailand",
            "Vietnam",
            "Singapore",
            "Thailand",
            None,
        ],
        "plan": [
            "Basic",
            "Premium",
            "Standard",
            "Premium",
            "Basic",
            "Standard",
        ],
        "satisfaction": [
            "Low",
            "High",
            "Medium",
            "High",
            "Low",
            "Medium",
        ],
        "churn": [
            1,
            0,
            0,
            0,
            1,
            0,
        ],
    }
)

print(df)
```

---

### 16.2 Inspect the Categories

```python
for column in [
    "country",
    "plan",
    "satisfaction",
]:
    print(f"\nColumn: {column}")

    print(
        df[column].value_counts(
            dropna=False
        )
    )
```

---

### 16.3 Encode Nominal Features

```python
nominal_encoded = pd.get_dummies(
    df[["country", "plan"]],
    dummy_na=True,
    dtype=int,
)

print(nominal_encoded)
```

---

### 16.4 Encode the Ordinal Feature

```python
satisfaction_mapping = {
    "Low": 0,
    "Medium": 1,
    "High": 2,
}

df["satisfaction_encoded"] = (
    df["satisfaction"]
    .map(satisfaction_mapping)
)
```

---

### 16.5 Combine the Features

```python
model_df = pd.concat(
    [
        df[
            [
                "customer_id",
                "satisfaction_encoded",
                "churn",
            ]
        ],
        nominal_encoded,
    ],
    axis=1,
)

print(model_df)
```

Possible result:

| customer_id | satisfaction_encoded | churn | country_Singapore | country_Thailand | country_Vietnam | country_nan | plan_Basic | plan_Premium | plan_Standard |
| ----------: | -------------------: | ----: | ----------------: | ---------------: | --------------: | ----------: | ---------: | -----------: | ------------: |
|         101 |                    0 |     1 |                 0 |                0 |               1 |           0 |          1 |            0 |             0 |
|         102 |                    2 |     0 |                 0 |                1 |               0 |           0 |          0 |            1 |             0 |
|         103 |                    1 |     0 |                 0 |                0 |               1 |           0 |          0 |            0 |             1 |
|         104 |                    2 |     0 |                 1 |                0 |               0 |           0 |          0 |            1 |             0 |
|         105 |                    0 |     1 |                 0 |                1 |               0 |           0 |          1 |            0 |             0 |
|         106 |                    1 |     0 |                 0 |                0 |               0 |           1 |          0 |            0 |             1 |

---

## 17. Evaluating an Encoding Strategy

An encoding strategy should be evaluated as part of the complete machine learning pipeline.

### Predictive Metrics

Possible classification metrics:

* Accuracy
* Precision
* Recall
* F1-score
* ROC-AUC
* Log loss

Possible regression metrics:

* Mean absolute error
* Mean squared error
* Root mean squared error

### Computational Metrics

* Training time
* Prediction latency
* Memory usage
* Number of generated features
* Model size

### Operational Metrics

* Unknown-category rate
* Missing-category rate
* Category drift
* Pipeline failure rate
* Feature availability
* Mapping version consistency

### Interpretability Questions

* Can the encoded feature be explained?
* Can feature importance be mapped back to the original category?
* Can stakeholders understand the transformation?
* Can the encoding be audited?

Evaluation workflow:

```text
Encoding strategy
        |
        v
Cross-validation
        |
        v
Predictive performance
        |
        v
Memory and latency
        |
        v
Interpretability
        |
        v
Production robustness
        |
        v
Final encoding decision
```

---

## 18. Encoding and Deployment

The same encoding logic must be used during training and inference.

### Incorrect Production Flow

```text
Training mapping:
Basic = 0
Standard = 1
Premium = 2

Production mapping:
Basic = 1
Standard = 2
Premium = 3
```

This creates inconsistent features and incorrect predictions.

### Correct Production Flow

```text
Raw API request
       |
       v
Saved preprocessing pipeline
       |
       v
Encoded numerical features
       |
       v
Saved machine learning model
       |
       v
Prediction
```

The deployed artifact should include:

* Category mappings
* Category order
* Missing-value rules
* Unknown-category behavior
* Rare-category rules
* Encoder version
* Model version
* Feature schema

---

## 19. Monitoring Categorical Features

Categorical distributions may change after model deployment.

Example:

| Plan     | Training share | Production share |
| -------- | -------------: | ---------------: |
| Basic    |            45% |              25% |
| Standard |            40% |              35% |
| Premium  |            15% |              40% |

Possible explanations:

* Customer behavior changed.
* A new campaign was launched.
* Product offerings changed.
* A data pipeline error occurred.
* The prediction population changed.

### Unknown Category Rate

```text
Unknown category rate
=
Number of records with unknown categories
/
Total number of records
```

### Missing Category Rate

```text
Missing category rate
=
Number of records with missing category values
/
Total number of records
```

Useful monitoring methods include:

* Category proportion comparison
* Population Stability Index
* Jensen-Shannon divergence
* Chi-square test
* Total variation distance

---

## 20. Common Mistakes

### Mistake 1: Assigning Random Integers to Nominal Categories

Incorrect:

```text
Vietnam = 1
Thailand = 2
Singapore = 3
```

This introduces an artificial order.

Better approaches:

* One-hot encoding
* Frequency encoding
* Native categorical model support

---

### Mistake 2: Fitting the Encoder Before Splitting the Data

Incorrect:

```python
encoded_data = encoder.fit_transform(
    full_dataset
)

X_train, X_test = train_test_split(
    encoded_data
)
```

Correct sequence:

1. Split the dataset.
2. Fit the encoder on training data.
3. Transform validation and test data.

---

### Mistake 3: Ignoring Unknown Production Categories

A new production category may cause the encoder to fail.

Better approach:

```python
OneHotEncoder(
    handle_unknown="ignore"
)
```

Also monitor how frequently unknown categories occur.

---

### Mistake 4: One-Hot Encoding Unique Identifiers

Examples:

* Customer ID
* Transaction ID
* Session ID

These variables may create thousands or millions of useless columns.

Possible solutions:

* Remove identifiers.
* Extract meaningful attributes.
* Create historical aggregate features.
* Use embeddings only when justified.

---

### Mistake 5: Using Target Encoding Without Cross-Validation

Direct target encoding may leak labels and overfit rare categories.

Better approaches:

* Out-of-fold encoding
* Smoothing
* Rare-category grouping
* Training-only mappings

---

### Mistake 6: Encoding Before Cleaning

The following values may become separate categories:

```text
Premium
premium
Premium 
PREMIUM
```

Clean and standardize the values before encoding.

---

### Mistake 7: Assuming Ordinal Gaps Are Equal

The mapping below assumes equal numerical gaps:

```text
Low = 0
Medium = 1
High = 2
```

This may not reflect the true business meaning.

Compare alternative representations when necessary.

---

### Mistake 8: Not Saving the Encoder

Manually recreating an encoder during deployment may change category mappings.

Better approach:

* Save the complete pipeline.
* Version the encoder with the model.
* Add preprocessing tests.
* Validate the input schema.

---

## 21. Practical Exercise

Use a small customer churn CSV dataset.

Suggested columns:

| Column           | Type          | Description                  |
| ---------------- | ------------- | ---------------------------- |
| `customer_id`    | Identifier    | Unique customer ID           |
| `country`        | Nominal       | Customer country             |
| `contract_type`  | Nominal       | Monthly or annual contract   |
| `support_level`  | Ordinal       | Low, medium, or high support |
| `payment_method` | Nominal       | Customer payment channel     |
| `monthly_charge` | Numerical     | Monthly payment amount       |
| `churn`          | Binary target | Whether the customer left    |

### Tasks

1. Load the CSV file into Pandas.
2. Identify all categorical columns.
3. Calculate cardinality for each categorical feature.
4. Detect missing and inconsistent category values.
5. Standardize category names.
6. Group rare categories when appropriate.
7. Define the correct order for ordinal features.
8. Apply one-hot encoding to nominal features.
9. Apply ordinal encoding to ordered features.
10. Handle unknown categories.
11. Build a Scikit-learn preprocessing pipeline.
12. Train a baseline churn model.
13. Compare at least two encoding strategies.
14. Record model performance and feature count.
15. Write three business-oriented insights.

---

## 22. Suggested Notebook Structure

```text
01. Business Question
02. Dataset Overview
03. Schema and Data Types
04. Categorical Feature Inventory
05. Missing-Value Analysis
06. Category Distribution Analysis
07. Category Cleaning
08. Cardinality Analysis
09. Encoding Strategy
10. Reproducible Pipeline
11. Model Evaluation
12. Encoding Comparison
13. Insights and Recommendations
14. Caveats and Next Steps
```

---

## 23. Example Insights

### Weak Insight

> Premium customers have a lower churn rate.

### Stronger Insight

> Premium customers have a churn rate of 10%, compared with 35% for Basic customers. Contract type may therefore be an important predictor, but the relationship should be checked after controlling for tenure, price, and customer age.

---

### Weak Insight

> Some countries have many customers.

### Stronger Insight

> Vietnam represents 58% of the training dataset, while three countries each represent less than 1%. Rare countries should be grouped or regularized to reduce unstable estimates and overfitting.

---

### Weak Insight

> One-hot encoding creates many columns.

### Stronger Insight

> One-hot encoding increased the feature count from 18 to 427 because the `city` column contains 310 unique values. Frequency encoding produced fewer features while maintaining similar validation ROC-AUC, making it more suitable for deployment.

---

## 24. Completion Checklist

* [ ] I can explain categorical variable encoding in one or two minutes.
* [ ] I can distinguish nominal, ordinal, binary, and high-cardinality variables.
* [ ] I understand why arbitrary integer encoding can be dangerous.
* [ ] I can apply one-hot encoding to nominal features.
* [ ] I can define and apply an ordinal category order.
* [ ] I can handle missing and unknown categories.
* [ ] I can explain the risks of target encoding.
* [ ] I fit encoders using training data only.
* [ ] I can build a reproducible preprocessing pipeline.
* [ ] I have compared at least two encoding methods.
* [ ] I have documented at least one assumption or limitation.
* [ ] I have created a notebook, chart, model, API, or portfolio artifact.

---

## 25. Related Outcome

Understand, clean, transform, visualize, and explain datasets using business-oriented insights.

After completing this lesson, you should be able to convert categorical information into model-ready numerical features without losing important meaning or introducing unnecessary assumptions.

---

## 26. Related Project

### Mini Project: Customer Churn EDA

Build a customer churn analysis that includes:

* Dataset schema documentation
* Categorical feature inventory
* Missing and rare-category analysis
* Category standardization
* One-hot encoding
* Ordinal encoding
* Encoding strategy comparison
* Churn analysis by customer segment
* Baseline classification model
* Reproducible preprocessing pipeline
* Business insight report
* Caveats and recommendations

Suggested project structure:

```text
customer-churn-eda/
|
|-- data/
|   |-- raw/
|   `-- processed/
|
|-- notebooks/
|   `-- categorical-encoding-analysis.ipynb
|
|-- src/
|   |-- preprocessing.py
|   `-- train.py
|
|-- models/
|   `-- churn-pipeline.joblib
|
|-- reports/
|   |-- figures/
|   `-- churn-insight-report.md
|
|-- requirements.txt
`-- README.md
```

---

## 27. Summary

**Encoding Categorical Variables** transforms category labels into numerical representations that machine learning models can process.

The appropriate encoding method depends on:

* Whether the feature is nominal or ordinal
* The number of unique categories
* The selected model
* Dataset size
* Interpretability requirements
* Production constraints
* Data leakage risk

The main principles are:

1. Understand the feature before encoding it.
2. Clean and standardize category values.
3. Do not introduce an artificial order into nominal data.
4. Fit the encoder using training data only.
5. Handle missing, rare, and unknown categories explicitly.
6. Evaluate encoding choices through cross-validation.
7. Save preprocessing together with the trained model.
8. Monitor category distributions after deployment.

Turn this lesson into a notebook, preprocessing pipeline, experiment, model, API, or portfolio note so that the knowledge becomes practical and reusable.
