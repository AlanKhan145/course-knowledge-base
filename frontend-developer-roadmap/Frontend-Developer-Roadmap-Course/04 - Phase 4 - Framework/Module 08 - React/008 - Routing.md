# 003 - React Router

## Section
Phase 6 — React and Tailwind CSS

## Learning Objectives

- Set up client-side routing with React Router v7
- Create nested routes with shared layouts
- Navigate with links and programmatic navigation
- Use dynamic route parameters
- Protect routes based on authentication

---

## 1. Setup

```bash
pnpm add react-router-dom
```

---

## 2. Basic Router Setup

```tsx
// main.tsx
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

```tsx
// App.tsx
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
```

---

## 3. Shared Layouts with Outlet

`<Outlet />` renders the matched child route inside the parent layout:

```tsx
// components/Layout.tsx
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet />   {/* child routes render here */}
      </main>
      <Footer />
    </div>
  )
}
```

---

## 4. Navigation

```tsx
import { Link, NavLink } from 'react-router-dom'

// Link — basic navigation
<Link to="/about">About</Link>
<Link to="/blog/123">Read Post</Link>

// NavLink — adds active class automatically
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  About
</NavLink>

// Programmatic navigation
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await login(email, password)
    navigate('/dashboard')           // redirect after login
    navigate(-1)                     // go back
    navigate('/home', { replace: true })  // replace history entry
  }
}
```

---

## 5. Dynamic Routes

```tsx
// Route definition
<Route path="blog/:slug" element={<BlogPost />} />
<Route path="users/:userId/posts/:postId" element={<PostDetail />} />

// Reading params in the component
import { useParams } from 'react-router-dom'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const { data: post, loading } = useFetch<Post>(`/api/posts/${slug}`)

  if (loading) return <Spinner />
  return <article>{post?.title}</article>
}
```

---

## 6. URL Search Params

```tsx
import { useSearchParams } from 'react-router-dom'

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams()

  const category = searchParams.get('category') ?? 'all'
  const page = Number(searchParams.get('page') ?? '1')

  function handleCategoryChange(cat: string) {
    setSearchParams({ category: cat, page: '1' })
  }

  return (
    <div>
      <select value={category} onChange={e => handleCategoryChange(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
      </select>
      {/* URL: /products?category=electronics&page=1 */}
    </div>
  )
}
```

---

## 7. Nested Routes Example

```tsx
// Full route structure for a blog
<Routes>
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="blog" element={<BlogLayout />}>
      <Route index element={<BlogList />} />
      <Route path=":slug" element={<BlogPost />} />
    </Route>
    <Route path="about" element={<About />} />
  </Route>

  <Route path="dashboard" element={<ProtectedRoute />}>
    <Route element={<DashboardLayout />}>
      <Route index element={<DashboardHome />} />
      <Route path="settings" element={<Settings />} />
      <Route path="posts" element={<PostsManager />} />
      <Route path="posts/new" element={<NewPost />} />
      <Route path="posts/:id/edit" element={<EditPost />} />
    </Route>
  </Route>

  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 8. Protected Routes

```tsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

function ProtectedRoute() {
  const { user, loading } = useAuth()

  if (loading) return <FullPageSpinner />

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

// After login, redirect back to original destination
function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as any)?.from ?? '/dashboard'

  async function handleLogin(credentials) {
    await login(credentials)
    navigate(from, { replace: true })
  }
}
```

---

## 9. Loading States with loader (React Router v6.4+)

```tsx
// route definition with data loading
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/posts/:id',
    element: <PostDetail />,
    loader: async ({ params }) => {
      const res = await fetch(`/api/posts/${params.id}`)
      if (!res.ok) throw new Error('Post not found')
      return res.json()
    },
    errorElement: <ErrorPage />,
  },
])

// In the component
import { useLoaderData } from 'react-router-dom'

function PostDetail() {
  const post = useLoaderData() as Post
  return <article>{post.title}</article>
}
```

---

## Summary

| Feature | Key API |
|---------|---------|
| Router setup | `<BrowserRouter>` wrapping the app |
| Route matching | `<Routes>` + `<Route path element>` |
| Layout | `<Outlet />` in parent, children render inside |
| Link | `<Link to="/path">` |
| Active nav | `<NavLink className={({ isActive }) => ...}>` |
| Params | `useParams()` |
| Search params | `useSearchParams()` |
| Programmatic nav | `useNavigate()` |
| Protected route | Check auth, redirect with `<Navigate>` |

---

## Next Lesson

`004 - State Management.md` — Context API, useReducer, Zustand
