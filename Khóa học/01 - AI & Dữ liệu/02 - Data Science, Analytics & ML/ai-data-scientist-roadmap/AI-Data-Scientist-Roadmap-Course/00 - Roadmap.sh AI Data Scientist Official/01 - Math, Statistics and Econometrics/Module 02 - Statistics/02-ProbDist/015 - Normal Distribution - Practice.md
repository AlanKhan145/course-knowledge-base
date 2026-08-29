# 015 - Normal Distribution

**Course:** 01 - Math, Statistics and Econometrics
**Module:** Module 02 - Statistics
**Content Group:** Probability and Sampling
**Roadmap Source:** Statistics / Probability and Sampling
**Lesson Type:** Statistics
**Order in Module:** 015
**Suggested Duration:** 24 minutes

---

## 1. Summary

The **Normal Distribution** is one of the most important probability distributions in statistics, machine learning, data science, and A/B testing.

It describes data that is distributed symmetrically around a central value, where most observations are close to the mean and fewer observations appear far away from the mean.

It is also known as the **Gaussian Distribution** or the **bell curve**.

In AI and Data Science, Normal Distribution helps answer questions such as:

* Are values unusually high or unusually low?
* How far is one data point from the average?
* Can we model measurement errors?
* Can we approximate a sampling distribution?
* Can we build confidence intervals?
* Can we perform hypothesis testing?
* Can we detect outliers?

After this lesson, you should understand how Normal Distribution connects data variation, uncertainty, confidence intervals, statistical testing, model evaluation, and business decision-making.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain **Normal Distribution** in your own words.
* Understand the meaning of mean and standard deviation in a normal curve.
* Recognize when data approximately follows a normal distribution.
* Understand the empirical rule: `68% - 95% - 99.7%`.
* Use z-scores to measure how unusual a value is.
* Connect Normal Distribution to confidence intervals, hypothesis testing, A/B testing, and machine learning.
* Apply the concept in a small notebook, chart, metric, experiment, API, or portfolio artifact.

---

## 3. Core Idea

A random variable follows a **Normal Distribution** when its values form a symmetric bell-shaped curve around the mean.

The basic form is:

$$
X \sim Normal(\mu, \sigma^2)
$$

Where:

| Symbol | Meaning            |
| ------ | ------------------ |
| `X`    | Random variable    |
| `μ`    | Mean               |
| `σ`    | Standard deviation |
| `σ²`   | Variance           |

The mean controls the **center** of the curve.
The standard deviation controls the **spread** of the curve.

---

## 4. Simple Intuition

Imagine you measure the heights of many adults.

Most people are close to the average height.
Some people are shorter than average.
Some people are taller than average.
Very few people are extremely short or extremely tall.

This creates a bell-shaped pattern:

```text
few people     many people      few people
    |              |               |
    v              v               v

        .-''''''''''''-.
      .'                '.
    .'                    '.
---'----------|-----------'---
             mean
```

This is the basic shape of the Normal Distribution.

---

## 5. Markdown-Safe Diagram

```text
Normal Distribution
-------------------

                    mean
                     |
                     v
              .-------------.
            .'               '.
          .'                   '.
        .'                       '.
------.'---------------------------'.------
   low values                  high values


Properties
----------
1. Symmetric around the mean
2. Mean = Median = Mode
3. Most values are near the center
4. Extreme values are rare
5. Spread is controlled by standard deviation
```

---

## 6. Why Normal Distribution Matters

Normal Distribution is important because many real-world and statistical processes approximately follow it.

Examples:

| Area             | Example                                              |
| ---------------- | ---------------------------------------------------- |
| Measurement      | height, weight, sensor noise                         |
| Business         | order value, delivery time, customer score           |
| Machine learning | model errors, residuals, normalized features         |
| A/B testing      | sampling distribution of conversion-rate differences |
| Quality control  | product size, defect variation                       |
| Finance          | simplified model of returns or risk                  |
| Data science     | confidence intervals and hypothesis testing          |

Even when raw data is not normal, many **sample averages** become approximately normal when the sample size is large. This idea comes from the **Central Limit Theorem**.

---

## 7. Formula of the Normal Distribution

The probability density function is:

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$

Where:

| Part | Meaning                        |
| ---- | ------------------------------ |
| `x`  | A value of the random variable |
| `μ`  | Mean                           |
| `σ`  | Standard deviation             |
| `π`  | Pi                             |
| `e`  | Euler's number                 |

You do not need to memorize the formula at first.

The most important idea is:

```text
Normal Distribution describes how values spread around the mean.
```

---

## 8. Mean and Standard Deviation

### Mean

