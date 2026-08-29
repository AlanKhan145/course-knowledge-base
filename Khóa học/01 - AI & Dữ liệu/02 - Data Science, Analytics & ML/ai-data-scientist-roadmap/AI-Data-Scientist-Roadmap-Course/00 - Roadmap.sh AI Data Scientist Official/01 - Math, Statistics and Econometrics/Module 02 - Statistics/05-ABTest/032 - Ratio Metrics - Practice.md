# 032 — Ratio Metrics

**Course:** 01 — Math, Statistics, and Econometrics
**Module:** Module 02 — Statistics
**Content Group:** Testing and Experiments
**Roadmap Source:** Statistics / Testing and Experiments
**Lesson Type:** Statistics
**Order in Module:** 032
**Suggested Duration:** 24 minutes

---

## 1. Summary

A **ratio metric** is a metric created by dividing one aggregated quantity by another aggregated quantity.

The general form is:

```text
Ratio metric = Total numerator / Total denominator
```

Or, using indexed notation:

```text
R = sum(Y_i) / sum(X_i)
```

Where:

* `Y_i` is the numerator contribution from observation `i`.
* `X_i` is the denominator contribution from observation `i`.
* `N` is the number of independent experimental units.

Common ratio metrics include:

| Metric                |            Numerator |          Denominator |
| --------------------- | -------------------: | -------------------: |
| Click-through rate    |               Clicks |          Impressions |
| Conversion rate       |          Conversions |             Sessions |
| Revenue per session   |              Revenue |             Sessions |
| Revenue per user      |              Revenue |                Users |
| Average order value   |              Revenue |               Orders |
| Defect rate           |      Defective items |       Produced items |
| Video completion rate | Completed watch time | Available watch time |

Ratio metrics are widely used in:

* Product analytics
* Digital advertising
* Recommendation systems
* E-commerce
* Machine learning evaluation
* A/B testing
* Business dashboards

The point estimate is usually easy to calculate. The difficult part is estimating its uncertainty correctly.

When one user generates multiple events, such as impressions, sessions, or clicks, those events may be correlated. Treating every event as independent can underestimate the standard error and produce incorrect experiment conclusions.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain what a ratio metric is.
* Identify the numerator and denominator of a business metric.
* Distinguish a ratio of sums from a mean of individual ratios.
* Explain why event-level observations may not be independent.
* Use the Delta Method to estimate variance.
* Calculate a confidence interval for a ratio metric.
* Compare ratio metrics between A/B test groups.
* Translate statistical results into a business recommendation.
* Implement a reusable Python function for ratio metrics.

---

## 3. Position in the Data Workflow

Ratio metric analysis usually belongs to the **experiment evaluation** stage.

```text
Business question
        |
        v
Define the randomization unit
        |
        v
Define numerator and denominator
        |
        v
Collect data at the correct unit
        |
        v
Calculate the ratio metric
        |
        v
Estimate variance and uncertainty
        |
        v
Run a statistical comparison
        |
        v
Evaluate business impact
        |
        v
Make a rollout decision
```

A compact version is:

```text
question
  -> sample
  -> metric
  -> uncertainty
  -> statistical test
  -> business decision
```

---

## 4. Core Definition

Suppose every user contributes:

* `X_i`: number of impressions
* `Y_i`: number of clicks

The overall click-through rate is:

```text
CTR = Total clicks / Total impressions
```

Using indexed notation:

```text
R = sum(Y_i) / sum(X_i)
```

The same metric can also be written as:

```text
R = mean(Y) / mean(X)
```

This works because:

```text
mean(Y) / mean(X)

= [sum(Y_i) / N] / [sum(X_i) / N]

= sum(Y_i) / sum(X_i)
```

The value is a **ratio of aggregated totals**.

Users who generate more denominator events contribute more weight to the result.

---

## 5. Ratio of Sums vs. Mean of User-Level Ratios

These two calculations look similar, but they answer different questions.

### 5.1 Ratio of Sums

The ratio of sums is:

```text
R_ratio = sum(Y_i) / sum(X_i)
```

For click-through rate:

```text
Overall CTR = Total clicks / Total impressions
```

This calculation gives more weight to users who generate more impressions.

---

### 5.2 Mean of User-Level Ratios

The mean of user-level ratios is:

```text
R_mean = [1 / N] * sum(Y_i / X_i)
```

For click-through rate:

```text
Average user CTR
= Sum of every user's CTR / Number of users
```

This calculation gives every user equal weight.

---

### 5.3 Example

Consider two users:

| User | Impressions | Clicks | Individual CTR |
| ---- | ----------: | -----: | -------------: |
| A    |           1 |      1 |           100% |
| B    |         100 |      9 |             9% |

#### Ratio of Sums

Total clicks:

```text
1 + 9 = 10
```

Total impressions:

```text
1 + 100 = 101
```

Therefore:

```text
R_ratio = 10 / 101
        = 0.099
        = 9.9%
```

The ratio-of-sums CTR is approximately **9.9%**.

#### Mean of User-Level Ratios

User A's CTR:

```text
1 / 1 = 1.00 = 100%
```

User B's CTR:

```text
9 / 100 = 0.09 = 9%
```

Average user-level CTR:

```text
R_mean = (1.00 + 0.09) / 2
       = 0.545
       = 54.5%
```

