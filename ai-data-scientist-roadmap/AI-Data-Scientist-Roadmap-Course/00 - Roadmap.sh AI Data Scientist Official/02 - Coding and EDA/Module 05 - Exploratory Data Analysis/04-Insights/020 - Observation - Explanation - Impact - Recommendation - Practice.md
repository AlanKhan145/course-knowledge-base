# 020 - Observation → Explanation → Impact → Recommendation

**Course:** 02 - Coding and EDA
**Module:** Module 05 - Exploratory Data Analysis
**Content Group:** Insight Reporting
**Roadmap Source:** Exploratory Data Analysis / Insight Reporting
**Lesson Type:** Exploratory Data Analysis
**Lesson Order:** 020
**Suggested Duration:** 20 minutes

---

## 1. Summary

This lesson explains the **Observation → Explanation → Impact → Recommendation**, or **OEIR**, framework in the context of AI and Data Science.

The framework helps transform raw analytical findings into clear, business-oriented insights.

A chart or metric alone does not automatically provide useful insight. A complete insight should explain:

1. **What happened?**
2. **Why might it have happened?**
3. **Why does it matter?**
4. **What should be done next?**

The framework can be used in:

* Exploratory Data Analysis reports
* Business intelligence dashboards
* Machine learning experiments
* Model evaluation reports
* Product analytics
* A/B testing
* Data quality investigations
* Portfolio projects

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain the OEIR framework in your own words.
* Distinguish an observation from an explanation.
* Connect analytical findings to business or model impact.
* Write recommendations that are specific and actionable.
* Apply the framework to a dataset, notebook, dashboard, experiment, or model report.
* Communicate uncertainty, assumptions, and limitations clearly.

---

## 3. Why This Framework Matters

Exploratory Data Analysis often produces many outputs:

* Tables
* Charts
* Summary statistics
* Correlations
* Outliers
* Missing-value reports
* Segment comparisons

However, stakeholders usually do not need more charts. They need answers that support decisions.

Compare the following statements.

### Weak insight

> Customers with monthly contracts have a higher churn rate.

This is only an observation. It does not explain why the pattern may exist, why it matters, or what action should be taken.

### Strong insight

> Customers with monthly contracts have a churn rate of 42%, compared with 11% for customers on annual contracts. One possible explanation is that monthly customers face lower cancellation costs and may have weaker long-term commitment. Because this group represents 38% of the customer base, it contributes substantially to total customer loss and recurring revenue risk. The company should test retention incentives that encourage high-risk monthly customers to switch to longer contracts.

The second version supports a decision because it contains all four OEIR components.

---

## 4. The OEIR Framework

```text
Observation
    ↓
Explanation
    ↓
Impact
    ↓
Recommendation
```

A more complete analytical workflow is:

```text
Business question
       ↓
Data collection
       ↓
Data quality checks
       ↓
Exploratory analysis
       ↓
Observation
       ↓
Possible explanation
       ↓
Business or model impact
       ↓
Actionable recommendation
       ↓
Validation and monitoring
```

---

## 5. Observation

### 5.1 Definition

An **observation** is a factual pattern found in the data.

It describes what the analysis shows without immediately making assumptions about the cause.

Observations may describe:

* Differences between groups
* Trends over time
* Unusual values
* Correlations
* Changes in a metric
* Data quality problems
* Model performance differences
* Customer behavior patterns

### 5.2 Characteristics of a Good Observation

A good observation should be:

* Specific
* Measurable
* Supported by data
* Relevant to the analytical question
* Clear about the comparison group or time period

### 5.3 Weak Observation

> Churn is high.

This statement is too vague.

### 5.4 Better Observation

> The churn rate is 31.4%, and customers with monthly contracts churn at 42%, compared with 11% for customers with annual contracts.

This version includes:

* A metric
* A comparison
* A relevant customer segment

### 5.5 Useful Observation Template

```text
[Metric] for [group or period] is [value],
compared with [comparison value] for [reference group or period].
```

Example:

> Average order value for mobile users is $38, compared with $54 for desktop users.

---

## 6. Explanation

### 6.1 Definition

An **explanation** describes why the observed pattern may exist.

The explanation should be based on:

* Additional evidence in the dataset
* Domain knowledge
* Previous experiments
* User research
* Operational context
* Relevant external factors

An explanation is often a hypothesis rather than a confirmed cause.

### 6.2 Correlation Is Not Causation

Suppose monthly-contract customers have higher churn.

The data may show an association between contract type and churn, but it does not automatically prove that monthly contracts cause churn.

Possible alternative explanations include:

* Monthly customers are newer.
* Monthly customers pay higher prices.
* Monthly customers receive fewer benefits.
* Dissatisfied customers avoid long-term contracts.
* A third variable affects both contract type and churn.

Therefore, use careful language.

### 6.3 Recommended Language

Use phrases such as:

* “This may be explained by…”
* “One possible explanation is…”
* “The pattern is associated with…”
* “A likely contributing factor is…”
* “Further analysis is required to confirm whether…”

Avoid unsupported statements such as:

* “This proves that…”
* “The exact reason is…”
* “This variable causes…”

### 6.4 Explanation Template

```text
One possible explanation is [hypothesis],
supported by [additional evidence].
```

Example:

> One possible explanation is that mobile checkout is more difficult, supported by the higher cart-abandonment rate and longer checkout duration among mobile users.

---

## 7. Impact

### 7.1 Definition

The **impact** explains why the observation matters.

An impact can affect:

* Revenue
* Cost
* Customer retention
* Conversion
* Operational efficiency
* Product experience
* Risk
* Fairness
* Model accuracy
* Deployment reliability
* Business strategy

### 7.2 Questions to Ask

* How many users or records are affected?
* What percentage of revenue is exposed?
* Does the pattern reduce model quality?
* Does it create operational risk?
* Does it affect an important customer segment?
* Is the issue increasing over time?
* Could it lead to incorrect business decisions?

### 7.3 Weak Impact Statement

> This is important for the business.

### 7.4 Better Impact Statement

> Monthly-contract customers represent 38% of active customers and generate approximately 34% of recurring revenue. Their high churn rate therefore creates a substantial retention and revenue risk.

### 7.5 Impact Template

```text
This matters because [affected group or process]
represents [size or value], which may lead to [business or technical consequence].
```

---

## 8. Recommendation

### 8.1 Definition

A **recommendation** proposes what should happen next based on the evidence.

A recommendation may suggest:

* A product change
* A business experiment
* Additional analysis
* A data-quality correction
* A model improvement
* A monitoring rule
* A targeted campaign
* A process change

### 8.2 Characteristics of a Good Recommendation

A good recommendation should be:

* Specific
* Actionable
* Connected to the observation
* Realistic
* Measurable
* Testable when possible
* Clear about the target group

### 8.3 Weak Recommendation

> The company should reduce churn.

### 8.4 Better Recommendation

> Run an A/B test offering a discounted annual-contract upgrade to monthly customers with high churn-risk scores. Measure upgrade rate, 90-day retention, revenue per user, and incentive cost.

### 8.5 Recommendation Template

```text
We recommend [specific action]
for [target segment or process].

Measure success using [metric]
over [time period].
```

---

## 9. Complete OEIR Example

### Business Question

Which customer segments have the highest churn risk?

### Observation

> Customers with monthly contracts have a churn rate of 42%, compared with 11% for customers with annual contracts. They also contact customer support more frequently and have shorter average tenure.

### Explanation

> One possible explanation is that monthly customers have lower switching costs and weaker long-term commitment. Their higher support-contact frequency may also indicate unresolved service problems.

### Impact

> Monthly-contract customers account for 38% of active customers and approximately one-third of recurring revenue. Their high churn rate therefore creates a significant revenue and customer-lifetime-value risk.

### Recommendation