The mean tells us the center of the distribution.

$$
\mu = average
$$

### Standard deviation

The standard deviation tells us how spread out the values are.

$$
\sigma = spread
$$

Small standard deviation:

```text
values are close to the mean
```

Large standard deviation:

```text
values are widely spread out
```

---

## 9. Shape Comparison

```text
Small Standard Deviation
------------------------
            .-''''-.
          .'        '.
--------.'------------'.--------
        values close together


Large Standard Deviation
------------------------
        .----------------.
      .'                  '.
----.'----------------------'.----
    values spread widely
```

---

## 10. The Empirical Rule

For a Normal Distribution:

```text
About 68% of values are within 1 standard deviation of the mean.
About 95% of values are within 2 standard deviations of the mean.
About 99.7% of values are within 3 standard deviations of the mean.
```

This is called the **68-95-99.7 rule**.

```text
Normal Distribution Empirical Rule
----------------------------------

        0.1%   2.1%   13.6%   34.1%   34.1%   13.6%   2.1%   0.1%
         |      |       |       |       |       |       |      |
---------|------|-------|-------|-------|-------|-------|------|---------
       -3σ    -2σ     -1σ      μ      +1σ     +2σ     +3σ

Within ±1σ: about 68%
Within ±2σ: about 95%
Within ±3σ: about 99.7%
```

---

## 11. Example: Test Scores

Suppose exam scores are normally distributed.

```text
Mean score = 70
Standard deviation = 10
```

Then:

| Range       | Interpretation          |
| ----------- | ----------------------- |
| `60 to 80`  | About 68% of students   |
| `50 to 90`  | About 95% of students   |
| `40 to 100` | About 99.7% of students |

So if a student scores `90`, they are:

```text
2 standard deviations above the mean
```

This is a strong score.

---

## 12. Z-Score

A **z-score** tells us how many standard deviations a value is from the mean.

Formula:

$$
z = \frac{x - \mu}{\sigma}
$$

Where:

| Symbol | Meaning            |
| ------ | ------------------ |
| `z`    | z-score            |
| `x`    | observed value     |
| `μ`    | mean               |
| `σ`    | standard deviation |

---

## 13. Z-Score Example

Suppose:

```text
x = 90
mean = 70
standard deviation = 10
```

Then:

$$
z = \frac{90 - 70}{10}
$$

$$
z = 2
$$

Interpretation:

```text
The score 90 is 2 standard deviations above the mean.
```

---

## 14. Z-Score Interpretation

| Z-score  | Meaning                            |
| -------- | ---------------------------------- |
| `z = 0`  | exactly average                    |
| `z = 1`  | 1 standard deviation above average |
| `z = -1` | 1 standard deviation below average |
| `z = 2`  | unusually high                     |
| `z = -2` | unusually low                      |
| `z > 3`  | very rare or possible outlier      |
| `z < -3` | very rare or possible outlier      |

---

## 15. Standard Normal Distribution

The **Standard Normal Distribution** is a special normal distribution with:

```text
mean = 0
standard deviation = 1
```

Written as:

$$
Z \sim Normal(0, 1)
$$

Diagram:

```text
Standard Normal Distribution
----------------------------

                    z = 0
                     |
                     v
              .-------------.
            .'               '.
          .'                   '.
--------.'-----------------------'.--------
       -3     -2     -1     0     1     2     3
```

Any normal distribution can be converted into the standard normal distribution using the z-score formula:

$$
z = \frac{x - \mu}{\sigma}
$$

---

## 16. Normal Distribution in Data Science Workflow

```text
business question
        |
        v
collect sample data
        |
        v
calculate mean and standard deviation
        |
        v
check distribution shape
        |
        v
standardize values with z-score
        |
        v
measure uncertainty
        |
        v
confidence interval / hypothesis test
        |
        v
business decision
```

Example:

```text
Are delivery times unusually slow this week?
        |
        v
collect delivery-time data
        |
        v
compare this week with historical average
        |
        v
calculate z-score
        |
        v
check whether the difference is unusual
        |
        v
decide whether to investigate operations
```

---

## 17. Connection to Sampling

Normal Distribution is deeply connected to sampling.

Even if the original data is not perfectly normal, the distribution of sample means often becomes approximately normal when the sample size is large.

This idea is called the **Central Limit Theorem**.

```text
Raw data may be messy
        |
        v
Take many samples
        |
        v
Calculate sample mean for each sample
        |
        v
Distribution of sample means becomes approximately normal
```

This is why Normal Distribution appears often in:

* confidence intervals
* hypothesis tests
* A/B testing
* model evaluation
* uncertainty estimation

---

## 18. Connection to Confidence Intervals

