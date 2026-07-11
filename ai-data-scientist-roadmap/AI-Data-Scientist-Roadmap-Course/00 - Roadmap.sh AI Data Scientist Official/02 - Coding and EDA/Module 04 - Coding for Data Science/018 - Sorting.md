# 018 - Sorting

**Course:** 02 - Coding and EDA
**Module:** Module 04 - Coding for Data Science
**Content Group:** Data Structures and Algorithms
**Roadmap Source:** Coding for Data Science / Data Structures and Algorithms
**Lesson Type:** Coding
**Order in Module:** 018
**Suggested Duration:** 20 minutes

---

## 1. Summary

This lesson explains **sorting** in the context of AI and Data Science.

Sorting means arranging values according to a specific order, such as:

* Smallest to largest
* Largest to smallest
* Earliest to latest
* Alphabetical order
* Highest score to lowest score
* Most important record to least important record

Sorting is frequently used before:

* Exploring a dataset
* Calculating rankings
* Selecting top-performing records
* Creating reports
* Visualizing trends
* Processing time-series data
* Building recommendation systems
* Evaluating model predictions

After completing this lesson, you should understand how sorting works, how to use Python sorting tools, and how sorting supports reproducible data workflows.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain sorting in your own words.
* Distinguish between ascending and descending order.
* Use `sorted()` and `.sort()` in Python.
* Sort lists, dictionaries, tuples, and tabular data.
* Sort data with custom keys.
* Explain the basic idea behind common sorting algorithms.
* Compare sorting algorithms using time and space complexity.
* Recognize where sorting appears in an AI or Data Science workflow.
* Build a small notebook or script that applies sorting to a dataset.

---

## 3. What Is Sorting?

Sorting is the process of rearranging a collection of elements according to a comparison rule.

For example, consider the following values:

```text
[42, 15, 8, 23, 4]
```

After sorting in ascending order:

```text
[4, 8, 15, 23, 42]
```

After sorting in descending order:

```text
[42, 23, 15, 8, 4]
```

### Sorting Flow

```text
Unsorted data
     |
     v
Comparison rule
     |
     v
Rearrange elements
     |
     v
Sorted data
```

A comparison rule determines which element should appear first.

Examples of comparison rules include:

```text
number_a < number_b
date_a < date_b
score_a > score_b
name_a comes before name_b
```

---

## 4. Why Sorting Matters in Data Science

Sorting is not only an algorithmic exercise. It is a common operation in practical data analysis.

### Common Data Science Uses

| Task                   | Example                                       |
| ---------------------- | --------------------------------------------- |
| Ranking                | Rank customers by total spending              |
| Top-k selection        | Find the 10 products with the highest revenue |
| Time-series processing | Sort observations by timestamp                |
| Model evaluation       | Sort predictions by confidence                |
| Data cleaning          | Group unusual values at the beginning or end  |
| Reporting              | Sort departments by performance               |
| Visualization          | Order categories by frequency                 |
| Recommendation         | Rank items by predicted relevance             |
| Search systems         | Rank documents by similarity score            |
| Anomaly detection      | Sort records by anomaly score                 |

### Example Workflow

```text
Raw sales data
      |
      v
Clean missing and invalid values
      |
      v
Group sales by product
      |
      v
Sort products by total revenue
      |
      v
Select top-performing products
      |
      v
Create chart and business report
```

---

## 5. Ascending and Descending Order

### Ascending Order

Ascending order arranges values from the smallest to the largest.

```text
1, 2, 3, 4, 5
```

For strings, ascending order usually means alphabetical or lexicographical order.

```text
apple, banana, mango, orange
```

### Descending Order

Descending order arranges values from the largest to the smallest.

```text
5, 4, 3, 2, 1
```

For model confidence scores:

```text
0.99, 0.92, 0.81, 0.73
```

Descending order is commonly used when creating rankings or selecting top-performing records.

---

## 6. Sorting in Python

Python provides two main tools for sorting:

* `sorted()`
* `.sort()`

---

## 7. Using `sorted()`

The `sorted()` function returns a **new sorted list**.

It does not modify the original collection.

```python
scores = [82, 95, 71, 88, 90]

sorted_scores = sorted(scores)

print("Original:", scores)
print("Sorted:", sorted_scores)
```

Output:

```text
Original: [82, 95, 71, 88, 90]
Sorted: [71, 82, 88, 90, 95]
```

### Descending Order

Use `reverse=True`:

```python
scores = [82, 95, 71, 88, 90]

sorted_scores = sorted(scores, reverse=True)

print(sorted_scores)
```

