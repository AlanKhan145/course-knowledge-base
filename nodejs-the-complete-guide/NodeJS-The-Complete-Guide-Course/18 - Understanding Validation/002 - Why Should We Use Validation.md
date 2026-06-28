# 002 - Why Should We Use Validation?

## Section
Understanding Validation

## Duration
2min

## Main Idea
This lesson focuses on **Why Should We Use Validation?** inside the **Understanding Validation** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Explain the role of Why Should We Use Validation? in a Node.js application.
* Recognize when this concept matters in real backend work.
* Use the concept to make better implementation choices later in the course.

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
Write a short example that shows how this lesson supports the broader goal of Understanding Validation.

## Review Questions
* What problem does **Why Should We Use Validation?** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Why Should We Use Validation?** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding Validation and apply the idea in a small Node.js project.
