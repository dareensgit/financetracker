import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from 'recharts'
import Navbar from '../../components/navigation/Navbar'
import { Container } from '../../components/layout'
import { useUI } from '../../context/UIContext'
import { useData } from '../../context/DataContext'
import { formatCurrency } from '../../utils/helpers'

const Dashboard = () => {
  const { isDarkMode } = useUI()
  const { transactions } = useData()
  const [selectedMonth, setSelectedMonth] = useState('All Months')
  const [selectedType, setSelectedType] = useState('All Types')
  const [showCustomRange, setShowCustomRange] = useState(false)
  const [customStartDate, setCustomStartDate] = useState('')
  const [customEndDate, setCustomEndDate] = useState('')

  // Helper function to safely parse date strings and get local date
  const parseLocalDate = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    return date
  }

  // Helper function to apply date filtering (month or custom range)
  const applyDateFilter = (tx) => {
    const txDate = parseLocalDate(tx.date)
    
    if (showCustomRange && customStartDate && customEndDate) {
      const startDate = parseLocalDate(customStartDate)
      const endDate = parseLocalDate(customEndDate)
      endDate.setHours(23, 59, 59, 999)
      return txDate >= startDate && txDate <= endDate
    } else if (selectedMonth !== 'All Months') {
      // Parse month from format "October 2025"
      const [monthName, year] = selectedMonth.split(' ')
      const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth()
      const txMonth = txDate.getMonth()
      const txYear = txDate.getFullYear()
      return txMonth === monthIndex && txYear === parseInt(year)
    }
    return true
  }

  // Helper function to apply type filtering
  const applyTypeFilter = (tx) => {
    if (selectedType === 'All Types') return true
    // Income: show only income transactions
    if (selectedType === 'Income') return tx.type === 'income'
    // Expenses: show all transactions that are NOT income (i.e., all expense transactions)
    if (selectedType === 'Expenses') return tx.type === 'expense'
    return true
  }

  // Get transactions filtered by BOTH month/date AND type
  const getFilteredTransactions = () => {
    return transactions.filter(tx => applyDateFilter(tx) && applyTypeFilter(tx))
  }

  const filteredTransactions = getFilteredTransactions()

  // Get transactions filtered ONLY by date (for calculating full income/expense totals)
  const getDateFilteredTransactions = () => {
    return transactions.filter(tx => applyDateFilter(tx))
  }

  const dateFilteredTransactions = getDateFilteredTransactions()

  const incomeTotal = filteredTransactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0)

  const expenseTotal = filteredTransactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0)

  const netIncome = incomeTotal - expenseTotal
  const savingsRate = incomeTotal ? (netIncome / incomeTotal) * 100 : 0

  const categoryMap = filteredTransactions.reduce((acc, tx) => {
    if (tx.type === 'expense') {
      acc[tx.category] = (acc[tx.category] || 0) + tx.amount
    }
    return acc
  }, {})

  const categoryData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }))

  const monthlyMap = filteredTransactions.reduce((acc, tx) => {
    const txDate = parseLocalDate(tx.date)
    const monthKey = txDate.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
    if (!acc[monthKey]) {
      acc[monthKey] = { month: monthKey, income: 0, expense: 0 }
    }
    if (tx.type === 'income') {
      acc[monthKey].income += tx.amount
    } else {
      acc[monthKey].expense += tx.amount
    }
    return acc
  }, {})

  const monthlyData = Object.values(monthlyMap).sort((a, b) => {
    return new Date(a.month) - new Date(b.month)
  })

  let running = 0
  const balanceData = [...filteredTransactions]
    .sort((a, b) => parseLocalDate(a.date) - parseLocalDate(b.date))
    .map(tx => {
      running += tx.type === 'income' ? tx.amount : -tx.amount
      return {
        date: parseLocalDate(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        balance: running,
      }
    })

  return (
    <div className={`bg-gray-50 dark:bg-slate-900 min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="dashboard" />

      <Container maxWidth="7xl" className="py-8" role="main" aria-label="Dashboard overview">
        
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-wrap gap-3">
              <select 
                value={selectedMonth}
                onChange={(e) => {
                  setSelectedMonth(e.target.value)
                  setShowCustomRange(false)
                  setCustomStartDate('')
                  setCustomEndDate('')
                }}
                className="px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All Months">All Months</option>
                <option>October 2025</option>
                <option>September 2025</option>
                <option>August 2025</option>
                <option>July 2025</option>
                <option>June 2025</option>
              </select>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Types</option>
                <option>Income</option>
                <option>Expenses</option>
              </select>
            </div>
            <button 
              onClick={() => {
                setShowCustomRange(!showCustomRange)
                if (showCustomRange) {
                  // Reset custom range when closing
                  setCustomStartDate('')
                  setCustomEndDate('')
                }
              }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                showCustomRange 
                  ? 'bg-sea-blue text-white dark:bg-blue-600' 
                  : 'text-sea-blue dark:text-blue-400 hover:bg-sea-blue/5 dark:hover:bg-blue-900/20'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
              </svg>
              <span>{showCustomRange ? 'Hide' : 'Custom'} Range</span>
            </button>
          </div>

          {showCustomRange && (
            <div className="mt-4 p-4 bg-sea-blue/5 dark:bg-blue-900/20 rounded-lg border border-sea-blue/20 dark:border-blue-800/30">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-grounds dark:text-gray-300 mb-2">Start Date</label>
                  <input 
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-coffee-grounds dark:text-gray-300 mb-2">End Date</label>
                  <input 
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              {customStartDate && customEndDate && new Date(customStartDate) > new Date(customEndDate) && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">Start date must be before end date</p>
              )}
              <button 
                onClick={() => setShowCustomRange(false)}
                disabled={!customStartDate || !customEndDate || new Date(customStartDate) > new Date(customEndDate)}
                className="mt-3 px-4 py-2 bg-sea-blue dark:bg-blue-600 text-white rounded-lg hover:bg-sea-blue/90 dark:hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                Apply Range
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          
          <div className="lg:col-span-1 space-y-4">
            
            <div className="bg-gradient-to-br from-matcha to-matcha/90 dark:from-green-600 dark:to-green-700 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Total Income</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(incomeTotal)}</p>
              <p className="text-sm opacity-80 mt-1">+12% from last month</p>
            </div>

            <div className="bg-gradient-to-br from-honey-drizzle to-honey-drizzle/90 dark:from-orange-600 dark:to-orange-700 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Total Expenses</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(expenseTotal)}</p>
              <p className="text-sm opacity-80 mt-1">-5% from last month</p>
            </div>

            <div className="bg-gradient-to-br from-sea-blue to-sea-blue/90 dark:from-blue-600 dark:to-blue-700 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Net Income</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(netIncome)}</p>
              <p className="text-sm opacity-80 mt-1">38% of income</p>
            </div>

            <div className="bg-gradient-to-br from-lemonade to-lemonade/90 dark:from-yellow-500 dark:to-yellow-600 text-coffee-grounds dark:text-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Savings Rate</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">
                {Number.isFinite(savingsRate) ? `${savingsRate.toFixed(1)}%` : '0%'}
              </p>
              <p className="text-sm opacity-80 mt-1">Great job!</p>
            </div>

          </div>

          <div className="lg:col-span-3 space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100 mb-4">
                  Spending by Category
                </h3>
                <div className="flex items-center justify-center h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={40}
                        paddingAngle={2}
                      >
                        {categoryData.map((entry, index) => {
                          const colorsLight = ['#0F4E77', '#89A577', '#F8D27E', '#E7B08B', '#F97316']
                          const colorsDark = ['#2563eb', '#16a34a', '#eab308', '#ea580c', '#f97316']
                          const color = (isDarkMode ? colorsDark : colorsLight)[index % colorsLight.length]
                          return <Cell key={entry.name} fill={color} />
                        })}
                      </Pie>
                      <Tooltip
                        formatter={(value) => formatCurrency(value)}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100 mb-4">
                  Income vs Expenses
                </h3>
                <div className="h-64 pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} className="opacity-40" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis tickFormatter={(v) => v.toLocaleString()} />
                      <Tooltip
                        formatter={(value) => formatCurrency(value)}
                      />
                      <Legend />
                      <Bar dataKey="income" name="Income" fill={isDarkMode ? '#16a34a' : '#89A577'} />
                      <Bar dataKey="expense" name="Expenses" fill={isDarkMode ? '#ea580c' : '#E7B08B'} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100 mb-4">
                Balance Trend Over Time
              </h3>
              <div className="h-64 pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={balanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} className="opacity-40" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`} />
                    <Tooltip
                      formatter={(value) => formatCurrency(value)}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      stroke={isDarkMode ? '#2563eb' : '#0F4E77'} 
                      strokeWidth={2}
                      dot={{ fill: isDarkMode ? '#3b82f6' : '#0F4E77', r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100">Recent Transactions</h3>
                <Link to="/transactions" className="text-sea-blue dark:text-blue-400 hover:underline text-sm font-medium">View All</Link>
              </div>

              <div className="space-y-3">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.slice(0, 6).map(tx => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sea-blue/10 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-sea-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-coffee-grounds dark:text-gray-100">{tx.title}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {parseLocalDate(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {tx.category}
                          </p>
                        </div>
                      </div>
                      <span className={`text-lg font-semibold ${tx.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {tx.type === 'income' ? '+ ' : '- '}
                        {formatCurrency(tx.amount)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-6">No transactions found for selected filters</p>
                )}
              </div>
            </div>

          </div>

        </motion.div>

      </Container>
    </div>
  )
}

export default Dashboard