Output:

```text
[95, 90, 88, 82, 71]
```

### General Syntax

```python
sorted(iterable, key=None, reverse=False)
```

| Parameter  | Meaning                                      |
| ---------- | -------------------------------------------- |
| `iterable` | The collection to sort                       |
| `key`      | A function that determines the sorting value |
| `reverse`  | Whether to sort in descending order          |

---

## 8. Using `.sort()`

The `.sort()` method modifies a list directly.

```python
scores = [82, 95, 71, 88, 90]

scores.sort()

print(scores)
```

Output:

```text
[71, 82, 88, 90, 95]
```

### Descending Order

```python
scores.sort(reverse=True)

print(scores)
```

Output:

```text
[95, 90, 88, 82, 71]
```

### Important Difference

```python
scores = [82, 95, 71]

result = scores.sort()

print(result)
```

Output:

```text
None
```

The `.sort()` method changes the list in place and returns `None`.

---

## 9. `sorted()` vs `.sort()`

| Feature                        | `sorted()`             | `.sort()`                           |
| ------------------------------ | ---------------------- | ----------------------------------- |
| Returns a new list             | Yes                    | No                                  |
| Modifies original list         | No                     | Yes                                 |
| Works with tuples and sets     | Yes                    | No                                  |
| Works only with lists          | No                     | Yes                                 |
| Useful for preserving raw data | Yes                    | No                                  |
| Memory usage                   | Uses additional memory | Usually uses less additional memory |

### Recommendation for Data Workflows

Use `sorted()` when you want to preserve the original data.

```python
raw_scores = [82, 95, 71]

clean_scores = sorted(raw_scores)

print(raw_scores)
print(clean_scores)
```

This is often safer in reproducible data analysis because the original input remains unchanged.

---

## 10. Sorting Strings

Python can sort strings alphabetically.

```python
cities = ["Tokyo", "Bangkok", "Hanoi", "Seoul"]

sorted_cities = sorted(cities)

print(sorted_cities)
```

Output:

```text
['Bangkok', 'Hanoi', 'Seoul', 'Tokyo']
```

### Case-Sensitive Sorting

Uppercase and lowercase characters may produce unexpected ordering.

```python
names = ["alice", "Bob", "charlie", "David"]

print(sorted(names))
```

Possible output:

```text
['Bob', 'David', 'alice', 'charlie']
```

Use `str.lower` for case-insensitive sorting:

```python
names = ["alice", "Bob", "charlie", "David"]

sorted_names = sorted(names, key=str.lower)

print(sorted_names)
```

Output:

```text
['alice', 'Bob', 'charlie', 'David']
```

---

## 11. Sorting with a Custom Key

The `key` parameter tells Python which value should be used for comparison.

### Sort Words by Length

```python
words = ["AI", "Python", "data", "algorithm"]

sorted_words = sorted(words, key=len)

print(sorted_words)
```

Output:

```text
['AI', 'data', 'Python', 'algorithm']
```

### Sort by Absolute Value

```python
values = [-10, 3, -2, 8, -5]

sorted_values = sorted(values, key=abs)

print(sorted_values)
```

Output:

```text
[-2, 3, -5, 8, -10]
```

The original values are not replaced by their absolute values. The absolute values are used only for comparison.

---

## 12. Sorting Tuples

Suppose each tuple contains:

```text
(student_name, score)
```

```python
students = [
    ("Anna", 88),
    ("Ben", 95),
    ("Chris", 76),
    ("Diana", 91),
]
```

Sort by score:

```python
sorted_students = sorted(
    students,
    key=lambda student: student[1],
    reverse=True,
)

print(sorted_students)
```

Output:

```text
[
    ('Ben', 95),
    ('Diana', 91),
    ('Anna', 88),
    ('Chris', 76)
]
```

### Understanding the Lambda Function

```python
lambda student: student[1]
```

This means:

```text
Take each student tuple
        |
        v
Access position 1
        |
        v
Use the score as the sorting key
```

---

## 13. Sorting Dictionaries

Consider a list of dictionaries:

```python
products = [
    {"name": "Laptop", "revenue": 25000},
    {"name": "Mouse", "revenue": 8000},
    {"name": "Monitor", "revenue": 17000},
]
```

Sort by revenue:

```python
sorted_products = sorted(
    products,
    key=lambda product: product["revenue"],
    reverse=True,
)

for product in sorted_products:
    print(product["name"], product["revenue"])
```

Output:

```text
Laptop 25000
Monitor 17000
Mouse 8000
```

This pattern is common when working with:

* JSON responses
* API results
* Model predictions
* Database records
* Configuration files

---

## 14. Sorting by Multiple Fields

Sometimes two records have the same primary value.

For example, sort students by:

1. Score in descending order
2. Name in ascending order

```python
students = [
    {"name": "David", "score": 90},
    {"name": "Alice", "score": 95},
    {"name": "Charlie", "score": 90},
    {"name": "Bob", "score": 95},
]
```

One approach is to use stable sorting in multiple steps:

```python
students_by_name = sorted(
    students,
    key=lambda student: student["name"],
)

students_ranked = sorted(
    students_by_name,
    key=lambda student: student["score"],
    reverse=True,
)

for student in students_ranked:
    print(student)
```

Output:

```text
{'name': 'Alice', 'score': 95}
{'name': 'Bob', 'score': 95}
{'name': 'Charlie', 'score': 90}
{'name': 'David', 'score': 90}
```

Python sorting is **stable**, which means records with equal sorting keys preserve their previous relative order.

---

## 15. Sorting with `operator.itemgetter`

For tuples and dictionaries, `itemgetter` can improve readability.

```python
from operator import itemgetter

students = [
    ("Anna", 88),
    ("Ben", 95),
    ("Chris", 76),
]

sorted_students = sorted(
    students,
    key=itemgetter(1),
    reverse=True,
)

print(sorted_students)
```

For dictionaries:

```python
from operator import itemgetter

products = [
    {"name": "Laptop", "revenue": 25000},
    {"name": "Mouse", "revenue": 8000},
    {"name": "Monitor", "revenue": 17000},
]

sorted_products = sorted(
    products,
    key=itemgetter("revenue"),
    reverse=True,
)
```

---

## 16. Sorting Data with Pandas

In Data Science projects, sorting is often performed with Pandas.

### Example Dataset

```python
import pandas as pd

sales = pd.DataFrame(
    {
        "product": ["Laptop", "Mouse", "Monitor", "Keyboard"],
        "units_sold": [25, 120, 42, 75],
        "revenue": [25000, 8000, 17000, 9000],
    }
)

print(sales)
```

### Sort by One Column

```python
sales_by_revenue = sales.sort_values(
    by="revenue",
    ascending=False,
)

print(sales_by_revenue)
```

### Sort by Multiple Columns

```python
sorted_sales = sales.sort_values(
    by=["revenue", "units_sold"],
    ascending=[False, False],
)

print(sorted_sales)
```

### Preserve the Original DataFrame

```python
sorted_sales = sales.sort_values(
    by="revenue",
    ascending=False,
)
```

Avoid changing the original DataFrame unless necessary:

```python
sales.sort_values(
    by="revenue",
    ascending=False,
    inplace=True,
)
```

Using `inplace=True` can make a notebook harder to debug because the original state is changed.

---

## 17. Sorting Index Values in Pandas

A DataFrame can also be sorted by its index.

```python
sales_by_index = sales.sort_index()

print(sales_by_index)
```

This is useful when the index represents:

* Dates
* Record IDs
* Time steps
* Categories
* Hierarchical indexes

---

## 18. Sorting Time-Series Data

Time-series observations should usually be sorted by timestamp before analysis.

```python
import pandas as pd

events = pd.DataFrame(
    {
        "timestamp": [
            "2026-01-03 10:00",
            "2026-01-01 09:00",
            "2026-01-02 15:00",
        ],
        "value": [30, 10, 20],
    }
)

events["timestamp"] = pd.to_datetime(events["timestamp"])

events = events.sort_values("timestamp")

print(events)
```

### Why This Matters

Incorrect timestamp order can cause problems with:

* Rolling averages
* Lag features
* Time-based train/test splits
* Forecasting models
* Sequential visualizations
* Event-stream processing

```text
Unsorted timestamps
        |
        v
Incorrect lag relationships
        |
        v
Invalid time-series features
        |
        v
Misleading model results
```

---

## 19. Sorting Model Predictions

Suppose a classification model produces labels and confidence scores.

```python
predictions = [
    {"label": "cat", "confidence": 0.72},
    {"label": "dog", "confidence": 0.94},
    {"label": "bird", "confidence": 0.61},
]
```

Sort predictions by confidence:

```python
ranked_predictions = sorted(
    predictions,
    key=lambda prediction: prediction["confidence"],
    reverse=True,
)

for prediction in ranked_predictions:
    print(prediction)
```

Output:

```text
{'label': 'dog', 'confidence': 0.94}
{'label': 'cat', 'confidence': 0.72}
{'label': 'bird', 'confidence': 0.61}
```

