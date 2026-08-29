# 007 - Adding Server Side Validation

## Section
Working with REST APIs - The Practical Application

## Duration
6min

## Main Idea
This lesson focuses on **Adding Server Side Validation** inside the **Working with REST APIs - The Practical Application** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Implement the core idea behind Adding Server Side Validation in the sample application.
* Trace how data moves through routes, controllers, models, views, or clients.
* Keep the code readable while adding behavior incrementally.

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
Recreate the change in a small branch or scratch file, then explain the request flow aloud from entry point to final response.

## Review Questions
* What problem does **Adding Server Side Validation** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Adding Server Side Validation** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Working with REST APIs - The Practical Application and apply the idea in a small Node.js project.
