# 031 - CUPED / CUPAC

**Course:** 01 - Math, Statistics and Econometrics
**Module:** Module 02 - Statistics
**Content Group:** Testing and Experiments
**Roadmap Source:** Statistics / Testing and Experiments
**Lesson Type:** Statistics
**Order in Module:** 031
**Suggested Duration:** 24 minutes

---

## 1. Summary

**CUPED** and **CUPAC** are variance-reduction techniques used to improve the sensitivity of online controlled experiments.

They do not change the experiment assignment or create additional observations. Instead, they use information collected **before the experiment** to explain some of the natural variation in the outcome metric.

* **CUPED** stands for **Controlled-experiment Using Pre-Experiment Data**.
* **CUPAC** stands for **Control Using Predictions As Covariates**.

CUPED usually uses a historical version of the experiment metric as a covariate. For example, when measuring revenue during an experiment, the analyst may use each user's revenue before the experiment.

CUPAC extends this idea by training a machine-learning model on pre-experiment features. The model predicts the expected outcome, and that prediction is used as the covariate.

The main objective is:

> Reduce metric variance without changing the expected treatment effect.

Lower variance leads to:

* Smaller standard errors.
* Narrower confidence intervals.
* Higher statistical power.
* A smaller Minimum Detectable Effect, or MDE.
* Faster experiment decisions.
* Fewer users required for the same level of precision.

CUPED was introduced as a practical variance-reduction technique for large-scale online experiments. CUPAC later extended the approach by using machine-learning predictions as covariates.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain CUPED and CUPAC in your own words.
* Understand why variance reduction improves an A/B test.
* Distinguish CUPED from CUPAC.
* Select valid pre-experiment covariates.
* Calculate a CUPED-adjusted metric.
* Understand how machine-learning predictions are used in CUPAC.
* Evaluate variance reduction and experiment sensitivity.
* Identify data leakage and invalid post-treatment variables.
* Translate statistical results into a business recommendation.
* Build a small CUPED or CUPAC notebook for your portfolio.

---

## 3. Why Variance Reduction Matters

Suppose an A/B test estimates the following treatment effect:

$$
\hat{\tau} = \bar{Y}_{T} - \bar{Y}_{C}
$$

where:

* $\bar{Y}_{T}$ is the mean outcome in the treatment group.
* $\bar{Y}_{C}$ is the mean outcome in the control group.
* $\hat{\tau}$ is the estimated treatment effect.

The standard error of the difference in means is approximately:

$$
SE(\hat{\tau}) = \sqrt{ \frac{s_T^2}{n_T} + \frac{s_C^2}{n_C} }
$$

where:

* $s_T^2$ and $s_C^2$ are the outcome variances.
* $n_T$ and $n_C$ are the treatment and control sample sizes.

There are two common ways to reduce this standard error:

1. Increase the sample size.
2. Reduce the variance of the metric.

Increasing sample size may require more users or a longer experiment. CUPED and CUPAC focus on the second option: reducing the unexplained variance.

```text
Without variance reduction

User differences
       +
Treatment effect
       +
Random noise
       |
       v
Observed experiment metric
       |
       v
Large variance -> Wide confidence interval -> Low sensitivity
```

```text
With CUPED or CUPAC

Pre-experiment information
       |
       v
Explain predictable user differences
       |
       v
Remove predictable variation
       |
       v
Lower variance -> Narrower confidence interval -> Higher sensitivity
```

---

## 4. CUPED

### 4.1 Core Idea

Users are naturally different before an experiment begins.

For example:

* Some users already spend more money.
* Some users visit the application more frequently.
* Some customers place more orders.
* Some learners complete more lessons.
* Some accounts generate more support requests.

Random assignment makes the treatment and control groups comparable **on average**, but a particular experiment may still contain small baseline differences.

CUPED uses a pre-experiment variable to explain these differences.

Let:

* $Y_i$ be the outcome observed during the experiment.
* $X_i$ be a pre-experiment covariate.
* $\mu_X$ be the mean of the covariate.
* $\theta$ be the adjustment coefficient.

The CUPED-adjusted outcome is:

$$
Y_i^{\text{CUPED}} = Y_i - \theta(X_i-\mu_X)
$$

The optimal coefficient is:

$$
\theta = \frac{\operatorname{Cov}(Y,X)} {\operatorname{Var}(X)}
$$

The experiment is then analyzed using the adjusted outcome:

$$
\hat{\tau}_{\text{CUPED}} = \bar{Y}^{ -\text{CUPED}}_T \bar{Y}^{\text{CUPED}}_C
$$

### 4.2 Interpretation

The expression:

$$
\theta(X_i-\mu_X)
$$

represents the predictable part of the outcome associated with the user's historical behavior.

CUPED subtracts this predictable variation from the observed outcome.

A user with unusually high historical activity will receive a downward adjustment. A user with unusually low historical activity will receive an upward adjustment.

The adjustment does not mean that historical behavior caused the experiment outcome. It is being used as a **control variate** to reduce noise.

---

## 5. CUPED Variance Reduction

When $\theta$ is selected optimally, the adjusted variance is approximately:

$$
\operatorname{Var}(Y^{\text{CUPED}}) = \operatorname{Var}(Y)(1-\rho^2)
$$

where $\rho$ is the correlation between the pre-experiment covariate $X$ and the experiment outcome $Y$.

Therefore, the expected variance-reduction rate is:

$$
\text{Variance Reduction} = \rho^2
$$

### Example

Suppose:

$$
\rho = 0.70
$$

Then:

$$
\rho^2 = 0.49
$$

The adjusted metric may have approximately:

$$
49%
$$

less variance than the original metric.

The new standard error is proportional to:

$$
\sqrt{1-\rho^2} = \sqrt{0.51} \approx 0.714
$$

This means that the standard error may be approximately 28.6% smaller:

$$
1-0.714=0.286
$$

The exact improvement depends on the dataset, metric construction, missing values and estimation method. The original CUPED study reported substantial variance reduction for several Bing experiment metrics.

### Relationship Between Correlation and Variance Reduction

| Correlation $\rho$ | Approximate variance reduction $\rho^2$ |
| -----------------: | --------------------------------------: |
|               0.10 |                                      1% |
|               0.30 |                                      9% |
|               0.50 |                                     25% |
|               0.70 |                                     49% |
|               0.80 |                                     64% |
|               0.90 |                                     81% |

A covariate must be strongly related to the experiment outcome to produce meaningful variance reduction.

---

## 6. CUPED Workflow

```text
Historical period                  Experiment period
-----------------                  -----------------

Pre-experiment metric X            Random assignment
        |                           /             \
        |                     Control           Treatment
        |                        |                  |
        +----------------------> Outcome Y          |
                                  |                 |
                                  +--------+--------+
                                           |
                                           v
                                 Estimate theta
                                           |
                                           v
                         Y_cuped = Y - theta(X - mean(X))
                                           |
                                           v
                         Compare adjusted group means
                                           |
                                           v
                   Effect + confidence interval + decision
```

### Step-by-Step Process

1. Define the experiment outcome metric.
2. Select a pre-experiment period.
3. Calculate a historical metric for each experimental unit.
4. Join the historical metric with the experiment dataset.
5. Handle users without historical observations.
6. Estimate $\theta$.
7. Calculate the CUPED-adjusted outcome.
8. Compare the adjusted treatment and control means.
9. Calculate the standard error and confidence interval.
10. Compare the raw and adjusted results.

---

## 7. Worked CUPED Example

Suppose an e-commerce company tests a new recommendation system.

The primary metric is:

> Revenue per user during the experiment.

The selected CUPED covariate is:

> Revenue per user during the 28 days before the experiment.

Assume the following values:

| Quantity                                             | Value |
| ---------------------------------------------------- | ----: |
| Mean experiment revenue                              | 12.00 |
| Mean historical revenue                              | 10.00 |
| Covariance between historical and experiment revenue |  6.40 |
| Variance of historical revenue                       |  8.00 |

First, calculate $\theta$:

$$
\theta = # \frac{6.40}{8.00} 0.80
$$

Consider a user with:

* Experiment revenue: $Y_i=15$
* Historical revenue: $X_i=14$

The adjusted outcome is:

$$
Y_i^{\text{CUPED}} = 15-0.80(14-10)
$$

$$
Y_i^{\text{CUPED}} = # 15-3.20 11.80
$$

This user had above-average historical revenue. CUPED removes the predictable portion associated with that baseline behavior.

Now consider another user with:

* Experiment revenue: $Y_i=9$
* Historical revenue: $X_i=7$

$$
Y_i^{\text{CUPED}} = 9-0.80(7-10)
$$

$$
Y_i^{\text{CUPED}} = # 9+2.40 11.40
$$

This user had below-average historical revenue, so the outcome receives an upward adjustment.

The purpose is not to make every user identical. The purpose is to remove predictable baseline differences before comparing the groups.

---

## 8. CUPAC

### 8.1 Core Idea

CUPED commonly uses one historical metric, such as:

* Previous revenue.
* Previous number of sessions.
* Previous number of orders.
* Previous watch time.
* Previous lesson completion.

However, an outcome may depend on many pre-experiment features.

For example, future revenue may depend on:

* Historical revenue.
* Order frequency.
* Account age.
* User region.
* Device type.
* Subscription status.
* Product categories viewed.
* Previous engagement.
* Customer segment.

CUPAC uses a machine-learning model to combine these features.

Let:

$$
Z_i=f(X_i)
$$

where:

* $X_i$ is a vector of pre-experiment features.
* $f$ is a prediction model.
* $Z_i$ is the predicted outcome.

The CUPAC-adjusted metric is:

$$
Y_i^{\text{CUPAC}} = Y_i - \theta(Z_i-\mu_Z)
$$

where:

$$
\theta = \frac{\operatorname{Cov}(Y,Z)} {\operatorname{Var}(Z)}
$$

CUPAC was introduced as a practical method that uses predictions as covariates to reduce noise in online experiments.

---

## 9. CUPAC Workflow

```text
Pre-experiment data
        |
        +--> Historical activity
        +--> User attributes
        +--> Account information
        +--> Previous transactions
        +--> Product engagement
        |
        v
Train prediction model
        |
        v
Predict expected outcome for each user
        |
        v
Prediction Z
        |
        v
Run randomized experiment
        |
        v
Observe experiment outcome Y
        |
        v
Y_cupac = Y - theta(Z - mean(Z))
        |
        v
Estimate adjusted treatment effect
```

### Example Prediction Models

CUPAC can use:

* Linear regression.
* Ridge regression.
* Lasso regression.
* Random forest.
* Gradient-boosted trees.
* XGBoost.
* LightGBM.
* Neural networks.

The best model is not necessarily the most complex model.

The important criterion is whether its predictions explain variation in the experiment outcome while using only valid pre-treatment information.

---

## 10. CUPED vs. CUPAC

| Aspect                      | CUPED                                             | CUPAC                                        |
| --------------------------- | ------------------------------------------------- | -------------------------------------------- |
| Full name                   | Controlled-experiment Using Pre-Experiment Data   | Control Using Predictions As Covariates      |
| Covariate                   | Usually a historical version of the target metric | Machine-learning prediction                  |
| Input                       | One or several historical metrics                 | Multiple pre-experiment features             |
| Complexity                  | Low                                               | Medium to high                               |
| Interpretability            | High                                              | Depends on the model                         |
| Infrastructure requirements | Relatively small                                  | Training, prediction and monitoring pipeline |
| Main advantage              | Simple and reliable                               | Can capture nonlinear relationships          |
| Main risk                   | Weak historical correlation                       | Leakage, overfitting and model drift         |
| Best use case               | Existing users with historical outcomes           | Rich pre-experiment feature data             |
| New users                   | Often difficult                                   | May use profile and contextual features      |

---

## 11. Regression Interpretation

CUPED and CUPAC can also be understood as regression adjustment.

A simple experiment regression is:

$$
Y_i = \alpha + \tau T_i + \varepsilon_i
$$

where:

* $T_i=1$ for treatment.
* $T_i=0$ for control.
* $\tau$ is the treatment effect.

With covariate adjustment:

$$
Y_i = \alpha + \tau T_i + \beta X_i + \varepsilon_i
$$