The mean user-level CTR is **54.5%**.

---

### 5.4 Why Are the Results Different?

The ratio of sums weights users by their number of impressions.

```text
User A contributes:   1 impression
User B contributes: 100 impressions
```

User B therefore has much more influence on the overall ratio.

The mean of user-level ratios gives both users equal weight.

```text
User A weight: 50%
User B weight: 50%
```

The two metrics answer different questions:

| Metric         | Question                                             |
| -------------- | ---------------------------------------------------- |
| Ratio of sums  | What percentage of all impressions generated clicks? |
| Mean of ratios | What is the CTR of the average user?                 |

Neither metric is always correct.

The correct choice depends on the business question.

For a platform-wide click-through rate, the ratio of sums is usually more appropriate.

For a question about the experience of the average user, the mean of user-level ratios may be more appropriate.

---

## 6. Why Ordinary Proportion Variance Can Be Wrong

A common variance formula for a proportion is:

```text
Variance = p * (1 - p) / n
```

This formula assumes that every observation is an independent Bernoulli trial.

That assumption may not hold for product data.

For example, one user may:

* Generate 20 impressions
* Click several times
* Visit several sessions
* Behave consistently across events

Events generated by the same user may be correlated.

```text
User behavior
    |
    +--> Number of impressions
    |
    +--> Number of clicks
    |
    +--> Number of sessions
    |
    +--> Purchase probability
```

A highly engaged user may generate both:

* More impressions
* More clicks

Therefore, the numerator and denominator may be correlated.

If every impression is treated as an independent observation, the analysis may ignore the user-level clustering.

This can produce:

```text
Estimated standard error < Actual standard error
```

Consequences include:

* Confidence intervals that are too narrow
* P-values that are too small
* Too many false-positive experiment results
* Incorrect rollout decisions

---

## 7. Independent Unit and Randomization Unit

The analysis unit should usually match the experiment's randomization unit.

| Randomization unit | Recommended data aggregation |
| ------------------ | ---------------------------- |
| User               | One row per user             |
| Account            | One row per account          |
| Household          | One row per household        |
| Store              | One row per store            |
| Country            | One row per country          |

Suppose treatment is assigned at the user level.

Each user should contribute one aggregated pair:

```text
X_i = Total denominator events from user i
Y_i = Total numerator events from user i
```

For click-through rate:

```text
X_i = Total impressions from user i
Y_i = Total clicks from user i
```

Example dataset:

| user_id | experiment_group | impressions | clicks |
| ------- | ---------------- | ----------: | -----: |
| 1       | control          |           5 |      1 |
| 2       | control          |          12 |      0 |
| 3       | treatment        |           8 |      2 |
| 4       | treatment        |           3 |      0 |

The number of independent observations is the number of users, not the number of impressions.

---

## 8. The Delta Method

The **Delta Method** uses a first-order Taylor approximation to estimate the variance of a nonlinear statistic.

For a ratio metric:

```text
R = mean(Y) / mean(X)
```

The approximate variance is:

```text
Var(R)
≈ [Var(Y) + R^2 * Var(X) - 2 * R * Cov(X, Y)]
  / [N * mean(X)^2]
```

Where:

* `R` is the estimated ratio.
* `Var(Y)` is the variance of the numerator contribution.
* `Var(X)` is the variance of the denominator contribution.
* `Cov(X, Y)` is the covariance between numerator and denominator.
* `mean(X)` is the mean denominator per independent unit.
* `N` is the number of independent units.

The standard error is:

```text
SE(R) = sqrt(Var(R))
```

An approximate 95% confidence interval is:

```text
Lower bound = R - 1.96 * SE(R)

Upper bound = R + 1.96 * SE(R)
```

---

## 9. Understanding the Covariance Term

The covariance term is:

```text
Cov(X, Y)
```

It measures whether users with larger denominator values also tend to have larger numerator values.

For example:

* Users with more impressions may also generate more clicks.
* Users with more sessions may also generate more purchases.
* Customers with more orders may also generate more revenue.

The Delta Method includes:

```text
-2 * R * Cov(X, Y)
```

Ignoring this term may produce an incorrect variance estimate.

The complete expression is:

```text
Var(Y)
+ R^2 * Var(X)
- 2 * R * Cov(X, Y)
```

---

## 10. Linearized Form of the Delta Method

The Delta Method can also be implemented using a linearized variable.

For each user, define:

```text
Z_i = Y_i - R * X_i
```

Then estimate the variance as:

```text
Var(R) ≈ Var(Z) / [N * mean(X)^2]
```

The standard error becomes:

```text
SE(R) ≈ SD(Z) / [sqrt(N) * mean(X)]
```

This works because:

```text
Var(Y - R * X)

= Var(Y)
  + R^2 * Var(X)
  - 2 * R * Cov(X, Y)
```

The linearized implementation is often easier to read, test, and maintain.

---

## 11. Python Implementation

The following function calculates:

* Ratio estimate
* Variance
* Standard error
* 95% confidence interval
* Total numerator
* Total denominator
* Sample size

