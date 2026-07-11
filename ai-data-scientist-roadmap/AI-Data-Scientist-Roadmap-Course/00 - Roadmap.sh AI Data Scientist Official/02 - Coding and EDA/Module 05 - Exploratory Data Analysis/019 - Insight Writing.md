# 019 - Insight Writing

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Insight Reporting
**Roadmap Source:** Exploratory Data Analysis / Insight Reporting
**Lesson Type:** Exploratory Data Analysis
**Order in Module:** 019
**Suggested Duration:** 20 minutes

---

## 1. Overview

**Insight writing** is the process of transforming analytical findings into clear, meaningful, and actionable statements.

A chart, metric, or statistical result is not automatically an insight. An insight explains:

* What happened
* Why it may have happened
* Why it matters
* What should be done next
* What limitations should be considered

In Exploratory Data Analysis, insight writing connects technical analysis with business decisions.

A useful insight usually follows this structure:

```text
Observation
    |
    v
Explanation
    |
    v
Business Impact
    |
    v
Recommendation
    |
    v
Caveat or Next Question
```

The purpose of insight writing is not only to describe data. Its purpose is to help readers understand the meaning of the analysis and make better decisions.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain insight writing in your own words.
* Distinguish between a data observation and a complete insight.
* Write insights using evidence from charts, tables, and metrics.
* Connect analytical findings to business impact.
* Provide practical recommendations based on the evidence.
* Document assumptions, limitations, and data-quality concerns.
* Avoid unsupported causal claims.
* Communicate insights clearly to technical and non-technical audiences.

---

## 3. What Is an Insight?

An insight is an evidence-based interpretation that connects a pattern in the data to a meaningful decision or question.

A complete insight usually includes five components:

1. **Observation**
2. **Explanation**
3. **Impact**
4. **Recommendation**
5. **Caveat**

The core framework is:

```text
Observation -> Explanation -> Impact -> Recommendation
```

A stronger version also includes uncertainty:

```text
Observation
    +
Possible Explanation
    +
Business Impact
    +
Recommended Action
    +
Caveat or Validation Step
```

---

## 4. Observation vs. Insight

An observation describes what is visible in the data.

An insight explains why the observation matters.

### Observation

> Customers with less than three months of tenure have the highest churn rate.

This statement describes a pattern, but it does not explain the business meaning.

### Better Insight

> Customers with less than three months of tenure have the highest churn rate, suggesting that the early customer experience may not provide enough value. Because acquisition costs may not be recovered before these customers leave, the company should improve onboarding and introduce early retention campaigns.

### Stronger Insight with a Caveat

> Customers with less than three months of tenure have the highest churn rate, suggesting that the early customer experience may not provide enough value. Because acquisition costs may not be recovered before these customers leave, the company should improve onboarding and introduce early retention campaigns. However, this relationship should be validated after controlling for contract type, pricing plan, and acquisition channel.

---

## 5. The Insight Writing Framework

### 5.1 Observation

The observation states what the data shows.

It should be:

* Specific
* Measurable
* Supported by evidence
* Relevant to the analysis question

Weak observation:

> Some customers are leaving.

Better observation:

> The churn rate is 38% among month-to-month customers, compared with 12% among customers with annual contracts.

Useful evidence may include:

* Percentages
* Counts
* Averages
* Medians
* Differences between groups
* Trends over time
* Correlations
* Confidence intervals
* Model metrics

---

### 5.2 Explanation

The explanation describes a possible reason for the observed pattern.

This explanation should be presented carefully.

Use language such as:

* This may indicate that...
* One possible explanation is...
* This pattern is consistent with...
* The result suggests that...
* Further analysis is required to confirm...

Avoid unsupported statements such as:

> High prices caused customers to leave.

Unless the analysis uses a valid causal method, a safer statement is:

> Higher monthly charges are associated with higher churn, which may indicate price sensitivity or differences in customer plans.

---

### 5.3 Business Impact