A confidence interval often uses Normal Distribution to estimate a range of plausible values.

Example:

```text
sample mean = 100
standard error = 5
```

A rough 95% confidence interval is:

$$
100 \pm 1.96 \times 5
$$

$$
100 \pm 9.8
$$

So the interval is:

```text
90.2 to 109.8
```

Interpretation:

```text
The true population mean is plausibly between 90.2 and 109.8.
```

---

## 19. Connection to A/B Testing

In A/B testing, we often compare two groups:

```text
Group A: old version
Group B: new version
```

We may compare:

* conversion rates
* average order values
* click-through rates
* retention rates
* model performance metrics

For large enough samples, the difference between two estimated metrics can often be approximated using a Normal Distribution.

```text
Group A metric
        |
        v
Group B metric
        |
        v
difference between metrics
        |
        v
uncertainty of difference
        |
        v
z-test / confidence interval
        |
        v
rollout decision
```

---

## 20. Connection to Machine Learning

Normal Distribution appears in machine learning in many places.

### 1. Feature scaling

Many models work better when features are standardized:

$$
z = \frac{x - \mu}{\sigma}
$$

This transforms a feature into a scale with:

```text
mean = 0
standard deviation = 1
```

### 2. Model errors

Regression model errors are often analyzed using Normal Distribution.

```text
prediction error = actual value - predicted value
```

If errors are approximately normal and centered around zero, the model may be behaving reasonably.

### 3. Anomaly detection

A value with a very high or very low z-score may be an anomaly.

```text
z > 3 or z < -3
```

This can be used for:

* fraud detection
* sensor monitoring
* system health checks
* unusual customer behavior
* outlier detection

---

## 21. Practical Mini Demo

Suppose a delivery company has historical delivery times:

```text
mean delivery time = 30 minutes
standard deviation = 5 minutes
```

Today, one delivery took:

```text
x = 45 minutes
```

Calculate the z-score:

$$
z = \frac{45 - 30}{5}
$$

$$
z = 3
$$

Interpretation:

```text
45 minutes is 3 standard deviations above the mean.
```

This delivery time is unusually slow and may require investigation.

---

## 22. Python Demo

```python
import numpy as np

np.random.seed(42)

mean = 70
std = 10
n = 1000

scores = np.random.normal(loc=mean, scale=std, size=n)

sample_mean = scores.mean()
sample_std = scores.std()

print("Sample mean:", sample_mean)
print("Sample standard deviation:", sample_std)
```

Example output:

```text
Sample mean: close to 70
Sample standard deviation: close to 10
```

Because the data is simulated from a Normal Distribution, the sample statistics should be close to the original parameters.

---

## 23. Small Dataset Example

Suppose we have customer order values:

```text
Order ID | Order Value
---------|------------
1        | 95
2        | 100
3        | 105
4        | 98
5        | 102
6        | 97
7        | 108
8        | 99
9        | 101
10       | 250
```

Most values are close to `100`.

But `250` is very far from the others.

Using mean, standard deviation, and z-score, we can check whether `250` is an outlier.

---

## 24. Normal Distribution vs Binomial Distribution

| Concept    | Normal Distribution             | Binomial Distribution                    |
| ---------- | ------------------------------- | ---------------------------------------- |
| Type       | Continuous                      | Discrete                                 |
| Output     | Any real value                  | Count of successes                       |
| Shape      | Bell curve                      | Count-based distribution                 |
| Parameters | `μ`, `σ²`                       | `n`, `p`                                 |
| Example    | height, error, score            | clicks, conversions, correct predictions |
| Used for   | averages, uncertainty, z-scores | binary events and success counts         |

---

## 25. When to Use Normal Distribution

Use Normal Distribution when:

* data is continuous
* values are roughly symmetric
* most values are near the mean
* extreme values are rare
* you are analyzing averages
* sample size is large
* you need confidence intervals or hypothesis tests
* you want to standardize features
* you want to detect unusual values

---

## 26. When Not to Use Normal Distribution

Do not blindly assume Normal Distribution when:

* data is strongly skewed
* data has many extreme outliers
* data is binary
* data is count-based with small values
* data has multiple peaks
* sample size is very small
* values are bounded, such as percentages between `0` and `100`
* business behavior changes over time

Examples where Normal Distribution may be a poor fit:

```text
income
website traffic
customer spending
viral content views
insurance claims
startup revenue
waiting time
```

These often have skewed distributions.

---

## 27. Common Mistakes

### Mistake 1: Assuming all data is normal

Bad conclusion:

```text
The histogram looks roughly centered, so the data must be normal.
```

Better conclusion:

