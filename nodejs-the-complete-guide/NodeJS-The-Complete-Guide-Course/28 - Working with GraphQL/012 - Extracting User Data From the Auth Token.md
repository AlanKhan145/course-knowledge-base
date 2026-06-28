# 012 - Extracting User Data From the Auth Token

## Section
Working with GraphQL

## Duration
6min

## Main Idea
This lesson focuses on **Extracting User Data From the Auth Token** inside the **Working with GraphQL** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Understand Extracting User Data From the Auth Token as part of the Working with GraphQL section.
* Recognize the problem this lesson is solving in the application.
* Capture the implementation details that are worth reviewing later.

## Key Points
* Authentication proves who the user is; authorization decides what that user may do.
* Passwords should be hashed with a purpose-built algorithm, never stored as plain text.
* Sensitive routes should be protected on the server, not only hidden in the UI.

## Code Hint
```js
const token = jwt.sign(
  { userId: user._id.toString(), email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);
```

## Practice
Write a short example that shows how this lesson supports the broader goal of Working with GraphQL.

## Review Questions
* What problem does **Extracting User Data From the Auth Token** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Extracting User Data From the Auth Token** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Working with GraphQL and apply the idea in a small Node.js project.