The business impact explains why the finding matters.

Common types of impact include:

* Revenue loss
* Customer retention
* Operational cost
* Conversion rate
* Product adoption
* Customer satisfaction
* Risk exposure
* Model performance
* Resource allocation
* Process efficiency

Example:

> High churn among new customers may reduce customer lifetime value and prevent the company from recovering acquisition costs.

---

### 5.4 Recommendation

The recommendation suggests an appropriate next action.

A useful recommendation should be:

* Connected to the finding
* Realistic
* Specific
* Measurable
* Testable

Weak recommendation:

> The company should improve customer experience.

Better recommendation:

> Introduce a 30-day onboarding program for new month-to-month customers and measure whether it reduces three-month churn.

---

### 5.5 Caveat

The caveat documents uncertainty, limitations, or assumptions.

Common caveats include:

* Small sample size
* Missing values
* Selection bias
* Measurement error
* Imbalanced groups
* Confounding variables
* Data leakage
* Historical data limitations
* Correlation without causation
* Outliers
* Incomplete customer records

Example:

> This analysis uses historical observational data, so the relationship between monthly charges and churn should not be interpreted as causal.

---

## 6. Insight Writing Workflow

Insight writing should be integrated into the EDA workflow rather than added only at the end.

```text
Business Question
        |
        v
Inspect and Clean Data
        |
        v
Calculate Metrics
        |
        v
Create Charts and Tables
        |
        v
Identify Important Patterns
        |
        v
Validate the Patterns
        |
        v
Write Insights
        |
        v
Recommend Actions
        |
        v
Document Caveats
```

A strong analyst repeatedly moves between analysis and interpretation.

```text
Explore Data
     |
     v
Find Pattern
     |
     v
Ask Why
     |
     v
Validate with Data
     |
     v
Write Insight
     |
     v
Identify Next Analysis
```

---

## 7. Evidence Before Interpretation

Every insight should be supported by evidence.

Examples of evidence include:

### Chart Evidence

> The churn-rate bar chart shows that month-to-month customers have a churn rate approximately three times higher than annual-contract customers.

### Table Evidence

| Contract Type  | Customers | Churn Rate |
| -------------- | --------: | ---------: |
| Month-to-month |     2,500 |        38% |
| One year       |     1,200 |        15% |
| Two years      |       900 |         7% |

### Statistical Evidence

> The median monthly charge for churned customers is higher than the median for retained customers.

### Model Evidence

> The feature-importance analysis identifies tenure, contract type, and monthly charges as the strongest churn predictors.

An insight should reference the evidence that supports it.

---

## 8. A Practical Insight Formula

Use the following formula when writing an insight:

```text
[Observation with evidence],
which may indicate [possible explanation].
This matters because [business impact].
Therefore, [recommended action].
However, [caveat or validation requirement].
```

### Example

> Customers with month-to-month contracts have a churn rate of 38%, compared with 7% among customers with two-year contracts. This may indicate that customers with low switching costs are less committed to the service. Because this group represents a large share of the customer base, reducing its churn could significantly improve recurring revenue. The company should test incentives that encourage suitable customers to move to longer contracts. However, the analysis should control for tenure and monthly charges before concluding that contract type is the main driver.

---

## 9. Levels of Insight Quality

### Level 1: Chart Description

> Monthly charges are higher for churned customers.

This only describes the chart.

### Level 2: Quantified Observation

> Churned customers have a median monthly charge of $79, compared with $61 for retained customers.

This provides useful evidence.

### Level 3: Interpretation

> Churned customers have a median monthly charge of $79, compared with $61 for retained customers, suggesting that price sensitivity may contribute to churn.

This adds meaning.

### Level 4: Business Impact

> Churned customers have a median monthly charge of $79, compared with $61 for retained customers, suggesting that price sensitivity may contribute to churn. This may reduce customer lifetime value among premium-plan users.

This connects the finding to a consequence.

### Level 5: Actionable Insight

