import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Profile from '../pages/auth/Profile'
import Home from '../pages/main/Home'
import Dashboard from '../pages/main/Dashboard'
import TransactionList from '../pages/transactions/TransactionList'
import TransactionDetails from '../pages/transactions/TransactionDetails'
import AddEditTransaction from '../pages/transactions/AddEditTransaction'

// Router configuration including transaction routes
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/transactions" element={<TransactionList />} />
      <Route path="/transactions/:id" element={<TransactionDetails />} />
      <Route path="/transactions/add" element={<AddEditTransaction />} />
      <Route path="/transactions/edit/:id" element={<AddEditTransaction />} />
    </Routes>
  )
}

export default AppRouter


