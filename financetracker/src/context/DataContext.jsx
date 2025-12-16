import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import {
  fetchTransactions,
  fetchTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  fetchProfile,
  updateProfile,
} from '../api/mockApi'

const DataContext = createContext()

export const useData = () => {
  const ctx = useContext(DataContext)
  if (!ctx) {
    throw new Error('useData must be used within a DataProvider')
  }
  return ctx
}

export const DataProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])
  const [transactionsLoading, setTransactionsLoading] = useState(false)
  const [transactionsError, setTransactionsError] = useState(null)

  const [profile, setProfile] = useState(null)
  const [profileLoading, setProfileLoading] = useState(false)
  const [profileError, setProfileError] = useState(null)

  const loadTransactions = useCallback(async () => {
    setTransactionsLoading(true)
    setTransactionsError(null)
    try {
      const data = await fetchTransactions()
      setTransactions(data)
    } catch (err) {
      setTransactionsError(err.message || 'Failed to load transactions')
    } finally {
      setTransactionsLoading(false)
    }
  }, [])

  const loadProfile = useCallback(async () => {
    setProfileLoading(true)
    setProfileError(null)
    try {
      const data = await fetchProfile()
      setProfile(data)
    } catch (err) {
      setProfileError(err.message || 'Failed to load profile')
    } finally {
      setProfileLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTransactions()
    loadProfile()
  }, [loadTransactions, loadProfile])

  const getTransactionByIdSafe = useCallback(
    async (id) => {
      try {
        const existing = transactions.find(t => t.id === String(id))
        if (existing) return existing
        const fresh = await fetchTransactionById(id)
        return fresh
      } catch (err) {
        throw err
      }
    },
    [transactions]
  )

  const addTransaction = async (payload) => {
    const created = await createTransaction(payload)
    setTransactions(prev => [created, ...prev])
    return created
  }

  const editTransaction = async (id, payload) => {
    const updated = await updateTransaction(id, payload)
    setTransactions(prev => prev.map(t => (t.id === String(id) ? updated : t)))
    return updated
  }

  const removeTransaction = async (id) => {
    await deleteTransaction(id)
    setTransactions(prev => prev.filter(t => t.id !== String(id)))
  }

  const saveProfile = async (changes) => {
    const updated = await updateProfile(changes)
    setProfile(updated)
    return updated
  }

  return (
    <DataContext.Provider
      value={{
        // transactions
        transactions,
        transactionsLoading,
        transactionsError,
        loadTransactions,
        getTransactionById: getTransactionByIdSafe,
        addTransaction,
        editTransaction,
        removeTransaction,
        // profile
        profile,
        profileLoading,
        profileError,
        loadProfile,
        saveProfile,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}



