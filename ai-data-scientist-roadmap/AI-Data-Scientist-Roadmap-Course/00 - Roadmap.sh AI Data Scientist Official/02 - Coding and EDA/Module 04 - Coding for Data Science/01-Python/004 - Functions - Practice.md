# 004 - Functions

**Course:** 02 - Coding and EDA
**Module:** Module 04 - Coding for Data Science
**Content Group:** Python Foundation
**Roadmap Source:** Coding for Data Science / Python Foundation
**Lesson Type:** Coding
**Order in Module:** 004
**Suggested Duration:** 20 minutes

---

## 1. Summary

This lesson explains **functions** in the context of AI and Data Science.

A function is a reusable block of code designed to perform a specific task. Functions help data scientists avoid duplicated code, organize complex workflows, test individual processing steps, and convert notebooks into scripts, pipelines, APIs, or production services.

After completing this lesson, you should understand how functions can be used to:

* Load and validate data.
* Clean and transform datasets.
* Calculate metrics.
* Train and evaluate models.
* Generate charts and reports.
* Build reusable data pipelines.
* Convert notebook logic into scripts or APIs.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain what a function is in your own words.
* Define and call Python functions.
* Distinguish between parameters and arguments.
* Use `return` to produce reusable outputs.
* Work with default and keyword arguments.
* Understand local and global scope.
* Write functions with docstrings and type hints.
* Break a data workflow into small reusable functions.
* Apply functions to a small dataset or Data Science project.

---

## 3. What Is a Function?

A **function** is a named block of code that performs a specific operation.

Instead of writing the same logic multiple times, you define it once and call it whenever it is needed.

### Basic structure

```python
def function_name(parameters):
    """Optional documentation."""
    # Function logic
    return result
```

### Simple example

```python
def greet_user(name):
    return f"Hello, {name}!"
```

Call the function:

```python
message = greet_user("Alex")
print(message)
```

Output:

```text
Hello, Alex!
```

---

## 4. Why Functions Matter in Data Science

Data Science workflows usually contain repeated operations such as:

* Loading files.
* Removing missing values.
* Converting data types.
* Calculating statistics.
* Creating features.
* Training models.
* Evaluating predictions.
* Producing charts.

Without functions, these operations are often copied across notebook cells. This makes the workflow difficult to maintain and reproduce.

### Workflow without functions

```text
Load data
   |
Manually clean column A
   |
Manually clean column B
   |
Calculate metric
   |
Copy similar code for another dataset
   |
Fix the same bug in multiple places
```

### Workflow with functions

```text
Raw Data
   |
   v
load_data()
   |
   v
clean_data()
   |
   v
create_features()
   |
   v
analyze_data()
   |
   v
generate_report()
```

Each function has one clear responsibility.

---

## 5. Defining and Calling Functions

Use the `def` keyword to define a function.

```python
def calculate_total():
    prices = [10, 20, 30]
    return sum(prices)
```

Call the function by writing its name followed by parentheses:

```python
total = calculate_total()
print(total)
```

Output:

```text
60
```

The code inside the function only runs when the function is called.

---

## 6. Parameters and Arguments

A **parameter** is a variable declared in the function definition.

An **argument** is the actual value passed to the function when it is called.

```python
def calculate_discount(price, discount_rate):
    return price * (1 - discount_rate)
```

In this function:

* `price` is a parameter.
* `discount_rate` is a parameter.

When calling the function:

```python
final_price = calculate_discount(100, 0.2)
print(final_price)
```

The values `100` and `0.2` are arguments.

Output:

```text
80.0
```

---

## 7. Positional and Keyword Arguments

### Positional arguments

Positional arguments are matched according to their order.

```python
def describe_model(model_name, accuracy):
    return f"{model_name} achieved an accuracy of {accuracy:.2%}."
```

```python
result = describe_model("Random Forest", 0.91)
print(result)
```

Output:

```text
Random Forest achieved an accuracy of 91.00%.
```

The order matters:

```python
describe_model(0.91, "Random Forest")
```

This passes the values to the wrong parameters.

### Keyword arguments

Keyword arguments explicitly identify each parameter.

```python
result = describe_model(
    accuracy=0.91,
    model_name="Random Forest",
)
```

Keyword arguments improve readability and do not have to follow the original parameter order.

---

