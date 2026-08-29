# 005 - How Middleware Works

## Section
Working with Express.js

## Duration
3min

## Main Idea
This lesson focuses on **How Middleware Works** inside the **Working with Express.js** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Understand How Middleware Works as part of the Working with Express.js section.
* Recognize the problem this lesson is solving in the application.
* Capture the implementation details that are worth reviewing later.

## Key Points
* Express middleware runs in registration order.
* A middleware function can read or change `req`, write to `res`, or call `next()` to continue.
* Route-specific middleware keeps behavior scoped to the paths that need it.

## Code Hint
```js
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

## Practice
Write a short example that shows how this lesson supports the broader goal of Working with Express.js.

## Review Questions
* What problem does **How Middleware Works** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **How Middleware Works** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Working with Express.js and apply the idea in a small Node.js project.
