# 006 — Temperature

**Course:** 02 — Model Platforms and Prompting
**Module:** Module 04 — OpenAI Platform and API
**Content Group:** Request Design
**Roadmap Source:** OpenAI Platform and API / Request Design
**Lesson Type:** API
**Lesson Order:** 006
**Suggested Duration:** 24 minutes

---

## 1. Lesson Overview

**Temperature** is an inference parameter that controls how much randomness is introduced when a language model selects its next token.

A lower temperature usually produces more focused and consistent responses. A higher temperature allows less probable tokens to be selected more often, which can increase variety and creativity but may also reduce accuracy and coherence.

Temperature is useful when building:

* Information extraction systems
* Classification APIs
* JSON and structured-output workflows
* Customer-support assistants
* Brainstorming tools
* Marketing-content generators
* Creative-writing applications
* AI writing assistants

The goal is not to discover one universally correct temperature. The goal is to choose and evaluate a temperature that matches the behavior required by your application.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

1. Explain temperature in your own words.
2. Describe how temperature affects token probabilities.
3. Distinguish low-temperature and high-temperature use cases.
4. Compare temperature with `top_p`.
5. Add temperature to an OpenAI API request.
6. Design a small experiment to evaluate different values.
7. Recognize why temperature alone does not guarantee deterministic output.
8. Select an initial temperature range for a production use case.

---

## 3. Where Temperature Fits in an AI Application

Temperature is applied during **inference**, when the model is generating a response.

```text
User input
    ↓
Prompt construction
    ↓
Model request
    ├── model
    ├── instructions
    ├── temperature
    ├── top_p
    └── max_output_tokens
    ↓
Token sampling
    ↓
Generated response
    ↓
Parse and validate
    ↓
Log quality, latency, tokens, and cost
    ↓
Return result to the user
```

Temperature does not change:

* The model’s training data
* The model’s weights
* The input context
* The maximum context window
* The output schema by itself

It changes how the model samples from its predicted token distribution.

---

## 4. How Language Models Generate Text

A language model generates text one token at a time.

Given the current input and all previously generated tokens, the model calculates a score for every possible next token.

For example:

```text
Input: "The weather today is"
```

The model might internally assign probabilities similar to:

| Candidate token | Original probability |
| --------------- | -------------------: |
| sunny           |                 0.55 |
| cloudy          |                 0.25 |
| cold            |                 0.12 |
| changing        |                 0.06 |
| banana          |                 0.02 |

The model then selects or samples one token and repeats the process.

```text
"The weather today is"
           ↓
    token probabilities
           ↓
        "sunny"
           ↓
"The weather today is sunny"
           ↓
new token probabilities
           ↓
       next token
```

Inference parameters such as temperature, `top_p`, and `top_k` affect how this candidate-token distribution is processed before the next token is selected. Different tasks therefore benefit from different sampling configurations.

---

## 5. What Temperature Does

Temperature reshapes the model’s token probability distribution.

The simplified formula is:

[
P_i =
\frac{\exp(z_i/T)}
{\sum_j \exp(z_j/T)}
]

Where:

* (z_i) is the logit for token (i)
* (T) is the temperature
* (P_i) is the adjusted probability of token (i)

You do not need to calculate this manually when using an API. The formula helps explain the behavior.

### Lower temperature

When the temperature is lower:

* High-probability tokens become more dominant.
* Low-probability tokens become less likely.
* The distribution becomes sharper.
* Responses tend to be more focused and consistent.

### Higher temperature

When the temperature is higher:

* Probability is spread across more candidate tokens.
* Less probable tokens have a greater chance of being selected.
* The distribution becomes flatter.
* Responses tend to become more varied and exploratory.

The source material similarly demonstrates that lower values produce more focused outputs, while higher values increase diversity and the risk of nonsensical responses.

---

## 6. Visualizing Temperature

Assume the model has four possible next tokens.

