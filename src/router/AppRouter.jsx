import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Profile from '../pages/auth/Profile'
import Home from '../pages/main/Home'
import Dashboard from '../pages/main/Dashboard'
import TransactionList from '../pages/transactions/TransactionList'
import TransactionDetails from '../pages/transactions/TransactionDetails'
import AddEditTransaction from '../pages/transactions/AddEditTransaction'
import AdminPanel from '../pages/admin/AdminPanel'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ element, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) {
    return null
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />
  }

  return element
}

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={<PrivateRoute element={<Home />} />}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />}
      />
      <Route
        path="/profile"
        element={<PrivateRoute element={<Profile />} />}
      />
      <Route
        path="/admin"
        element={<PrivateRoute element={<AdminPanel />} requireAdmin={true} />}
      />
      <Route
        path="/transactions"
        element={<PrivateRoute element={<TransactionList />} />}
      />
      <Route
        path="/transactions/:id"
        element={<PrivateRoute element={<TransactionDetails />} />}
      />
      <Route
        path="/transactions/add"
        element={<PrivateRoute element={<AddEditTransaction />} />}
      />
      <Route
        path="/transactions/edit/:id"
        element={<PrivateRoute element={<AddEditTransaction />} />}
      />
    </Routes>
  )
}

export default AppRouter


