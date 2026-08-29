# 002 - What is GraphQL?

## Section
Working with GraphQL

## Duration
9min

## Main Idea
This lesson focuses on **What is GraphQL?** inside the **Working with GraphQL** section. It is a study note generated from the provided course syllabus, so use it as a structured learning guide while you watch, code, or review the material.

## Learning Objectives
* Explain the role of What is GraphQL? in a Node.js application.
* Recognize when this concept matters in real backend work.
* Use the concept to make better implementation choices later in the course.

## Key Points
* GraphQL clients ask for a shaped result through queries and mutations.
* Resolvers connect the schema to application data and business logic.
* Validation, auth, pagination, and error handling are still required in GraphQL APIs.

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
Write a short example that shows how this lesson supports the broader goal of Working with GraphQL.

## Review Questions
* What problem does **What is GraphQL?** solve in this section?
* Which file, route, model, view, or client behavior would you inspect first?
* How would you prove that the final behavior works?

## Summary
The goal of this lesson is to make **What is GraphQL?** practical, not just familiar. After reviewing it, you should be able to explain how it fits into Working with GraphQL and apply the idea in a small Node.js project.