> Churned customers have a median monthly charge of $79, compared with $61 for retained customers, suggesting that price sensitivity may contribute to churn. This may reduce customer lifetime value among premium-plan users. The company should test targeted discounts or plan recommendations for high-charge, low-tenure customers.

This supports a decision.

### Level 6: Actionable Insight with Caveat

> Churned customers have a median monthly charge of $79, compared with $61 for retained customers, suggesting that price sensitivity may contribute to churn. This may reduce customer lifetime value among premium-plan users. The company should test targeted discounts or plan recommendations for high-charge, low-tenure customers. However, monthly charges may also reflect differences in service type, so the relationship should be evaluated within comparable customer segments.

This is the strongest version.

---

## 10. Customer Churn Example

Suppose an EDA project produces the following findings:

* Overall churn rate: 26%
* Month-to-month churn rate: 42%
* Two-year contract churn rate: 8%
* Customers with fewer than six months of tenure have the highest churn
* Customers with more support calls also have higher churn

### Insight 1: Contract Type

> Customers on month-to-month contracts have a churn rate of 42%, compared with 8% for customers on two-year contracts. This suggests that customers with fewer contractual commitments have lower switching costs. Because month-to-month customers represent a large portion of the customer base, this segment creates substantial recurring-revenue risk. The company should test contract-upgrade incentives for satisfied month-to-month customers. However, contract type may be related to tenure and customer profile, so the result should be validated using segmented analysis or a predictive model.

### Insight 2: Early Customer Churn

> Customers with fewer than six months of tenure have the highest churn rate. This may indicate weaknesses in onboarding, early product adoption, or expectation management. Early churn is especially costly because the company may lose customers before recovering acquisition expenses. The retention team should introduce onboarding checkpoints during the first 30, 60, and 90 days. The effect of the program should be evaluated using a controlled experiment.

### Insight 3: Support Calls

> Customers who contact support frequently have higher churn rates than customers with few support interactions. This pattern may indicate unresolved product problems or poor service experiences. Repeated support contacts increase operational costs while also placing revenue at risk. The company should identify the most common issues among high-contact customers and create an escalation process for repeated complaints. However, support-call volume may be a symptom of another issue rather than the direct cause of churn.

---

## 11. Insight Writing for Different Chart Types

### 11.1 Histogram

A histogram helps describe a numerical distribution.

Weak statement:

> The distribution is right-skewed.

Better insight:

> Customer spending is strongly right-skewed, with most customers spending less than $100 per month and a small group spending substantially more. The mean may therefore overstate typical spending, so the median should be used when reporting the central customer experience.

---

### 11.2 Bar Chart

A bar chart compares categories.

Weak statement:

> Category A is higher than Category B.

Better insight:

> The mobile acquisition channel has a 14% conversion rate, compared with 8% for paid search. This suggests that mobile users may have stronger purchase intent or experience a more effective funnel. Marketing should investigate whether budget can be shifted toward mobile acquisition without increasing customer-acquisition cost.

---

### 11.3 Boxplot

A boxplot compares distributions and outliers.

Weak statement:

> There are many outliers.

Better insight:

> Delivery times for the northern region have a wider interquartile range and more extreme delays than other regions. This indicates less consistent operational performance, which may reduce customer satisfaction. The logistics team should investigate carrier performance and weather-related disruptions in this region.

---

### 11.4 Scatter Plot

A scatter plot shows the relationship between two numerical variables.

Weak statement:

> Advertising and sales are positively correlated.

Better insight:

> Sales generally increase with advertising spend, but the relationship becomes weaker at high spending levels. This may indicate diminishing returns. The marketing team should estimate the point at which additional spending no longer produces sufficient incremental revenue.

---

### 11.5 Heatmap

A correlation heatmap shows the strength of relationships among numerical variables.

Weak statement:

> Tenure and total charges have high correlation.

Better insight:

> Tenure and total charges have a correlation of 0.83, indicating that they contain substantial overlapping information. When using linear or logistic regression, including both variables may increase multicollinearity. The modeling pipeline should evaluate variance inflation factors or select one of the variables.

---

### 11.6 Pairplot

A pairplot displays multiple feature relationships.

Weak statement:

> The classes look different.

Better insight:

> Churned customers are concentrated in the region combining short tenure and high monthly charges, while retained customers are more widely distributed across longer tenure values. This suggests that pricing dissatisfaction may be especially important during the early customer lifecycle. A targeted retention intervention should focus on high-charge customers during their first six months.

---

## 12. Writing for Different Audiences

The same finding may need different wording for different audiences.

### Technical Audience

> Monthly charges remain positively associated with churn after segmenting by contract type. However, the groups are imbalanced, and the relationship should be validated using logistic regression with interaction terms.

### Business Audience

> High monthly charges are linked to greater churn even among customers with similar contract types. Pricing and plan value should be reviewed for high-charge customer segments.

### Executive Audience

> High-charge customers are leaving at a higher rate, creating a recurring-revenue risk. A targeted pricing and retention test is recommended.

Good insight writing adjusts detail without changing the underlying evidence.

---

## 13. Quantifying Insights

Whenever possible, replace vague language with numbers.

Weak:

> Many new customers leave.

Better:

> Customers in their first three months have a churn rate of 46%.

Weak:

> Sales increased significantly.

Better:

> Sales increased by 18% compared with the previous quarter.

Weak:

> Group A performs better than Group B.

Better:

> Group A has a conversion rate of 12.4%, which is 3.1 percentage points higher than Group B.

Useful quantities include:

* Absolute differences
* Percentage differences
* Percentage-point differences
* Ratios
* Rates
* Counts
* Medians
* Confidence intervals
* Effect sizes

---

## 14. Percentage vs. Percentage-Point Difference

These concepts should not be confused.

Suppose conversion increases from 10% to 15%.

### Percentage-Point Increase

$$
15% - 10% = 5 \text{ percentage points}
$$

### Relative Percentage Increase

$$
\frac{15% - 10%}{10%} \times 100 = 50%
$$

Correct statement:

> Conversion increased by 5 percentage points, representing a 50% relative increase.

Using precise language prevents misleading reports.

---

## 15. Correlation Is Not Causation

EDA usually identifies associations rather than causal effects.

A correlation may be influenced by:

* Confounding variables
* Reverse causality
* Selection bias
* Time trends
* Measurement problems
* Data leakage

Unsafe statement:

> Support calls cause churn.

Safer statement:

> Customers with more support calls have higher churn rates. This may indicate unresolved service issues, but the analysis does not establish that support calls directly cause churn.

Causal claims usually require stronger methods, such as:

* Randomized experiments
* Natural experiments
* Difference-in-differences
* Instrumental variables
* Regression discontinuity
* Carefully designed causal models

---

## 16. Insight Writing and Data Quality

An insight is only as reliable as the data supporting it.

Before reporting a finding, consider:

* Are important values missing?
* Are categories recorded consistently?
* Are duplicated records present?
* Are data types correct?
* Is the sample representative?
* Are there extreme outliers?
* Is the time period appropriate?
* Has future information leaked into the analysis?
* Are subgroup sizes large enough?

Example caveat:

> The churn field is missing for 9% of customers, and missingness is concentrated among recent sign-ups. The estimated early churn rate may therefore be biased.

---

## 17. Insight Writing and Sample Size

A large percentage difference may not be reliable when based on a small sample.

Example:

| Segment   | Customers | Churn Rate |
| --------- | --------: | ---------: |
| Segment A |     2,000 |        24% |
| Segment B |        12 |        50% |

A weak statement would be:

> Segment B is the highest-risk segment.

A better statement would be:

> Segment B has a churn rate of 50%, but the result is based on only 12 customers. The segment should not be prioritized until additional observations are collected or uncertainty is quantified.

For small samples, consider reporting:

* Counts
* Confidence intervals
* Statistical tests
* Minimum sample requirements

---

## 18. Ranking Insights

Not every finding deserves the same attention.

Insights can be prioritized using:

```text
Priority = Business Impact x Evidence Strength x Actionability
```

### High-Priority Insight

* Strong evidence
* Large business impact
* Clear action
* Relevant to the business question

### Low-Priority Insight

* Weak evidence
* Small or unclear impact
* No realistic action
* Unrelated to the main question

A useful prioritization table is:

| Insight                    | Evidence Strength | Business Impact | Actionability | Priority |
| -------------------------- | ----------------- | --------------- | ------------- | -------- |
| Early-tenure churn         | High              | High            | High          | Critical |
| Regional age difference    | Medium            | Low             | Low           | Low      |
| Support-call churn pattern | Medium            | High            | High          | High     |

---

## 19. Common Insight Formats

### 19.1 One-Sentence Insight

> New month-to-month customers have the highest churn rate, suggesting that onboarding and early retention should be prioritized.

### 19.2 Executive Insight

> Churn is concentrated among high-charge customers during their first six months. A targeted onboarding and pricing intervention could reduce early revenue loss.

### 19.3 Detailed Analytical Insight

> Customers with fewer than six months of tenure and monthly charges above $80 have a churn rate of 51%, compared with the overall rate of 26%. This suggests that early-stage customers may not perceive enough value for the price they pay. Because this group leaves before generating substantial lifetime value, the company should test onboarding support and plan recommendations for high-charge customers. This analysis is observational and should be validated using a controlled retention experiment.

### 19.4 Insight with Next Question

> Customers using electronic checks have higher churn than customers using automatic payment methods. This may reflect payment friction, but it could also be related to customer age or contract type. The next analysis should compare payment methods within similar customer segments.

---

## 20. Reusable Insight Template

Use this template in notebooks and reports:

```markdown
### Insight: [Short Title]

**Observation:**  
[Describe the measurable pattern.]

**Evidence:**  
[Include the metric, chart, table, or statistical result.]

**Interpretation:**  
[Explain what the pattern may mean.]

**Business Impact:**  
[Explain why the finding matters.]

**Recommendation:**  
[Propose a specific and testable action.]

**Caveat:**  
[Document assumptions, limitations, or uncertainty.]

**Next Question:**  
[State what should be investigated next.]
```

### Example

```markdown
### Insight: Early-Tenure Customers Are at High Risk

**Observation:**  
Customers with fewer than six months of tenure have a churn rate of 44%.

**Evidence:**  
The overall churn rate is 26%, while customers with more than two years
of tenure have a churn rate of 11%.

**Interpretation:**  
The early customer experience may not provide enough value or support.

**Business Impact:**  
The company may lose customers before recovering acquisition costs.

**Recommendation:**  
Introduce a structured 90-day onboarding program and evaluate its effect
using an A/B test.

**Caveat:**  
The analysis does not control for contract type, monthly charges, or
acquisition channel.

**Next Question:**  
Which onboarding steps are most strongly associated with customer retention?
```

---

## 21. Python Example: Producing Evidence

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

summary = (
    df.groupby("contract_type", dropna=False)
      .agg(
          customers=("customer_id", "count"),
          churn_rate=("churn", "mean"),
          average_monthly_charge=("monthly_charges", "mean")
      )
      .reset_index()
)

summary["churn_rate"] = summary["churn_rate"] * 100

