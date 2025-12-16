import { useData } from '../../context/DataContext'
import { formatCurrency } from '../../utils/helpers'



const AdminDashboardCards = () => {
  const { transactions } = useData()

  // Calculate metrics from transactions
  const totalTransactions = transactions.length
  const totalRevenue = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0)
  
  // Mock total users - can be extended if user management is added
  const totalUsers = 5

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {/* Total Transactions Card */}
      <div className="bg-gradient-to-br from-sea-blue to-sea-blue/80 dark:from-blue-600 dark:to-blue-700 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium opacity-90">Total Transactions</h3>
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <p className="text-3xl font-bold">{totalTransactions}</p>
        <p className="text-sm opacity-80 mt-2">All system transactions</p>
      </div>

      {/* Total Users Card */}
      <div className="bg-gradient-to-br from-matcha to-matcha/80 dark:from-green-600 dark:to-green-700 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium opacity-90">Total Users</h3>
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 12H9m4.646-4.646a.5.5 0 00-.707 0l-4 4a.5.5 0 00.707.707L12 8.707l3.646 3.647a.5.5 0 00.707-.707l-4-4z" />
            </svg>
          </div>
        </div>
        <p className="text-3xl font-bold">{totalUsers}</p>
        <p className="text-sm opacity-80 mt-2">Active accounts</p>
      </div>

      {/* Total Revenue Card */}
      <div className="bg-gradient-to-br from-lemonade to-honey-drizzle dark:from-yellow-500 dark:to-orange-500 rounded-xl shadow-lg p-6 text-coffee-grounds dark:text-gray-900">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium opacity-90">Total Revenue</h3>
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p className="text-3xl font-bold">{formatCurrency(totalRevenue)}</p>
        <p className="text-sm opacity-80 mt-2">Total income</p>
      </div>
    </div>
  )
}

export default AdminDashboardCards
