# 010 - Assignment 6: Time to Practice - Validation

## Section
Understanding Validation

## Duration
Not specified

## Main Idea
This lesson focuses on **Assignment 6: Time to Practice - Validation** inside the **Understanding Validation** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Apply the section concepts without following every step from the instructor.
* Turn the lesson topic into a small working change in the project.
* Compare your solution against the expected behavior and refactor if needed.

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
Attempt the task before reading a solution. Commit or save your version, then compare behavior and naming choices against the course approach.

## Review Questions
* What problem does **Assignment 6: Time to Practice - Validation** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Assignment 6: Time to Practice - Validation** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding Validation and apply the idea in a small Node.js project.
