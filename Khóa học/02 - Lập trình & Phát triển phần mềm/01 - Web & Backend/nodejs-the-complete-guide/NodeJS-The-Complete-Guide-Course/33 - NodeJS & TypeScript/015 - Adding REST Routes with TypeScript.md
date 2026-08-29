# 015 - Adding REST Routes with TypeScript

## Section
NodeJS & TypeScript

## Duration
7min

## Main Idea
This lesson focuses on **Adding REST Routes with TypeScript** inside the **NodeJS & TypeScript** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Implement the core idea behind Adding REST Routes with TypeScript in the sample application.
* Trace how data moves through routes, controllers, models, views, or clients.
* Keep the code readable while adding behavior incrementally.

## Key Points
* A route combines an HTTP method, a path, and a handler.
* Dynamic route parameters make one route handle many resource IDs.
* Route files keep related endpoints together as the app grows.
* REST APIs expose resources through URLs and HTTP methods.
* JSON is the common exchange format between frontend clients and Node backends.

## Code Hint
```js
app.get('/products/:productId', (req, res) => {
  res.send(`Product ${req.params.productId}`);
});
```

## Practice
Recreate the change in a small branch or scratch file, then explain the request flow aloud from entry point to final response.

## Review Questions
* What problem does **Adding REST Routes with TypeScript** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Adding REST Routes with TypeScript** practical, not just familiar. After reviewing it, you should be able to explain how it fits into NodeJS & TypeScript and apply the idea in a small Node.js project.
