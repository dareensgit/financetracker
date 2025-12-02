import { Link } from 'react-router-dom'
import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'

// TransactionList component for displaying all transactions
const TransactionList = () => {
  const { isDarkMode } = useUI()

  return (
    <div className={`bg-gradient-to-br from-sea-blue/5 to-matcha/5 dark:from-slate-900 dark:to-slate-800 text-coffee-grounds dark:text-gray-100 font-sans min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="transactions" />

      <header className="px-4 md:px-8 pt-8">
        <h1 className="text-2xl font-bold text-coffee-grounds dark:text-gray-100">All Transactions</h1>
        <p className="text-coffee-grounds/70 dark:text-gray-400 mt-1">
          View, search, and manage all your financial transactions
        </p>
      </header>

      <section className="bg-white dark:bg-slate-800 mt-6 mx-4 md:mx-8 p-6 rounded-xl shadow-lg border border-honey-drizzle/50 dark:border-slate-700 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="lg:col-span-2">
            <label className="text-sm text-coffee-grounds/90 dark:text-gray-300 mb-1 block">Search</label>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-2.5 w-4 h-4 text-coffee-grounds/50 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
              <input type="text" placeholder="Search transactions..."
                className="w-full bg-white dark:bg-slate-700 border border-honey-drizzle dark:border-slate-600 rounded-lg pl-9 pr-3 py-2 text-coffee-grounds dark:text-gray-100 placeholder:text-coffee-grounds/50 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 transition" />
            </div>
          </div>

          <div>
            <label className="text-sm text-coffee-grounds/90 dark:text-gray-300 mb-1 block">Type</label>
            <select
              className="w-full bg-white dark:bg-slate-700 border border-honey-drizzle dark:border-slate-600 rounded-lg py-2 px-3 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 transition">
              <option>All Types</option>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-coffee-grounds/90 dark:text-gray-300 mb-1 block">Category</label>
            <select
              className="w-full bg-white dark:bg-slate-700 border border-honey-drizzle dark:border-slate-600 rounded-lg py-2 px-3 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 transition">
              <option>All Categories</option>
              <option>Housing</option>
              <option>Food</option>
              <option>Subscription</option>
              <option>Salary</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-coffee-grounds/90 dark:text-gray-300 mb-1 block">Date Range</label>
            <div className="flex gap-2">
              <input type="date"
                className="border border-honey-drizzle dark:border-slate-600 rounded-lg py-2 px-3 w-0 flex-1 bg-white dark:bg-slate-700 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 transition" />
              <span className="text-coffee-grounds/50 dark:text-gray-500 flex items-center">–</span>
              <input type="date"
                className="border border-honey-drizzle dark:border-slate-600 rounded-lg py-2 px-3 w-0 flex-1 bg-white dark:bg-slate-700 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 transition" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="text-sea-blue dark:text-blue-400 hover:underline text-sm font-medium">
            Reset Filters
          </button>
        </div>
      </section>

      <section className="mx-4 md:mx-8 mt-8 mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-coffee-grounds dark:text-gray-100">Recent Transactions</h2>
          <div className="flex gap-3 text-sm text-coffee-grounds/70 dark:text-gray-400">
            <a href="#" className="hover:text-sea-blue dark:hover:text-blue-400">Export</a>
            <span>|</span>
            <a href="#" className="hover:text-sea-blue dark:hover:text-blue-400">Sort by Date</a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg divide-y divide-honey-drizzle/50 dark:divide-slate-700">
          <div className="flex justify-between items-center p-4 hover:bg-sea-blue/5 dark:hover:bg-slate-700">
            <div className="flex items-center gap-4">
              <div
                className="bg-honey-drizzle/20 dark:bg-orange-900/30 text-coffee-grounds/70 dark:text-gray-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M3 10.5V21h18V10.5m-9-6L3 10.5h18L12 4.5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-coffee-grounds dark:text-gray-100">Rent Payment</p>
                <p className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Oct 28, 2025 · Housing</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-honey-drizzle dark:text-orange-400 font-semibold">- $1,200.00</p>
              <a href="#" className="text-sea-blue dark:text-blue-400 text-sm hover:underline">View Details</a>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 hover:bg-sea-blue/5 dark:hover:bg-slate-700">
            <div className="flex items-center gap-4">
              <div
                className="bg-matcha/20 dark:bg-green-900/30 text-matcha dark:text-green-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-coffee-grounds dark:text-gray-100">Monthly Salary</p>
                <p className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Oct 27, 2025 · Income</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-matcha dark:text-green-400 font-semibold">+ $4,500.00</p>
              <Link to="/transactions/1" className="text-sea-blue dark:text-blue-400 text-sm hover:underline">
                View Details
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 hover:bg-sea-blue/5 dark:hover:bg-slate-700">
            <div className="flex items-center gap-4">
              <div
                className="bg-lemonade/20 dark:bg-yellow-900/30 text-coffee-grounds dark:text-gray-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M3 3h18v18H3z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-coffee-grounds dark:text-gray-100">Grocery Shopping</p>
                <p className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Oct 26, 2025 · Food</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-honey-drizzle dark:text-orange-400 font-semibold">- $142.50</p>
              <a href="#" className="text-sea-blue dark:text-blue-400 text-sm hover:underline">View Details</a>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 hover:bg-sea-blue/5 dark:hover:bg-slate-700">
            <div className="flex items-center gap-4">
              <div
                className="bg-honey-drizzle/20 dark:bg-orange-900/30 text-coffee-grounds/70 dark:text-gray-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-coffee-grounds dark:text-gray-100">Netflix Subscription</p>
                <p className="text-coffee-grounds/70 dark:text-gray-400 text-sm">Oct 26, 2025 · Entertainment</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-honey-drizzle dark:text-orange-400 font-semibold">- $15.99</p>
              <a href="#" className="text-sea-blue dark:text-blue-400 text-sm hover:underline">View Details</a>
            </div>
          </div>
        </div>
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

export default TransactionList


