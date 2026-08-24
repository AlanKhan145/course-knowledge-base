# 014 - Binomial Distribution

**Course:** 01 - Math, Statistics and Econometrics
**Module:** Module 02 - Statistics
**Content Group:** Probability and Sampling
**Roadmap Source:** Statistics / Probability and Sampling
**Lesson Type:** Statistics
**Order in Module:** 014
**Suggested Duration:** 24 minutes

---

## 1. Summary

The **Binomial Distribution** describes the number of successes in a fixed number of independent trials, where each trial has only two possible outcomes:

* **Success** = `1`
* **Failure** = `0`

It is a direct extension of the **Bernoulli Distribution**.

A Bernoulli Distribution models **one binary trial**.
A Binomial Distribution models **many repeated binary trials**.

In AI and Data Science, Binomial Distribution helps answer questions such as:

* How many users converted out of `n` visitors?
* How many emails were classified as spam?
* How many model predictions were correct?
* How many customers clicked an ad?
* How many patients tested positive in a sample?

After this lesson, you should understand how Binomial Distribution connects probability, sampling, uncertainty, A/B testing, classification metrics, and business decision-making.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain **Binomial Distribution** in your own words.
* Identify when a real-world problem follows a binomial setup.
* Understand the role of `n`, `p`, and `X`.
* Calculate the probability of getting exactly `k` successes.
* Connect Binomial Distribution to A/B testing, conversion rate, classification accuracy, and sampling uncertainty.
* Apply the concept in a small notebook, chart, metric, experiment, API, or portfolio artifact.

---

## 3. Core Idea

A random variable follows a **Binomial Distribution** when it counts the number of successes in repeated independent Bernoulli trials.

### Basic form

```text
X ~ Binomial(n, p)
```

Where:

| Symbol  | Meaning                              |
| ------- | ------------------------------------ |
| `X`     | Number of successes                  |
| `n`     | Number of trials                     |
| `p`     | Probability of success in each trial |
| `1 - p` | Probability of failure               |
| `k`     | A specific number of successes       |

---

## 4. Simple Intuition

Imagine you show an online ad to `100` users.

Each user either:

```text
clicks     -> success
doesn't click -> failure
```

If the probability of clicking is `p = 0.05`, then the number of clicks out of `100` users can be modeled as:

```text
X ~ Binomial(100, 0.05)
```

This means:

```text
X = number of users who click the ad
```

---

## 5. Markdown-Safe Diagram

```text
One Bernoulli Trial
-------------------
User sees ad
     |
     v
+-------------------+
| Click?            |
+-------------------+
   |             |
   v             v
Success = 1   Failure = 0


Many Bernoulli Trials
---------------------
User 1 -> click / no click
User 2 -> click / no click
User 3 -> click / no click
...
User n -> click / no click

Count total successes
        |
        v
Binomial Distribution
```

---

## 6. Relationship Between Bernoulli and Binomial

```text
Bernoulli Distribution
= one binary trial

Binomial Distribution
= sum of many Bernoulli trials
```

Mathematically:

$$
X = X_1 + X_2 + X_3 + \dots + X_n
$$

Where each:

$$
X_i \sim Bernoulli(p)
$$

Then:

$$
X \sim Binomial(n, p)
$$

---

## 7. Binomial Probability Formula

The probability of getting exactly `k` successes in `n` trials is:

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

Where:

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

### Meaning of each part

| Part           | Meaning                                                |
| -------------- | ------------------------------------------------------ |
| $\binom{n}{k}$ | Number of ways to choose `k` successes from `n` trials |
| $p^k$          | Probability of `k` successes                           |
| $(1-p)^{n-k}$  | Probability of the remaining failures                  |

---

## 8. Example Calculation

Suppose a website has a conversion probability of `p = 0.10`.

You observe `n = 5` visitors.

What is the probability that exactly `2` users convert?

```text
n = 5
p = 0.10
k = 2
```

Using the formula:

$$
P(X = 2) = \binom{5}{2}(0.10)^2(0.90)^3
$$

Step by step:

$$
\binom{5}{2} = 10
$$

$$
P(X = 2) = 10 \times 0.01 \times 0.729
$$

$$
P(X = 2) = 0.0729
$$

So the probability is:

```text
7.29%
```

---

## 9. Expected Value and Variance

For a Binomial Distribution:

$$
X \sim Binomial(n, p)
$$

### Expected value

$$
E(X) = np
$$

This means the average expected number of successes is:

```text
number of trials × probability of success
```

### Variance

$$
Var(X) = np(1-p)
$$

### Standard deviation

$$
SD(X) = \sqrt{np(1-p)}
$$

---

## 10. Example: Expected Conversions

If an app has:

```text
n = 1,000 users
p = 0.08 conversion probability
```

Then:

$$
E(X) = np = 1000 \times 0.08 = 80
$$

