# 030 - Minimum Detectable Effect

**Course:** 01 - Math, Statistics and Econometrics
**Module:** Module 02 - Statistics
**Content Group:** Testing and Experiments
**Roadmap Source:** Statistics / Testing and Experiments
**Lesson Type:** Statistics
**Order in Module:** 030
**Suggested Duration:** 24 minutes

---

## 1. Summary

The **Minimum Detectable Effect**, commonly abbreviated as **MDE**, is the smallest real difference that an experiment is designed to detect reliably.

In an A/B test, MDE answers the following question:

> What is the smallest improvement between the control group and the treatment group that this experiment can reliably detect?

For example, suppose the current conversion rate is **10%**.

An experiment with an absolute MDE of **1 percentage point** is designed to detect an increase from:

```text
10% → 11%
```

However, the same experiment may not reliably detect a smaller increase such as:

```text
10% → 10.3%
```

MDE connects several important experiment concepts:

* Sample size
* Statistical significance
* Statistical power
* Metric variance
* Experiment duration
* Business impact

The main relationship is:

$$
\text{Smaller MDE} \Rightarrow \text{Larger required sample size}
$$

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain Minimum Detectable Effect in your own words.
* Distinguish between absolute and relative MDE.
* Understand how MDE relates to sample size.
* Understand the roles of significance level and statistical power.
* Estimate the required sample size for an A/B test.
* Calculate the approximate MDE of an experiment.
* Interpret MDE using business language.
* Apply MDE to product, data science, and machine learning experiments.

---

## 3. Why MDE Matters

An experiment cannot reliably detect every possible difference.

Small effects are difficult to distinguish from random variation. Detecting a smaller effect usually requires:

* More observations
* More users
* More events
* More experiment time
* A metric with lower variance

MDE helps answer an important planning question:

> Is the experiment large enough to detect an effect that matters to the business?

A typical experiment-planning workflow is:

```text
Business objective
        |
        v
Choose a primary metric
        |
        v
Estimate the baseline value
        |
        v
Define a meaningful MDE
        |
        v
Choose significance level and power
        |
        v
Calculate the required sample size
        |
        v
Estimate the experiment duration
        |
        v
Run the experiment
        |
        v
Analyze uncertainty
        |
        v
Make a business decision
```

Without an MDE, an experiment may collect data without having enough statistical power to answer the original question.

---

## 4. Core Definition

Suppose an experiment compares two groups:

* **Group A:** Control group
* **Group B:** Treatment group

Let:

* $\mu_A$ be the expected metric value of the control group.
* $\mu_B$ be the expected metric value of the treatment group.
* $\delta$ be the true treatment effect.

The treatment effect is:

$$
\delta = \mu_B - \mu_A
$$

The Minimum Detectable Effect is the smallest value of $\delta$ that an experiment has a sufficiently high probability of detecting.

In simple terms:

$$
\text{MDE}
==========

\text{the smallest effect detectable at significance level } \alpha
\text{ and power } 1-\beta
$$

Common experiment settings are:

$$
\alpha = 0.05
$$

and:

$$
1-\beta = 0.80
$$

This means:

* The significance level is **5%**.
* The statistical power is **80%**.

---

## 5. Important Statistical Concepts

### 5.1 Significance Level

The significance level is represented by:

$$
\alpha
$$

It controls the probability of a **Type I error**.

A Type I error occurs when an experiment concludes that a treatment has an effect even though no real effect exists.

A common value is:

$$
\alpha = 0.05
$$

This means that the experiment accepts a maximum false-positive probability of approximately 5%, under the assumptions of the statistical test.

A smaller significance level requires stronger evidence and usually requires more data.

---

### 5.2 Statistical Power

Statistical power is defined as:

$$
\text{Power} = 1-\beta
$$

It represents the probability that the experiment detects an effect when the effect actually exists.

A common target is:

$$
1-\beta = 0.80
$$

This means that the experiment has an 80% probability of detecting an effect equal to the planned MDE, assuming the model assumptions are correct.

Higher power usually requires a larger sample size.