### Original distribution — Temperature = 1

```text
sunny    ████████████████████  50%
cloudy   ██████████            25%
windy    ██████                15%
strange  ████                  10%
```

A temperature of `1` generally leaves the original probability distribution unchanged.

It does **not** make every token equally likely.

### Lower temperature — Temperature = 0.2

```text
sunny    ████████████████████████████████████  90%
cloudy   ███                                      7%
windy    █                                        2%
strange                                           1%
```

The model strongly favors the most likely token.

### Higher temperature — Temperature = 1.5

```text
sunny    ██████████████  35%
cloudy   ██████████      27%
windy    ████████        21%
strange  ███████         17%
```

The model explores more alternatives, including less likely ones.

> A high temperature does not automatically create better writing. It only increases exploration in token selection.

---

## 7. Interpreting Common Temperature Values

Exact behavior depends on the model, prompt, endpoint, and task. The following ranges should therefore be treated as starting points rather than universal rules.

| Temperature | Typical behavior                             | Possible use cases                                          |
| ----------: | -------------------------------------------- | ----------------------------------------------------------- |
|   `0`–`0.2` | Highly focused and relatively stable         | Extraction, classification, routing, factual transformation |
| `0.2`–`0.5` | Controlled variation                         | Summarization, support answers, rewriting                   |
| `0.5`–`0.8` | Balanced creativity and consistency          | General assistants, explanations, product copy              |
| `0.8`–`1.1` | More varied and exploratory                  | Brainstorming, titles, story ideas                          |
| Above `1.1` | Highly varied, with greater instability risk | Experimental creative generation                            |

OpenAI documents temperature as a parameter where higher values increase randomness. The exact supported range and behavior can vary by endpoint and model, so model-specific documentation should be checked before implementation.

---

## 8. Low Temperature Does Not Guarantee Identical Output

A common misconception is:

```text
temperature = 0
→ every request must return exactly the same text
```

A more accurate statement is:

```text
temperature = 0
→ the model usually selects highly probable tokens
→ output variation is reduced
→ exact reproducibility is still not guaranteed
```

Outputs may still differ because of:

* Backend implementation changes
* Model snapshot updates
* Distributed numerical computation
* Different prompt formatting
* Different message history
* Tool-call results
* Retrieval results
* Safety-system behavior
* Changes in model configuration
* Non-deterministic infrastructure

Therefore, describe low-temperature output as **more consistent**, not perfectly deterministic.

For exact application behavior, use additional controls such as:

* Structured Outputs
* JSON Schema validation
* Enumerated values
* Application-side validation
* Retry and repair logic
* Fixed model snapshots where available
* Automated regression tests

---

## 9. Temperature vs. `top_p`

Temperature and `top_p` both influence sampling, but they operate differently.

### Temperature

Temperature reshapes the probabilities of all candidate tokens.

```text
Original probabilities
        ↓
Scale logits using temperature
        ↓
Sharper or flatter distribution
        ↓
Sample a token
```

### `top_p`

`top_p`, also called **nucleus sampling**, selects the smallest group of likely tokens whose cumulative probability reaches the configured threshold.

Suppose the sorted probabilities are:

| Token   | Probability | Cumulative probability |
| ------- | ----------: | ---------------------: |
| sunny   |        0.50 |                   0.50 |
| cloudy  |        0.25 |                   0.75 |
| windy   |        0.15 |                   0.90 |
| strange |        0.10 |                   1.00 |

With:

```text
top_p = 0.90
```

The model samples from:

```text
sunny + cloudy + windy
```

The final token is excluded because the first three tokens already represent 90% of the probability mass.

OpenAI describes `top_p` as an alternative to temperature and generally recommends changing one of the two rather than aggressively tuning both simultaneously.

### Comparison

| Parameter     | Main effect                                              |
| ------------- | -------------------------------------------------------- |
| `temperature` | Reshapes the probability distribution                    |
| `top_p`       | Restricts sampling to a cumulative probability set       |
| `top_k`       | Restricts sampling to a fixed number of candidate tokens |