This pattern is used for:

* Top-k classification
* Recommendation ranking
* Search results
* Object detection
* Retrieval-Augmented Generation
* Anomaly-score ranking

---

## 20. Common Sorting Algorithms

Python usually handles sorting automatically. However, understanding sorting algorithms helps you reason about performance and technical interviews.

Common algorithms include:

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort
* Timsort

---

## 21. Bubble Sort

Bubble Sort repeatedly compares adjacent elements and swaps them when they are in the wrong order.

### Example

```text
Initial: [5, 3, 8, 2]

Compare 5 and 3
[3, 5, 8, 2]

Compare 5 and 8
[3, 5, 8, 2]

Compare 8 and 2
[3, 5, 2, 8]

Continue until sorted
[2, 3, 5, 8]
```

### Python Implementation

```python
def bubble_sort(values: list[int]) -> list[int]:
    result = values.copy()
    size = len(result)

    for end in range(size - 1, 0, -1):
        swapped = False

        for index in range(end):
            if result[index] > result[index + 1]:
                result[index], result[index + 1] = (
                    result[index + 1],
                    result[index],
                )
                swapped = True

        if not swapped:
            break

    return result


numbers = [5, 3, 8, 2]

print(bubble_sort(numbers))
```

Output:

```text
[2, 3, 5, 8]
```

### Complexity

| Case        |            Time Complexity |
| ----------- | -------------------------: |
| Best        | `O(n)` with early stopping |
| Average     |                    `O(n²)` |
| Worst       |                    `O(n²)` |
| Extra space |                     `O(1)` |

Bubble Sort is useful for learning but is inefficient for large datasets.

---

## 22. Selection Sort

Selection Sort repeatedly finds the smallest remaining value and moves it into the next sorted position.

```text
[5, 3, 8, 2]
 |
Find smallest value: 2
 |
Swap 2 with first value
 |
[2, 3, 8, 5]
 |
Find next smallest value
 |
[2, 3, 5, 8]
```

### Python Implementation

```python
def selection_sort(values: list[int]) -> list[int]:
    result = values.copy()

    for current_index in range(len(result)):
        minimum_index = current_index

        for candidate_index in range(
            current_index + 1,
            len(result),
        ):
            if result[candidate_index] < result[minimum_index]:
                minimum_index = candidate_index

        result[current_index], result[minimum_index] = (
            result[minimum_index],
            result[current_index],
        )

    return result


numbers = [5, 3, 8, 2]

print(selection_sort(numbers))
```

### Complexity

| Case        | Time Complexity |
| ----------- | --------------: |
| Best        |         `O(n²)` |
| Average     |         `O(n²)` |
| Worst       |         `O(n²)` |
| Extra space |          `O(1)` |

Selection Sort performs relatively few swaps, but it still makes many comparisons.

---

## 23. Insertion Sort

Insertion Sort builds a sorted section one element at a time.

It is similar to arranging playing cards in your hand.

```text
Input: [5, 3, 8, 2]

Sorted section: [5]
Insert 3:       [3, 5]
Insert 8:       [3, 5, 8]
Insert 2:       [2, 3, 5, 8]
```

### Python Implementation

```python
def insertion_sort(values: list[int]) -> list[int]:
    result = values.copy()

    for index in range(1, len(result)):
        current_value = result[index]
        position = index - 1

        while (
            position >= 0
            and result[position] > current_value
        ):
            result[position + 1] = result[position]
            position -= 1

        result[position + 1] = current_value

    return result


numbers = [5, 3, 8, 2]

print(insertion_sort(numbers))
```

### Complexity

| Case        | Time Complexity |
| ----------- | --------------: |
| Best        |          `O(n)` |
| Average     |         `O(n²)` |
| Worst       |         `O(n²)` |
| Extra space |          `O(1)` |

Insertion Sort can perform well on small or nearly sorted collections.

---

## 24. Merge Sort

Merge Sort uses the divide-and-conquer strategy.

It divides the input into smaller parts, sorts them, and merges the results.

### Merge Sort Diagram

```text
              [8, 3, 5, 1]
               /        \
          [8, 3]        [5, 1]
          /   \          /   \
        [8]   [3]      [5]   [1]
          \   /          \   /
          [3, 8]        [1, 5]
               \        /
              [1, 3, 5, 8]
```

### Python Implementation

