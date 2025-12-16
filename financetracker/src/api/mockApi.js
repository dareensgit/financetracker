// Mock API layer using in-memory data with localStorage persistence
// Simulates async requests with small timeouts, no external server needed.

const STORAGE_KEYS = {
  TRANSACTIONS: 'fintrack_transactions',
  PROFILE: 'fintrack_profile',
}

const delay = (ms = 400) => new Promise(resolve => setTimeout(resolve, ms))

const seedTransactions = [
  {
    id: '1',
    title: 'Rent Payment',
    date: '2025-10-28',
    category: 'Housing',
    type: 'expense',
    amount: 1200,
    notes: 'Monthly apartment rent.',
  },
  {
    id: '2',
    title: 'Monthly Salary',
    date: '2025-10-27',
    category: 'Income',
    type: 'income',
    amount: 4500,
    notes: 'October paycheck.',
  },
  {
    id: '3',
    title: 'Grocery Shopping',
    date: '2025-10-26',
    category: 'Food',
    type: 'expense',
    amount: 142.5,
    notes: 'Weekly groceries.',
  },
  {
    id: '4',
    title: 'Netflix Subscription',
    date: '2025-10-26',
    category: 'Entertainment',
    type: 'expense',
    amount: 15.99,
    notes: 'Monthly streaming subscription.',
  },
]

const seedProfile = {
  id: 'user-1',
  name: 'Dareen E.',
  email: 'you@example.com',
  phone: '+20 123 456 7890',
  memberSince: '2024-03-01',
  accountType: 'Personal',
  location: 'Giza, Egypt',
  totalBalance: 12480,
  monthlySavings: 2150,
  goalsCompleted: '4/6',
}

const getStored = (key, fallback) => {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

const setStored = (key, value) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore
  }
}

export async function fetchTransactions() {
  await delay()
  const transactions = getStored(STORAGE_KEYS.TRANSACTIONS, seedTransactions)
  if (!localStorage.getItem(STORAGE_KEYS.TRANSACTIONS)) {
    setStored(STORAGE_KEYS.TRANSACTIONS, transactions)
  }
  return transactions
}

export async function fetchTransactionById(id) {
  await delay()
  const transactions = getStored(STORAGE_KEYS.TRANSACTIONS, seedTransactions)
  const tx = transactions.find(t => t.id === String(id))
  if (!tx) {
    throw new Error('Transaction not found')
  }
  return tx
}

export async function createTransaction(data) {
  await delay()
  const transactions = getStored(STORAGE_KEYS.TRANSACTIONS, seedTransactions)
  const id = String(Date.now())
  const newTx = { id, ...data }
  const next = [newTx, ...transactions]
  setStored(STORAGE_KEYS.TRANSACTIONS, next)
  return newTx
}

export async function updateTransaction(id, data) {
  await delay()
  const transactions = getStored(STORAGE_KEYS.TRANSACTIONS, seedTransactions)
  const index = transactions.findIndex(t => t.id === String(id))
  if (index === -1) {
    throw new Error('Transaction not found')
  }
  const updated = { ...transactions[index], ...data }
  const next = [...transactions]
  next[index] = updated
  setStored(STORAGE_KEYS.TRANSACTIONS, next)
  return updated
}

export async function deleteTransaction(id) {
  await delay()
  const transactions = getStored(STORAGE_KEYS.TRANSACTIONS, seedTransactions)
  const next = transactions.filter(t => t.id !== String(id))
  setStored(STORAGE_KEYS.TRANSACTIONS, next)
  return { success: true }
}

export async function fetchProfile() {
  await delay()
  const profile = getStored(STORAGE_KEYS.PROFILE, seedProfile)
  if (!localStorage.getItem(STORAGE_KEYS.PROFILE)) {
    setStored(STORAGE_KEYS.PROFILE, profile)
  }
  return profile
}

export async function updateProfile(data) {
  await delay()
  const current = getStored(STORAGE_KEYS.PROFILE, seedProfile)
  const updated = { ...current, ...data }
  setStored(STORAGE_KEYS.PROFILE, updated)
  return updated
}