For CUPAC, replace $X_i$ with a model prediction:

$$
Y_i = \alpha + \tau T_i + \beta \hat{Y}_i + \varepsilon_i
$$

The coefficient $\tau$ represents the treatment effect after accounting for predictable baseline variation.

In production experimentation systems, robust standard errors or other design-appropriate variance estimators should be used rather than relying blindly on default regression output.

---

## 12. Python Demo: CUPED

```python
import numpy as np
import pandas as pd
from scipy import stats


def apply_cuped(
    data: pd.DataFrame,
    outcome_column: str,
    covariate_column: str,
) -> tuple[pd.DataFrame, float]:
    """
    Calculate a CUPED-adjusted outcome.

    Parameters
    ----------
    data:
        Experiment-level dataset.
    outcome_column:
        Outcome measured during the experiment.
    covariate_column:
        Metric measured before the experiment.

    Returns
    -------
    adjusted_data:
        Copy of the dataset with a `cuped_outcome` column.
    theta:
        Estimated CUPED coefficient.
    """
    required_columns = {outcome_column, covariate_column}
    missing_columns = required_columns.difference(data.columns)

    if missing_columns:
        raise ValueError(f"Missing columns: {sorted(missing_columns)}")

    result = data.copy()

    outcome = result[outcome_column].astype(float)
    covariate = result[covariate_column].astype(float)

    if covariate.var(ddof=1) == 0:
        raise ValueError("The CUPED covariate has zero variance.")

    covariance = np.cov(outcome, covariate, ddof=1)[0, 1]
    theta = covariance / covariate.var(ddof=1)

    covariate_mean = covariate.mean()

    result["cuped_outcome"] = (
        outcome - theta * (covariate - covariate_mean)
    )

    return result, float(theta)


rng = np.random.default_rng(seed=42)
sample_size = 20_000

pre_experiment_activity = rng.normal(
    loc=10,
    scale=4,
    size=sample_size,
)

treatment = rng.binomial(
    n=1,
    p=0.5,
    size=sample_size,
)

true_treatment_effect = 0.30

experiment_outcome = (
    5
    + 0.70 * pre_experiment_activity
    + true_treatment_effect * treatment
    + rng.normal(loc=0, scale=4, size=sample_size)
)

experiment = pd.DataFrame(
    {
        "treatment": treatment,
        "pre_experiment_activity": pre_experiment_activity,
        "outcome": experiment_outcome,
    }
)

experiment, theta = apply_cuped(
    data=experiment,
    outcome_column="outcome",
    covariate_column="pre_experiment_activity",
)

control = experiment[experiment["treatment"] == 0]
treatment_group = experiment[experiment["treatment"] == 1]

raw_effect = (
    treatment_group["outcome"].mean()
    - control["outcome"].mean()
)

cuped_effect = (
    treatment_group["cuped_outcome"].mean()
    - control["cuped_outcome"].mean()
)

raw_variance = experiment["outcome"].var(ddof=1)
cuped_variance = experiment["cuped_outcome"].var(ddof=1)

variance_reduction = 1 - cuped_variance / raw_variance

raw_test = stats.ttest_ind(
    treatment_group["outcome"],
    control["outcome"],
    equal_var=False,
)

cuped_test = stats.ttest_ind(
    treatment_group["cuped_outcome"],
    control["cuped_outcome"],
    equal_var=False,
)

print(f"Theta: {theta:.4f}")
print(f"Raw treatment effect: {raw_effect:.4f}")
print(f"CUPED treatment effect: {cuped_effect:.4f}")
print(f"Variance reduction: {variance_reduction:.2%}")
print(f"Raw p-value: {raw_test.pvalue:.6f}")
print(f"CUPED p-value: {cuped_test.pvalue:.6f}")
```

### Expected Interpretation

The raw and CUPED treatment-effect estimates should usually be reasonably close.

However, the CUPED-adjusted outcome should have:

* Lower variance.
* A smaller standard error.
* A narrower confidence interval.
* Greater statistical sensitivity.

A smaller p-value is possible, but it is not guaranteed in every sample. CUPED improves precision; it does not guarantee statistical significance.

