# 005 - Project: Expense Tracker

## Section
Phase 4 — JavaScript Core

## Project Overview

Build a full-featured expense tracker using only Vanilla JavaScript (no frameworks). This is **Project 2** in your portfolio.

---

## Skills Demonstrated

- DOM manipulation
- Event handling
- localStorage persistence
- Array methods (map, filter, reduce)
- Modern JS (destructuring, spread, optional chaining)
- Modular code organization

---

## Features

### Core Features
- Add transactions (description, amount, category, date)
- Mark as income (positive) or expense (negative)
- Delete transaction
- Live running balance (income − expenses)
- Category filter
- LocalStorage persistence

### Bonus Features
- Edit existing transaction
- Sort by date or amount
- Simple bar chart using CSS (no library)
- Export to CSV

---

## File Structure

```
expense-tracker/
├── index.html
├── styles.css
├── src/
│   ├── main.js        — entry point, renders app
│   ├── store.js       — state management
│   ├── transactions.js — add/delete/edit operations
│   └── utils.js       — format currency, format date
└── README.md
```

---

## Data Model

```javascript
// Each transaction
{
  id: 1718865600000,          // Date.now() as unique ID
  description: 'Freelance payment',
  amount: 500,                // positive = income, negative = expense
  category: 'income',         // 'income', 'food', 'transport', 'entertainment', 'other'
  date: '2025-06-20'
}

// App state
{
  transactions: [],
  filter: 'all'               // 'all' | 'income' | category name
}
```

---

## Step-by-Step Guide

### Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <header>
      <h1>Expense Tracker</h1>
    </header>

    <!-- Summary Cards -->
    <section class="summary">
      <div class="summary-card balance">
        <span class="label">Balance</span>
        <span class="amount" id="balance">$0.00</span>
      </div>
      <div class="summary-card income">
        <span class="label">Income</span>
        <span class="amount" id="total-income">$0.00</span>
      </div>
      <div class="summary-card expense">
        <span class="label">Expenses</span>
        <span class="amount" id="total-expense">$0.00</span>
      </div>
    </section>

    <!-- Add Transaction Form -->
    <section class="form-section">
      <h2>Add Transaction</h2>
      <form id="transaction-form">
        <div class="form-row">
          <label for="description">Description</label>
          <input type="text" id="description" required minlength="2">
        </div>
        <div class="form-row">
          <label for="amount">Amount</label>
          <input type="number" id="amount" step="0.01" required>
          <small>Positive for income, negative for expense</small>
        </div>
        <div class="form-row">
          <label for="category">Category</label>
          <select id="category">
            <option value="income">Income</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-row">
          <label for="date">Date</label>
          <input type="date" id="date" required>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </section>

    <!-- Filter and List -->
    <section class="transactions-section">
      <div class="list-header">
        <h2>Transactions</h2>
        <select id="filter-select">
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <ul id="transaction-list"></ul>
      <p id="empty-state" class="empty-state hidden">No transactions yet.</p>
    </section>
  </div>

  <script type="module" src="src/main.js"></script>
</body>
</html>
```

### Step 2: Utility Functions (`src/utils.js`)

```javascript
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function generateId() {
  return Date.now()
}
```

### Step 3: State Store (`src/store.js`)

```javascript
const STORAGE_KEY = 'expense-tracker-data'

