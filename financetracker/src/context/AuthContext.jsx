import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}

const STORAGE_KEY = 'fintrack_auth'

const loadStoredAuth = () => {
  if (typeof window === 'undefined') return { user: null, token: null }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { user: null, token: null }
    return JSON.parse(raw)
  } catch {
    return { user: null, token: null }
  }
}

const storeAuth = (value) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = loadStoredAuth()
    setUser(stored.user)
    setToken(stored.token)
    setLoading(false)
  }, [])

  const login = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    const role = email.toLowerCase().includes('admin') ? 'admin' : 'user'
    const fakeToken = `token-${Date.now()}`

    const authState = {
      user: {
        email,
        name: role === 'admin' ? 'Admin User' : 'FinTrack User',
        role,
      },
      token: fakeToken,
    }

    setUser(authState.user)
    setToken(authState.token)
    storeAuth(authState)
    return authState.user
  }

  const register = async ({ name, email, password }) => {
    if (!name || !email || !password) {
      throw new Error('Name, email, and password are required')
    }
    const role = email.toLowerCase().includes('admin') ? 'admin' : 'user'
    const fakeToken = `token-${Date.now()}`
    const authState = {
      user: {
        email,
        name,
        role,
      },
      token: fakeToken,
    }
    setUser(authState.user)
    setToken(authState.token)
    storeAuth(authState)
    return authState.user
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    storeAuth({ user: null, token: null })
  }

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!token,
    isAdmin: user?.role === 'admin',
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


