# 005 - Assignment 8: Time to Practice - Async Await

## Section
Understanding Async Await in Node.js

## Duration
Not specified

## Main Idea
This lesson focuses on **Assignment 8: Time to Practice - Async Await** inside the **Understanding Async Await in Node.js** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Apply the section concepts without following every step from the instructor.
* Turn the lesson topic into a small working change in the project.
* Compare your solution against the expected behavior and refactor if needed.

## Key Points
* Asynchronous code lets Node keep serving other work while I/O is pending.
* Promises represent work that may finish later with either a value or an error.
* `async` and `await` make promise-based control flow easier to read, but errors still need handling.

## Code Hint
```js
async function loadProducts() {
  try {
    return await Product.find();
  } catch (error) {
    throw error;
  }
}
```

## Practice
Attempt the task before reading a solution. Commit or save your version, then compare behavior and naming choices against the course approach.

## Review Questions
* What problem does **Assignment 8: Time to Practice - Async Await** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Assignment 8: Time to Practice - Async Await** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding Async Await in Node.js and apply the idea in a small Node.js project.
