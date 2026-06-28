# 024 - Adding Auth Middleware to All Routes

## Section
Working with REST APIs - The Practical Application

## Duration
2min

## Main Idea
This lesson focuses on **Adding Auth Middleware to All Routes** inside the **Working with REST APIs - The Practical Application** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Implement the core idea behind Adding Auth Middleware to All Routes in the sample application.
* Trace how data moves through routes, controllers, models, views, or clients.
* Keep the code readable while adding behavior incrementally.

## Key Points
* Express middleware runs in registration order.
* A middleware function can read or change `req`, write to `res`, or call `next()` to continue.
* Route-specific middleware keeps behavior scoped to the paths that need it.
* A route combines an HTTP method, a path, and a handler.
* Dynamic route parameters make one route handle many resource IDs.

## Code Hint
```js
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

## Practice
Recreate the change in a small branch or scratch file, then explain the request flow aloud from entry point to final response.

## Review Questions
* What problem does **Adding Auth Middleware to All Routes** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Adding Auth Middleware to All Routes** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Working with REST APIs - The Practical Application and apply the idea in a small Node.js project.