```python
def merge_sort(values: list[int]) -> list[int]:
    if len(values) <= 1:
        return values.copy()

    middle = len(values) // 2

    left = merge_sort(values[:middle])
    right = merge_sort(values[middle:])

    return merge(left, right)


def merge(left: list[int], right: list[int]) -> list[int]:
    merged: list[int] = []
    left_index = 0
    right_index = 0

    while (
        left_index < len(left)
        and right_index < len(right)
    ):
        if left[left_index] <= right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1

    merged.extend(left[left_index:])
    merged.extend(right[right_index:])

    return merged


numbers = [8, 3, 5, 1]

print(merge_sort(numbers))
```

### Complexity

| Case        | Time Complexity |
| ----------- | --------------: |
| Best        |    `O(n log n)` |
| Average     |    `O(n log n)` |
| Worst       |    `O(n log n)` |
| Extra space |          `O(n)` |

Merge Sort provides predictable performance but requires additional memory.

---

## 25. Quick Sort

Quick Sort selects a pivot and partitions values into groups.

```text
Original values
      |
      v
Choose pivot
      |
      v
Values smaller than pivot
      |
      +---- Pivot ----+
      |
Values greater than pivot
      |
      v
Recursively sort both groups
```

### Simplified Python Implementation

```python
def quick_sort(values: list[int]) -> list[int]:
    if len(values) <= 1:
        return values.copy()

    pivot = values[len(values) // 2]

    smaller = [
        value
        for value in values
        if value < pivot
    ]

    equal = [
        value
        for value in values
        if value == pivot
    ]

    greater = [
        value
        for value in values
        if value > pivot
    ]

    return (
        quick_sort(smaller)
        + equal
        + quick_sort(greater)
    )


numbers = [8, 3, 5, 1, 8]

print(quick_sort(numbers))
```

### Complexity

| Case        |           Time Complexity |
| ----------- | ------------------------: |
| Best        |              `O(n log n)` |
| Average     |              `O(n log n)` |
| Worst       |                   `O(n²)` |
| Extra space | Depends on implementation |

Quick Sort is often fast in practice, but a poor pivot strategy can produce worst-case performance.

---

## 26. Timsort

Python's built-in sorting functions use **Timsort**.

Timsort combines ideas from:

* Merge Sort
* Insertion Sort

It is designed to perform well on real-world data that may already contain partially sorted sections.

Python uses Timsort for:

```python
sorted(values)
```

and:

```python
values.sort()
```

### General Complexity

| Case        | Time Complexity |
| ----------- | --------------: |
| Best        |          `O(n)` |
| Average     |    `O(n log n)` |
| Worst       |    `O(n log n)` |
| Extra space |    Up to `O(n)` |

In production Python code, use built-in sorting instead of implementing a sorting algorithm manually unless the implementation itself is the learning objective.

---

## 27. Complexity Comparison

| Algorithm      |    Best Case | Average Case |   Worst Case | Extra Space | Stable     |
| -------------- | -----------: | -----------: | -----------: | ----------: | ---------- |
| Bubble Sort    |       `O(n)` |      `O(n²)` |      `O(n²)` |      `O(1)` | Yes        |
| Selection Sort |      `O(n²)` |      `O(n²)` |      `O(n²)` |      `O(1)` | Usually no |
| Insertion Sort |       `O(n)` |      `O(n²)` |      `O(n²)` |      `O(1)` | Yes        |
| Merge Sort     | `O(n log n)` | `O(n log n)` | `O(n log n)` |      `O(n)` | Yes        |
| Quick Sort     | `O(n log n)` | `O(n log n)` |      `O(n²)` |      Varies | Usually no |
| Heap Sort      | `O(n log n)` | `O(n log n)` | `O(n log n)` |      `O(1)` | No         |
| Timsort        |       `O(n)` | `O(n log n)` | `O(n log n)` |      `O(n)` | Yes        |

---

## 28. What Does `O(n log n)` Mean?

Sorting cost increases as the number of records increases.

Suppose a dataset contains `n` records.

```text
O(n²)
```

can become expensive very quickly.

For example:

| Number of Records | Approximate `n²` Operations |
| ----------------: | --------------------------: |
|               100 |                      10,000 |
|             1,000 |                   1,000,000 |
|            10,000 |                 100,000,000 |

By comparison, `O(n log n)` grows more slowly and is more suitable for large datasets.

```text
Small dataset
     |
     +--> Simple algorithm may be acceptable
     
Large dataset
     |
     +--> Prefer O(n log n) sorting
     
Very large distributed dataset
     |
     +--> Use database or distributed processing engine
```

---

## 29. Stable Sorting

A sorting algorithm is stable when records with equal keys preserve their original relative order.

Consider:

```python
records = [
    ("Alice", 90),
    ("Bob", 85),
    ("Charlie", 90),
]
```