`top_k` is commonly exposed by local inference engines, although availability varies across hosted APIs and models.

---

## 10. Choosing Between Temperature and `top_p`

A practical starting strategy is:

```text
Keep top_p at its default
        ↓
Experiment with temperature
        ↓
Evaluate output quality
        ↓
Only tune top_p when there is a clear reason
```

Avoid changing five inference parameters at the same time. Otherwise, it becomes difficult to identify which parameter caused an improvement or regression.

A controlled experiment should change one variable at a time.

---

## 11. OpenAI Responses API Example

The official OpenAI SDK reads `OPENAI_API_KEY` from the environment when properly configured.

Install the SDK:

```bash
npm install openai
```

Set the API key:

```bash
# macOS or Linux
export OPENAI_API_KEY="your_api_key_here"
```

```powershell
# Windows PowerShell
$env:OPENAI_API_KEY="your_api_key_here"
```

Create `temperature-demo.mjs`:

```javascript
import OpenAI from "openai";

const client = new OpenAI();

async function generateWithTemperature(temperature) {
  const startedAt = performance.now();

  try {
    const response = await client.responses.create({
      // Use a model available to your account that supports temperature.
      model: "gpt-4o-mini",
      input: [
        {
          role: "developer",
          content:
            "You are a concise writing assistant. Return one product slogan.",
        },
        {
          role: "user",
          content:
            "Create a slogan for an AI application that helps students learn programming.",
        },
      ],
      temperature,
      max_output_tokens: 60,
    });

    const latencyMs = Math.round(performance.now() - startedAt);

    return {
      temperature,
      text: response.output_text,
      latencyMs,
      inputTokens: response.usage?.input_tokens ?? null,
      outputTokens: response.usage?.output_tokens ?? null,
      totalTokens: response.usage?.total_tokens ?? null,
    };
  } catch (error) {
    return {
      temperature,
      error:
        error instanceof Error
          ? error.message
          : "An unknown API error occurred.",
    };
  }
}

const temperatures = [0, 0.3, 0.7, 1.0];

for (const temperature of temperatures) {
  const result = await generateWithTemperature(temperature);
  console.log(JSON.stringify(result, null, 2));
}
```

Run it:

```bash
node temperature-demo.mjs
```

The Responses API exposes response usage information, including input, output, and total token counts. It also supports `max_output_tokens` as an upper bound for generated output, including reasoning tokens where applicable.

---

## 12. Run Multiple Trials

One response is not enough to evaluate a sampling configuration.

Use several trials for every temperature.

```javascript
import OpenAI from "openai";

const client = new OpenAI();

const TEMPERATURES = [0, 0.3, 0.7, 1.0];
const RUNS_PER_TEMPERATURE = 5;

async function runExperiment(temperature, runNumber) {
  const startedAt = performance.now();

  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input:
      "Generate three names for an AI-powered programming learning application.",
    temperature,
    max_output_tokens: 100,
  });

  return {
    temperature,
    runNumber,
    output: response.output_text,
    latencyMs: Math.round(performance.now() - startedAt),
    inputTokens: response.usage?.input_tokens ?? 0,
    outputTokens: response.usage?.output_tokens ?? 0,
    totalTokens: response.usage?.total_tokens ?? 0,
  };
}

const results = [];

for (const temperature of TEMPERATURES) {
  for (let runNumber = 1; runNumber <= RUNS_PER_TEMPERATURE; runNumber++) {
    try {
      results.push(await runExperiment(temperature, runNumber));
    } catch (error) {
      results.push({
        temperature,
        runNumber,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

console.table(
  results.map((result) => ({
    temperature: result.temperature,
    run: result.runNumber,
    latencyMs: result.latencyMs,
    inputTokens: result.inputTokens,
    outputTokens: result.outputTokens,
    output: result.output,
    error: result.error,
  })),
);
```

