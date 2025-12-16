import { useState } from 'react'
import { useData } from '../../context/DataContext'


const AdminQuickActions = () => {
  const { transactions, loadTransactions } = useData()
  const [actionFeedback, setActionFeedback] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Show feedback message
  const showFeedback = (message, type = 'success') => {
    setActionFeedback({ message, type })
    setTimeout(() => setActionFeedback(null), 3000)
  }

  // Action 1: Approve Pending Requests
  const handleApprovePendingRequests = async () => {
    setIsLoading(true)
    try {
      // Simulate approval process
      const pendingApprovals = {
        count: Math.floor(Math.random() * 5) + 1,
        timestamp: new Date().toISOString(),
      }
      
      // Store in localStorage as a mock approval log
      const approvalLog = JSON.parse(localStorage.getItem('fintrack_approvals') || '[]')
      approvalLog.push(pendingApprovals)
      localStorage.setItem('fintrack_approvals', JSON.stringify(approvalLog))

      showFeedback(`✓ Approved ${pendingApprovals.count} pending request(s)!`, 'success')
    } catch (err) {
      showFeedback('Failed to approve requests', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  // Action 2: Export Transactions CSV
  const handleExportCSV = async () => {
    setIsLoading(true)
    try {
      // Prepare CSV header
      const headers = ['ID', 'Title', 'Date', 'Category', 'Type', 'Amount', 'Notes']
      
      // Prepare CSV rows
      const rows = transactions.map(tx => [
        tx.id,
        `"${tx.title}"`, // Quote title to handle commas
        tx.date,
        tx.category,
        tx.type,
        tx.amount,
        `"${tx.notes || ''}"`, // Quote notes
      ])

      // Combine header and rows
      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(',')),
      ].join('\n')

      // Create blob and download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      
      link.setAttribute('href', url)
      link.setAttribute('download', `transactions_${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = 'hidden'
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      showFeedback(`✓ Exported ${transactions.length} transactions to CSV`, 'success')
    } catch (err) {
      showFeedback('Failed to export CSV', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  // Action 3: Reset System Data
  const handleResetSystemData = async () => {
    // Require confirmation
    if (!window.confirm('⚠️ This will reset all data to initial seed values. Are you sure?')) {
      return
    }

    setIsLoading(true)
    try {
      // Clear localStorage for transactions and profile
      localStorage.removeItem('fintrack_transactions')
      localStorage.removeItem('fintrack_profile')
      localStorage.removeItem('fintrack_approvals')

      // Reload transactions to show reset data
      await loadTransactions()

      showFeedback('✓ System data reset to initial state', 'success')
    } catch (err) {
      showFeedback('Failed to reset system data', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Quick Actions
      </h2>

      {/* Feedback Message */}
      {actionFeedback && (
        <div
          className={`mb-4 p-3 rounded-lg text-sm font-medium ${
            actionFeedback.type === 'success'
              ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
              : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
          }`}
          role="alert"
        >
          {actionFeedback.message}
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
        {/* Approve Pending Requests */}
        <button
          onClick={handleApprovePendingRequests}
          disabled={isLoading}
          aria-label="Approve pending requests"
          className="flex items-center justify-center space-x-2 px-4 py-3 bg-matcha hover:bg-matcha/90 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Approve Requests</span>
        </button>

        {/* Export Transactions CSV */}
        <button
          onClick={handleExportCSV}
          disabled={isLoading || transactions.length === 0}
          aria-label="Export transactions as CSV"
          className="flex items-center justify-center space-x-2 px-4 py-3 bg-sea-blue hover:bg-sea-blue/90 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Export CSV</span>
        </button>

        {/* Reset System Data */}
        <button
          onClick={handleResetSystemData}
          disabled={isLoading}
          aria-label="Reset system data to initial state"
          className="flex items-center justify-center space-x-2 px-4 py-3 bg-honey-drizzle hover:bg-honey-drizzle/90 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset Data</span>
        </button>
      </div>

      {/* Info Text */}
      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        💡 These actions are for admins only. Reset will reload data from seed values.
      </p>
    </div>
  )
}

export default AdminQuickActions