After sorting by score in descending order:

```text
Alice, 90
Charlie, 90
Bob, 85
```

Alice remains before Charlie because both have the same score and Alice originally appeared first.

Stable sorting is useful for:

* Sorting by multiple columns
* Maintaining chronological order within groups
* Preserving previous rankings
* Producing predictable reports

Python's built-in sorting is stable.

---

## 30. Partial Sorting and Top-k Selection

Sometimes you do not need to sort the entire dataset.

You may only need:

* The largest value
* The smallest value
* The top 10 records
* The five lowest errors

### Use `max()` and `min()`

```python
scores = [82, 95, 71, 88, 90]

print(max(scores))
print(min(scores))
```

### Use `heapq.nlargest()`

```python
from heapq import nlargest

scores = [82, 95, 71, 88, 90]

top_three = nlargest(3, scores)

print(top_three)
```

Output:

```text
[95, 90, 88]
```

### Pandas Top-k Operations

```python
top_products = sales.nlargest(
    3,
    "revenue",
)

print(top_products)
```

For the smallest values:

```python
lowest_products = sales.nsmallest(
    3,
    "revenue",
)
```

Partial selection may be more efficient and communicates the analytical intention more clearly.

---

## 31. Sorting in SQL

SQL uses `ORDER BY` to sort query results.

### Ascending Order

```sql
SELECT
    product_name,
    revenue
FROM sales
ORDER BY revenue ASC;
```

### Descending Order

```sql
SELECT
    product_name,
    revenue
FROM sales
ORDER BY revenue DESC;
```

### Sort by Multiple Columns

```sql
SELECT
    category,
    product_name,
    revenue
FROM sales
ORDER BY
    category ASC,
    revenue DESC;
```

### Select Top Records

```sql
SELECT
    product_name,
    revenue
FROM sales
ORDER BY revenue DESC
LIMIT 10;
```

### SQL Data Workflow

```text
Database table
      |
      v
Filter records with WHERE
      |
      v
Aggregate records with GROUP BY
      |
      v
Sort results with ORDER BY
      |
      v
Select top records with LIMIT
```

---

## 32. End-to-End Data Analysis Example

Suppose you have a CSV file containing sales transactions.

### Dataset Structure

```text
date,product,category,quantity,unit_price
2026-01-02,Laptop,Electronics,2,1000
2026-01-03,Mouse,Accessories,10,25
2026-01-04,Monitor,Electronics,3,300
```

### Analysis Code

```python
from pathlib import Path

import pandas as pd


DATA_PATH = Path("data/raw/sales.csv")


def load_sales(path: Path) -> pd.DataFrame:
    if not path.exists():
        raise FileNotFoundError(
            f"Sales file was not found: {path}"
        )

    return pd.read_csv(path)


def prepare_sales(data: pd.DataFrame) -> pd.DataFrame:
    required_columns = {
        "date",
        "product",
        "category",
        "quantity",
        "unit_price",
    }

    missing_columns = required_columns - set(data.columns)

    if missing_columns:
        raise ValueError(
            f"Missing required columns: {sorted(missing_columns)}"
        )

    result = data.copy()

    result["date"] = pd.to_datetime(
        result["date"],
        errors="coerce",
    )

    result["revenue"] = (
        result["quantity"]
        * result["unit_price"]
    )

    result = result.dropna(
        subset=["date", "product", "revenue"]
    )

    return result


def calculate_product_revenue(
    data: pd.DataFrame,
) -> pd.DataFrame:
    product_revenue = (
        data.groupby(
            "product",
            as_index=False,
        )["revenue"]
        .sum()
        .sort_values(
            "revenue",
            ascending=False,
        )
    )

    return product_revenue


sales = load_sales(DATA_PATH)
clean_sales = prepare_sales(sales)
product_revenue = calculate_product_revenue(clean_sales)

print(product_revenue.head(10))
```

### Workflow

```text
sales.csv
    |
    v
Validate columns
    |
    v
Parse dates
    |
    v
Calculate revenue
    |
    v
Group by product
    |
    v
Sort by total revenue
    |
    v
Display top 10 products
```

---

## 33. Visualization Example

After sorting products by revenue, create a horizontal bar chart.

```python
import matplotlib.pyplot as plt

top_products = product_revenue.head(10)

plt.figure(figsize=(10, 6))

plt.barh(
    top_products["product"],
    top_products["revenue"],
)

plt.xlabel("Revenue")
plt.ylabel("Product")
plt.title("Top 10 Products by Revenue")

plt.gca().invert_yaxis()

plt.tight_layout()
plt.show()
```

