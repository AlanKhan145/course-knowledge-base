# 005 - Using Validation Error Messages

## Section
Understanding Validation

## Duration
2min

## Main Idea
This lesson focuses on **Using Validation Error Messages** inside the **Understanding Validation** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Implement the core idea behind Using Validation Error Messages in the sample application.
* Trace how data moves through routes, controllers, models, views, or clients.
* Keep the code readable while adding behavior incrementally.

## Key Points
* Validation rejects invalid input before it reaches business logic or persistence.
* Sanitization normalizes input so downstream code receives safer values.
* Good forms preserve user input and show field-level feedback after validation fails.
* Expected errors should become clear responses with appropriate status codes.
* Unexpected errors should be logged and handled by centralized middleware.

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
* What problem does **Using Validation Error Messages** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Using Validation Error Messages** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding Validation and apply the idea in a small Node.js project.