## 8. Default Arguments

A parameter can have a default value.

```python
def load_dataset(file_path, encoding="utf-8"):
    return f"Loading {file_path} with {encoding} encoding."
```

Use the default value:

```python
print(load_dataset("sales.csv"))
```

Output:

```text
Loading sales.csv with utf-8 encoding.
```

Override the default value:

```python
print(load_dataset("legacy_sales.csv", encoding="latin-1"))
```

Output:

```text
Loading legacy_sales.csv with latin-1 encoding.
```

### Important rule

Parameters without default values must appear before parameters with default values.

Correct:

```python
def load_dataset(file_path, encoding="utf-8"):
    pass
```

Incorrect:

```python
def load_dataset(encoding="utf-8", file_path):
    pass
```

---

## 9. Returning Values

The `return` statement sends a result back to the caller.

```python
def calculate_mean(values):
    return sum(values) / len(values)
```

```python
scores = [80, 85, 90, 95]
mean_score = calculate_mean(scores)

print(mean_score)
```

Output:

```text
87.5
```

### `return` versus `print`

A common beginner mistake is using `print()` instead of `return`.

```python
def calculate_mean_wrong(values):
    print(sum(values) / len(values))
```

The function displays the result but does not return it.

```python
result = calculate_mean_wrong([80, 90, 100])
print(result)
```

Output:

```text
90.0
None
```

A reusable function should normally return its output:

```python
def calculate_mean(values):
    return sum(values) / len(values)
```

Use `print()` mainly for displaying information, debugging, or command-line messages.

---

## 10. Returning Multiple Values

A function can return multiple values.

```python
def calculate_summary(values):
    minimum = min(values)
    maximum = max(values)
    average = sum(values) / len(values)

    return minimum, maximum, average
```

```python
scores = [70, 80, 90, 100]

minimum, maximum, average = calculate_summary(scores)

print(minimum)
print(maximum)
print(average)
```

Output:

```text
70
100
85.0
```

Python packages these values into a tuple.

```python
summary = calculate_summary(scores)
print(summary)
```

Output:

```text
(70, 100, 85.0)
```

---

## 11. Functions Without an Explicit Return Value

A function does not always need to return a value.

```python
def display_status(message):
    print(f"Status: {message}")
```

```python
display_status("Data processing completed")
```

Output:

```text
Status: Data processing completed
```

When a function does not contain an explicit `return`, Python automatically returns `None`.

---

## 12. Variable Scope

A variable created inside a function normally has **local scope**.

```python
def calculate_revenue():
    revenue = 5000
    return revenue
```

The variable `revenue` only exists inside the function.

```python
calculate_revenue()
print(revenue)
```

This raises an error:

```text
NameError: name 'revenue' is not defined
```

### Global variables

A variable created outside a function has global scope.

```python
tax_rate = 0.1

def calculate_tax(amount):
    return amount * tax_rate
```

```python
print(calculate_tax(1000))
```

Output:

```text
100.0
```

Although global variables can be accessed inside functions, excessive use of global state makes code harder to test and understand.

A better design is to pass values explicitly:

```python
def calculate_tax(amount, tax_rate):
    return amount * tax_rate
```

```python
tax = calculate_tax(amount=1000, tax_rate=0.1)
```

This makes the function more predictable and reusable.

---

## 13. Docstrings

A **docstring** explains what a function does.

```python
def calculate_conversion_rate(conversions, visitors):
    """
    Calculate the conversion rate.

    Parameters:
        conversions: Number of successful conversions.
        visitors: Total number of visitors.

    Returns:
        Conversion rate as a decimal.
    """
    return conversions / visitors
```

You can read the documentation with:

```python
help(calculate_conversion_rate)
```

A useful docstring should describe:

* The purpose of the function.
* Its parameters.
* Its return value.
* Important assumptions.
* Possible exceptions.

---

## 14. Type Hints

Type hints describe the expected input and output types.

```python
def calculate_conversion_rate(
    conversions: int,
    visitors: int,
) -> float:
    return conversions / visitors
```

Type hints do not automatically enforce types at runtime, but they improve:

* Code readability.
* Editor suggestions.
* Static analysis.
* Team collaboration.
* Error detection.

Another example:

```python
def normalize_scores(scores: list[float]) -> list[float]:
    maximum = max(scores)
    return [score / maximum for score in scores]
```

