# 009 - Routing Requests

## Section
Understanding the Basics

## Duration
6min

## Main Idea
This lesson focuses on **Routing Requests** inside the **Understanding the Basics** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Understand Routing Requests as part of the Understanding the Basics section.
* Recognize the problem this lesson is solving in the application.
* Capture the implementation details that are worth reviewing later.

## Key Points
* A route combines an HTTP method, a path, and a handler.
* Dynamic route parameters make one route handle many resource IDs.
* Route files keep related endpoints together as the app grows.
* Requests carry method, path, headers, query data, and sometimes a body.
* Responses should set a meaningful status code and return the expected content type.

## Code Hint
```js
app.get('/products/:productId', (req, res) => {
  res.send(`Product ${req.params.productId}`);
});
```

## Practice
Write a short example that shows how this lesson supports the broader goal of Understanding the Basics.

## Review Questions
* What problem does **Routing Requests** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Routing Requests** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Understanding the Basics and apply the idea in a small Node.js project.
