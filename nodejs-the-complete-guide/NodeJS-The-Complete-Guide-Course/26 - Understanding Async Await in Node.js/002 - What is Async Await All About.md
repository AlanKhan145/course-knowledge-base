# 002 - What is Async Await All About?

## Section
Understanding Async Await in Node.js

## Duration
4min

## Main Idea
This lesson focuses on **What is Async Await All About?** inside the **Understanding Async Await in Node.js** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Explain the role of What is Async Await All About? in a Node.js application.
* Recognize when this concept matters in real backend work.
* Use the concept to make better implementation choices later in the course.

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
* What problem does **What is Async Await All About?** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **What is Async Await All About?** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding Async Await in Node.js and apply the idea in a small Node.js project.