---

### 5.3 Type II Error

A Type II error occurs when the experiment fails to detect a real effect.

Its probability is represented by:

$$
\beta
$$

Therefore:

$$
\text{Power} = 1-\beta
$$

For example, if power is 80%, then:

$$
\beta = 1-0.80 = 0.20
$$

The experiment has a 20% probability of missing an effect equal to the planned MDE.

---

### 5.4 Metric Variance

For a continuous metric, variance is written as:

$$
\sigma^2
$$

The standard deviation is:

$$
\sigma
$$

Examples of high-variance metrics include:

* Revenue per user
* Purchase value
* Session duration
* Number of messages sent
* Time spent in an application
* Number of products purchased

Higher variance makes it more difficult to detect small effects.

For a fixed sample size:

$$
\sigma^2 \uparrow
\Rightarrow
\text{MDE} \uparrow
$$

---

### 5.5 Sample Size

Sample size is commonly represented by:

$$
n
$$

A larger sample reduces the standard error and allows an experiment to detect smaller effects.

The approximate relationship is:

$$
\text{MDE} \propto \frac{1}{\sqrt{n}}
$$

This relationship has an important practical consequence:

> Reducing the MDE by half usually requires approximately four times the sample size.

```text
Original MDE
     |
     | Divide MDE by 2
     v
New MDE
     |
     | Multiply sample size by about 4
     v
Required sample size
```

---

## 6. Absolute MDE and Relative MDE

MDE can be expressed as either an absolute difference or a relative difference.

### 6.1 Absolute MDE

Suppose the baseline conversion rate is:

$$
p_A = 0.10
$$

The experiment is designed to detect a treatment conversion rate of:

$$
p_B = 0.11
$$

The absolute MDE is:

$$
\text{Absolute MDE} = p_B-p_A
$$

Substituting the values:

$$
\text{Absolute MDE} = 0.11-0.10 = 0.01
$$

Therefore, the absolute MDE is:

```text
1 percentage point
```

---

### 6.2 Relative MDE

Relative MDE compares the absolute change with the baseline value.

$$
\text{Relative MDE}
===================

\frac{p_B-p_A}{p_A}
$$

Using the previous example:

$$
\text{Relative MDE}
===================

\frac{0.11-0.10}{0.10}
$$

$$
\text{Relative MDE}
===================

# \frac{0.01}{0.10}

# 0.10

10%
$$

Therefore:

```text
Baseline rate: 10%
Treatment rate: 11%

Absolute MDE: 1 percentage point
Relative MDE: 10%
```

These two expressions must not be confused.

An increase from 10% to 11% is:

* An increase of **1 percentage point**
* A **10% relative increase**

---

## 7. Relationship Between MDE and Sample Size

For two equally sized independent groups and a continuous metric, an approximate sample-size formula is:

$$
n
\approx
\frac{
2\left(z_{1-\alpha/2}+z_{1-\beta}\right)^2\sigma^2
}{
\delta^2
}
$$

Where:

* $n$ is the required sample size per group.
* $\alpha$ is the significance level.
* $1-\beta$ is statistical power.
* $\sigma$ is the standard deviation of the metric.
* $\delta$ is the target absolute MDE.
* $z_{1-\alpha/2}$ is the critical value for the significance level.
* $z_{1-\beta}$ is the critical value for statistical power.

For a two-sided test with:

$$
\alpha = 0.05
$$

the approximate critical value is:

$$
z_{1-\alpha/2} = 1.96
$$

For statistical power of 80%:

$$
1-\beta = 0.80
$$

the approximate critical value is:

$$
z_{1-\beta} = 0.84
$$

Therefore, the formula becomes:

$$
n
\approx
\frac{
2(1.96+0.84)^2\sigma^2
}{
\delta^2
}
$$

---

## 8. MDE Formula for a Continuous Metric

The sample-size formula can be rearranged to estimate MDE:

$$
\text{MDE}
\approx
\left(z_{1-\alpha/2}+z_{1-\beta}\right)
\sqrt{\frac{2\sigma^2}{n}}
$$