This experiment provides evidence about:

* Output diversity
* Response consistency
* Instruction-following quality
* Average latency
* Token consumption
* Failure rate

---

## 13. Example Results

Prompt:

```text
Explain the difference between a Python list and a set in fewer than 25 words.
```

### Temperature = 0.1

Possible outputs:

```text
A list is ordered and allows duplicates; a set stores unique elements
and does not guarantee positional ordering.
```

```text
Lists preserve order and allow duplicates. Sets contain unique elements
and are optimized for membership testing.
```

Characteristics:

* Stable terminology
* Limited variation
* Strong focus on the most important facts

### Temperature = 0.7

Possible outputs:

```text
A list keeps ordered, repeatable items; a set removes duplicates and
offers faster membership checks.
```

```text
Lists organize values by position, including duplicates. Sets focus on
uniqueness and efficient lookup.
```

Characteristics:

* More phrasing variation
* Usually remains coherent
* Suitable for general explanation

### Temperature = 1.2

Possible outputs:

```text
Lists are ordered collections that welcome repeats; sets are uniqueness-first
containers built for quick membership checks.
```

```text
Think of lists as sequences and sets as duplicate-free membership pools.
```

Characteristics:

* More expressive wording
* Greater variety
* Higher risk of omitting an important detail

These outputs are illustrative. Actual responses depend on the selected model and request context.

---

## 14. Temperature by Application Type

### 14.1 Structured extraction

Example:

```text
Extract:
- customer_name
- order_id
- issue_type
```

Suggested starting range:

```text
0.0–0.2
```

However, low temperature is not a substitute for schema enforcement.

Use:

```text
Prompt
  + Structured Output schema
  + Parser
  + Validator
  + Retry policy
```

OpenAI recommends schema-based Structured Outputs over older JSON-only modes when the selected model supports them.

---

### 14.2 Classification

Example:

```json
{
  "category": "billing",
  "priority": "high"
}
```

Suggested starting range:

```text
0.0–0.2
```

Also validate that:

* `category` belongs to an allowed enum.
* `priority` belongs to an allowed enum.
* No unexpected fields are returned.
* Ambiguous inputs are handled explicitly.

---

### 14.3 Summarization

Suggested starting range:

```text
0.2–0.5
```

A lower value is useful when fidelity matters. A moderately higher value may improve readability but can increase paraphrasing.

---

### 14.4 Customer support

Suggested starting range:

```text
0.2–0.5
```

The system should be:

* Consistent
* Polite
* Grounded in approved information
* Resistant to inventing policies
* Able to escalate uncertainty

Temperature does not prevent hallucination. Retrieval, grounding, validation, and escalation rules remain necessary.

---

### 14.5 Brainstorming

Suggested starting range:

```text
0.7–1.0
```

Examples:

* Product names
* Marketing angles
* Story concepts
* Feature ideas
* Alternative solutions

For brainstorming, diversity is often desirable. You can generate multiple candidates and rank them afterward.

```text
High-diversity generation
          ↓
Filter invalid candidates
          ↓
Score candidates
          ↓
Return the strongest ideas
```

---

### 14.6 Creative writing

Suggested starting range:

```text
0.7–1.1
```

A creative-writing system may use different values for different stages:

```text
Story planning      → 0.6
Scene alternatives  → 0.9
Final prose         → 0.7
Fact verification   → 0.1
```

This is often more effective than using a single temperature for the entire workflow.

---

## 15. Temperature in RAG Systems

A Retrieval-Augmented Generation pipeline may look like:

```text
User question
    ↓
Create search query
    ↓
Retrieve documents
    ↓
Rank relevant passages
    ↓
Build grounded prompt
    ↓
Generate answer
    ↓
Verify citations
    ↓
Return answer
```

Temperature affects the final generation stage, but it does not improve retrieval quality by itself.