```python
from dataclasses import dataclass

import numpy as np
import pandas as pd


@dataclass
class RatioEstimate:
    estimate: float
    variance: float
    standard_error: float
    ci_lower: float
    ci_upper: float
    numerator_total: float
    denominator_total: float
    sample_size: int


def estimate_ratio_metric(
    numerator: pd.Series,
    denominator: pd.Series,
) -> RatioEstimate:
    """
    Estimate a ratio-of-sums metric using the Delta Method.

    Each row must represent one independent experimental unit,
    such as a user, account, household, or store.

    Parameters
    ----------
    numerator:
        Numerator contribution from each independent unit.

    denominator:
        Denominator contribution from each independent unit.

    Returns
    -------
    RatioEstimate
        Ratio estimate, variance, standard error,
        confidence interval, totals, and sample size.
    """

    if len(numerator) != len(denominator):
        raise ValueError(
            "Numerator and denominator must have the same length."
        )

    data = pd.DataFrame(
        {
            "numerator": pd.to_numeric(
                numerator,
                errors="coerce",
            ),
            "denominator": pd.to_numeric(
                denominator,
                errors="coerce",
            ),
        }
    ).dropna()

    if len(data) < 2:
        raise ValueError(
            "At least two valid independent observations are required."
        )

    if (data["denominator"] < 0).any():
        raise ValueError(
            "Denominator contributions must not be negative."
        )

    numerator_total = data["numerator"].sum()
    denominator_total = data["denominator"].sum()

    if denominator_total <= 0:
        raise ValueError(
            "The total denominator must be greater than zero."
        )

    sample_size = len(data)

    ratio = numerator_total / denominator_total

    mean_denominator = data["denominator"].mean()

    linearized = (
        data["numerator"]
        - ratio * data["denominator"]
    )

    variance = (
        linearized.var(ddof=1)
        / (
            sample_size
            * mean_denominator**2
        )
    )

    variance = max(float(variance), 0.0)

    standard_error = np.sqrt(variance)

    margin_of_error = 1.96 * standard_error

    ci_lower = ratio - margin_of_error
    ci_upper = ratio + margin_of_error

    return RatioEstimate(
        estimate=float(ratio),
        variance=variance,
        standard_error=float(standard_error),
        ci_lower=float(ci_lower),
        ci_upper=float(ci_upper),
        numerator_total=float(numerator_total),
        denominator_total=float(denominator_total),
        sample_size=sample_size,
    )
```

---

## 12. Simulating User-Level CTR Data

The following example creates data for 10,000 users.

Each user has:

* A different number of impressions
* A different underlying click probability
* A click count related to the number of impressions

```python
import numpy as np
import pandas as pd


rng = np.random.default_rng(seed=42)

n_users = 10_000

# Each user generates a different number of impressions.
impressions = (
    rng.poisson(
        lam=5,
        size=n_users,
    )
    + 1
)

# Each user has a different underlying CTR.
individual_ctr = rng.beta(
    a=2,
    b=20,
    size=n_users,
)

# Clicks depend on both impressions and user-level CTR.
clicks = rng.binomial(
    n=impressions,
    p=individual_ctr,
)

df = pd.DataFrame(
    {
        "user_id": np.arange(n_users),
        "impressions": impressions,
        "clicks": clicks,
    }
)

result = estimate_ratio_metric(
    numerator=df["clicks"],
    denominator=df["impressions"],
)

print("=== RATIO METRIC RESULT ===")
print(f"Users: {result.sample_size:,}")
print(
    f"Total impressions: "
    f"{result.denominator_total:,.0f}"
)
print(
    f"Total clicks: "
    f"{result.numerator_total:,.0f}"
)
print(
    f"CTR: "
    f"{result.estimate:.4f}"
)
print(
    f"CTR percentage: "
    f"{result.estimate * 100:.2f}%"
)
print(
    f"Standard error: "
    f"{result.standard_error:.6f}"
)
print(
    "95% confidence interval: "
    f"[{result.ci_lower * 100:.2f}%, "
    f"{result.ci_upper * 100:.2f}%]"
)
```

Example output format:

```text
=== RATIO METRIC RESULT ===
Users: 10,000
Total impressions: 59,942
Total clicks: 5,481
CTR: 0.0914
CTR percentage: 9.14%
Standard error: 0.0012
95% confidence interval: [8.91%, 9.37%]
```

The exact values may differ slightly depending on the NumPy version and random-number implementation.

---

## 13. Direct Variance-Covariance Implementation

The same variance can be calculated directly.

```python
def estimate_ratio_metric_direct(
    numerator: pd.Series,
    denominator: pd.Series,
) -> tuple[float, float]:
    """
    Estimate a ratio metric and its Delta Method standard error
    using the direct variance-covariance formula.
    """

    data = pd.DataFrame(
        {
            "x": pd.to_numeric(
                denominator,
                errors="coerce",
            ),
            "y": pd.to_numeric(
                numerator,
                errors="coerce",
            ),
        }
    ).dropna()

    if len(data) < 2:
        raise ValueError(
            "At least two valid observations are required."
        )

    if (data["x"] < 0).any():
        raise ValueError(
            "Denominator contributions must not be negative."
        )

    if data["x"].sum() <= 0:
        raise ValueError(
            "The total denominator must be positive."
        )

    n = len(data)

    ratio = data["y"].sum() / data["x"].sum()

    mean_x = data["x"].mean()

    var_y = data["y"].var(ddof=1)
    var_x = data["x"].var(ddof=1)
    cov_xy = data["x"].cov(data["y"])

    variance = (
        var_y
        + ratio**2 * var_x
        - 2 * ratio * cov_xy
    ) / (
        n * mean_x**2
    )

    variance = max(float(variance), 0.0)

    standard_error = np.sqrt(variance)

    return float(ratio), float(standard_error)
```