So we expect around:

```text
80 conversions
```

The variance is:

$$
Var(X) = np(1-p)
$$

$$
Var(X) = 1000 \times 0.08 \times 0.92 = 73.6
$$

The standard deviation is:

$$
SD(X) = \sqrt{73.6} \approx 8.58
$$

So the number of conversions will often fluctuate around:

```text
80 ± 9 conversions
```

---

## 11. When to Use Binomial Distribution

Use Binomial Distribution when all of the following conditions are true:

| Condition              | Explanation                                  |
| ---------------------- | -------------------------------------------- |
| Fixed number of trials | `n` is known in advance                      |
| Binary outcome         | Each trial has success or failure            |
| Independent trials     | One trial does not affect another            |
| Same probability       | Probability of success `p` stays constant    |
| Count successes        | The variable counts how many successes occur |

---

## 12. Real AI and Data Science Examples

| Scenario          | Trial          | Success               | `n`                   | `p`              |
| ----------------- | -------------- | --------------------- | --------------------- | ---------------- |
| A/B testing       | One visitor    | User converts         | Number of visitors    | Conversion rate  |
| Email filtering   | One email      | Email is spam         | Number of emails      | Spam probability |
| Model evaluation  | One prediction | Prediction is correct | Number of predictions | Accuracy         |
| Ad click-through  | One impression | User clicks           | Number of impressions | CTR              |
| Medical screening | One patient    | Test is positive      | Number of patients    | Positive rate    |

---

## 13. Workflow in Data Science

```text
business question
        |
        v
binary event definition
        |
        v
collect sample
        |
        v
count successes
        |
        v
estimate probability
        |
        v
measure uncertainty
        |
        v
statistical test / confidence interval
        |
        v
business decision
```

Example:

```text
Did the new landing page improve conversion?
        |
        v
success = user purchased
        |
        v
n = number of visitors
        |
        v
X = number of purchases
        |
        v
conversion rate = X / n
        |
        v
compare old page vs new page
        |
        v
roll out, reject, or continue experiment
```

---

## 14. Connection to A/B Testing

Binomial Distribution is one of the foundations of A/B testing.

In an A/B test:

```text
Group A: old version
Group B: new version
```

Each user either converts or does not convert.

```text
conversion = success
no conversion = failure
```

For each group:

```text
X_A ~ Binomial(n_A, p_A)
X_B ~ Binomial(n_B, p_B)
```

The main question is:

```text
Is p_B meaningfully greater than p_A?
```

This connects Binomial Distribution to:

* conversion rate
* confidence interval
* hypothesis testing
* statistical significance
* business significance
* rollout decisions

---

## 15. Connection to Machine Learning

Binomial Distribution appears in machine learning when outcomes are binary.

Examples:

### Binary classification

```text
prediction is correct   -> success
prediction is incorrect -> failure
```

If a model makes `n` predictions and has accuracy `p`, then:

```text
Number of correct predictions ~ Binomial(n, p)
```

### Model monitoring

You can track:

```text
number of failed predictions
number of successful API responses
number of fraud cases detected
number of positive labels
number of user clicks
```

These are often binomial-style metrics.

---

## 16. Practical Mini Demo

Suppose a model predicts whether an email is spam.

You test it on `200` emails.

```text
n = 200
correct predictions = 170
incorrect predictions = 30
```

The estimated accuracy is:

$$
\hat{p} = \frac{170}{200} = 0.85
$$

So:

```text
estimated accuracy = 85%
```

But you should not only report:

```text
accuracy = 85%
```

You should also think about:

```text
sample size
uncertainty
class imbalance
business cost of errors
false positives
false negatives
```

---

## 17. Python Demo

```python
import math

n = 10
p = 0.3
k = 4

probability = math.comb(n, k) * (p ** k) * ((1 - p) ** (n - k))

print(probability)
```

Expected output:

```text
0.200120949
```

This means the probability of getting exactly `4` successes in `10` trials, when the success probability is `0.3`, is about:

```text
20.01%
```

---

## 18. Small Dataset Example

```text
User ID | Converted
--------|----------
1       | 1
2       | 0
3       | 0
4       | 1
5       | 0
6       | 1
7       | 0
8       | 0
9       | 1
10      | 0
```

Here:

```text
n = 10
successes = 4
failures = 6
```

Estimated conversion rate:

$$
\hat{p} = \frac{4}{10} = 0.40
$$

So the sample conversion rate is:

```text
40%
```

However, because the sample size is very small, this estimate has high uncertainty.

---

## 19. Common Mistakes

### Mistake 1: Ignoring sample size

Bad conclusion:

```text
4 out of 10 users converted.
Conversion rate is 40%.
The product is successful.
```

Better conclusion:

```text
The sample conversion rate is 40%, but the sample size is only 10 users.
More data is needed before making a rollout decision.
```

