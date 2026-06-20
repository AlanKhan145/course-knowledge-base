# 006 - Project: React Dashboard

## Section
Phase 6 — React and Tailwind CSS

## Project Overview

Build an admin dashboard — **Project 3** in your portfolio. It demonstrates your ability to build a real, usable application with React, Tailwind, routing, state management, and API integration.

---

## Skills Demonstrated

- React components, props, state
- Hooks: useState, useEffect, useContext, custom hooks
- React Router (layout routes, protected routes)
- Zustand for global state
- Tailwind CSS responsive layout
- CRUD operations with mock API
- Dark mode
- Table with search, sort, filter
- Modal (create/edit)

---

## Features

### Core
- Sidebar navigation (collapsible on mobile)
- Dashboard home with stat cards
- Users table: search, sort, paginate, edit, delete
- Create/edit user modal
- Dark mode toggle (persisted)
- Responsive layout

### Data
Use JSON Server or `localStorage` as a mock backend.

---

## File Structure

```
react-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Spinner.tsx
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Header.tsx
│   │   └── dashboard/
│   │       ├── StatsCard.tsx
│   │       └── UserTable.tsx
│   ├── hooks/
│   │   ├── useUsers.ts
│   │   └── useDebounce.ts
│   ├── pages/
│   │   ├── DashboardPage.tsx
│   │   ├── UsersPage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── LoginPage.tsx
│   ├── stores/
│   │   ├── useThemeStore.ts
│   │   └── useAuthStore.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Implementation Guide

### 1. Types

```typescript
// src/types/index.ts
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  status: 'active' | 'inactive'
  createdAt: string
}

export type UserFormData = Omit<User, 'id' | 'createdAt'>
```

### 2. Auth Store

```typescript
// src/stores/useAuthStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
  user: { name: string; email: string } | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: async (email, password) => {
        // Simulate API call
        await new Promise(r => setTimeout(r, 800))
        if (email === 'admin@example.com' && password === 'password') {
          set({ user: { name: 'Admin User', email } })
        } else {
          throw new Error('Invalid credentials')
        }
      },
      logout: () => set({ user: null }),
    }),
    { name: 'auth' }
  )
)
```

### 3. App Layout

```tsx
// src/components/layout/AppLayout.tsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
```

### 4. Stats Cards

```tsx
// src/components/dashboard/StatsCard.tsx
interface StatsCardProps {
  label: string
  value: string | number
  change: number    // percentage change
  icon: React.ReactNode
}

function StatsCard({ label, value, change, icon }: StatsCardProps) {
  const isPositive = change >= 0

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        <p className={`mt-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}% from last month
        </p>
      </div>
      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
    </div>
  )
}
```

### 5. User Table with Search and Pagination

```tsx
// src/components/dashboard/UserTable.tsx
import { useState } from 'react'
import { User } from '@/types'

interface UserTableProps {
  users: User[]
  onEdit: (user: User) => void
  onDelete: (id: number) => void
}

const PAGE_SIZE = 10

function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState<keyof User>('name')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(1)

  const filtered = users
    .filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortField] as string
      const bVal = b[sortField] as string
      return sortDir === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    })

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)

  function handleSort(field: keyof User) {
    if (field === sortField) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDir('asc')
    }
    setPage(1)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <input
          type="search"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
          placeholder="Search users..."
          className="w-full max-w-sm px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg
            bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              {(['name', 'email', 'role', 'status'] as (keyof User)[]).map(field => (
                <th
                  key={field}
                  className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-900"
                  onClick={() => handleSort(field)}
                >
                  {field} {sortField === field ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
              ))}
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {paginated.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{user.name}</td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{user.email}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => onEdit(user)} className="text-blue-600 hover:underline mr-3 text-sm">Edit</button>
                  <button onClick={() => onDelete(user.id)} className="text-red-500 hover:underline text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500">
        <span>Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}</span>
        <div className="flex gap-2">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1 rounded border disabled:opacity-50">Prev</button>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="px-3 py-1 rounded border disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  )
}
```

---

## Checklist Before Submission

- [ ] Login page with fake auth (admin@example.com / password)
- [ ] Protected routes — redirect to /login if not authenticated
- [ ] Dashboard home with 4 stat cards
- [ ] Users page with table: search, sort, paginate
- [ ] Create user modal with form validation
- [ ] Edit user modal (pre-filled with existing data)
- [ ] Delete with confirmation
- [ ] Dark mode toggle persisted in localStorage
- [ ] Responsive: sidebar collapses on mobile
- [ ] No TypeScript errors (`pnpm typecheck`)
- [ ] README with screenshots and setup instructions

---

## Next Phase

Phase 7 — TypeScript: types, interfaces, generics, utility types, typing React apps