The direct and linearized versions should produce approximately the same result.

```python
linearized_result = estimate_ratio_metric(
    numerator=df["clicks"],
    denominator=df["impressions"],
)

direct_ratio, direct_se = estimate_ratio_metric_direct(
    numerator=df["clicks"],
    denominator=df["impressions"],
)

print(
    "Linearized ratio:",
    linearized_result.estimate,
)

print(
    "Direct ratio:",
    direct_ratio,
)

print(
    "Linearized standard error:",
    linearized_result.standard_error,
)

print(
    "Direct standard error:",
    direct_se,
)
```

---

## 14. Comparing Two A/B Test Groups

Suppose an experiment contains:

* Group A: Control
* Group B: Treatment

Let:

```text
R_A = Ratio metric for control

R_B = Ratio metric for treatment
```

The absolute treatment effect is:

```text
Absolute effect = R_B - R_A
```

Assuming the two groups are independent, the standard error of the difference is:

```text
SE_difference
= sqrt(SE_A^2 + SE_B^2)
```

The z-statistic is:

```text
z = Absolute effect / SE_difference
```

The 95% confidence interval is:

```text
Lower bound
= Absolute effect - 1.96 * SE_difference

Upper bound
= Absolute effect + 1.96 * SE_difference
```

---

## 15. A/B Test Comparison Function

```python
from dataclasses import dataclass
from math import erf, sqrt

import numpy as np
import pandas as pd


@dataclass
class RatioComparison:
    control: RatioEstimate
    treatment: RatioEstimate
    absolute_effect: float
    relative_effect: float
    effect_standard_error: float
    ci_lower: float
    ci_upper: float
    z_statistic: float
    p_value: float


def standard_normal_cdf(value: float) -> float:
    """
    Cumulative distribution function of the
    standard normal distribution.
    """

    return 0.5 * (
        1.0
        + erf(
            value / sqrt(2.0)
        )
    )


def compare_ratio_metrics(
    control_numerator: pd.Series,
    control_denominator: pd.Series,
    treatment_numerator: pd.Series,
    treatment_denominator: pd.Series,
) -> RatioComparison:
    """
    Compare two independent ratio-of-sums metrics.
    """

    control = estimate_ratio_metric(
        numerator=control_numerator,
        denominator=control_denominator,
    )

    treatment = estimate_ratio_metric(
        numerator=treatment_numerator,
        denominator=treatment_denominator,
    )

    absolute_effect = (
        treatment.estimate
        - control.estimate
    )

    if control.estimate == 0:
        relative_effect = np.nan
    else:
        relative_effect = (
            absolute_effect
            / control.estimate
        )

    effect_standard_error = np.sqrt(
        control.standard_error**2
        + treatment.standard_error**2
    )

    if effect_standard_error == 0:
        z_statistic = np.nan
        p_value = np.nan
    else:
        z_statistic = (
            absolute_effect
            / effect_standard_error
        )

        p_value = 2 * (
            1
            - standard_normal_cdf(
                abs(z_statistic)
            )
        )

    margin_of_error = (
        1.96
        * effect_standard_error
    )

    ci_lower = (
        absolute_effect
        - margin_of_error
    )

    ci_upper = (
        absolute_effect
        + margin_of_error
    )

    return RatioComparison(
        control=control,
        treatment=treatment,
        absolute_effect=float(absolute_effect),
        relative_effect=float(relative_effect),
        effect_standard_error=float(
            effect_standard_error
        ),
        ci_lower=float(ci_lower),
        ci_upper=float(ci_upper),
        z_statistic=float(z_statistic),
        p_value=float(p_value),
    )
```

---

## 16. Simulating an A/B Test

```python
import numpy as np
import pandas as pd


rng = np.random.default_rng(seed=42)

n_users_per_group = 20_000


def simulate_group(
    n_users: int,
    average_impressions: float,
    alpha: float,
    beta: float,
) -> pd.DataFrame:
    """
    Simulate user-level CTR data.
    """

    impressions = (
        rng.poisson(
            lam=average_impressions,
            size=n_users,
        )
        + 1
    )

    user_ctr = rng.beta(
        a=alpha,
        b=beta,
        size=n_users,
    )

    clicks = rng.binomial(
        n=impressions,
        p=user_ctr,
    )

    return pd.DataFrame(
        {
            "impressions": impressions,
            "clicks": clicks,
        }
    )


control_df = simulate_group(
    n_users=n_users_per_group,
    average_impressions=5,
    alpha=2.0,
    beta=20.0,
)

treatment_df = simulate_group(
    n_users=n_users_per_group,
    average_impressions=5,
    alpha=2.1,
    beta=20.0,
)

comparison = compare_ratio_metrics(
    control_numerator=control_df["clicks"],
    control_denominator=control_df["impressions"],
    treatment_numerator=treatment_df["clicks"],
    treatment_denominator=treatment_df["impressions"],
)

print("=== A/B RATIO METRIC COMPARISON ===")

print(
    f"Control CTR: "
    f"{comparison.control.estimate * 100:.3f}%"
)

print(
    f"Treatment CTR: "
    f"{comparison.treatment.estimate * 100:.3f}%"
)

print(
    f"Absolute effect: "
    f"{comparison.absolute_effect * 100:.3f} "
    "percentage points"
)

print(
    f"Relative effect: "
    f"{comparison.relative_effect * 100:.2f}%"
)

print(
    "95% confidence interval: "
    f"[{comparison.ci_lower * 100:.3f}, "
    f"{comparison.ci_upper * 100:.3f}] "
    "percentage points"
)

print(
    f"z-statistic: "
    f"{comparison.z_statistic:.3f}"
)

print(
    f"p-value: "
    f"{comparison.p_value:.4f}"
)
```