Because $\sqrt{\sigma^2}=\sigma$, the formula can also be written as:

$$
\text{MDE}
\approx
\left(z_{1-\alpha/2}+z_{1-\beta}\right)
\sigma
\sqrt{\frac{2}{n}}
$$

This formula shows that:

$$
\sigma \uparrow
\Rightarrow
\text{MDE} \uparrow
$$

and:

$$
n \uparrow
\Rightarrow
\text{MDE} \downarrow
$$

### Assumptions

This approximation assumes:

* The two groups are independent.
* Both groups have approximately equal sample sizes.
* The metric variance is similar in both groups.
* The experiment uses a two-sided test.
* The sample mean is approximately normally distributed.

---

## 9. MDE for a Binary Metric

A binary metric has only two possible values:

```text
1 = Event occurred
0 = Event did not occur
```

Examples include:

* User converted or did not convert
* User clicked or did not click
* Customer churned or did not churn
* User completed onboarding or did not complete onboarding
* Email was opened or was not opened
* Prediction was correct or incorrect

For a binary metric with probability $p$, the variance is:

$$
\sigma^2 = p(1-p)
$$

An approximate MDE formula is:

$$
\text{MDE}
\approx
\left(z_{1-\alpha/2}+z_{1-\beta}\right)
\sqrt{
\frac{2p(1-p)}{n}
}
$$

An approximate sample-size formula is:

$$
n
\approx
\frac{
2\left(z_{1-\alpha/2}+z_{1-\beta}\right)^2p(1-p)
}{
\delta^2
}
$$

These formulas are useful for initial experiment planning.

Production experiments should use an established statistical library or experimentation platform for a more precise calculation.

---

## 10. Worked Example: Conversion Rate Experiment

Suppose an e-commerce platform currently has a conversion rate of:

$$
p = 0.10
$$

The team wants to detect an absolute increase of:

$$
\delta = 0.01
$$

This means detecting an increase from:

```text
10% → 11%
```

The experiment uses:

$$
\alpha = 0.05
$$

and:

$$
1-\beta = 0.80
$$

The approximate sample size per group is:

$$
n
\approx
\frac{
2(1.96+0.84)^2(0.10)(1-0.10)
}{
0.01^2
}
$$

First, calculate the critical-value sum:

$$
1.96+0.84=2.80
$$

Then square it:

$$
2.80^2=7.84
$$

Calculate the binary variance:

$$
0.10(1-0.10)=0.09
$$

Substitute the values:

$$
n
\approx
\frac{
2(7.84)(0.09)
}{
0.0001
}
$$

$$
n
\approx
14{,}112
$$

The experiment requires approximately:

```text
Control group:   14,112 users
Treatment group: 14,112 users
Total:           28,224 users
```

This is an approximate planning result. Exact results may differ depending on the selected statistical method.

---

## 11. Business Interpretation

Consider the following experiment plan:

| Item                     |                Value |
| ------------------------ | -------------------: |
| Baseline conversion rate |                  10% |
| Target conversion rate   |                  11% |
| Absolute MDE             |   1 percentage point |
| Relative MDE             |                  10% |
| Significance level       |                   5% |
| Statistical power        |                  80% |
| Required users per group | Approximately 14,112 |

A business interpretation could be:

> The experiment is designed to reliably detect an increase in conversion rate from 10% to approximately 11% or higher. Smaller improvements may exist, but this experiment may not have enough statistical power to distinguish them from random variation.

MDE does not mean that smaller effects are impossible.

It means that the experiment was not designed to detect smaller effects reliably.

---

## 12. MDE and Non-Significant Results

Suppose an experiment has:

```text
Planned MDE: 1 percentage point
```

The observed treatment effect is:

```text
Observed effect: +0.4 percentage points
```

The result is not statistically significant.

This does not automatically prove that the treatment has no effect.

Possible explanations include:

```text
Non-significant result
          |
          +--> There is no real effect
          |
          +--> The real effect is smaller than the MDE
          |
          +--> The sample size is too small
          |
          +--> The metric variance is too high
          |
          +--> Tracking or randomization is incorrect
          |
          +--> External events affected the experiment
```