---

## 13. Simplified CUPAC Demo

```python
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.metrics import r2_score
from sklearn.model_selection import cross_val_predict, KFold
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder


feature_columns = [
    "historical_revenue",
    "historical_sessions",
    "account_age_days",
    "country",
    "device_type",
]

numeric_features = [
    "historical_revenue",
    "historical_sessions",
    "account_age_days",
]

categorical_features = [
    "country",
    "device_type",
]

preprocessor = ColumnTransformer(
    transformers=[
        (
            "numeric",
            "passthrough",
            numeric_features,
        ),
        (
            "categorical",
            OneHotEncoder(
                handle_unknown="ignore",
                sparse_output=False,
            ),
            categorical_features,
        ),
    ]
)

model = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        (
            "regressor",
            HistGradientBoostingRegressor(
                max_depth=4,
                random_state=42,
            ),
        ),
    ]
)

cross_validation = KFold(
    n_splits=5,
    shuffle=True,
    random_state=42,
)

experiment["cupac_prediction"] = cross_val_predict(
    model,
    experiment[feature_columns],
    experiment["outcome"],
    cv=cross_validation,
)

prediction_r2 = r2_score(
    experiment["outcome"],
    experiment["cupac_prediction"],
)

prediction = experiment["cupac_prediction"]
outcome = experiment["outcome"]

theta = (
    np.cov(outcome, prediction, ddof=1)[0, 1]
    / prediction.var(ddof=1)
)

experiment["cupac_outcome"] = (
    outcome
    - theta * (prediction - prediction.mean())
)

print(f"Out-of-fold prediction R²: {prediction_r2:.4f}")
print(f"CUPAC theta: {theta:.4f}")
```

### Important Note

In a real experiment platform, the prediction model should ideally be trained on data that is separate from the outcomes used to estimate the treatment effect.

Common approaches include:

* Training on historical experiments.
* Training on a separate historical dataset.
* Using out-of-fold predictions.
* Using cross-fitting.
* Freezing the model before the experiment starts.

These approaches reduce the risk of overfitting and information leakage.

---

## 14. Choosing a Good Covariate

A useful CUPED or CUPAC covariate should satisfy four main conditions.

### 14.1 It Must Be Measured Before Treatment

The covariate must not be affected by the experiment.

Valid examples:

* Revenue during the previous month.
* Sessions during the previous week.
* Account age at experiment assignment.
* Country recorded before assignment.
* Historical subscription status.

Invalid examples:

* Number of clicks after treatment exposure.
* Sessions recorded during the experiment.
* A feature generated by the treatment.
* Purchase behavior after assignment.
* Model predictions containing post-treatment features.

Using post-treatment variables can introduce bias.

### 14.2 It Should Predict the Outcome

A covariate that is unrelated to the outcome provides little variance reduction.

Useful diagnostics include:

$$
\operatorname{Corr}(X,Y)
$$

and:

$$
R^2
$$

for a prediction model.

### 14.3 It Should Be Available for Most Units

Missing historical data is common for new users.

Possible strategies include:

* Replace missing values with zero when zero has a meaningful interpretation.
* Replace missing values with the population mean.
* Add a missing-value indicator.
* Build separate models for new and existing users.
* Use CUPED only for eligible existing users, while clearly defining the estimand.
* Use CUPAC with profile or contextual features available for new users.

### 14.4 It Must Be Computed Consistently

The same:

* Time window.
* Aggregation logic.
* Filtering rules.
* Currency conversion.
* User identifier.
* Data-cleaning process.

must be applied across all experiment groups.

---

## 15. Common Mistakes

### 15.1 Using Post-Treatment Data

This is the most serious mistake.

```text
Treatment
    |
    v
Post-treatment variable
    |
    v
Adjusted outcome
```

Because the treatment can change the covariate, adjusting for it may remove part of the real treatment effect or introduce bias.

### 15.2 Training CUPAC on Treatment Information

Do not include:

* Treatment assignment.
* Variant identifier.
* Experiment-period engagement.
* Features generated after exposure.

The model should predict baseline outcome behavior, not learn the treatment effect.

### 15.3 Assuming CUPED Fixes Broken Randomization