> Prioritize monthly customers with short tenure and repeated support contacts for a retention experiment. Test annual-plan incentives, proactive support outreach, and onboarding improvements. Evaluate the experiment using churn rate, plan-upgrade rate, customer satisfaction, and net revenue retention.

---

## 10. Example Insight Table

| Component      | Example                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------ |
| Observation    | Monthly-contract customers churn at 42%, compared with 11% for annual-contract customers.        |
| Explanation    | Monthly customers may have lower switching costs and weaker commitment.                          |
| Impact         | The segment represents 38% of customers and contributes substantially to recurring revenue loss. |
| Recommendation | Test annual-plan incentives and proactive support for high-risk monthly customers.               |

---

## 11. Python Demo

Assume the dataset contains the following columns:

* `customer_id`
* `contract_type`
* `monthly_charge`
* `support_calls`
* `tenure_months`
* `churn`

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv("customer_churn.csv")

# Calculate churn rate by contract type
churn_by_contract = (
    df.groupby("contract_type")["churn"]
    .mean()
    .mul(100)
    .sort_values(ascending=False)
)

print(churn_by_contract)

# Visualize the result
ax = churn_by_contract.plot(
    kind="bar",
    title="Churn Rate by Contract Type"
)

ax.set_xlabel("Contract Type")
ax.set_ylabel("Churn Rate (%)")

plt.xticks(rotation=0)
plt.tight_layout()
plt.show()
```

Possible output:

```text
contract_type
Monthly    42.0
Annual     11.0
```

---

## 12. Turning the Demo into an Insight

### Observation

> The monthly-contract segment has a churn rate of 42%, which is 31 percentage points higher than the annual-contract segment.

### Explanation

> One possible explanation is that monthly customers have lower cancellation barriers. This should be investigated together with tenure, price, support usage, and satisfaction data.

### Impact

> Because monthly customers represent a large part of the customer base, the segment may contribute disproportionately to customer and revenue loss.

### Recommendation

> Build a churn-risk segmentation model for monthly customers and run a controlled retention experiment focused on contract upgrades and service-quality improvements.

---

## 13. Adding Supporting Evidence

A strong explanation should be checked against additional variables.

```python
support_summary = (
    df.groupby("contract_type")
    .agg(
        churn_rate=("churn", "mean"),
        average_support_calls=("support_calls", "mean"),
        average_tenure=("tenure_months", "mean"),
        average_monthly_charge=("monthly_charge", "mean"),
        customer_count=("customer_id", "nunique")
    )
)

support_summary["churn_rate"] *= 100