---

### Mistake 2: Confusing statistical significance with business significance

A result can be statistically significant but not useful for the business.

Example:

```text
Old conversion rate: 10.00%
New conversion rate: 10.05%
```

This may be statistically detectable with a huge sample size, but the business impact may be too small to matter.

---

### Mistake 3: Assuming independence when trials affect each other

Binomial Distribution assumes independent trials.

This may fail when:

* users influence each other
* duplicate users exist
* traffic source changes
* seasonality affects behavior
* bots are included
* experiment groups are not randomized properly

---

### Mistake 4: Assuming `p` is constant

The success probability may change over time.

For example:

```text
morning users may behave differently from evening users
mobile users may convert differently from desktop users
new users may behave differently from returning users
```

If `p` changes across groups, a simple Binomial model may be too simplistic.

---

## 20. Binomial vs Bernoulli

| Concept          | Bernoulli Distribution | Binomial Distribution             |
| ---------------- | ---------------------- | --------------------------------- |
| Number of trials | One trial              | Multiple trials                   |
| Output           | `0` or `1`             | Number of successes               |
| Example          | One user clicks or not | Number of clicks from 1,000 users |
| Parameter        | `p`                    | `n`, `p`                          |
| Use case         | Single binary event    | Count of binary successes         |

---

## 21. Binomial vs Normal Approximation

When `n` is large, Binomial Distribution can sometimes be approximated by a Normal Distribution.

Rule of thumb:

```text
np >= 10
n(1-p) >= 10
```

Then:

$$
X \sim Binomial(n, p)
$$

can be approximated by:

$$
X \approx Normal(np, np(1-p))
$$

This is useful for:

* confidence intervals
* hypothesis testing
* A/B testing
* large-scale analytics

---

## 22. Practical Exercise

Create a small simulated dataset.

### Task

Simulate `1,000` users visiting a landing page.

Assume:

```text
true conversion probability = 0.12
```

Then:

1. Generate binary conversion outcomes.
2. Count the number of conversions.
3. Estimate the conversion rate.
4. Compute the expected number of conversions.
5. Write a business conclusion.

### Example Python starter

```python
import numpy as np

np.random.seed(42)

n = 1000
p = 0.12

conversions = np.random.binomial(n=1, p=p, size=n)

total_conversions = conversions.sum()
estimated_rate = total_conversions / n

print("Total conversions:", total_conversions)
print("Estimated conversion rate:", estimated_rate)
```

---

## 23. Business Interpretation Template

Use this template when writing conclusions:

```text
In a sample of [n] users, [X] users converted.

The estimated conversion rate is [X / n].

Because the sample size is [small / moderate / large], the result has [high / moderate / low] uncertainty.

Before making a business decision, we should consider sample bias, confidence intervals, experiment design, and the expected business impact.
```

---

## 24. Portfolio Artifact Ideas

You can turn this lesson into:

* A notebook that simulates conversion rates.
* A chart showing Binomial Distribution for different values of `p`.
* An A/B testing analysis.
* A conversion-rate dashboard.
* A model accuracy uncertainty report.
* A small API that calculates binomial probabilities.
* A portfolio note explaining statistical uncertainty in product metrics.

---

## 25. Completion Checklist

* [ ] I can explain **Binomial Distribution** in 1-2 minutes.
* [ ] I understand the meaning of `n`, `p`, and `X`.
* [ ] I can calculate the probability of exactly `k` successes.
* [ ] I know how Binomial Distribution relates to Bernoulli Distribution.
* [ ] I can connect Binomial Distribution to A/B testing.
* [ ] I can connect Binomial Distribution to binary classification metrics.
* [ ] I understand why sample size matters.
* [ ] I can explain at least one caveat or assumption.
* [ ] I have created a notebook, chart, query, model, API, or portfolio note for this topic.

---

## 26. Related Outcome

Use probability, sampling, descriptive statistics, hypothesis testing, and A/B testing to make decisions from data.

---

## 27. Related Project

**Mini project:** A/B Test Conversion Rate

Build a small experiment analysis that includes:

* conversion metric
* control group
* treatment group
* sample size
* binomial reasoning
* confidence interval
* hypothesis test
* rollout recommendation

---

## 28. Final Summary

The **Binomial Distribution** is a key probability distribution for AI and Data Science.

It helps model the number of successes in repeated binary events, such as conversions, clicks, correct predictions, detected fraud cases, or positive test results.

The most important idea is:

```text
Binomial Distribution = count of successes across many Bernoulli trials
```

It is especially useful for:

* A/B testing
* conversion analysis
* binary classification
* model evaluation
* product analytics
* business decision-making under uncertainty

To master this topic, do not only memorize the formula.
Turn it into a notebook, chart, experiment, dashboard, API, or portfolio artifact.

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