CUPED reduces variance. It does not repair:

* Incorrect assignment.
* Sample-ratio mismatch.
* Logging failures.
* Network interference.
* User contamination.
* Selection bias.
* Treatment leakage.

### 15.4 Selecting Covariates After Inspecting Results

Choosing a covariate because it produces the preferred conclusion creates researcher degrees of freedom.

The covariate logic should preferably be:

* Predefined.
* Version-controlled.
* Consistent across experiments.
* Validated using A/A tests.

### 15.5 Ignoring Missing Historical Data

Dropping users without historical data may change the population being studied.

For example, the analysis may estimate the treatment effect only for existing users instead of all eligible users.

### 15.6 Comparing Only p-Values

A good experiment report should include:

* Raw treatment effect.
* Adjusted treatment effect.
* Absolute effect.
* Relative effect.
* Standard error.
* Confidence interval.
* Variance reduction.
* Sample size.
* Practical significance.
* Guardrail metrics.

### 15.7 Using Default Standard Errors Blindly

Regression adjustment changes the analysis model.

Use an inference method appropriate for the experiment design, such as:

* Heteroskedasticity-robust standard errors.
* Cluster-robust standard errors.
* Bootstrap methods.
* Delta-method estimators for ratio metrics.
* Design-aware estimators for switchback or clustered experiments.

### 15.8 Applying CUPED to an Unstable Covariate

A historical metric may become less useful when:

* User behavior changes rapidly.
* The product changes significantly.
* Seasonality is strong.
* The pre-experiment and experiment periods differ.
* Tracking definitions change.
* The user population changes.

---

## 16. CUPED, CUPAC and Minimum Detectable Effect

For a simplified two-group experiment:

$$
MDE
\propto
SE(\hat{\tau})
$$

If CUPED reduces variance by a proportion $r$, then:

$$
\operatorname{Var}_{adjusted} = (1-r)\operatorname{Var}_{raw}
$$

The adjusted standard error becomes:

$$
SE_{adjusted} = SE_{raw}\sqrt{1-r}
$$

The adjusted MDE is therefore approximately:

$$
MDE_{adjusted} = MDE_{raw}\sqrt{1-r}
$$

### Example

Suppose the raw experiment has:

$$
MDE_{raw}=2.0%
$$

and CUPED produces:

$$
r=36%
$$

Then:

$$
MDE_{adjusted} = 2.0%\sqrt{1-0.36}
$$

$$
MDE_{adjusted} = # 2.0%\times0.8 1.6%
$$

The experiment can now detect a smaller effect with approximately the same sample size and significance requirements.

---

## 17. Evaluation Metrics

A CUPED or CUPAC implementation should be evaluated using more than one metric.

### 17.1 Variance-Reduction Rate

$$
VR = 1- \frac{ \operatorname{Var}(Y_{adjusted}) }{ \operatorname{Var}(Y_{raw}) }
$$

### 17.2 Standard-Error Reduction

$$
SER = 1- \frac{ SE_{adjusted} }{ SE_{raw} }
$$

### 17.3 Effective Sample-Size Multiplier

An approximate precision multiplier is:

$$
\text{Effective Sample Multiplier} = \frac{ \operatorname{Var}(Y_{raw}) }{ \operatorname{Var}(Y_{adjusted}) }
$$

For example, if:

$$
\operatorname{Var}(Y_{adjusted}) = 0.60\operatorname{Var}(Y_{raw})
$$

then:

$$
\text{Effective Sample Multiplier} = \frac{1}{0.60} \approx1.67
$$

The adjusted analysis has approximately the same variance as a raw analysis with 1.67 times as many observations, under simplified assumptions.

### 17.4 Bias in A/A Tests

Repeated A/A tests should show:

* An average estimated treatment effect close to zero.
* A false-positive rate near the selected significance level.
* Correct confidence-interval coverage.
* Stable variance reduction.

### 17.5 CUPAC Prediction Quality

Useful measures include:

* Out-of-sample $R^2$.
* Mean Absolute Error.
* Root Mean Squared Error.
* Correlation between prediction and outcome.
* Prediction stability over time.
* Coverage of prediction features.

