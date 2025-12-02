import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'

// AddEditTransaction component for adding and editing transactions
const AddEditTransaction = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isDarkMode } = useUI()
  const isEdit = !!id

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/transactions')
  }

  return (
    <div className={`bg-gradient-to-br from-sea-blue/5 to-matcha/5 dark:from-slate-900 dark:to-slate-800 text-coffee-grounds dark:text-gray-100 font-sans min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="transactions" />

      <header className="px-4 md:px-8 pt-8">
        <h1 className="text-2xl font-bold text-coffee-grounds dark:text-gray-100">Add / Edit Transaction</h1>
        <p className="text-coffee-grounds/70 dark:text-gray-400 mt-1">Fill in the transaction details below</p>
      </header>

      <section className="bg-white dark:bg-slate-800 mt-6 mx-4 md:mx-auto p-6 rounded-xl shadow-lg border border-honey-drizzle/50 dark:border-slate-700 max-w-3xl mb-8">
        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label className="block text-coffee-grounds dark:text-gray-100 font-medium mb-2">Type</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" value="income" className="text-matcha dark:text-green-500 focus:ring-matcha dark:focus:ring-green-500" />
                <span className="text-coffee-grounds dark:text-gray-100">Income</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" value="expense" className="text-honey-drizzle dark:text-orange-500 focus:ring-honey-drizzle dark:focus:ring-orange-500" />
                <span className="text-coffee-grounds dark:text-gray-100">Expense</span>
              </label>
            </div>
            <p className="text-sm text-honey-drizzle dark:text-orange-400 mt-1 hidden">Please select a transaction type.</p>
          </div>

          <div>
            <label htmlFor="category" className="block text-coffee-grounds dark:text-gray-100 font-medium mb-2">Category</label>
            <select id="category" className="w-full border border-honey-drizzle dark:border-slate-600 dark:bg-slate-700 rounded-lg py-2 px-3 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 focus:outline-none">
              <option value="">Select category</option>
              <option>Housing</option>
              <option>Food</option>
              <option>Subscription</option>
              <option>Salary</option>
              <option>Entertainment</option>
            </select>
            <p className="text-sm text-honey-drizzle dark:text-orange-400 mt-1 hidden">Category is required.</p>
          </div>

          <div>
            <label htmlFor="amount" className="block text-coffee-grounds dark:text-gray-100 font-medium mb-2">Amount</label>
            <input id="amount" type="number" placeholder="Enter amount"
              className="w-full border border-honey-drizzle dark:border-slate-600 dark:bg-slate-700 rounded-lg py-2 px-3 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 focus:outline-none" />
            <p className="text-sm text-honey-drizzle dark:text-orange-400 mt-1 hidden">Please enter a valid numeric amount.</p>
          </div>

          <div>
            <label htmlFor="date" className="block text-coffee-grounds dark:text-gray-100 font-medium mb-2">Date</label>
            <input id="date" type="date"
              className="w-full border border-honey-drizzle dark:border-slate-600 dark:bg-slate-700 rounded-lg py-2 px-3 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 focus:outline-none" />
            <p className="text-sm text-honey-drizzle dark:text-orange-400 mt-1 hidden">Date is required.</p>
          </div>

          <div>
            <label htmlFor="description" className="block text-coffee-grounds dark:text-gray-100 font-medium mb-2">Description</label>
            <textarea id="description" rows="4" placeholder="Enter transaction details..."
              className="w-full border border-honey-drizzle dark:border-slate-600 dark:bg-slate-700 rounded-lg py-2 px-3 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 focus:outline-none"></textarea>
            <p className="text-sm text-honey-drizzle dark:text-orange-400 mt-1 hidden">Description cannot be empty.</p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => navigate('/transactions')} className="px-4 py-2 border border-honey-drizzle dark:border-slate-600 rounded-lg text-coffee-grounds/90 dark:text-gray-300 hover:bg-honey-drizzle/10 dark:hover:bg-slate-700 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-lemonade to-honey-drizzle dark:from-yellow-500 dark:to-orange-500 hover:bg-opacity-90 text-coffee-grounds dark:text-gray-900 font-bold rounded-lg shadow-md transition-colors">
              {isEdit ? 'Update Transaction' : 'Save Transaction'}
            </button>
          </div>
        </form>
      </section>

      <footer className="bg-coffee-grounds dark:bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-sea-blue dark:bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-lemonade dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">FinTrack</span>
              </div>
              <p className="text-white/70 dark:text-gray-300">Take control of your money, simply.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70 dark:text-gray-300">
                <li><a href="#" className="hover:text-lemonade dark:hover:text-yellow-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-lemonade dark:hover:text-yellow-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-lemonade dark:hover:text-yellow-400 transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 dark:text-gray-300">
                <li><a href="#" className="hover:text-lemonade dark:hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-lemonade dark:hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-lemonade dark:hover:text-yellow-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-slate-700 hover:bg-lemonade dark:hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-slate-700 hover:bg-lemonade dark:hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-slate-700 hover:bg-lemonade dark:hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 dark:border-gray-700 pt-8 text-center text-white/70 dark:text-gray-300">
            <p>&copy; 2025 FinTrack. All rights reserved. | 
              <a href="#" className="hover:text-lemonade dark:hover:text-yellow-400"> Privacy Policy</a> | 
              <a href="#" className="hover:text-lemonade dark:hover:text-yellow-400"> Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AddEditTransaction