---

## 17. Absolute Effect vs. Relative Effect

These two quantities must be reported separately.

Suppose:

```text
Control CTR = 10.0%

Treatment CTR = 10.5%
```

### Absolute Effect

```text
Absolute effect
= Treatment CTR - Control CTR

= 10.5% - 10.0%

= 0.5 percentage points
```

### Relative Effect

```text
Relative effect
= Absolute effect / Control CTR

= 0.5% / 10.0%

= 0.05

= 5%
```

Correct wording:

> CTR increased by 0.5 percentage points, equivalent to a 5% relative increase.

Incorrect wording:

> CTR increased by 5 percentage points.

A 5-percentage-point increase would mean:

```text
10% -> 15%
```

That is much larger than:

```text
10% -> 10.5%
```

---

## 18. Interpreting Experiment Results

A good experiment conclusion should include four parts.

### 18.1 Point Estimate

State what happened in the observed sample.

Example:

> The treatment increased CTR by 0.35 percentage points.

---

### 18.2 Uncertainty

State the confidence interval.

Example:

> The 95% confidence interval ranged from 0.08 to 0.62 percentage points.

---

### 18.3 Statistical Evidence

Explain whether zero is inside the confidence interval.

Example:

> The confidence interval excludes zero, providing evidence of a positive treatment effect at the 5% significance level.

When the confidence interval includes zero:

> The observed result is compatible with both a negative and a positive effect. The experiment does not provide sufficient evidence of improvement.

---

### 18.4 Business Impact

Translate the result into business units.

Example:

> At the current traffic level, the estimated lift would generate approximately 18,000 additional clicks per month.

The final decision should also consider:

* Revenue impact
* Engineering cost
* Operational complexity
* User experience
* Risk
* Guardrail metrics
* Long-term effects

---

## 19. Statistical Significance vs. Business Significance

A statistically significant result is not automatically valuable.

Suppose an experiment produces:

```text
Absolute effect = 0.01 percentage points

p-value < 0.001
```

The result may be statistically significant because the sample is extremely large.

However, the business impact may be too small to justify implementation.

A rollout decision should consider:

```text
Estimated effect
+ confidence interval
+ traffic volume
+ expected revenue
- engineering cost
- operational risk
- negative guardrail effects
= business decision
```

Statistical significance answers:

> Is the observed effect unlikely under the null hypothesis?

Business significance answers:

> Is the effect large enough to matter?

---

## 20. Common Mistakes

### 20.1 Treating Every Event as Independent

Incorrect workflow:

```text
One row per impression
    ->
Ordinary Bernoulli standard error
```

This ignores correlation among impressions from the same user.

Better workflow:

```text
Aggregate clicks and impressions per user
    ->
Apply the user-level Delta Method
```

---

### 20.2 Confusing Ratio of Sums with Mean of Ratios

These metrics are different:

```text
sum(Y_i) / sum(X_i)
```

and:

```text
[1 / N] * sum(Y_i / X_i)
```

Define the business question before selecting the metric.

---

### 20.3 Using the Wrong Sample Size

If users are randomized, the sample size should usually be:

```text
N = Number of users
```

It should not automatically be:

```text
N = Number of impressions
```

Using the number of impressions may overstate the amount of independent information in the dataset.

---

### 20.4 Ignoring Covariance

The numerator and denominator are usually related.

The Delta Method variance contains:

```text
Var(Y)
+ R^2 * Var(X)
- 2 * R * Cov(X, Y)
```

Removing the covariance term can substantially change the estimated standard error.

---

### 20.5 Using a Zero Total Denominator

The ratio is undefined when:

```text
sum(X_i) = 0
```

The implementation should validate that:

```text
Total denominator > 0
```

Individual units may have a zero denominator, depending on the metric definition, but the total denominator must remain positive.

---

### 20.6 Dividing by Zero for User-Level Ratios

The mean-of-ratios metric contains:

```text
Y_i / X_i
```

This is undefined when:

```text
X_i = 0
```

Before using the mean of individual ratios, define how zero-denominator users should be handled.

Possible policies include:

* Exclude them from the metric
* Assign a value based on a documented business rule
* Redefine the metric
* Use a ratio of sums instead

The policy must be defined before analyzing experiment results.

---

### 20.7 Using the Delta Method with an Unstable Denominator

The Delta Method is an approximation.

It may become unreliable when:

* The sample size is very small.
* The mean denominator is close to zero.
* The denominator is extremely skewed.
* A few users dominate the totals.
* The data contain severe outliers.
* Cluster sizes vary dramatically.

