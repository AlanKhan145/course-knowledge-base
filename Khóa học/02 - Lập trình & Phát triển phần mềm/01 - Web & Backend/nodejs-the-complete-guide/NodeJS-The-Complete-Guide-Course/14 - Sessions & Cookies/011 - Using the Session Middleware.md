# 011 - Using the Session Middleware

## Section
Sessions & Cookies

## Duration
4min

## Main Idea
This lesson focuses on **Using the Session Middleware** inside the **Sessions & Cookies** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Implement the core idea behind Using the Session Middleware in the sample application.
* Trace how data moves through routes, controllers, models, views, or clients.
* Keep the code readable while adding behavior incrementally.

## Key Points
* Express middleware runs in registration order.
* A middleware function can read or change `req`, write to `res`, or call `next()` to continue.
* Route-specific middleware keeps behavior scoped to the paths that need it.
* Cookies are stored by the browser and sent back with matching requests.
* Sessions keep server-side state connected to a client through a session identifier.

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
* What problem does **Using the Session Middleware** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Using the Session Middleware** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Sessions & Cookies and apply the idea in a small Node.js project.
