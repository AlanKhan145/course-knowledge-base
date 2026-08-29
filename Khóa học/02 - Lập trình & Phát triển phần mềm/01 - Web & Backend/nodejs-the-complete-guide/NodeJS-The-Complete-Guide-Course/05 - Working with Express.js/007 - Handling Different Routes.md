# 007 - Handling Different Routes

## Section
Working with Express.js

## Duration
5min

## Main Idea
This lesson focuses on **Handling Different Routes** inside the **Working with Express.js** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Implement the core idea behind Handling Different Routes in the sample application.
* Trace how data moves through routes, controllers, models, views, or clients.
* Keep the code readable while adding behavior incrementally.

## Key Points
* A route combines an HTTP method, a path, and a handler.
* Dynamic route parameters make one route handle many resource IDs.
* Route files keep related endpoints together as the app grows.

## Code Hint
```js
app.get('/products/:productId', (req, res) => {
  res.send(`Product ${req.params.productId}`);
});
```

## Practice
Recreate the change in a small branch or scratch file, then explain the request flow aloud from entry point to final response.

## Review Questions
* What problem does **Handling Different Routes** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Handling Different Routes** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Working with Express.js and apply the idea in a small Node.js project.