High predictive performance can improve variance reduction, but predictive performance alone does not prove that statistical inference is valid.

---

## 18. Practical Exercise

### Scenario

An online learning platform tests a new lesson recommendation algorithm.

The primary metric is:

> Number of lessons completed per learner during 14 days.

Available columns:

```text
user_id
treatment
lessons_completed_pre_14d
minutes_studied_pre_14d
active_days_pre_14d
subscription_type
country
device_type
lessons_completed_experiment
```

### Task 1: Raw A/B Test

Calculate:

$$
\hat{\tau}_{raw} = \bar{Y}_T-\bar{Y}_C
$$

Report:

* Group sample sizes.
* Group means.
* Absolute effect.
* Relative effect.
* Standard error.
* 95% confidence interval.
* p-value.

### Task 2: CUPED

Use:

```text
lessons_completed_pre_14d
```

as the covariate.

Calculate:

* $\theta$
* Adjusted outcome.
* Adjusted treatment effect.
* Adjusted standard error.
* Variance-reduction rate.
* Adjusted confidence interval.

### Task 3: CUPAC

Train a prediction model using:

```text
lessons_completed_pre_14d
minutes_studied_pre_14d
active_days_pre_14d
subscription_type
country
device_type
```

Use out-of-fold predictions as the covariate.

Compare:

* Raw analysis.
* CUPED analysis.
* CUPAC analysis.

### Task 4: Business Conclusion

Write a conclusion answering:

1. Did the recommendation algorithm improve lesson completion?
2. How large was the estimated improvement?
3. Was the result statistically significant?
4. Was the result practically meaningful?
5. How much variance did CUPED reduce?
6. Did CUPAC outperform CUPED?
7. Were any important guardrail metrics affected?
8. Should the feature be launched, iterated or rejected?

---

## 19. Example Business Conclusion

> The new lesson recommendation algorithm increased average lesson completion by an estimated 0.18 lessons per learner, equivalent to a 3.6% relative improvement. The raw analysis produced a wide confidence interval and did not reach the predefined significance threshold. After applying CUPED with previous lesson completion as the covariate, metric variance decreased by 31%, producing a narrower confidence interval. The adjusted result was statistically significant at the 5% level. No meaningful negative change was observed in learner retention or application errors. Based on the magnitude of the effect and the improved statistical precision, the recommendation is to begin a controlled rollout while continuing to monitor retention and content diversity.

---

## 20. Experiment Analysis Checklist

### Experiment Design

* [ ] The randomization unit is clearly defined.
* [ ] The treatment and control groups were assigned correctly.
* [ ] The primary metric was selected before the experiment.
* [ ] The significance level and power requirements were defined.
* [ ] The expected MDE was documented.
* [ ] Sample-ratio mismatch was checked.

### Covariate Validation

* [ ] Every covariate was measured before treatment.
* [ ] The covariate cannot be affected by the experiment.
* [ ] The historical measurement window is documented.
* [ ] Missing historical data is handled explicitly.
* [ ] The covariate is correlated with the outcome.
* [ ] Covariate definitions are identical across variants.

### CUPAC Validation

* [ ] The model does not use treatment assignment.
* [ ] The model does not use post-treatment features.
* [ ] Predictions are out-of-sample or out-of-fold.
* [ ] Model training data is separated from effect estimation.
* [ ] Prediction quality is evaluated on validation data.
* [ ] Model and feature versions are recorded.

### Statistical Analysis

* [ ] Raw and adjusted results are both reported.
* [ ] Variance reduction is calculated.
* [ ] Confidence intervals are reported.
* [ ] Appropriate standard errors are used.
* [ ] Multiple comparisons are controlled when necessary.
* [ ] Statistical significance is separated from business significance.

### Production Readiness

* [ ] The pipeline has been validated with A/A tests.
* [ ] Metric definitions are version-controlled.
* [ ] Data-quality checks are automated.
* [ ] CUPED or CUPAC failures have fallback behavior.
* [ ] The experiment report can be reproduced.
* [ ] Model and covariate drift are monitored.

---

## 21. Portfolio Artifact

A strong portfolio project for this lesson could include:

```text
cuped-cupac-ab-testing/
|
|-- data/
|   |-- simulated_experiment.csv
|
|-- notebooks/
|   |-- 01_raw_ab_test.ipynb
|   |-- 02_cuped_analysis.ipynb
|   |-- 03_cupac_analysis.ipynb
|
|-- src/
|   |-- metrics.py
|   |-- cuped.py
|   |-- cupac.py
|   |-- inference.py
|
|-- tests/
|   |-- test_cuped.py
|   |-- test_no_post_treatment_features.py
|   |-- test_aa_calibration.py
|
|-- reports/
|   |-- experiment_report.md
|
|-- README.md
```

The project should demonstrate:

* A simulated or real A/B test.
* Raw difference-in-means analysis.
* CUPED adjustment.
* CUPAC with out-of-fold predictions.
* Variance-reduction comparison.
* Confidence intervals.
* A/A validation.
* A business rollout recommendation.

---

## 22. Key Takeaways

* CUPED and CUPAC are variance-reduction techniques for controlled experiments.
* CUPED usually uses a historical version of the outcome metric.
* CUPAC uses machine-learning predictions based on pre-experiment features.
* Both methods attempt to remove predictable baseline variation.
* Stronger covariate-outcome relationships generally produce greater variance reduction.
* Covariates must be measured before treatment.
* Post-treatment variables can introduce serious bias.
* CUPED improves precision but does not fix broken randomization or poor data quality.
* CUPAC requires careful protection against leakage and overfitting.
* Raw and adjusted experiment results should both be reported.
* Statistical significance must still be evaluated together with practical and business significance.

---

## 23. Completion Checklist

* [ ] I can explain CUPED in one or two minutes.
* [ ] I can explain how CUPAC extends CUPED.
* [ ] I understand the CUPED adjustment formula.
* [ ] I can calculate the optimal $\theta$ coefficient.
* [ ] I can calculate the variance-reduction rate.
* [ ] I can identify valid pre-experiment covariates.
* [ ] I can identify invalid post-treatment covariates.
* [ ] I understand why CUPAC needs out-of-sample predictions.
* [ ] I have created a notebook, query, chart, API or experiment report.
* [ ] I have documented at least one assumption or limitation.
* [ ] I can translate the statistical result into a business decision.

---

## 24. Related Outcome

Use probability, sampling, descriptive statistics, hypothesis testing, variance reduction and A/B testing to make reliable decisions from data.

---

## 25. Related Project

**Mini Project: Variance Reduction for an A/B Test**

Build an experiment analysis pipeline that:

1. Simulates user-level pre-experiment and experiment data.
2. Calculates the raw treatment effect.
3. Applies CUPED with a historical metric.
4. Trains a CUPAC prediction model.
5. Compares raw, CUPED and CUPAC variance.
6. Calculates confidence intervals and statistical power.
7. Produces a rollout recommendation.
8. Exposes the analysis through a notebook, dashboard or API.

---

## 26. Final Summary

**CUPED** uses historical data to remove predictable variation from an experiment metric.

**CUPAC** extends the same principle by using machine-learning predictions constructed from multiple pre-experiment features.

```text
Raw experiment metric
        |
        v
Identify predictable baseline variation
        |
        +--> CUPED: historical metric
        |
        +--> CUPAC: machine-learning prediction
        |
        v
Remove predictable variation
        |
        v
Lower variance
        |
        v
Smaller standard error
        |
        v
Narrower confidence interval
        |
        v
Higher statistical power
        |
        v
Faster and more reliable business decisions
```

CUPED and CUPAC are not substitutes for correct experiment design. They are tools that make a valid randomized experiment more statistically efficient.

Turn this lesson into a notebook, reusable Python package, experiment dashboard, API service or portfolio report so that the knowledge becomes a practical data-science skill.

---

## References

1. Deng, A., Xu, Y., Kohavi, R., and Walker, T. *Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data*. Proceedings of WSDM, 2013.
2. Microsoft Experimentation Platform. *Deep Dive Into Variance Reduction*.
3. DoorDash Engineering. *Improving Experimental Power through Control Using Predictions as Covariate — CUPAC*.