const defaultState = {
  transactions: [],
  filter: 'all',
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState
  } catch {
    return defaultState
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function createStore() {
  let state = loadState()
  const listeners = []

  return {
    getState: () => ({ ...state, transactions: [...state.transactions] }),

    setState(updates) {
      state = { ...state, ...updates }
      saveState(state)
      listeners.forEach(fn => fn(state))
    },

    subscribe(fn) {
      listeners.push(fn)
      return () => {
        const index = listeners.indexOf(fn)
        if (index !== -1) listeners.splice(index, 1)
      }
    },
  }
}
```

### Step 4: Transaction Logic (`src/transactions.js`)

```javascript
import { generateId } from './utils.js'

export function addTransaction(state, { description, amount, category, date }) {
  const newTransaction = {
    id: generateId(),
    description: description.trim(),
    amount: parseFloat(amount),
    category,
    date,
  }

  return {
    ...state,
    transactions: [newTransaction, ...state.transactions],
  }
}

export function deleteTransaction(state, id) {
  return {
    ...state,
    transactions: state.transactions.filter(t => t.id !== id),
  }
}

export function getFilteredTransactions(transactions, filter) {
  if (filter === 'all') return transactions
  return transactions.filter(t => t.category === filter)
}

export function calculateSummary(transactions) {
  return transactions.reduce(
    (acc, t) => {
      if (t.amount > 0) {
        acc.income += t.amount
      } else {
        acc.expense += Math.abs(t.amount)
      }
      acc.balance += t.amount
      return acc
    },
    { balance: 0, income: 0, expense: 0 }
  )
}
```

### Step 5: Main Render (`src/main.js`)

```javascript
import { createStore } from './store.js'
import { addTransaction, deleteTransaction, getFilteredTransactions, calculateSummary } from './transactions.js'
import { formatCurrency, formatDate } from './utils.js'

const store = createStore()

function render(state) {
  const { transactions, filter } = state
  const filtered = getFilteredTransactions(transactions, filter)
  const { balance, income, expense } = calculateSummary(transactions)

  // Update summary
  document.getElementById('balance').textContent = formatCurrency(balance)
  document.getElementById('total-income').textContent = formatCurrency(income)
  document.getElementById('total-expense').textContent = formatCurrency(expense)

  // Update balance color
  document.getElementById('balance').className =
    `amount ${balance >= 0 ? 'positive' : 'negative'}`

  // Render transaction list
  const list = document.getElementById('transaction-list')
  const empty = document.getElementById('empty-state')

  if (filtered.length === 0) {
    list.innerHTML = ''
    empty.classList.remove('hidden')
    return
  }

  empty.classList.add('hidden')
  list.innerHTML = filtered.map(t => `
    <li class="transaction-item ${t.amount >= 0 ? 'income' : 'expense'}" data-id="${t.id}">
      <div class="transaction-info">
        <span class="transaction-desc">${t.description}</span>
        <span class="transaction-meta">${t.category} · ${formatDate(t.date)}</span>
      </div>
      <div class="transaction-right">
        <span class="transaction-amount">${formatCurrency(t.amount)}</span>
        <button class="delete-btn" aria-label="Delete transaction">✕</button>
      </div>
    </li>
  `).join('')
}

// Handle form submission
document.getElementById('transaction-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const form = e.target

  const newState = addTransaction(store.getState(), {
    description: form.description.value,
    amount: form.amount.value,
    category: form.category.value,
    date: form.date.value,
  })

  store.setState(newState)
  form.reset()
  form.date.value = new Date().toISOString().split('T')[0]
})

// Handle delete via event delegation
document.getElementById('transaction-list').addEventListener('click', (e) => {
  if (!e.target.matches('.delete-btn')) return
  const item = e.target.closest('.transaction-item')
  const id = Number(item.dataset.id)
  store.setState(deleteTransaction(store.getState(), id))
})

// Handle filter change
document.getElementById('filter-select').addEventListener('change', (e) => {
  store.setState({ filter: e.target.value })
})

// Subscribe to state changes
store.subscribe(render)

// Set default date to today
document.getElementById('date').value = new Date().toISOString().split('T')[0]

// Initial render
render(store.getState())
```

---

## Checklist Before Submission

- [ ] Balance, income, and expense update in real time
- [ ] Transactions persist after page refresh (localStorage)
- [ ] Delete works correctly
- [ ] Category filter works
- [ ] Empty state shows when no transactions match filter
- [ ] Positive amounts shown in green, negative in red
- [ ] Form resets after adding a transaction
- [ ] Responsive on mobile
- [ ] README with screenshots

---

## Next Phase

Phase 5 — Git and Tooling: Git, GitHub, pnpm, Vite
