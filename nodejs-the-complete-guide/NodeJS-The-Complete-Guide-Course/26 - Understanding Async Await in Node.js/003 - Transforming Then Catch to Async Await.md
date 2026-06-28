# 003 - Transforming "Then Catch" to "Async Await"

## Section
Understanding Async Await in Node.js

## Duration
4min

## Main Idea
This lesson focuses on **Transforming "Then Catch" to "Async Await"** inside the **Understanding Async Await in Node.js** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Understand Transforming "Then Catch" to "Async Await" as part of the Understanding Async Await in Node.js section.
* Recognize the problem this lesson is solving in the application.
* Capture the implementation details that are worth reviewing later.

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
Write a short example that shows how this lesson supports the broader goal of Understanding Async Await in Node.js.

## Review Questions
* What problem does **Transforming "Then Catch" to "Async Await"** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Transforming "Then Catch" to "Async Await"** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding Async Await in Node.js and apply the idea in a small Node.js project.