print(summary)
```

Example output:

| Contract Type  | Customers | Churn Rate | Average Monthly Charge |
| -------------- | --------: | ---------: | ---------------------: |
| Month-to-month |     2,500 |      42.0% |                  74.50 |
| One year       |     1,200 |      15.0% |                  65.20 |
| Two years      |       900 |       8.0% |                  60.80 |

Possible insight:

> Month-to-month customers have a churn rate of 42%, more than five times the rate of two-year customers. This suggests that customers with low contractual commitment are more likely to leave. The company should test incentives that encourage suitable customers to adopt longer contracts, while monitoring whether discounts reduce revenue per customer.

---

## 22. Insight Writing for Machine Learning

Insight writing also applies to model analysis.

### Model Performance Insight

Weak:

> The model has 90% accuracy.

Better:

> The model achieves 90% accuracy, but recall for the churn class is only 61%. This means the model misses approximately four out of ten customers who later churn. Because missed churners cannot receive retention interventions, recall should be improved before deployment.

### Feature Importance Insight

Weak:

> Tenure is the most important feature.

Better:

> Tenure is the strongest predictor in the churn model, followed by contract type and monthly charges. This is consistent with the EDA finding that early-stage, flexible-contract customers are at greater risk. However, feature importance does not prove causal influence.

### Model Comparison Insight

> The gradient-boosting model improves churn recall from 68% to 79% compared with logistic regression, while precision decreases from 72% to 67%. This trade-off may be acceptable if the cost of missing a churner is greater than the cost of contacting a customer who would have stayed.

---

## 23. Insight Writing for Experiments

Experiment insights should include:

* Control and treatment results
* Absolute and relative changes
* Confidence intervals
* Statistical significance
* Practical significance
* Recommendation
* Limitations

Example:

> The new onboarding flow increased 30-day retention from 64% to 68%, an improvement of 4 percentage points or 6.25% relative. The confidence interval excludes zero, suggesting that the increase is unlikely to be caused by random variation. Because the implementation cost is low and no negative effect on activation was observed, the new flow should be gradually rolled out. The experiment should continue to monitor longer-term retention and customer-support demand.

---

## 24. Common Mistakes

### Mistake 1: Describing the Chart Only

Weak:

> The blue bar is higher than the orange bar.

Better:

> The enterprise segment has a renewal rate 12 percentage points higher than the small-business segment, suggesting that product value or switching costs differ between the groups.

---

### Mistake 2: Using Vague Language

Weak:

> A lot of users leave early.

Better:

> Forty-four percent of customers who leave do so within their first three months.

---

### Mistake 3: Making Unsupported Causal Claims

Weak:

> High prices cause churn.

Better:

> Higher monthly charges are associated with greater churn, although contract type and service package may explain part of the relationship.

---

### Mistake 4: Recommending Actions Without Evidence

Weak:

> The company should offer discounts.

Better:

> Because high-charge, low-tenure customers show the highest churn rate, the company should test targeted plan recommendations or limited discounts for this segment.

---

### Mistake 5: Ignoring the Business Question

Interesting patterns are not always relevant.

Before reporting an insight, ask:

> Does this finding help answer the original business question?

---

### Mistake 6: Ignoring Sample Size

A large difference based on a very small group may be unreliable.

Always include both:

* Percentage
* Number of observations

---

### Mistake 7: Reporting Too Many Insights

A report with twenty equally weighted findings is difficult to use.

Prioritize:

* Three to five major insights
* Supporting evidence
* Clear recommendations

---

### Mistake 8: Hiding Caveats

Caveats do not weaken a report. They make the analysis more trustworthy.

---

### Mistake 9: Writing Recommendations That Cannot Be Tested

Weak:

> Improve retention.

Better:

> Test a 90-day onboarding program for new month-to-month customers and compare churn with a control group.

---

### Mistake 10: Writing Insights Before Validating the Data

Always check:

* Missing values
* Duplicates
* Invalid categories
* Outliers
* Date ranges
* Group sizes
* Metric definitions

---

## 25. Practical Exercise

Use a small CSV dataset, such as a customer churn dataset.

### Task 1: Define the Business Question

Example:

> Which customer groups have the highest churn risk, and what actions could reduce it?

### Task 2: Load and Inspect the Data

```python
import pandas as pd

df = pd.read_csv("customer_churn.csv")