---

## 15. Input Validation

Functions should validate important assumptions before performing calculations.

```python
def calculate_conversion_rate(
    conversions: int,
    visitors: int,
) -> float:
    if visitors <= 0:
        raise ValueError("visitors must be greater than zero")

    if conversions < 0:
        raise ValueError("conversions cannot be negative")

    if conversions > visitors:
        raise ValueError("conversions cannot exceed visitors")

    return conversions / visitors
```

Valid call:

```python
rate = calculate_conversion_rate(120, 1000)
print(rate)
```

Output:

```text
0.12
```

Invalid call:

```python
calculate_conversion_rate(10, 0)
```

Output:

```text
ValueError: visitors must be greater than zero
```

Validation makes errors easier to understand and prevents incorrect results from silently entering the workflow.

---

## 16. Pure Functions

A **pure function**:

1. Produces the same output for the same input.
2. Does not modify external state.
3. Does not unexpectedly change its arguments.

Example:

```python
def standardize_value(value, mean, standard_deviation):
    return (value - mean) / standard_deviation
```

The standardized value is calculated as:

```text
z = (x - mean) / standard_deviation
```

Pure functions are useful because they are:

* Easier to test.
* Easier to debug.
* Easier to reuse.
* More predictable.

### Function with a side effect

```python
records = []

def add_record(record):
    records.append(record)
```

This function modifies a global list. Its behavior depends on external state.

A safer version returns a new list:

```python
def add_record(records, record):
    return records + [record]
```

---

## 17. Avoiding Mutable Default Arguments

Avoid using mutable objects such as lists or dictionaries as default values.

Problematic example:

```python
def add_metric(metric, metrics=[]):
    metrics.append(metric)
    return metrics
```

```python
print(add_metric("accuracy"))
print(add_metric("precision"))
```

Output:

```text
['accuracy']
['accuracy', 'precision']
```

The same list is reused across calls.

Use `None` instead:

```python
def add_metric(metric, metrics=None):
    if metrics is None:
        metrics = []

    metrics.append(metric)
    return metrics
```

Now each call can create a separate list.

---

## 18. Variable-Length Arguments

### Using `*args`

`*args` allows a function to accept multiple positional arguments.

```python
def calculate_average(*values):
    if not values:
        raise ValueError("At least one value is required")

    return sum(values) / len(values)
```

```python
average = calculate_average(10, 20, 30, 40)
print(average)
```

Output:

```text
25.0
```

Inside the function, `values` is a tuple.

### Using `**kwargs`

`**kwargs` allows a function to accept multiple keyword arguments.

```python
def display_experiment(**metadata):
    for key, value in metadata.items():
        print(f"{key}: {value}")
```

```python
display_experiment(
    model="Random Forest",
    accuracy=0.92,
    dataset="Customer Churn",
)
```

Output:

```text
model: Random Forest
accuracy: 0.92
dataset: Customer Churn
```

Inside the function, `metadata` is a dictionary.

Use `*args` and `**kwargs` only when the flexibility is useful. Explicit parameters are usually easier to understand.

---

## 19. Lambda Functions

A lambda function is a small anonymous function.

Standard function:

```python
def square(value):
    return value**2
```

Equivalent lambda:

```python
square = lambda value: value**2
```

```python
print(square(5))
```

Output:

```text
25
```

Lambda functions are useful for short operations, especially with sorting or DataFrame transformations.

```python
records = [
    {"name": "Model A", "accuracy": 0.85},
    {"name": "Model B", "accuracy": 0.93},
    {"name": "Model C", "accuracy": 0.89},
]

sorted_records = sorted(
    records,
    key=lambda record: record["accuracy"],
    reverse=True,
)
```

For complex logic, use a regular function instead of a lambda.

---

## 20. Functions as Objects

In Python, functions can be assigned to variables and passed to other functions.

```python
def calculate_mean(values):
    return sum(values) / len(values)


metric_function = calculate_mean

result = metric_function([10, 20, 30])
print(result)
```

Output:

```text
20.0
```

A function can also receive another function as an argument.

```python
def apply_metric(values, metric_function):
    return metric_function(values)
```

```python
result = apply_metric(
    [10, 20, 30],
    calculate_mean,
)

print(result)
```

This pattern is common in:

* Data transformation pipelines.
* Model evaluation.
* Callback systems.
* Optimization libraries.
* Machine Learning frameworks.

---

## 21. Example: Functions in a Data Workflow

Consider a small sales dataset.

```python
import pandas as pd
```

### Load the dataset

```python
def load_sales_data(file_path: str) -> pd.DataFrame:
    """Load sales data from a CSV file."""
    return pd.read_csv(file_path)
```

### Clean the dataset

```python
def clean_sales_data(data: pd.DataFrame) -> pd.DataFrame:
    """Clean and validate the sales dataset."""
    cleaned_data = data.copy()

    cleaned_data["quantity"] = pd.to_numeric(
        cleaned_data["quantity"],
        errors="coerce",
    )

    cleaned_data["unit_price"] = pd.to_numeric(
        cleaned_data["unit_price"],
        errors="coerce",
    )

    cleaned_data = cleaned_data.dropna(
        subset=["quantity", "unit_price"],
    )

    cleaned_data = cleaned_data[
        (cleaned_data["quantity"] >= 0)
        & (cleaned_data["unit_price"] >= 0)
    ]

    return cleaned_data
```

### Create a revenue feature

```python
def add_revenue_column(data: pd.DataFrame) -> pd.DataFrame:
    """Create a revenue column from quantity and unit price."""
    transformed_data = data.copy()

    transformed_data["revenue"] = (
        transformed_data["quantity"]
        * transformed_data["unit_price"]
    )

    return transformed_data
```

### Create a summary table

```python
def summarize_revenue_by_product(
    data: pd.DataFrame,
) -> pd.DataFrame:
    """Calculate total revenue by product."""
    summary = (
        data.groupby("product", as_index=False)
        .agg(
            total_quantity=("quantity", "sum"),
            total_revenue=("revenue", "sum"),
        )
        .sort_values(
            "total_revenue",
            ascending=False,
        )
    )

    return summary
```

### Combine the functions

```python
def build_sales_report(file_path: str) -> pd.DataFrame:
    """Run the complete sales reporting workflow."""
    sales_data = load_sales_data(file_path)
    sales_data = clean_sales_data(sales_data)
    sales_data = add_revenue_column(sales_data)

    report = summarize_revenue_by_product(sales_data)

    return report
```

Run the pipeline:

```python
report = build_sales_report("sales.csv")
print(report.head())
```

### Pipeline diagram

```text
sales.csv
    |
    v
load_sales_data()
    |
    v
clean_sales_data()
    |
    v
add_revenue_column()
    |
    v
summarize_revenue_by_product()
    |
    v
Sales Report
```

---

## 22. Example: Model Evaluation Function

A reusable evaluation function can calculate several classification metrics.

```python
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
)
```

```python
def evaluate_classifier(
    y_true,
    y_pred,
    average: str = "weighted",
) -> dict[str, float]:
    """
    Evaluate classification predictions.

    Parameters:
        y_true:
            Ground-truth labels.
        y_pred:
            Predicted labels.
        average:
            Averaging strategy for multiclass metrics.

    Returns:
        Dictionary containing evaluation metrics.
    """
    return {
        "accuracy": accuracy_score(y_true, y_pred),
        "precision": precision_score(
            y_true,
            y_pred,
            average=average,
            zero_division=0,
        ),
        "recall": recall_score(
            y_true,
            y_pred,
            average=average,
            zero_division=0,
        ),
        "f1_score": f1_score(
            y_true,
            y_pred,
            average=average,
            zero_division=0,
        ),
    }
```

Usage:

```python
y_true = [0, 1, 1, 0, 2]
y_pred = [0, 1, 0, 0, 2]

metrics = evaluate_classifier(y_true, y_pred)

for metric_name, metric_value in metrics.items():
    print(f"{metric_name}: {metric_value:.3f}")
```

The same evaluation function can be reused for:

* Logistic Regression.
* Decision Trees.
* Random Forests.
* Neural networks.
* Different datasets.
* Multiple experiments.

---

## 23. Function Design Principles

### 23.1 Give functions descriptive names

Good:

```python
def calculate_monthly_revenue(data):
    pass
```

Poor:

```python
def process(data):
    pass
```

The name should describe the function's responsibility.

### 23.2 Keep each function focused

A function should ideally perform one primary task.

Poor design:

```python
def process_everything(data):
    # Clean data
    # Create features
    # Train model
    # Evaluate model
    # Draw charts
    # Save files
    pass
```

Better design:

```python
def clean_data(data):
    pass


def create_features(data):
    pass


def train_model(features, target):
    pass


def evaluate_model(model, features, target):
    pass
```

### 23.3 Avoid hidden dependencies

Poor:

```python
FILE_PATH = "sales.csv"

def load_data():
    return pd.read_csv(FILE_PATH)
```

Better:

```python
def load_data(file_path):
    return pd.read_csv(file_path)
```

### 23.4 Avoid modifying input data unexpectedly

Potentially dangerous:

```python
def add_revenue(data):
    data["revenue"] = data["quantity"] * data["unit_price"]
    return data
```

Safer:

```python
def add_revenue(data):
    result = data.copy()
    result["revenue"] = result["quantity"] * result["unit_price"]
    return result
```

### 23.5 Return structured results

For multiple related outputs, consider returning a dictionary.

```python
def calculate_statistics(values):
    return {
        "count": len(values),
        "minimum": min(values),
        "maximum": max(values),
        "mean": sum(values) / len(values),
    }
```

---

## 24. Testing Functions

Small functions are easier to test.

```python
def calculate_revenue(quantity, unit_price):
    if quantity < 0:
        raise ValueError("quantity cannot be negative")

    if unit_price < 0:
        raise ValueError("unit_price cannot be negative")

    return quantity * unit_price
```

Simple tests:

```python
assert calculate_revenue(5, 10) == 50
assert calculate_revenue(0, 10) == 0
assert calculate_revenue(3, 2.5) == 7.5
```

Test an expected error:

```python
try:
    calculate_revenue(-1, 10)
except ValueError as error:
    assert str(error) == "quantity cannot be negative"
```

Testing is important when notebook code is converted into:

* Production scripts.
* Automated pipelines.
* APIs.
* Scheduled jobs.
* Machine Learning services.

---

## 25. Common Mistakes

### Mistake 1: Forgetting to call the function

Incorrect:

```python
def greet():
    print("Hello")


greet
```

Correct:

```python
greet()
```

### Mistake 2: Forgetting `return`

Incorrect:

```python
def calculate_total(values):
    total = sum(values)
```

```python
result = calculate_total([10, 20, 30])
print(result)
```

Output:

```text
None
```

Correct:

```python
def calculate_total(values):
    return sum(values)
```

### Mistake 3: Mixing calculation and presentation

Less reusable:

```python
def calculate_accuracy(correct, total):
    accuracy = correct / total
    print(f"Accuracy: {accuracy:.2%}")
```

More reusable:

```python
def calculate_accuracy(correct, total):
    return correct / total
```

Presentation can be handled separately:

```python
accuracy = calculate_accuracy(85, 100)
print(f"Accuracy: {accuracy:.2%}")
```

### Mistake 4: Creating very large functions

Large functions are difficult to:

* Read.
* Test.
* Debug.
* Reuse.
* Maintain.

Break them into smaller functions with clear responsibilities.

### Mistake 5: Depending heavily on global variables

```python
threshold = 0.5

def classify_probability(probability):
    return probability >= threshold
```

A more explicit version is:

```python
def classify_probability(
    probability,
    threshold=0.5,
):
    return probability >= threshold
```

### Mistake 6: Modifying the original DataFrame

```python
def clean_data(data):
    data.dropna(inplace=True)
    return data
```

This changes the original DataFrame.

Safer:

```python
def clean_data(data):
    cleaned_data = data.copy()
    cleaned_data = cleaned_data.dropna()
    return cleaned_data
```

### Mistake 7: Using mutable default arguments

Avoid:

```python
def collect_result(result, results=[]):
    results.append(result)
    return results
```

Use:

```python
def collect_result(result, results=None):
    if results is None:
        results = []

    results.append(result)
    return results
```

---

## 26. Practical Exercise

Use a small CSV dataset containing columns such as:

```text
order_id
product
category
quantity
unit_price
order_date
```

### Task 1: Load the dataset

Write a function:

```python
def load_data(file_path):
    pass
```

Requirements:

* Read a CSV file.
* Return a DataFrame.
* Raise a clear error when the file cannot be found.

### Task 2: Clean the dataset

