import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUI } from '../../context/UIContext'
import { useAuth } from '../../context/AuthContext'

const Navbar = ({ currentPage = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useUI()
  const navigate = useNavigate()
  const { user, isAdmin, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const isActive = (page) => {
    return currentPage === page ? 'text-lemonade font-semibold' : 'text-white/70 hover:text-lemonade'
  }

  return (
    <nav
      className="bg-sea-blue dark:bg-slate-800 shadow-lg px-4 md:px-6 py-3"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-lemonade w-10 h-10 flex items-center justify-center rounded-full text-coffee-grounds font-bold">
            <svg className="w-6 h-6 text-sea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <Link to="/home" className="font-semibold text-lg text-white">FinTrack</Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className={isActive('dashboard')}>Dashboard</Link>
          <Link to="/transactions" className={isActive('transactions')}>Transactions</Link>
          {isAdmin && (
            <Link to="/admin" className={isActive('admin')}>Admin</Link>
          )}
          <Link to="/profile" className={isActive('profile')}>Profile</Link>
          <Link to="/home" className={isActive('home')}>Home</Link>
          <button
            onClick={() => navigate('/transactions/add')}
            className={`bg-lemonade hover:bg-opacity-90 font-bold px-4 py-2 rounded-lg shadow-md ${isDarkMode ? 'text-sea-blue' : 'text-coffee-grounds'}`}>
            + Add Transaction
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-white/70 hover:text-lemonade p-2 rounded-lg transition-colors"
            aria-label="Toggle dark mode">
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          {user && (
            <span className="text-white/70 text-sm">
              {isAdmin ? 'Admin' : 'User'}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="text-white/70 hover:text-lemonade font-semibold">Logout</button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="text-white p-2 rounded-lg transition-colors"
            aria-label="Toggle dark mode">
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            id="menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'} mt-4 space-y-2`}>
        <Link to="/dashboard" className="block px-4 py-2 rounded text-white/70 hover:bg-white/10">Dashboard</Link>
        <Link to="/transactions" className="block px-4 py-2 rounded text-lemonade font-semibold bg-lemonade/10">Transactions</Link>
        {isAdmin && (
          <Link to="/admin" className="block px-4 py-2 rounded text-white/70 hover:bg-white/10">Admin</Link>
        )}
        <Link to="/profile" className="block px-4 py-2 rounded text-white/70 hover:bg-white/10">Profile</Link>
        <Link to="/home" className="block px-4 py-2 rounded text-white/70 hover:bg-white/10">Home</Link>
        <button
          onClick={() => navigate('/transactions/add')}
          className={`w-full bg-lemonade hover:bg-opacity-90 font-bold px-4 py-2 rounded-lg shadow-md ${isDarkMode ? 'text-sea-blue' : 'text-coffee-grounds'}`}>
          + Add Transaction
        </button>
        <button onClick={handleLogout} className="block w-full px-4 py-2 text-left text-white/70 hover:bg-white/10">Logout</button>
      </div>
    </nav>
  )
}

export default Navbar