```text
The data looks somewhat symmetric, but we should check skewness, outliers, sample size, and business context before assuming normality.
```

---

### Mistake 2: Ignoring outliers

Outliers can strongly affect the mean and standard deviation.

Example:

```text
100, 102, 98, 101, 99, 250
```

The value `250` may distort the average.

---

### Mistake 3: Confusing standard deviation with standard error

| Concept            | Meaning                          |
| ------------------ | -------------------------------- |
| Standard deviation | Spread of individual data points |
| Standard error     | Uncertainty of the sample mean   |

Standard error is:

$$
SE = \frac{\sigma}{\sqrt{n}}
$$

As sample size increases, standard error decreases.

---

### Mistake 4: Confusing statistical significance with business significance

A result may be statistically significant but not useful for the business.

Example:

```text
Average order value increased from $100.00 to $100.20.
```

With a huge sample size, this may be statistically significant.
But the business impact may be too small to justify a product change.

---

### Mistake 5: Ignoring sample bias

Even if the data looks normal, the sample may still be biased.

Examples:

* only mobile users
* only weekend traffic
* only returning customers
* only users from one country
* only successful transactions
* missing failed cases

A normal-looking sample does not guarantee a valid conclusion.

---

## 28. Practical Exercise

Create a small simulated dataset.

### Task

Simulate `1,000` customer satisfaction scores.

Assume:

```text
mean = 75
standard deviation = 8
```

Then:

1. Generate the data.
2. Calculate the sample mean.
3. Calculate the sample standard deviation.
4. Find the z-score of a score of `90`.
5. Write a business interpretation.

### Python starter

```python
import numpy as np

np.random.seed(42)

mean = 75
std = 8
n = 1000

scores = np.random.normal(loc=mean, scale=std, size=n)

sample_mean = scores.mean()
sample_std = scores.std()

x = 90
z_score = (x - sample_mean) / sample_std

print("Sample mean:", sample_mean)
print("Sample standard deviation:", sample_std)
print("Z-score of 90:", z_score)
```

---

## 29. Business Interpretation Template

Use this template when writing conclusions:

```text
In a sample of [n] observations, the average value is [mean].

The standard deviation is [standard deviation], which means typical values vary by about [standard deviation] units from the mean.

The value [x] has a z-score of [z], meaning it is [z] standard deviations away from the average.

Before making a business decision, we should check sample size, sample bias, outliers, distribution shape, and business impact.
```

---

## 30. Portfolio Artifact Ideas

You can turn this lesson into:

* A notebook that simulates Normal Distribution.
* A histogram showing a bell curve.
* A z-score calculator.
* An outlier detection notebook.
* A confidence interval demo.
* An A/B testing analysis.
* A feature scaling demo for machine learning.
* A dashboard showing mean, standard deviation, and outliers.
* A small API that returns z-score and anomaly status.
* A portfolio note explaining uncertainty in business metrics.

---

## 31. Completion Checklist

* [ ] I can explain **Normal Distribution** in 1-2 minutes.
* [ ] I understand the meaning of `μ`, `σ`, and `σ²`.
* [ ] I know why the normal curve is symmetric.
* [ ] I can explain the `68-95-99.7` rule.
* [ ] I can calculate and interpret a z-score.
* [ ] I understand how Normal Distribution relates to confidence intervals.
* [ ] I understand how Normal Distribution relates to hypothesis testing.
* [ ] I can connect Normal Distribution to A/B testing.
* [ ] I can connect Normal Distribution to machine learning.
* [ ] I know at least one case where Normal Distribution should not be used blindly.
* [ ] I have created a notebook, chart, query, model, API, or portfolio note for this topic.

---

## 32. Related Outcome

Use probability, sampling, descriptive statistics, hypothesis testing, and A/B testing to make decisions from data.

---

## 33. Related Project

**Mini project:** A/B Test Conversion Rate

Build a small experiment analysis that includes:

* conversion metric
* control group
* treatment group
* sample size
* uncertainty estimation
* confidence interval
* hypothesis test
* rollout recommendation

Although conversion itself is binary and often modeled with Binomial Distribution, Normal Distribution is useful when approximating sampling distributions and comparing metrics at scale.

---

## 34. Final Summary

The **Normal Distribution** is a central concept in statistics and data science.

It helps describe continuous data that clusters around an average value and becomes less common as values move farther from the mean.

The most important idea is:

```text
Normal Distribution = bell-shaped model of variation around the mean
```

It is especially useful for:

* z-scores
* outlier detection
* confidence intervals
* hypothesis testing
* A/B testing
* feature scaling
* model error analysis
* uncertainty estimation
* business decision-making

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