A non-significant result means that the collected data did not provide sufficiently strong evidence under the selected statistical test.

It does not prove that the two variants are identical.

---

## 13. Statistical Significance vs. Business Significance

A statistically significant effect is not automatically valuable.

Suppose a very large experiment detects an increase from:

```text
10.00% → 10.05%
```

The result may be statistically significant because the experiment contains millions of observations.

However, the improvement may not justify:

* Engineering costs
* Infrastructure costs
* Additional model latency
* Operational complexity
* Maintenance costs
* User experience risks
* Model monitoring requirements

A useful decision must consider both:

$$
\text{Statistical significance}
$$

and:

$$
\text{Business significance}
$$

A practical decision workflow is:

```text
Is the effect statistically credible?
                |
                v
Is the effect large enough to matter?
                |
                v
Do the expected benefits exceed the costs?
                |
                v
Are the guardrail metrics acceptable?
                |
                v
Roll out, iterate, or stop
```

---

## 14. Choosing a Meaningful MDE

The MDE should represent the smallest effect that would change a real business decision.

It should not be chosen only because it produces a convenient sample size.

Questions to consider include:

* What improvement would justify the engineering cost?
* What improvement would produce meaningful revenue?
* What improvement would reduce churn?
* What improvement would justify additional model latency?
* What improvement would justify retraining a model?
* What improvement would justify operational complexity?
* What effect sizes were observed in previous experiments?
* What effect would users notice?

A useful process is:

```text
Historical baseline
        +
Expected business value
        +
Implementation cost
        +
Operational risk
        +
Experiment feasibility
        |
        v
Meaningful MDE
```

---

## 15. Factors That Affect MDE

### 15.1 Sample Size

More observations reduce MDE.

$$
n \uparrow
\Rightarrow
\text{MDE} \downarrow
$$

---

### 15.2 Metric Variance

More metric noise increases MDE.

$$
\sigma^2 \uparrow
\Rightarrow
\text{MDE} \uparrow
$$

Variance-reduction techniques include:

* Improving the metric definition
* Removing invalid observations
* Using pre-experiment data
* Applying CUPED
* Stratifying randomization
* Using covariates
* Selecting a more stable metric

---

### 15.3 Significance Level

A stricter significance level requires stronger evidence.

For a fixed sample size:

$$
\alpha \downarrow
\Rightarrow
\text{MDE} \uparrow
$$

Alternatively, the sample size must increase to preserve the same MDE.

---

### 15.4 Statistical Power

Higher statistical power makes the experiment more likely to detect a real effect.

For a fixed sample size:

$$
1-\beta \uparrow
\Rightarrow
\text{MDE} \uparrow
$$

Alternatively:

$$
1-\beta \uparrow
\Rightarrow
n \uparrow
$$

when the target MDE remains unchanged.

---

### 15.5 Group Allocation

A balanced experiment commonly uses:

```text
50% Control
50% Treatment
```

Equal allocation is usually statistically efficient when the cost of assigning an observation to either group is similar.

Highly unequal group sizes may require a larger total sample.

---

### 15.6 One-Sided and Two-Sided Tests

A one-sided test evaluates an effect in one direction:

$$
H_1:p_B>p_A
$$

A two-sided test evaluates effects in both directions:

$$
H_1:p_B\neq p_A
$$

A one-sided test may require fewer observations, but it should only be chosen before examining the data and when the research question genuinely concerns one direction.

---

## 16. MDE in AI and Machine Learning

MDE is also useful when evaluating AI and machine learning systems.

| Experiment               | Primary Metric     |            Example MDE |
| ------------------------ | ------------------ | ---------------------: |
| Recommendation model     | Click-through rate | +0.5 percentage points |
| Fraud detection model    | Recall             |   +2 percentage points |
| Search ranking model     | NDCG               |                  +0.01 |
| Churn prediction model   | Retention rate     |    +1 percentage point |
| Customer support chatbot | Resolution rate    |   +3 percentage points |
| LLM assistant            | Satisfaction score |            +0.2 points |
| Image classifier         | Accuracy           |    +1 percentage point |
| Inference optimization   | Response latency   |      -100 milliseconds |

