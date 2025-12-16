import { motion } from 'framer-motion'
import Navbar from '../../components/navigation/Navbar'
import { Container } from '../../components/layout'
import { useUI } from '../../context/UIContext'
import { useAuth } from '../../context/AuthContext'
import AdminDashboardCards from '../../components/admin/AdminDashboardCards'
import AdminQuickActions from '../../components/admin/AdminQuickActions'


const AdminPanel = () => {
  const { isDarkMode } = useUI()
  const { user } = useAuth()

  return (
    <div className={`bg-gray-50 dark:bg-slate-900 min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="admin" />

      <Container maxWidth="7xl" className="py-8" role="main" aria-label="Admin panel">
        {/* Page Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-bold text-coffee-grounds dark:text-gray-100 mb-2">
            Admin Panel
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Manage system metrics and perform administrative tasks
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Welcome, {user?.name || 'Admin'}
          </p>
        </motion.div>

        {/* Admin Dashboard Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <AdminDashboardCards />
        </motion.div>

        {/* Admin Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <AdminQuickActions />
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-xl p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-lg font-semibold text-sea-blue dark:text-blue-400 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Admin Features
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li className="flex items-start">
              <span className="text-sea-blue dark:text-blue-400 font-bold mr-3">•</span>
              <span><strong>Dashboard Cards:</strong> View real-time metrics including total transactions, active users, and system revenue.</span>
            </li>
            <li className="flex items-start">
              <span className="text-sea-blue dark:text-blue-400 font-bold mr-3">•</span>
              <span><strong>Approve Requests:</strong> Process pending approvals with a single click.</span>
            </li>
            <li className="flex items-start">
              <span className="text-sea-blue dark:text-blue-400 font-bold mr-3">•</span>
              <span><strong>Export Data:</strong> Download all transactions as a CSV file for external analysis.</span>
            </li>
            <li className="flex items-start">
              <span className="text-sea-blue dark:text-blue-400 font-bold mr-3">•</span>
              <span><strong>Reset System:</strong> Restore the system to its initial seed data (useful for demos).</span>
            </li>
          </ul>
        </motion.div>
      </Container>
    </div>
  )
}

export default AdminPanel
