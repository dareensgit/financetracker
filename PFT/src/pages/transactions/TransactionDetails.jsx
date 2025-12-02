import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'

// TransactionDetails component for viewing individual transaction details
const TransactionDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isDarkMode } = useUI()

  return (
    <div className={`bg-gradient-to-br from-sea-blue/5 to-matcha/5 dark:from-slate-900 dark:to-slate-800 text-coffee-grounds dark:text-gray-100 font-sans min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="transactions" />

      <header className="px-4 md:px-8 pt-8">
        <h1 className="text-2xl font-bold text-coffee-grounds dark:text-gray-100">Transaction Detail</h1>
        <p className="text-coffee-grounds/70 dark:text-gray-400 mt-1">View and manage this transaction</p>
      </header>

      <section className="bg-white dark:bg-slate-800 mt-6 mx-4 md:mx-auto p-6 rounded-xl shadow-lg max-w-3xl border border-honey-drizzle/50 dark:border-slate-700">
        <div className="space-y-4 divide-y divide-honey-drizzle/50 dark:divide-slate-700">
          
          <div className="pt-4 first:pt-0">
            <h2 className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Date</h2>
            <p className="text-coffee-grounds dark:text-gray-100 font-medium">October 27, 2025</p>
          </div>

          <div className="pt-4">
            <h2 className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Amount</h2>
            <p className="text-matcha dark:text-green-400 font-semibold text-lg">+ $4,500.00</p>
          </div>

          <div className="pt-4">
            <h2 className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Category</h2>
            <p className="text-coffee-grounds dark:text-gray-100 font-medium">Salary</p>
          </div>

          <div className="pt-4">
            <h2 className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Type</h2>
            <p className="text-coffee-grounds dark:text-gray-100 font-medium">Income</p>
          </div>

          <div className="pt-4">
            <h2 className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Notes</h2>
            <p className="text-coffee-grounds/90 dark:text-gray-300">Monthly paycheck deposit.</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button onClick={() => navigate('/transactions')} className="px-4 py-2 border border-honey-drizzle dark:border-slate-600 rounded-lg text-coffee-grounds/90 dark:text-gray-300 hover:bg-honey-drizzle/10 dark:hover:bg-slate-700 transition-colors">
            Back to List
          </button>
          <button onClick={() => navigate(`/transactions/edit/${id}`)} className="px-4 py-2 bg-gradient-to-r from-lemonade to-honey-drizzle dark:from-yellow-500 dark:to-orange-500 hover:bg-opacity-90 text-coffee-grounds dark:text-gray-900 font-bold rounded-lg shadow-md transition-colors">
            Edit
          </button>
          <button className="px-4 py-2 bg-transparent border border-coffee-grounds dark:border-gray-600 text-coffee-grounds dark:text-gray-300 hover:bg-coffee-grounds/10 dark:hover:bg-slate-700 rounded-lg shadow transition-colors">
            Delete
          </button>
        </div>
      </section>

      <footer className="bg-coffee-grounds dark:bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-sea-blue dark:bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-lemonade dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-slate-700 hover:bg-lemonade dark:hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-slate-700 hover:bg-lemonade dark:hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
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

export default TransactionDetails