A low temperature cannot fix:

* Irrelevant retrieved documents
* Missing data
* Poor chunking
* Incorrect metadata
* Weak reranking
* An ambiguous question
* An outdated knowledge source

For grounded question answering, start with a relatively low temperature and evaluate:

* Citation correctness
* Faithfulness to retrieved context
* Unsupported claims
* Answer completeness
* Refusal behavior when evidence is missing

---

## 16. Temperature in Agent Workflows

An agent may perform several different tasks:

```text
Understand request
    ↓
Choose a tool
    ↓
Create tool arguments
    ↓
Execute tool
    ↓
Interpret result
    ↓
Write final response
```

These stages do not necessarily need the same sampling configuration.

| Agent stage                | Preferred behavior  |
| -------------------------- | ------------------- |
| Tool selection             | Consistent          |
| Tool arguments             | Strict and valid    |
| SQL generation             | Controlled          |
| Final explanation          | Moderately flexible |
| Brainstorming alternatives | Diverse             |

A production agent should rely on:

* Tool schemas
* Argument validation
* Permission checks
* Timeout handling
* Retry limits
* Idempotency
* Logging
* Human approval for sensitive actions

Do not rely on low temperature as the primary tool-safety mechanism.

---

## 17. Interaction with `max_output_tokens`

Temperature and `max_output_tokens` solve different problems.

| Parameter                | Controls                        |
| ------------------------ | ------------------------------- |
| `temperature`            | Variation in token selection    |
| `max_output_tokens`      | Maximum generated output length |
| `top_p`                  | Candidate probability mass      |
| Structured Output schema | Output structure                |
| Prompt instructions      | Desired content and behavior    |

An output can still be incomplete at any temperature if `max_output_tokens` is too low.

```text
Good prompt
+ low temperature
+ max_output_tokens too small
= truncated response
```

The Responses API defines `max_output_tokens` as an upper bound rather than a promise that the model will produce exactly that many tokens.

---

## 18. Evaluation Framework

Do not choose a production temperature by reading one response.

Create an evaluation dataset containing representative cases.

Example:

```json
[
  {
    "id": "extract-001",
    "input": "Order 83921 arrived damaged.",
    "expected": {
      "order_id": "83921",
      "issue_type": "damaged_item"
    }
  },
  {
    "id": "rewrite-001",
    "input": "make this email more professional",
    "expected_properties": [
      "polite",
      "concise",
      "preserves_original_meaning"
    ]
  }
]
```

Run every case several times at each temperature.

```text
Dataset
   ×
Temperatures
   ×
Repeated trials
   =
Evaluation results
```

### Recommended metrics

#### Structured tasks

* Schema-valid rate
* Exact-match accuracy
* Field-level accuracy
* Missing-field rate
* Unsupported-field rate

#### Generative tasks

* Instruction-following score
* Relevance
* Coherence
* Diversity
* Factuality
* Tone consistency
* Human preference

#### Operational metrics

* Average latency
* P50 latency
* P95 latency
* Input tokens
* Output tokens
* Estimated cost
* Retry rate
* API error rate

---

## 19. Example Experiment Table

| Model   | Temperature | Runs | Valid outputs | Avg. quality |  Diversity | Avg. latency |
| ------- | ----------: | ---: | ------------: | -----------: | ---------: | -----------: |
| Model A |         0.0 |   20 |          100% |        4.6/5 |        Low |       820 ms |
| Model A |         0.3 |   20 |          100% |        4.7/5 | Medium-low |       845 ms |
| Model A |         0.7 |   20 |           95% |        4.4/5 |     Medium |       860 ms |
| Model A |         1.0 |   20 |           85% |        3.9/5 |       High |       872 ms |

A possible conclusion might be:

```text
Temperature 0.3 offers the best balance for this task.
It preserves schema validity while improving naturalness.
```

This conclusion applies only to the tested:

* Model
* Prompt
* Dataset
* Schema
* Application requirements

It should not automatically be generalized to every project.

---

## 20. Common Mistakes

### Mistake 1: Assuming higher temperature makes the model smarter

Temperature changes sampling behavior, not the model’s intelligence or knowledge.

```text
Higher temperature ≠ better reasoning
Higher temperature ≠ more knowledge
Higher temperature ≠ higher factual accuracy
```

---

### Mistake 2: Assuming temperature zero guarantees identical responses

Temperature zero generally reduces variation but should not be treated as an exact reproducibility guarantee.

---

### Mistake 3: Using high temperature for JSON without validation

Even at low temperature, malformed or semantically invalid data can occur.

Use:

```text
JSON Schema
+ parser
+ business-rule validation
+ retry or repair
```

---

### Mistake 4: Changing temperature and `top_p` together

When both parameters change, it becomes harder to determine which one affected the output.

Change one variable at a time during experiments.

---

### Mistake 5: Testing only one prompt

A setting that works for one demonstration may fail on:

* Long inputs
* Ambiguous inputs
* Multilingual inputs
* Adversarial inputs
* Missing information
* Unusual formatting
* Real customer data

---

### Mistake 6: Ignoring model-specific recommendations

Sampling parameters can behave differently across models and endpoints. Some models or modes may restrict which parameters are supported.

Always verify:

* Model documentation
* Endpoint documentation
* Supported parameter ranges
* Default values
* Reasoning-mode restrictions

For example, the Realtime API documents its own restricted temperature range rather than using a universal range for every endpoint.

---

### Mistake 7: Evaluating creativity without evaluating correctness

Creative output may look impressive while containing:

* Unsupported claims
* Contradictions
* Missing requirements
* Incorrect names
* Invalid JSON
* Broken tool arguments

Evaluate both creativity and task success.

---

## 21. Practical Exercise

Build a small temperature benchmark for an AI Writing Assistant.

### Task

Implement these features:

1. Summarize
2. Rewrite
3. Translate
4. Explain
5. Return structured JSON

### Step 1 — Select a test prompt

```text
Rewrite the following message in a professional tone:

"We need this fixed fast because customers keep complaining."
```

### Step 2 — Test multiple temperatures

```text
0.0
0.3
0.7
1.0
```

### Step 3 — Run each value five times

Save:

* Generated output
* Temperature
* Model
* Input tokens
* Output tokens
* Total tokens
* Latency
* Validation result
* Error message

### Step 4 — Evaluate the outputs

Score each result from 1 to 5 for:

* Meaning preservation
* Professional tone
* Grammar
* Conciseness
* Variation
* Overall usefulness

### Step 5 — Write a conclusion

Example:

```text
Temperature 0.3 produced the best results for professional rewriting.
Temperature 0 was consistent but slightly repetitive.
Temperature 1.0 created more varied language but occasionally changed
the urgency of the original message.
```

---

## 22. Extended Exercise: Structured Output

Input:

```text
Customer Maria reports that order A-1042 arrived two days late
and the package was damaged.
```

Expected output:

```json
{
  "customer_name": "Maria",
  "order_id": "A-1042",
  "issues": [
    "late_delivery",
    "damaged_package"
  ],
  "priority": "high"
}
```

Test temperatures:

```text
0.0
0.2
0.5
0.8
```

Validate:

* Is the result valid JSON?
* Are all required fields present?
* Are enum values valid?
* Were any unsupported facts added?
* Does the result match the input?
* How often does each temperature pass validation?

---

## 23. Production Request Flow

```text
Receive request
    ↓
Validate user input
    ↓
Select task configuration
    ├── model
    ├── temperature
    ├── output limit
    └── schema
    ↓
Call the model
    ↓
Handle timeout or API error
    ↓
Parse response
    ↓
Validate structure
    ↓
Validate business rules
    ↓
Retry or repair if necessary
    ↓
Log metrics
    ↓
Return response
```