Possible alternatives include:

* Cluster bootstrap
* Robust standard errors
* Metric transformation
* Winsorization based on pre-defined rules
* Longer experiment duration
* Regression adjustment
* CUPED or CUPAC

---

### 20.8 Removing Outliers After Seeing the Result

Deleting high-activity users after observing the treatment effect can introduce bias.

Outlier rules should be:

* Defined before examining the result
* Applied identically to all groups
* Supported by business or data-quality logic
* Included in a sensitivity analysis

---

### 20.9 Ignoring Multiple Comparisons

Testing many metrics increases the probability of false discoveries.

Possible solutions include:

* Select one primary metric.
* Define a small set of guardrail metrics.
* Apply Holm correction.
* Apply Bonferroni correction.
* Control the false discovery rate.
* Clearly label exploratory analyses.

---

### 20.10 Ignoring Sample-Ratio Mismatch

Before evaluating metric effects, check whether traffic allocation matches the experiment design.

For a planned 50/50 experiment:

```text
Expected allocation:
50% control
50% treatment
```

If the observed allocation is very different, investigate before interpreting results.

Sample-ratio mismatch may indicate:

* Broken randomization
* Logging failures
* Eligibility differences
* Bot traffic
* Missing events
* Treatment-triggering bugs

---

### 20.11 Mixing Statistical and Business Conclusions

Incorrect conclusion:

> The result is statistically significant, so the feature should be launched.

Better conclusion:

> The result is statistically significant, but the expected business benefit must still be compared with implementation cost, risk, and guardrail metrics.

---

## 21. Delta Method vs. Bootstrap

### 21.1 Delta Method

Advantages:

* Fast
* Scalable
* Easy to use in dashboards
* Produces analytical standard errors
* Suitable for large experiments
* Easy to automate

Limitations:

* Relies on an approximation
* May be inaccurate for small samples
* May be inaccurate for extreme skew
* Requires the correct independent unit
* Requires a stable denominator

---

### 21.2 Cluster Bootstrap

A cluster bootstrap resamples independent units, such as users, with replacement.

```text
Original user-level dataset
        |
        v
Sample users with replacement
        |
        v
Recalculate the ratio metric
        |
        v
Store the estimate
        |
        v
Repeat many times
        |
        v
Build a bootstrap distribution
        |
        v
Estimate standard error and confidence interval
```

Advantages:

* Requires fewer analytical formulas
* Useful for validating the Delta Method
* Can handle complex metrics
* Preserves user-level clustering when implemented correctly

Limitations:

* Computationally expensive
* Requires many repeated calculations
* Can still be unstable with very small samples
* Must resample the correct cluster unit

A practical workflow is:

```text
Use the Delta Method for production reporting.

Validate the implementation with a cluster bootstrap
during metric development.
```

---

## 22. Bootstrap Implementation

```python
def bootstrap_ratio_metric(
    numerator: pd.Series,
    denominator: pd.Series,
    n_bootstrap: int = 2_000,
    seed: int = 42,
) -> dict[str, float]:
    """
    Estimate a ratio metric using a cluster-level bootstrap.

    Each row must represent one independent unit.
    """

    data = pd.DataFrame(
        {
            "numerator": pd.to_numeric(
                numerator,
                errors="coerce",
            ),
            "denominator": pd.to_numeric(
                denominator,
                errors="coerce",
            ),
        }
    ).dropna()

    if len(data) < 2:
        raise ValueError(
            "At least two observations are required."
        )

    if (data["denominator"] < 0).any():
        raise ValueError(
            "Denominator contributions must not be negative."
        )

    if data["denominator"].sum() <= 0:
        raise ValueError(
            "The total denominator must be positive."
        )

    if n_bootstrap < 100:
        raise ValueError(
            "Use at least 100 bootstrap samples."
        )

    rng = np.random.default_rng(seed)

    n = len(data)

    numerator_values = (
        data["numerator"]
        .to_numpy()
    )

    denominator_values = (
        data["denominator"]
        .to_numpy()
    )

    bootstrap_estimates = np.empty(
        n_bootstrap
    )

    for index in range(n_bootstrap):
        sampled_indices = rng.integers(
            low=0,
            high=n,
            size=n,
        )

        sampled_numerator = (
            numerator_values[
                sampled_indices
            ].sum()
        )

        sampled_denominator = (
            denominator_values[
                sampled_indices
            ].sum()
        )

        bootstrap_estimates[index] = (
            sampled_numerator
            / sampled_denominator
        )

    original_estimate = (
        numerator_values.sum()
        / denominator_values.sum()
    )

    bootstrap_standard_error = (
        bootstrap_estimates.std(
            ddof=1
        )
    )

    ci_lower = np.quantile(
        bootstrap_estimates,
        0.025,
    )

    ci_upper = np.quantile(
        bootstrap_estimates,
        0.975,
    )

    return {
        "estimate": float(
            original_estimate
        ),
        "bootstrap_standard_error": float(
            bootstrap_standard_error
        ),
        "ci_lower": float(ci_lower),
        "ci_upper": float(ci_upper),
    }
```

---

## 23. Comparing Delta Method and Bootstrap Results