print(support_summary)
```

This analysis may help answer questions such as:

* Do monthly customers contact support more often?
* Do they have shorter tenure?
* Do they pay higher monthly charges?
* Is the segment large enough to matter?
* Does the pattern remain after controlling for other variables?

---

## 14. OEIR for Machine Learning

The framework is also useful when reporting model results.

### Example: Model Performance

#### Observation

> The churn model achieves an overall recall of 82%, but recall falls to 61% for customers with fewer than three months of tenure.

#### Explanation

> New customers may have limited behavioral history, resulting in fewer useful features for prediction.

#### Impact

> The model misses nearly four out of ten early-churn customers, reducing the effectiveness of onboarding retention campaigns.

#### Recommendation

> Create early-lifecycle features, train a separate model for new customers, and evaluate recall for the low-tenure segment before deployment.

---

## 15. OEIR for Data Quality

### Observation

> Approximately 18% of records are missing the `customer_region` value.

### Explanation

> Missingness is concentrated in records imported from a legacy customer-management system.

### Impact

> Regional performance reports may undercount customers from older records and produce biased comparisons between regions.

### Recommendation

> Add a source-specific validation rule, backfill the region from customer addresses where possible, and report regional metrics with a missing-data warning until coverage improves.

---

## 16. OEIR for A/B Testing

### Observation

> Variant B increased conversion from 8.1% to 8.7%, but the confidence interval includes zero.

### Explanation

> The observed difference may be caused by random variation because the test sample is relatively small.

### Impact

> Launching Variant B immediately may introduce engineering and operational costs without reliable evidence of improvement.

### Recommendation

> Continue the experiment until the required sample size is reached or redesign the test around a larger expected effect. Do not declare a winner based only on the current point estimate.

---

## 17. Distinguishing Evidence from Hypothesis

An insight report should separate facts from interpretations.

| Statement                                             | Type                     |
| ----------------------------------------------------- | ------------------------ |
| Monthly customers have a churn rate of 42%.           | Observation              |
| Monthly contracts cause customers to churn.           | Unsupported causal claim |
| Lower switching costs may contribute to higher churn. | Hypothesis               |
| Monthly customers generate 34% of recurring revenue.  | Impact evidence          |
| Test annual-plan incentives for this segment.         | Recommendation           |

A useful writing pattern is:

```text
The data shows...
One possible explanation is...
This matters because...
We recommend...
```

---

## 18. Insight Quality Levels

### Level 1: Description

> Churn is higher among monthly customers.

### Level 2: Quantified Observation

> Monthly customers churn at 42%, compared with 11% for annual customers.

### Level 3: Explanation

> The difference may be related to lower switching costs and shorter customer tenure.

### Level 4: Impact

> The segment represents 38% of the customer base, creating substantial recurring-revenue exposure.

### Level 5: Recommendation

> Test targeted annual-contract incentives and proactive support for high-risk monthly customers.

A complete analytical insight should normally aim for Levels 4 or 5.

---

## 19. Common Mistakes

### 19.1 Reporting Charts Without Insights

A chart shows a pattern, but the analyst does not explain what it means.

**Better approach:** Write at least one OEIR statement for every important chart.

---

### 19.2 Treating Correlation as Causation

The analyst assumes that a correlated variable directly causes the outcome.

**Better approach:** Use cautious language and propose validation through experiments or causal analysis.

---

### 19.3 Giving Generic Recommendations

Example:

> Improve customer satisfaction.

This recommendation is too broad.

**Better approach:** Specify the segment, action, metric, and test.

---

### 19.4 Ignoring Segment Size

A segment may have a high churn rate but contain very few customers.

**Better approach:** Report both rate and volume.

```text
Impact ≈ Segment size × Event rate × Business value
```

---

### 19.5 Ignoring Data Limitations

An explanation may depend on incomplete, biased, or outdated data.

**Better approach:** Include assumptions and caveats directly in the report.

---

### 19.6 Overloading One Insight

One paragraph may contain too many unrelated findings.

**Better approach:** Use one OEIR structure for each major analytical finding.

---

### 19.7 Recommending Action Without Validation

The proposed action may be expensive or risky.

**Better approach:** Recommend an experiment, pilot, or additional analysis before full deployment.

---

## 20. Caveats and Assumptions

A professional insight report should include limitations.

Example caveats:

* The analysis is observational and does not establish causality.
* The dataset covers only active customers from the previous 12 months.
* Customer satisfaction is not available in the current dataset.
* Missing values may affect segment comparisons.
* Revenue impact is estimated rather than directly measured.
* The recommendation should be validated through an experiment.
* Seasonal effects may influence the observed pattern.

Example statement:

> The relationship between contract type and churn is correlational. Further analysis or a controlled experiment is required before concluding that changing contract type will directly reduce churn.

---

## 21. Practical Exercise

Use a small CSV dataset and create a reproducible notebook.

Recommended datasets include:

* Customer churn
* E-commerce transactions
* Marketing campaigns
* Loan applications
* Employee attrition
* Product usage
* Website conversion

### Required Tasks

1. Load and inspect the dataset.
2. Define one business question.
3. Check missing values, duplicates, and data types.
4. Explore important distributions.
5. Compare at least two customer or record segments.
6. Create at least three charts or summary tables.
7. Write three insights using the OEIR framework.
8. Add one caveat or assumption to each insight.
9. Propose one experiment or follow-up analysis.

---

## 22. Suggested Notebook Structure

```text
1. Business Question
2. Dataset Overview
3. Data Quality Checks
4. Data Cleaning
5. Univariate Analysis
6. Segment Analysis
7. Relationship Analysis
8. OEIR Insights
9. Caveats and Assumptions
10. Recommendations
11. Next Steps
```

---

## 23. Insight Writing Template

Use the following template for each important finding.

```markdown
### Insight: [Short Insight Title]