A strong production implementation should record:

```json
{
  "request_id": "req_123",
  "feature": "professional_rewrite",
  "model": "selected-model",
  "temperature": 0.3,
  "input_tokens": 124,
  "output_tokens": 86,
  "latency_ms": 932,
  "schema_valid": true,
  "retry_count": 0,
  "status": "success"
}
```

Do not log:

* API keys
* Passwords
* Full authentication tokens
* Unredacted sensitive personal data
* Secrets from environment variables

---

## 24. Suggested Configuration Strategy

Start with a configuration per feature rather than one global temperature.

```javascript
const generationProfiles = {
  extraction: {
    temperature: 0.1,
    maxOutputTokens: 300,
  },
  summarization: {
    temperature: 0.3,
    maxOutputTokens: 500,
  },
  professionalRewrite: {
    temperature: 0.4,
    maxOutputTokens: 500,
  },
  brainstorming: {
    temperature: 0.9,
    maxOutputTokens: 800,
  },
  creativeWriting: {
    temperature: 0.8,
    maxOutputTokens: 1500,
  },
};
```

These values are initial hypotheses. Replace them with values supported by evaluation data.

---

## 25. Completion Checklist

* [ ] I can explain temperature in one or two minutes.
* [ ] I understand that a model predicts the next token from a probability distribution.
* [ ] I know that lower temperature sharpens the distribution.
* [ ] I know that higher temperature flattens the distribution.
* [ ] I understand that temperature `1` does not create a uniform distribution.
* [ ] I can explain the difference between temperature and `top_p`.
* [ ] I know that temperature zero does not guarantee exact reproducibility.
* [ ] I can add temperature to an API request.
* [ ] I can test several temperatures across repeated trials.
* [ ] I validate structured output instead of trusting it directly.
* [ ] I track latency and token usage.
* [ ] I choose temperature based on application requirements and evaluation data.
* [ ] I have documented at least one limitation or open question.

---

## 26. Related Outcome

After completing this lesson, you should be better prepared to:

> Call LLM APIs from applications while managing request parameters, message design, output limits, structured responses, tokens, cost, latency, retries, and production reliability.

---

## 27. Related Project

### Project 3 — AI Writing Assistant

Build an application with the following operations:

```text
Summarize
Rewrite
Translate
Explain
Generate structured JSON
```

Use different generation profiles for each operation.

```text
User selects operation
        ↓
Application selects prompt and temperature
        ↓
Model generates response
        ↓
Application validates the result
        ↓
Metrics are recorded
        ↓
Result is displayed
```

Your final project should include a small benchmark showing why each temperature was selected.

---

## 28. Key Takeaways

1. Temperature controls the randomness of token sampling.
2. Lower values generally produce more focused and consistent output.
3. Higher values generally produce more diverse and exploratory output.
4. Temperature does not increase the model’s knowledge or intelligence.
5. Temperature zero does not guarantee identical results.
6. Temperature and `top_p` are related but different controls.
7. OpenAI generally recommends tuning temperature or `top_p`, rather than changing both without a controlled reason.
8. Structured outputs still require schemas and validation.
9. The correct value depends on the model, prompt, task, and product requirements.
10. Production settings should be selected through repeated evaluation, not a single demo.

---

## 29. Final Summary

**Temperature** is an important request-design parameter for AI engineers because it affects the balance between consistency and variation.

```text
Lower temperature
→ sharper probability distribution
→ more probable tokens dominate
→ focused and relatively consistent output

Higher temperature
→ flatter probability distribution
→ more tokens become competitive
→ diverse but potentially less reliable output
```

Use temperature as one part of a complete production workflow:

```text
Prompt design
+ sampling configuration
+ structured output
+ validation
+ evaluation
+ observability
= reliable AI application
```

The best temperature is not the most creative or the most deterministic value. It is the value that produces the strongest measurable behavior for the specific application.

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
