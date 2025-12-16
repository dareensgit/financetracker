import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'
import { useData } from '../../context/DataContext'
import { Button, Input, Select, Textarea } from '../../components/ui'
import { Header, Card, Container, Footer } from '../../components/layout'

const AddEditTransaction = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isDarkMode, showNotification } = useUI()
  const { getTransactionById, addTransaction, editTransaction } = useData()
  const isEdit = !!id

  const [formData, setFormData] = useState({
    type: 'expense',
    category: '',
    amount: '',
    date: '',
    description: '',
  })
  const [loading, setLoading] = useState(isEdit)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    let isMounted = true
    const load = async () => {
      if (!isEdit) return
      try {
        const tx = await getTransactionById(id)
        if (isMounted && tx) {
          setFormData({
            type: tx.type || 'expense',
            category: tx.category || '',
            amount: tx.amount != null ? String(tx.amount) : '',
            date: tx.date || '',
            description: tx.notes || '',
          })
        }
      } catch (err) {
        if (isMounted) {
          showNotification(err.message || 'Failed to load transaction', 'error')
          navigate('/transactions')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }
    load()
    return () => {
      isMounted = false
    }
  }, [getTransactionById, id, isEdit, navigate, showNotification])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return

    if (!formData.category || !formData.amount || !formData.date) {
      showNotification('Please fill in all required fields', 'error')
      return
    }

    const numericAmount = Number(formData.amount)
    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      showNotification('Amount must be a positive number', 'error')
      return
    }

    try {
      setSubmitting(true)
      const payload = {
        title: formData.description || (formData.category || 'Transaction'),
        type: formData.type,
        category: formData.category,
        amount: numericAmount,
        date: formData.date,
        notes: formData.description,
      }

      if (isEdit) {
        await editTransaction(id, payload)
      } else {
        await addTransaction(payload)
      }

      showNotification(
        isEdit ? 'Transaction updated successfully!' : 'Transaction added successfully!',
        'success'
      )
      navigate('/transactions')
    } catch (err) {
      showNotification(err.message || 'Failed to save transaction', 'error')
      setSubmitting(false)
    }
  }

  const categoryOptions = [
    { value: '', label: 'Select category' },
    { value: 'housing', label: 'Housing' },
    { value: 'food', label: 'Food' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'salary', label: 'Salary' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'transport', label: 'Transport' },
    { value: 'healthcare', label: 'Healthcare' },
  ]

  return (
    <div className={`bg-gradient-to-br from-sea-blue/5 to-matcha/5 dark:from-slate-900 dark:to-slate-800 text-coffee-grounds dark:text-gray-100 font-sans min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="transactions" />

      <Container maxWidth="3xl">
        <Header
          title={isEdit ? 'Edit Transaction' : 'Add Transaction'}
          subtitle="Fill in the transaction details below"
        />

        <Card className="mt-6 mb-8">
          {loading ? (
            <div className="text-sm text-coffee-grounds/70 dark:text-gray-400">
              Loading transaction...
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label className={`block text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-coffee-grounds'}`}>
                Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="income"
                    checked={formData.type === 'income'}
                    onChange={handleChange}
                    className="text-matcha dark:text-green-500 focus:ring-matcha dark:focus:ring-green-500"
                  />
                  <span className={isDarkMode ? 'text-gray-100' : 'text-coffee-grounds'}>Income</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="expense"
                    checked={formData.type === 'expense'}
                    onChange={handleChange}
                    className="text-honey-drizzle dark:text-orange-500 focus:ring-honey-drizzle dark:focus:ring-orange-500"
                  />
                  <span className={isDarkMode ? 'text-gray-100' : 'text-coffee-grounds'}>Expense</span>
                </label>
              </div>
            </div>

            <Select
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={categoryOptions}
              required
            />

            <Input
              label="Amount"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              required
            />

            <Input
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <Textarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter transaction details..."
              rows={4}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/transactions')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="accent"
                disabled={submitting}
              >
                {submitting
                  ? isEdit
                    ? 'Updating...'
                    : 'Saving...'
                  : isEdit
                    ? 'Update Transaction'
                    : 'Save Transaction'}
              </Button>
            </div>
          </form>
          )}
        </Card>
      </Container>

      <Footer />
    </div>
  )
}

export default AddEditTransaction


