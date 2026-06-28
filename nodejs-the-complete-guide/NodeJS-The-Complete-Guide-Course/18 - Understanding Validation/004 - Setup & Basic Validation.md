# 004 - Setup & Basic Validation

## Section
Understanding Validation

## Duration
11min

## Main Idea
This lesson focuses on **Setup & Basic Validation** inside the **Understanding Validation** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Prepare the local project or service dependency needed for the next coding steps.
* Check the configuration before building on top of it.
* Understand which installed tool solves which problem.

## Key Points
* Validation rejects invalid input before it reaches business logic or persistence.
* Sanitization normalizes input so downstream code receives safer values.
* Good forms preserve user input and show field-level feedback after validation fails.

## Code Hint
```js
body('email')
  .isEmail()
  .withMessage('Please enter a valid email address')
  .normalizeEmail();
```

## Practice
Run the setup locally, record the command used, and note one common failure that a future review should check first.

## Review Questions
* What problem does **Setup & Basic Validation** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Setup & Basic Validation** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding Validation and apply the idea in a small Node.js project.