Sorting before plotting makes the chart easier to interpret.

```text
Unsorted categories
        |
        v
Hard-to-read chart

Sorted categories
        |
        v
Clear ranking and comparison
```

---

## 34. Common Mistakes

### Mistake 1: Assigning the Result of `.sort()`

Incorrect:

```python
scores = [3, 1, 2]

sorted_scores = scores.sort()

print(sorted_scores)
```

Output:

```text
None
```

Correct:

```python
sorted_scores = sorted(scores)
```

or:

```python
scores.sort()
print(scores)
```

---

### Mistake 2: Accidentally Modifying Raw Data

```python
raw_scores.sort()
```

This changes the original list.

A safer approach is:

```python
sorted_scores = sorted(raw_scores)
```

Preserving raw data makes debugging and reproducibility easier.

---

### Mistake 3: Sorting Numbers Stored as Strings

```python
values = ["100", "20", "3"]

print(sorted(values))
```

Output:

```text
['100', '20', '3']
```

Python compares the characters rather than the numeric values.

Correct:

```python
sorted_values = sorted(
    values,
    key=int,
)

print(sorted_values)
```

Output:

```text
['3', '20', '100']
```

---

### Mistake 4: Ignoring Missing Values

A dataset may contain missing sorting keys.

```python
records = [
    {"name": "Alice", "score": 90},
    {"name": "Bob", "score": None},
    {"name": "Charlie", "score": 85},
]
```

This may cause an error if `None` is compared with numbers.

Handle missing values explicitly:

```python
sorted_records = sorted(
    records,
    key=lambda record: (
        record["score"] is None,
        -(record["score"] or 0),
    ),
)
```

In Pandas:

```python
sorted_data = data.sort_values(
    "score",
    ascending=False,
    na_position="last",
)
```

---

### Mistake 5: Sorting Before Converting Dates

Incorrect:

```python
dates = [
    "12/01/2025",
    "03/02/2026",
    "25/11/2025",
]

print(sorted(dates))
```

The result may not follow chronological order.

Correct:

```python
import pandas as pd

parsed_dates = pd.to_datetime(
    dates,
    dayfirst=True,
)

print(sorted(parsed_dates))
```

---

### Mistake 6: Sorting the Entire Dataset for a Small Top-k Result

Less clear:

```python
top_five = sorted(
    scores,
    reverse=True,
)[:5]
```

For large inputs, consider:

```python
from heapq import nlargest

top_five = nlargest(5, scores)
```

---

### Mistake 7: Sorting Without Explaining the Analytical Purpose

A notebook should not only sort the data.

It should explain why the order matters.

Weak statement:

```text
The products were sorted.
```

Better statement:

```text
Products were sorted by total revenue in descending order so that the
highest-performing products could be identified for inventory planning.
```

---

## 35. Reproducibility Guidelines

A reproducible sorting workflow should clearly define:

* The original data source
* The sorting column
* The sorting direction
* Missing-value handling
* Tie-breaking rules
* Date and numeric conversions
* Whether the original data was modified
* The output file or report location

### Example Function

```python
import pandas as pd


def rank_products(
    data: pd.DataFrame,
    limit: int = 10,
) -> pd.DataFrame:
    required_columns = {
        "product",
        "revenue",
    }

    missing_columns = required_columns - set(data.columns)

    if missing_columns:
        raise ValueError(
            f"Missing columns: {sorted(missing_columns)}"
        )

    ranked = (
        data.dropna(
            subset=["product", "revenue"]
        )
        .sort_values(
            by=["revenue", "product"],
            ascending=[False, True],
        )
        .head(limit)
        .reset_index(drop=True)
    )

    ranked.index += 1
    ranked.index.name = "rank"

    return ranked
```

This function makes the sorting rules explicit and reusable.

---

## 36. Practical Exercise

Use a small CSV dataset containing sales, customers, products, or model predictions.

### Suggested Dataset Columns

```text
transaction_id
date
customer_id
product
category
quantity
unit_price
region
```

### Tasks

1. Load the CSV file with Pandas.
2. Validate the required columns.
3. Convert date columns to datetime values.
4. Convert numeric columns to the correct data types.
5. Calculate a new `revenue` column.
6. Sort transactions by revenue in descending order.
7. Find the top 10 transactions.
8. Group revenue by product.
9. Sort products by total revenue.
10. Create a horizontal bar chart.
11. Write three insights based on the sorted results.
12. Save the cleaned and ranked outputs.

### Suggested Output Files