Write a function:

```python
def clean_data(data):
    pass
```

Requirements:

* Remove invalid rows.
* Convert numeric columns.
* Handle missing values.
* Avoid modifying the original DataFrame.

### Task 3: Create features

Write a function:

```python
def create_features(data):
    pass
```

Create at least:

```text
revenue = quantity * unit_price
```

Optionally create:

* Order month.
* Average product price.
* Revenue category.
* High-value order indicator.

### Task 4: Build summary tables

Write functions for:

* Revenue by product.
* Revenue by category.
* Monthly revenue.
* Top five products.

Example:

```python
def summarize_by_category(data):
    pass
```

### Task 5: Create three insights

For each insight, include:

* The business question.
* The calculation.
* A table or chart.
* A written interpretation.
* A possible recommendation.

Example questions:

1. Which category generates the most revenue?
2. Which products have high sales volume but low revenue?
3. Which month has the strongest performance?

### Task 6: Build one pipeline function

```python
def build_report(file_path):
    data = load_data(file_path)
    data = clean_data(data)
    data = create_features(data)

    category_summary = summarize_by_category(data)

    return category_summary
```

---

## 27. Suggested Notebook Structure

```text
1. Problem Definition
2. Imports and Configuration
3. Function Definitions
4. Data Loading
5. Data Validation
6. Data Cleaning
7. Feature Engineering
8. Analysis
9. Visualization
10. Insights and Recommendations
11. Assumptions and Limitations
12. Conclusion
```

Keep function definitions in one section near the beginning of the notebook.

When the project grows, move reusable functions into Python modules:

```text
project/
|
|-- data/
|   |-- raw/
|   `-- processed/
|
|-- notebooks/
|   `-- sales_analysis.ipynb
|
|-- src/
|   |-- data_loader.py
|   |-- cleaning.py
|   |-- features.py
|   `-- reporting.py
|
|-- tests/
|   `-- test_cleaning.py
|
|-- requirements.txt
`-- README.md
```

---

## 28. Completion Checklist

* [ ] I can explain what a Python function is in one or two minutes.
* [ ] I can define and call a function.
* [ ] I understand the difference between parameters and arguments.
* [ ] I understand the difference between `return` and `print`.
* [ ] I can use positional, keyword, and default arguments.
* [ ] I understand local and global scope.
* [ ] I can write docstrings and type hints.
* [ ] I can validate function inputs.
* [ ] I avoid mutable default arguments.
* [ ] I can break a notebook workflow into smaller functions.
* [ ] I have created a notebook, script, query, chart, model, API, or practice note for this lesson.
* [ ] I have documented at least one assumption, limitation, or unanswered question.
* [ ] I can explain how functions improve reproducibility.

---

## 29. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

Functions contribute to this outcome by helping transform exploratory notebook code into:

* Reusable modules.
* Automated pipelines.
* Testable scripts.
* Scheduled jobs.
* Data APIs.
* Machine Learning services.

---

## 30. Related Project

### Mini Project: SQL and Python Sales Analysis

Build a small sales analysis workflow using a relational database and Pandas.

Suggested workflow:

```text
Sales Database
      |
      v
SQL Query
      |
      v
load_data()
      |
      v
clean_data()
      |
      v
create_features()
      |
      v
build_summary_tables()
      |
      v
create_charts()
      |
      v
Insights and Recommendations
```

Suggested deliverables:

* One SQL file.
* One Jupyter Notebook.
* One reusable Python module.
* Three charts or summary tables.
* Three business insights.
* One README explaining how to run the project.
* At least three tests for important functions.

---

## 31. Summary

A function is a reusable block of code that performs a specific task.

In AI and Data Science, functions help organize workflows involving:

* Data loading.
* Data cleaning.
* Feature engineering.
* Statistical analysis.
* Model training.
* Model evaluation.
* Visualization.
* Reporting.
* Deployment.

Well-designed functions should:

* Have clear names.
* Perform one main task.
* Receive dependencies through parameters.
* Return reusable outputs.
* Validate important inputs.
* Avoid unexpected side effects.
* Include documentation and type hints.
* Be small enough to test independently.

Do not leave function knowledge as isolated syntax practice. Apply it by converting a notebook workflow into reusable functions, a Python module, a data pipeline, an API endpoint, or a portfolio project.

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
