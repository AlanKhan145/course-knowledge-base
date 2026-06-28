# 008 - Connecting the Frontend to the GraphQL API

## Section
Working with GraphQL

## Duration
7min

## Main Idea
This lesson focuses on **Connecting the Frontend to the GraphQL API** inside the **Working with GraphQL** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Implement the core idea behind Connecting the Frontend to the GraphQL API in the sample application.
* Trace how data moves through routes, controllers, models, views, or clients.
* Keep the code readable while adding behavior incrementally.

## Key Points
* REST APIs expose resources through URLs and HTTP methods.
* JSON is the common exchange format between frontend clients and Node backends.
* CORS, validation, authentication, and error responses are part of a usable API, not extras.
* GraphQL clients ask for a shaped result through queries and mutations.
* Resolvers connect the schema to application data and business logic.

## Code Hint
```graphql
type Query {
  posts(page: Int): PostPage!
}

type Mutation {
  createPost(input: PostInput!): Post!
}
```

## Practice
Recreate the change in a small branch or scratch file, then explain the request flow aloud from entry point to final response.

## Review Questions
* What problem does **Connecting the Frontend to the GraphQL API** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **Connecting the Frontend to the GraphQL API** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Working with GraphQL and apply the idea in a small Node.js project.