```python
delta_result = estimate_ratio_metric(
    numerator=df["clicks"],
    denominator=df["impressions"],
)

bootstrap_result = bootstrap_ratio_metric(
    numerator=df["clicks"],
    denominator=df["impressions"],
    n_bootstrap=2_000,
    seed=42,
)

print("=== DELTA METHOD ===")

print(
    f"Estimate: "
    f"{delta_result.estimate:.6f}"
)

print(
    f"Standard error: "
    f"{delta_result.standard_error:.6f}"
)

print(
    "95% confidence interval: "
    f"[{delta_result.ci_lower:.6f}, "
    f"{delta_result.ci_upper:.6f}]"
)

print()

print("=== CLUSTER BOOTSTRAP ===")

print(
    f"Estimate: "
    f"{bootstrap_result['estimate']:.6f}"
)

print(
    f"Standard error: "
    f"{bootstrap_result['bootstrap_standard_error']:.6f}"
)

print(
    "95% confidence interval: "
    f"[{bootstrap_result['ci_lower']:.6f}, "
    f"{bootstrap_result['ci_upper']:.6f}]"
)
```

The two methods do not need to return identical results.

However, they should usually be reasonably close when:

* The sample size is large.
* The denominator is stable.
* There are no extreme outliers.
* The independent unit is correctly defined.
* The Delta Method approximation is appropriate.

A large disagreement should trigger further investigation.

---

## 24. Data Validation Before Analysis

Before calculating a ratio metric, validate the dataset.

### 24.1 Missing Values

```python
df.isna().sum()
```

Check whether numerator or denominator values are missing.

---

### 24.2 Duplicate Units

For a user-level experiment:

```python
duplicate_users = df["user_id"].duplicated().sum()

print(
    "Duplicate users:",
    duplicate_users,
)
```

Each randomized user should normally appear once after aggregation.

---

### 24.3 Invalid Negative Values

```python
invalid_denominator = (
    df["impressions"] < 0
).sum()

invalid_numerator = (
    df["clicks"] < 0
).sum()
```

Counts should not normally be negative.

---

### 24.4 Numerator Greater Than Denominator

For CTR:

```python
invalid_rows = df[
    df["clicks"]
    > df["impressions"]
]
```

A user should not have more clicks than impressions unless the event definition explicitly allows repeated clicks per impression.

---

### 24.5 Extreme Users

```python
df["impressions"].describe(
    percentiles=[
        0.50,
        0.90,
        0.95,
        0.99,
        0.999,
    ]
)
```

Check whether a small number of users dominate the denominator.

---

### 24.6 Group Allocation

```python
group_counts = (
    df["experiment_group"]
    .value_counts()
)

group_percentages = (
    df["experiment_group"]
    .value_counts(
        normalize=True
    )
)

print(group_counts)
print(group_percentages)
```

Investigate unexpected traffic imbalance before evaluating treatment effects.

---

## 25. Practical Exercise

### Task

Build a notebook that evaluates an A/B test using click-through rate.

Each row should represent one randomized user.

Required columns:

```text
user_id
experiment_group
impressions
clicks
```

### Steps

1. Generate or load user-level data.
2. Check missing values.
3. Check duplicate users.
4. Check negative values.
5. Validate that clicks do not exceed impressions.
6. Inspect the denominator distribution.
7. Check experiment group allocation.
8. Calculate the control CTR.
9. Calculate the treatment CTR.
10. Estimate Delta Method standard errors.
11. Calculate the absolute effect.
12. Calculate the relative effect.
13. Construct a 95% confidence interval.
14. Calculate a p-value.
15. Validate the result with a user-level bootstrap.
16. Write a business recommendation.

---

## 26. Required Notebook Output

Your notebook should contain the following sections:

```text
1. Business Question
2. Metric Definition
3. Randomization Unit
4. Dataset Description
5. Data Validation
6. Exploratory Analysis
7. Control Metric
8. Treatment Metric
9. Delta Method Variance
10. Absolute Effect
11. Relative Effect
12. Confidence Interval
13. Hypothesis Test
14. Bootstrap Validation
15. Business Impact
16. Final Recommendation
17. Assumptions and Limitations
```

---

## 27. Suggested Business Conclusion Template

> The treatment group's CTR was **[treatment CTR]**, compared with **[control CTR]** in the control group. This represents an absolute change of **[absolute effect] percentage points** and a relative change of **[relative effect]%**. The 95% confidence interval for the absolute effect was **[lower bound, upper bound]**. Because the interval **[includes or excludes] zero**, the experiment **[does or does not]** provide sufficient evidence of a treatment effect at the 5% significance level. Based on the expected monthly impact, implementation cost, operational risk, and guardrail metrics, the recommended decision is to **[roll out, continue testing, or stop the treatment]**.

---

## 28. Example Business Interpretation

Suppose the results are:

```text
Control CTR: 9.10%

Treatment CTR: 9.45%

Absolute effect: 0.35 percentage points

Relative effect: 3.85%

95% confidence interval:
[0.08, 0.62] percentage points

p-value: 0.011
```

A suitable conclusion is:

> The treatment increased CTR from 9.10% to 9.45%. This corresponds to an absolute increase of 0.35 percentage points and a relative increase of approximately 3.85%. The 95% confidence interval ranges from 0.08 to 0.62 percentage points and excludes zero, providing evidence of a positive treatment effect. Before rollout, the expected increase in clicks should be compared with implementation cost and any changes in downstream conversion, revenue, latency, and user satisfaction.