**Observation:**  
[Describe the measurable pattern.]

**Explanation:**  
[Provide a possible explanation supported by evidence.]

**Impact:**  
[Explain why the pattern matters.]

**Recommendation:**  
[Propose a specific and measurable action.]

**Caveat:**  
[State a limitation, assumption, or unresolved question.]
```

---

## 24. Example Completed Insight

### Insight: High Churn Among Monthly Customers

**Observation:**
Monthly-contract customers have a churn rate of 42%, compared with 11% for annual-contract customers.

**Explanation:**
Monthly customers may have lower switching costs and weaker long-term commitment. They also have shorter average tenure and more frequent support interactions.

**Impact:**
This group represents 38% of the customer base and contributes approximately one-third of recurring revenue. Its high churn rate therefore creates substantial retention and revenue risk.

**Recommendation:**
Run a retention experiment targeting high-risk monthly customers. Test annual-plan discounts, proactive customer support, and improved onboarding. Measure churn, upgrade rate, customer satisfaction, and net revenue retention.

**Caveat:**
The analysis identifies an association, not a confirmed causal relationship. Customer satisfaction and competitor-pricing data are not available.

---

## 25. Completion Checklist

* [ ] I can explain the OEIR framework in one or two minutes.
* [ ] I can distinguish an observation from an explanation.
* [ ] My observations contain metrics or clear comparisons.
* [ ] My explanations are supported by evidence or presented as hypotheses.
* [ ] I explain the business or technical impact of each finding.
* [ ] My recommendations are specific and actionable.
* [ ] I include the target segment and success metrics.
* [ ] I avoid treating correlation as causation.
* [ ] I document assumptions, caveats, and data limitations.
* [ ] I have created a notebook, query, chart, dashboard, model report, or portfolio note for this lesson.

---

## 26. Related Outcome

Understand, clean, visualize, and explain datasets through business-oriented and actionable insights.

---

## 27. Related Project

### Mini Project: Customer Churn EDA

Build an exploratory analysis project that includes:

* Dataset schema and data dictionary
* Missing-value and duplicate handling
* Churn distribution
* Customer-segment comparisons
* Contract and payment analysis
* Support-contact analysis
* Churn-related feature exploration
* At least three OEIR insights
* Caveats and assumptions
* Business recommendations
* A reproducible notebook
* A concise insight report

Suggested final artifacts:

```text
customer-churn-eda/
├── data/
│   ├── raw/
│   └── processed/
├── notebooks/
│   └── churn_eda.ipynb
├── reports/
│   └── insight_report.md
├── figures/
├── src/
│   └── data_cleaning.py
├── requirements.txt
└── README.md
```

---

## 28. Key Takeaways

* An observation describes what the data shows.
* An explanation proposes why the pattern may exist.
* An impact explains why the finding matters.
* A recommendation defines what should happen next.
* Strong insights combine evidence, context, and action.
* Correlation should not be presented as causation.
* Recommendations should include a target, action, metric, and validation plan.
* Caveats increase the credibility of an analysis.
* The goal of EDA is not only to create charts, but also to support better decisions.

---

## 29. Conclusion

The **Observation → Explanation → Impact → Recommendation** framework transforms analytical findings into structured, decision-oriented insights.

Instead of stopping at:

> “The chart shows that churn is higher for monthly customers.”

A data scientist should continue by explaining:

* What the measured difference is
* What factors may explain it
* Why it matters to the business or model
* What action should be tested next

Use this framework in notebooks, dashboards, experiment reports, model evaluations, APIs, and portfolio projects so that your analysis produces not only information, but also clear and defensible recommendations.

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
