# 003 - Project: Product Management App

## Section
Phase 7 — TypeScript

## Project Overview

Build a product management CRUD app with React + TypeScript — **Project 4** in your portfolio. All data is typed end-to-end, demonstrating TypeScript confidence.

---

## Skills Demonstrated

- TypeScript types, interfaces, generics, utility types
- Typed component props, events, refs
- Typed custom hooks and API layer
- Form validation with TypeScript
- Zustand store with TypeScript

---

## Features

- Product list with search, filter by category, sort by price
- Add product form with validation
- Edit product modal (pre-filled)
- Delete with confirmation
- Category badge
- In-stock / out-of-stock indicator
- Data persisted to localStorage

---

## File Structure

```
product-management/
├── src/
│   ├── types/
│   │   └── product.ts
│   ├── stores/
│   │   └── useProductStore.ts
│   ├── hooks/
│   │   └── useProductForm.ts
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── ProductForm.tsx
│   │   ├── ProductList.tsx
│   │   ├── ConfirmDialog.tsx
│   │   └── ui/ (Button, Input, Modal, Badge)
│   ├── pages/
│   │   └── ProductsPage.tsx
│   ├── App.tsx
│   └── main.tsx
```

---

## Types

```typescript
// src/types/product.ts
export const CATEGORIES = [
  'electronics',
  'clothing',
  'food',
  'books',
  'toys',
  'other',
] as const

export type Category = typeof CATEGORIES[number]

export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: Category
  inStock: boolean
  imageUrl?: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export type ProductFormData = {
  name: string
  description: string
  price: number
  category: Category
  inStock: boolean
  imageUrl: string
  tags: string
}

export type SortOption = 'name' | 'price-asc' | 'price-desc' | 'newest'
```

---

## Product Store

```typescript
// src/stores/useProductStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, ProductFormData } from '@/types/product'
import { mockProducts } from '@/data/mockProducts'

interface ProductStore {
  products: Product[]
  addProduct: (data: ProductFormData) => void
  updateProduct: (id: number, data: Partial<ProductFormData>) => void
  deleteProduct: (id: number) => void
  getProduct: (id: number) => Product | undefined
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: mockProducts,

      addProduct: (data) => set(state => ({
        products: [
          ...state.products,
          {
            ...data,
            id: Date.now(),
            tags: data.tags.split(',').map(t => t.trim()).filter(Boolean),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ],
      })),

      updateProduct: (id, data) => set(state => ({
        products: state.products.map(p =>
          p.id === id
            ? {
                ...p,
                ...data,
                tags: data.tags !== undefined
                  ? data.tags.split(',').map(t => t.trim()).filter(Boolean)
                  : p.tags,
                updatedAt: new Date().toISOString(),
              }
            : p
        ),
      })),

      deleteProduct: (id) => set(state => ({
        products: state.products.filter(p => p.id !== id),
      })),

      getProduct: (id) => get().products.find(p => p.id === id),
    }),
    { name: 'product-store' }
  )
)
```

---

## Product Form Hook

```typescript
// src/hooks/useProductForm.ts
import { useState } from 'react'
import { Product, ProductFormData, CATEGORIES } from '@/types/product'

interface FormErrors {
  name?: string
  price?: string
  description?: string
}

const defaultValues: ProductFormData = {
  name: '',
  description: '',
  price: 0,
  category: 'other',
  inStock: true,
  imageUrl: '',
  tags: '',
}

function productToFormData(product: Product): ProductFormData {
  return {
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    inStock: product.inStock,
    imageUrl: product.imageUrl ?? '',
    tags: product.tags.join(', '),
  }
}

export function useProductForm(initial?: Product) {
  const [values, setValues] = useState<ProductFormData>(
    initial ? productToFormData(initial) : defaultValues
  )
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {}

    if (!values.name.trim() || values.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    if (values.price <= 0) {
      newErrors.price = 'Price must be greater than 0'
    }
    if (!values.description.trim() || values.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function reset() {
    setValues(defaultValues)
    setErrors({})
  }

  return { values, errors, handleChange, validate, reset }
}
```

---

## Product Form Component

```tsx
// src/components/ProductForm.tsx
import { CATEGORIES, Product, ProductFormData } from '@/types/product'
import { useProductForm } from '@/hooks/useProductForm'

interface ProductFormProps {
  initialProduct?: Product
  onSubmit: (data: ProductFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

function ProductForm({ initialProduct, onSubmit, onCancel, isLoading }: ProductFormProps) {
  const { values, errors, handleChange, validate, reset } = useProductForm(initialProduct)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validate()) {
      onSubmit(values)
      if (!initialProduct) reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium mb-1">Price *</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          min="0"
          value={values.price}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
        <select id="category" name="category" value={values.category} onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg">
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description *</label>
        <textarea id="description" name="description" value={values.description}
          onChange={handleChange} rows={3}
          className={`w-full px-3 py-2 border rounded-lg ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" name="inStock" checked={values.inStock} onChange={handleChange}
          className="w-4 h-4" />
        <span className="text-sm font-medium">In Stock</span>
      </label>

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={isLoading}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50">
          {isLoading ? 'Saving...' : initialProduct ? 'Update Product' : 'Add Product'}
        </button>
        <button type="button" onClick={onCancel}
          className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </form>
  )
}
```

---

## Checklist

- [ ] All components fully typed — no `any`
- [ ] `pnpm typecheck` passes with zero errors
- [ ] Form validation prevents invalid submission
- [ ] Edit pre-fills form with existing product data
- [ ] Delete shows confirmation dialog
- [ ] Search and category filter work together
- [ ] Sorting works: name, price ASC/DESC
- [ ] localStorage persistence
- [ ] Responsive layout
- [ ] README with screenshots and `pnpm typecheck` command

---

## Next Phase

Phase 8 — Next.js, SSR, SSG: App Router, server components, SEO, deployment