---

## 29. Portfolio Artifact

Turn this lesson into a small portfolio project.

Suggested project structure:

```text
ratio_metrics_ab_test/
|
|-- data/
|   `-- experiment_data.csv
|
|-- notebooks/
|   `-- ratio_metric_analysis.ipynb
|
|-- src/
|   |-- ratio_metrics.py
|   `-- validation.py
|
|-- tests/
|   `-- test_ratio_metrics.py
|
|-- reports/
|   `-- experiment_summary.md
|
|-- requirements.txt
`-- README.md
```

Possible deliverables:

* Reusable Python package
* Jupyter notebook
* SQL query
* Experiment dashboard
* Streamlit application
* FastAPI metric service
* Unit tests
* Business experiment report

---

## 30. Suggested Unit Tests

```python
import numpy as np
import pandas as pd


def test_ratio_estimate_matches_total_ratio():
    numerator = pd.Series([1, 2, 3])
    denominator = pd.Series([10, 20, 30])

    result = estimate_ratio_metric(
        numerator=numerator,
        denominator=denominator,
    )

    expected = 6 / 60

    assert np.isclose(
        result.estimate,
        expected,
    )


def test_rejects_zero_total_denominator():
    numerator = pd.Series([0, 0, 0])
    denominator = pd.Series([0, 0, 0])

    try:
        estimate_ratio_metric(
            numerator=numerator,
            denominator=denominator,
        )
    except ValueError:
        return

    raise AssertionError(
        "Expected ValueError."
    )


def test_rejects_negative_denominator():
    numerator = pd.Series([1, 2, 3])
    denominator = pd.Series([10, -1, 30])

    try:
        estimate_ratio_metric(
            numerator=numerator,
            denominator=denominator,
        )
    except ValueError:
        return

    raise AssertionError(
        "Expected ValueError."
    )


def test_standard_error_is_non_negative():
    numerator = pd.Series([1, 0, 2, 1, 3])
    denominator = pd.Series([5, 3, 8, 4, 10])

    result = estimate_ratio_metric(
        numerator=numerator,
        denominator=denominator,
    )

    assert result.standard_error >= 0


def test_confidence_interval_contains_estimate():
    numerator = pd.Series([1, 0, 2, 1, 3])
    denominator = pd.Series([5, 3, 8, 4, 10])

    result = estimate_ratio_metric(
        numerator=numerator,
        denominator=denominator,
    )

    assert (
        result.ci_lower
        <= result.estimate
        <= result.ci_upper
    )
```

---

## 31. Completion Checklist

* [ ] I can explain a ratio metric in one or two minutes.
* [ ] I can identify the numerator and denominator.
* [ ] I can distinguish a ratio of sums from a mean of ratios.
* [ ] I understand why user-level clustering matters.
* [ ] I know that the sample size should match the independent unit.
* [ ] I can explain the covariance term.
* [ ] I can calculate a Delta Method variance.
* [ ] I can calculate a standard error.
* [ ] I can construct a 95% confidence interval.
* [ ] I can compare two A/B test groups.
* [ ] I can report absolute and relative effects correctly.
* [ ] I can validate the result with a cluster bootstrap.
* [ ] I can identify at least one assumption or limitation.
* [ ] I can translate the result into a business recommendation.
* [ ] I have created a notebook, script, report, API, or dashboard for this lesson.

---

## 32. Related Outcome

Use probability, sampling, descriptive statistics, hypothesis testing, and A/B testing to make reliable decisions from data.

---

## 33. Related Mini Project

### A/B Test Conversion and Engagement Analysis

Build a portfolio project containing:

* User-level experimental data
* Click-through rate or conversion-rate metric
* Ratio-of-sums calculation
* Delta Method variance
* Cluster bootstrap validation
* Hypothesis test
* Confidence interval
* Absolute lift
* Relative lift
* Guardrail metrics
* Business impact estimate
* Rollout recommendation

---

## 34. Final Summary

A ratio metric has the form:

```text
Ratio metric
= Total numerator / Total denominator
```

Or:

```text
R = sum(Y_i) / sum(X_i)
```

The main challenge is not calculating the ratio itself.

The main challenge is estimating its uncertainty correctly.

When one user generates multiple correlated events, treating every event as independent can underestimate uncertainty and increase the false-positive rate.

The Delta Method accounts for:

```text
Variance of the numerator

Variance of the denominator

Covariance between numerator and denominator

Number of independent units

Average denominator per independent unit
```

The practical rules are:

1. Define the business question first.
2. Define the numerator and denominator clearly.
3. Match the analysis unit to the randomization unit.
4. Distinguish a ratio of sums from a mean of ratios.
5. Include numerator-denominator covariance.
6. Report confidence intervals, not only point estimates.
7. Report absolute and relative effects separately.
8. Separate statistical significance from business significance.
9. Check sample-ratio mismatch before interpreting the experiment.
10. Validate important implementations with a cluster bootstrap.

Ratio metrics become valuable portfolio evidence when converted into:

* A tested Python function
* A Jupyter notebook
* An A/B testing report
* A dashboard
* A reusable analytics library
* A FastAPI service
* A documented experiment decision

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