AI experiments should also include guardrail metrics such as:

* Model latency
* Error rate
* Hallucination rate
* Cost per request
* Token usage
* Safety violation rate
* Fairness metrics
* User complaint rate

The primary metric measures success, while guardrail metrics prevent harmful trade-offs.

---

## 17. Example: Recommendation Model

Suppose a platform is testing a new recommendation model.

The control model has a click-through rate of:

$$
CTR_A = 0.080
$$

The business requires a relative improvement of at least 5%.

The absolute MDE is:

$$
\text{Absolute MDE}
===================

0.080 \times 0.05
$$

$$
\text{Absolute MDE}
===================

0.004
$$

Therefore, the experiment should be designed to detect an increase from:

```text
8.0% → 8.4%
```

The hypotheses are:

$$
H_0:p_B-p_A=0
$$

$$
H_1:p_B-p_A\neq0
$$

The planning workflow is:

```text
Baseline CTR = 8.0%
        |
        v
Meaningful relative lift = 5%
        |
        v
Absolute MDE = 0.4 percentage points
        |
        v
Calculate the required sample size
        |
        v
Run the randomized experiment
        |
        v
Evaluate CTR and guardrail metrics
        |
        v
Make a rollout decision
```

---

## 18. Python Example: Estimate Sample Size

```python
from math import ceil
from statistics import NormalDist


def required_sample_size_for_proportion(
    baseline_rate: float,
    absolute_mde: float,
    alpha: float = 0.05,
    power: float = 0.80,
) -> int:
    """
    Estimate the required sample size per group for a two-sided
    A/B test with a binary metric.

    This function uses a normal approximation.
    """

    if not 0 < baseline_rate < 1:
        raise ValueError("baseline_rate must be between 0 and 1.")

    if absolute_mde <= 0:
        raise ValueError("absolute_mde must be greater than 0.")

    if not 0 < alpha < 1:
        raise ValueError("alpha must be between 0 and 1.")

    if not 0 < power < 1:
        raise ValueError("power must be between 0 and 1.")

    normal_distribution = NormalDist()

    z_alpha = normal_distribution.inv_cdf(1 - alpha / 2)
    z_power = normal_distribution.inv_cdf(power)

    variance = baseline_rate * (1 - baseline_rate)

    sample_size = (
        2
        * (z_alpha + z_power) ** 2
        * variance
        / absolute_mde**2
    )

    return ceil(sample_size)


sample_size_per_group = required_sample_size_for_proportion(
    baseline_rate=0.10,
    absolute_mde=0.01,
    alpha=0.05,
    power=0.80,
)

total_sample_size = sample_size_per_group * 2

print(f"Required sample size per group: {sample_size_per_group:,}")
print(f"Required total sample size: {total_sample_size:,}")
```

Approximate output:

```text
Required sample size per group: 14,128
Required total sample size: 28,256
```

The exact result may differ slightly depending on the formula, statistical library, and rounding method.

---

## 19. Python Example: Estimate MDE from Sample Size

```python
from math import sqrt
from statistics import NormalDist


def calculate_binary_mde(
    baseline_rate: float,
    sample_size_per_group: int,
    alpha: float = 0.05,
    power: float = 0.80,
) -> float:
    """
    Estimate the absolute Minimum Detectable Effect for a binary metric.
    """

    if not 0 < baseline_rate < 1:
        raise ValueError("baseline_rate must be between 0 and 1.")

    if sample_size_per_group <= 0:
        raise ValueError("sample_size_per_group must be positive.")

    normal_distribution = NormalDist()

    z_alpha = normal_distribution.inv_cdf(1 - alpha / 2)
    z_power = normal_distribution.inv_cdf(power)

    variance = baseline_rate * (1 - baseline_rate)

    mde = (
        (z_alpha + z_power)
        * sqrt(2 * variance / sample_size_per_group)
    )

    return mde


baseline_rate = 0.10

absolute_mde = calculate_binary_mde(
    baseline_rate=baseline_rate,
    sample_size_per_group=20_000,
)

relative_mde = absolute_mde / baseline_rate

print(f"Absolute MDE: {absolute_mde:.4f}")
print(
    "Absolute MDE in percentage points: "
    f"{absolute_mde * 100:.2f}"
)
print(f"Relative MDE: {relative_mde * 100:.2f}%")
```