```text
data/
├── raw/
│   └── sales.csv
├── processed/
│   └── clean_sales.csv
└── outputs/
    └── product_ranking.csv
```

---

## 37. Example Analytical Questions

Use sorting to answer questions such as:

* Which products generate the most revenue?
* Which customers have the highest lifetime value?
* Which regions have the lowest sales?
* Which model predictions have the highest confidence?
* Which records have the largest errors?
* Which features have the highest importance scores?
* Which anomalies should be investigated first?
* Which experiments achieved the best evaluation metrics?
* Which API requests have the highest latency?
* Which documents have the highest retrieval similarity?

---

## 38. Expected Insights

Your notebook should contain written conclusions, not only sorted tables.

Examples:

```text
1. Laptop sales generated the highest total revenue, although the number
   of units sold was lower than for accessories.

2. The top three products contributed 62% of total revenue, indicating
   that business performance depends heavily on a small product group.

3. The North region had high transaction volume but lower average order
   value than the South region.
```

Each insight should reference:

* A measurable result
* A comparison
* A possible interpretation
* A business or analytical implication

---

## 39. Mini Portfolio Artifact

Create a small project named:

```text
sales-ranking-analysis
```

### Suggested Structure

```text
sales-ranking-analysis/
├── data/
│   ├── raw/
│   │   └── sales.csv
│   └── processed/
│       └── clean_sales.csv
├── notebooks/
│   └── 01_sales_ranking_analysis.ipynb
├── outputs/
│   ├── product_ranking.csv
│   └── top_products.png
├── src/
│   └── ranking.py
├── README.md
└── requirements.txt
```

### README Content

Document:

* Project objective
* Dataset source
* Data schema
* Cleaning rules
* Sorting and ranking rules
* How to run the project
* Main findings
* Limitations
* Possible next steps

---

## 40. Completion Checklist

* [ ] I can explain sorting in one or two minutes.
* [ ] I understand ascending and descending order.
* [ ] I can use both `sorted()` and `.sort()`.
* [ ] I understand that `.sort()` returns `None`.
* [ ] I can sort strings, tuples, and dictionaries.
* [ ] I can use a custom sorting key.
* [ ] I can sort a DataFrame with `sort_values()`.
* [ ] I can sort data by multiple columns.
* [ ] I understand stable sorting.
* [ ] I can explain the difference between `O(n²)` and `O(n log n)`.
* [ ] I can identify when top-k selection is better than full sorting.
* [ ] I have created a notebook, script, table, or chart using sorting.
* [ ] I have written at least three insights from sorted data.
* [ ] I have documented at least one assumption, limitation, or follow-up question.

---

## 41. Related Outcome

Use Python, SQL, data libraries, notebooks, and Git to build reproducible data workflows.

Sorting supports this outcome by helping you:

* Rank analytical results
* Prepare ordered reports
* Process time-series observations
* Select top-performing records
* Prioritize errors and anomalies
* Organize model outputs
* Build clear visualizations

---

## 42. Related Project

**Mini Project:** SQL and Python Data Analysis with a Small Sales Database and Pandas Report

Possible sorting tasks include:

* Ranking products by revenue
* Ranking customers by total spending
* Sorting sales by date
* Identifying the top-performing regions
* Selecting the largest transactions
* Ordering categories for charts
* Creating a product-performance leaderboard

---

## 43. Key Takeaways

* Sorting arranges data according to a comparison rule.
* Ascending order places smaller values first.
* Descending order places larger values first.
* `sorted()` returns a new list.
* `.sort()` modifies an existing list and returns `None`.
* The `key` parameter enables custom sorting logic.
* Python's built-in sorting is stable.
* Python uses Timsort for built-in sorting.
* Efficient general-purpose sorting usually has `O(n log n)` complexity.
* Full sorting is not always necessary when only top-k records are needed.
* Sorting is essential for ranking, time-series analysis, reporting, model evaluation, and recommendation systems.
* A strong Data Science notebook explains why the data was sorted and what the resulting order reveals.

---

## 44. Final Summary

**Sorting** is a fundamental concept in Data Structures and Algorithms and a practical tool in AI and Data Science.

It appears whenever data must be ranked, ordered, prioritized, compared, or prepared for sequential analysis.

To make this knowledge practical, turn it into a small artifact such as:

* A Python notebook
* A reusable sorting function
* A SQL ranking query
* A product leaderboard
* A model-confidence report
* A top-k recommendation API
* A sorted visualization
* A documented portfolio project

The goal is not only to know how sorting algorithms work, but also to use sorting correctly, efficiently, and reproducibly in real data workflows.
