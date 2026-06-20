# 004 - GraphQL Basics

## Section
Phase 12 — Advanced Frontend

## Learning Objectives

- Understand what GraphQL is and how it differs from REST
- Write queries, mutations, and subscriptions
- Use Apollo Client or TanStack Query with GraphQL
- Understand the GraphQL schema definition language
- Know when to choose GraphQL over REST

---

## 1. GraphQL vs REST

| | REST | GraphQL |
|-|------|---------|
| **Data fetching** | Multiple endpoints | Single `/graphql` endpoint |
| **Over-fetching** | Get all fields even if you need 2 | Request exactly the fields you need |
| **Under-fetching** | Need multiple requests for related data | Get nested data in one query |
| **Type system** | Usually undocumented | Schema is the source of truth |
| **Versioning** | `/v1/`, `/v2/` | Deprecate fields; no versions |
| **Real-time** | Polling or WebSocket (manual) | Subscriptions built-in |
| **Learning curve** | Low | Higher |

**When to use GraphQL:**
- Complex data relationships (social network, e-commerce)
- Multiple client types (web, mobile, desktop) with different data needs
- Backend team exposes a single flexible API

**When REST is fine:**
- Simple CRUD apps
- Small teams, rapid prototyping
- Public APIs where you don't control the server

---

## 2. GraphQL Schema

The schema defines the data model. Written in SDL (Schema Definition Language).

```graphql
# Types
type User {
  id: ID!
  name: String!
  email: String!
  role: Role!
  posts: [Post!]!
  createdAt: String!
}

type Post {
  id: ID!
  title: String!
  body: String!
  published: Boolean!
  author: User!
  tags: [String!]!
}

# Enum
enum Role {
  ADMIN
  EDITOR
  VIEWER
}

# Query — read operations
type Query {
  me: User
  user(id: ID!): User
  users(role: Role, limit: Int): [User!]!
  post(id: ID!): Post
  posts(published: Boolean): [Post!]!
}

# Mutation — write operations
type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
  createPost(input: CreatePostInput!): Post!
  publishPost(id: ID!): Post!
}

# Subscription — real-time
type Subscription {
  postPublished: Post!
  userOnline(userId: ID!): User!
}

# Input types
input CreateUserInput {
  name: String!
  email: String!
  role: Role = VIEWER
}

input UpdateUserInput {
  name: String
  email: String
  role: Role
}
```

---

## 3. Writing Queries

```graphql
# Basic query
query GetUser {
  me {
    id
    name
    email
  }
}

# Query with variables
query GetUserById($id: ID!) {
  user(id: $id) {
    id
    name
    email
    role
    posts {
      id
      title
      published
    }
  }
}

# Variables passed separately:
{ "id": "user-123" }

# Aliases — fetch the same field twice with different arguments
query GetTwoUsers {
  admin: user(id: "1") {
    name
    email
  }
  editor: user(id: "2") {
    name
    email
  }
}

# Fragments — reusable field sets
fragment UserFields on User {
  id
  name
  email
  role
}

query GetUsers {
  users {
    ...UserFields
  }
}
```

---

## 4. Mutations

```graphql
# Mutation with variables
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    role
  }
}

# Variables:
{
  "input": {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "role": "EDITOR"
  }
}

# Update
mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
    updatedAt
  }
}

# Delete
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id)
}
```

---

## 5. Apollo Client Setup

```bash
pnpm add @apollo/client graphql
```

```typescript
// src/lib/apollo.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL ?? '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-and-network' },
  },
})
```

```tsx
// src/main.tsx
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './lib/apollo'

root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
)
```

---

## 6. Using Apollo Hooks

```typescript
// src/queries/users.ts — define queries as constants
import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers($role: Role) {
    users(role: $role) {
      id
      name
      email
      role
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
      role
    }
  }
`
```

```tsx
// src/components/UserList.tsx
import { useQuery, useMutation } from '@apollo/client'
import { GET_USERS, CREATE_USER } from '@/queries/users'

function UserList() {
  const { data, loading, error, refetch } = useQuery(GET_USERS, {
    variables: { role: 'EDITOR' },
  })

  const [createUser, { loading: creating }] = useMutation(CREATE_USER, {
    // Update cache after mutation (no need to refetch)
    update(cache, { data: { createUser } }) {
      const existing = cache.readQuery<{ users: User[] }>({ query: GET_USERS })
      cache.writeQuery({
        query: GET_USERS,
        data: { users: [...(existing?.users ?? []), createUser] },
      })
    },
    onError(error) {
      console.error('Create user failed:', error.message)
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
      <button
        disabled={creating}
        onClick={() =>
          createUser({
            variables: {
              input: { name: 'New User', email: 'new@example.com' },
            },
          })
        }
      >
        {creating ? 'Creating...' : 'Add User'}
      </button>
    </div>
  )
}
```

---

## 7. GraphQL with TanStack Query

If you're already using TanStack Query, you can use it with GraphQL via `graphql-request`:

```bash
pnpm add graphql-request graphql
```

```typescript
// src/lib/graphql-client.ts
import { GraphQLClient } from 'graphql-request'

export const gqlClient = new GraphQLClient(import.meta.env.VITE_GRAPHQL_URL, {
  headers: () => ({
    Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
  }),
})
```

```typescript
// src/hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { gqlClient } from '@/lib/graphql-client'

const GET_USERS = gql`
  query { users { id name email role } }
`

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) { id name email role }
  }
`

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => gqlClient.request<{ users: User[] }>(GET_USERS),
    select: (data) => data.users,
  })
}

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (input: CreateUserInput) =>
      gqlClient.request(CREATE_USER, { input }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })
}
```

---

## 8. Testing GraphQL in Playground

Most GraphQL servers expose a playground at `/graphql` (in development).

```
Apollo Server Sandbox: http://localhost:4000/graphql
Hasura Console: http://localhost:8080/console
GitHub GraphQL Explorer: https://docs.github.com/en/graphql/overview/explorer
```

GitHub's API is a great practice target:

```graphql
query {
  viewer {
    login
    name
    repositories(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
      nodes {
        name
        stargazerCount
        primaryLanguage { name }
      }
    }
  }
}
```

---

## Summary

| Concept | Key API |
|---------|---------|
| Query | `useQuery(GET_USERS, { variables })` |
| Mutation | `useMutation(CREATE_USER, { update, onError })` |
| Fragment | `fragment UserFields on User { ... }` |
| Variables | Passed as second arg: `{ variables: { id } }` |
| Cache update | `cache.readQuery` + `cache.writeQuery` |
| Subscription | `useSubscription(ON_MESSAGE)` |
| Codegen | `graphql-codegen` for TypeScript types from schema |

---

## Next Phase

Phase 13 — AI Assisted Development: Claude Code, Cursor, Copilot, effective prompting