---

## 20. Practical Exercise

### Scenario

An online learning platform wants to test a new lesson recommendation algorithm.

| Input                    |               Value |
| ------------------------ | ------------------: |
| Baseline completion rate |                 20% |
| Daily eligible users     |               4,000 |
| Significance level       |                  5% |
| Statistical power        |                 80% |
| Target absolute MDE      | 2 percentage points |

The treatment must detect an increase from:

```text
20% → 22%
```

### Task 1: Calculate the Relative MDE

$$
\text{Relative MDE}
===================

\frac{0.22-0.20}{0.20}
$$

$$
\text{Relative MDE}
===================

# \frac{0.02}{0.20}

# 0.10

10%
$$

### Task 2: Define the Hypotheses

Null hypothesis:

$$
H_0:p_B-p_A=0
$$

Alternative hypothesis:

$$
H_1:p_B-p_A\neq0
$$

### Task 3: Define the Metrics

Primary metric:

* Lesson completion rate

Possible guardrail metrics:

* Lesson abandonment rate
* Average session duration
* Recommendation latency
* Content diversity
* User complaint rate

### Additional Tasks

1. Estimate the required sample size per group.
2. Calculate the total required sample size.
3. Estimate the experiment duration.
4. Simulate control and treatment data.
5. Perform a hypothesis test.
6. Calculate a confidence interval.
7. Write a business recommendation.

---

## 21. Suggested Notebook Structure

```text
01. Problem definition
02. Business objective
03. Primary metric
04. Guardrail metrics
05. Historical baseline analysis
06. Metric variance estimation
07. MDE definition
08. Significance level and power
09. Sample-size calculation
10. Experiment-duration estimation
11. Simulated A/B test data
12. Hypothesis test
13. Confidence interval
14. Effect-size interpretation
15. Business recommendation
16. Assumptions and limitations
```

Suggested outputs include:

* Baseline metric table
* Sample-size calculation
* MDE sensitivity chart
* Power curve
* Confidence interval chart
* Experiment-duration estimate
* Rollout recommendation

---

## 22. Common Mistakes

### 22.1 Selecting MDE After Seeing the Results

MDE should be defined before examining the experiment results.

Changing the MDE afterward may lead to biased interpretations.

---

### 22.2 Choosing MDE Only to Reduce Sample Size

A larger MDE reduces the required sample size, but it may cause the experiment to miss smaller effects that still have business value.

MDE should represent a meaningful decision threshold.

---

### 22.3 Confusing Percent and Percentage Points

An increase from 10% to 11% is:

```text
Absolute increase: 1 percentage point
Relative increase: 10%
```

These values are not interchangeable.

---

### 22.4 Treating MDE as a Result Threshold

MDE is primarily an experiment-planning concept.

The following rule is incorrect:

```text
Observed effect below MDE → Automatically reject the treatment
```

The final analysis should also consider:

* Estimated treatment effect
* Confidence interval
* P-value
* Statistical power
* Business value
* Guardrail metrics
* Experiment quality

---

### 22.5 Ignoring Metric Variance

An incorrect variance estimate can produce an incorrect sample-size calculation.

Variance should be estimated using:

* Historical data
* Previous experiments
* A pilot experiment
* A pre-experiment period

---

### 22.6 Stopping the Experiment Too Early

Repeatedly checking the p-value and stopping when it becomes significant increases the risk of false positives.

Use one of the following:

* A fixed experiment duration
* A predefined stopping rule
* A valid sequential-testing method

---