print(df.head())
print(df.info())
print(df.isna().sum())
print(df.duplicated().sum())
```

### Task 3: Create Relevant Metrics

Calculate:

* Overall churn rate
* Churn rate by contract type
* Churn rate by tenure group
* Churn rate by payment method
* Average monthly charges by churn status

### Task 4: Create Visualizations

Create at least three charts:

* Bar chart
* Boxplot
* Heatmap or pairplot

### Task 5: Write Three Insights

Each insight should include:

1. Observation
2. Evidence
3. Explanation
4. Business impact
5. Recommendation
6. Caveat
7. Next question

### Task 6: Rank the Insights

Classify each insight as:

* Critical
* High
* Medium
* Low

---

## 26. Suggested Notebook Structure

```text
01. Business Question
02. Dataset Description
03. Data Quality Checks
04. Data Cleaning
05. Metric Definitions
06. Exploratory Visualizations
07. Key Finding 1
08. Key Finding 2
09. Key Finding 3
10. Recommendations
11. Caveats and Assumptions
12. Next Analysis Questions
13. Executive Summary
```

---

## 27. Insight Review Checklist

Before finalizing an insight, ask:

### Evidence

* Is the statement supported by data?
* Did I include a metric or comparison?
* Is the sample size sufficient?
* Did I verify the calculation?

### Interpretation

* Did I explain what the pattern may mean?
* Did I avoid unsupported causal language?
* Did I consider alternative explanations?

### Business Relevance

* Does the insight answer the business question?
* Did I explain why the finding matters?
* Is the potential impact meaningful?

### Recommendation

* Is the recommended action connected to the evidence?
* Is the action realistic?
* Can the action be measured or tested?

### Caveats

* Did I mention important assumptions?
* Did I identify data-quality limitations?
* Did I state what further analysis is required?

---

## 28. Completion Checklist

* [ ] I can explain insight writing in one or two minutes.
* [ ] I understand the difference between an observation and an insight.
* [ ] I can write an insight using evidence from a chart or table.
* [ ] I can connect a finding to business impact.
* [ ] I can provide a specific and testable recommendation.
* [ ] I can document assumptions and caveats.
* [ ] I avoid confusing correlation with causation.
* [ ] I include sample size when interpreting percentages.
* [ ] I can adapt insight writing for technical and business audiences.
* [ ] I have written at least three complete insights for a real dataset.
* [ ] I have identified at least one follow-up analysis question.

---

## 29. Related Outcome

Understand, clean, visualize, and explain datasets using business-oriented insights.

---

## 30. Related Project

### Mini Project: Customer Churn EDA

Build a complete customer churn analysis containing:

* Business-question definition
* Dataset schema inspection
* Missing-value handling
* Duplicate handling
* Distribution analysis
* Churn analysis by customer segment
* Relationship analysis
* At least three visualizations
* At least three complete insights
* Ranked business recommendations
* Assumptions and limitations
* An executive summary

Each insight should follow this structure:

```text
Evidence
   |
   v
Observation
   |
   v
Interpretation
   |
   v
Business Impact
   |
   v
Recommendation
   |
   v
Caveat and Next Question
```

Suggested portfolio artifacts:

* Reproducible Jupyter Notebook
* Cleaned dataset or cleaning script
* Insight report
* Dashboard or chart collection
* README with findings and recommendations

---

## 31. Summary

**Insight writing** transforms analytical outputs into information that supports decisions.

A strong insight does not stop at:

> The chart increased.

Instead, it explains:

* What changed
* How large the change was
* What may explain the change
* Why the change matters
* What should be done
* What uncertainty remains

The recommended framework is:

```text
Observation
    |
    v
Evidence
    |
    v
Explanation
    |
    v
Business Impact
    |
    v
Recommendation
    |
    v
Caveat
```

The final goal of EDA is not to produce as many charts as possible. The goal is to communicate reliable findings that help people understand a problem, evaluate alternatives, and take appropriate action.

Turn this lesson into a reproducible notebook, insight report, dashboard summary, experiment analysis, model report, or portfolio case study.