### 22.7 Ignoring Multiple Comparisons

Testing many metrics or variants increases the probability of false discoveries.

Possible methods include:

* Bonferroni correction
* Holm correction
* False Discovery Rate control
* Defining one primary metric before the experiment

---

### 22.8 Ignoring Sample Ratio Mismatch

Suppose the planned allocation is:

```text
50% Control
50% Treatment
```

But the observed allocation is:

```text
60% Control
40% Treatment
```

This may indicate:

* Randomization errors
* Tracking failures
* Eligibility differences
* Treatment-delivery problems
* Logging errors

The experiment implementation should be validated before interpreting the result.

---

### 22.9 Ignoring Seasonality

Experiment outcomes may be affected by:

* Day-of-week patterns
* Holidays
* Marketing campaigns
* Product launches
* Novelty effects
* External events
* Returning-user behavior

A sufficiently large sample does not automatically guarantee a valid experiment.

---

## 23. Assumptions and Limitations

MDE calculations commonly assume that:

* Observations are independent.
* Users are randomly assigned.
* Control and treatment groups are comparable.
* The metric is measured consistently.
* The baseline estimate is reasonably accurate.
* The statistical model matches the metric.
* Users remain in the assigned variant.
* No major external event affects only one group.
* The experiment runs for an appropriate duration.

Violating these assumptions can invalidate the experiment even when the sample size is large.

---

## 24. Completion Checklist

* [ ] I can explain Minimum Detectable Effect in one or two minutes.
* [ ] I understand that MDE is the smallest effect an experiment is designed to detect reliably.
* [ ] I can distinguish absolute MDE from relative MDE.
* [ ] I understand the relationship between MDE and sample size.
* [ ] I understand significance level and statistical power.
* [ ] I can estimate the sample size for a binary metric.
* [ ] I understand why a non-significant result does not prove that no effect exists.
* [ ] I can distinguish statistical significance from business significance.
* [ ] I can identify experiment assumptions and possible sources of bias.
* [ ] I have created a notebook, chart, query, API, or experiment plan for this lesson.

---

## 25. Related Outcome

Use probability, sampling, descriptive statistics, hypothesis testing, power analysis, and A/B testing to make reliable decisions from data.

---

## 26. Related Project

### Mini Project: A/B Test Conversion Rate

Build a small experiment-analysis project containing:

* A simulated control group
* A simulated treatment group
* Conversion-rate calculations
* Absolute and relative treatment effects
* MDE calculation
* Sample-size estimation
* Hypothesis testing
* Confidence intervals
* Power analysis
* Guardrail metrics
* A rollout recommendation

Suggested project structure:

```text
ab-test-mde/
├── data/
│   └── simulated_experiment.csv
├── notebooks/
│   └── mde_and_power_analysis.ipynb
├── src/
│   ├── sample_size.py
│   ├── hypothesis_test.py
│   └── metrics.py
├── reports/
│   └── experiment_recommendation.md
└── README.md
```

---

## 27. Final Summary

The **Minimum Detectable Effect** is the smallest treatment effect that an experiment is designed to detect with a selected significance level and statistical power.

The main relationships are:

$$
\text{Smaller MDE}
\Rightarrow
\text{Larger sample size}
$$

$$
\text{Higher variance}
\Rightarrow
\text{Larger MDE}
$$

$$
\text{Higher statistical power}
\Rightarrow
\text{More required data}
$$

$$
\text{Stricter significance level}
\Rightarrow
\text{More required data}
$$

MDE should be chosen before the experiment begins.

It should represent the smallest effect that would meaningfully influence a product, model, or business decision.

```text
Business objective
        |
        v
Meaningful MDE
        |
        v
Sample size and statistical power
        |
        v
Randomized experiment
        |
        v
Effect estimate and uncertainty
        |
        v
Business decision
```

The objective is not only to produce a statistically significant p-value.

The real objective is to determine whether an observed effect is:

* Statistically reliable
* Large enough to matter
* Safe for users
* Worth the implementation cost
* Valuable enough to support a real decision
