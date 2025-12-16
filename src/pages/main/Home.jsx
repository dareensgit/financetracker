import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'

const Home = () => {
  const { isDarkMode } = useUI()

  return (
    <div className={`bg-gradient-to-br from-sea-blue/5 to-matcha/5 dark:from-slate-900 dark:to-slate-800 min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="home" />

      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-coffee-grounds dark:text-gray-100 leading-tight">
              Take control of your money — <span className="text-sea-blue dark:text-blue-400">simply.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              Track income & expenses, see smart charts, and plan your next goal. Everything you need to manage your finances in one beautiful place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Introductory hero section only – buttons removed as per requirements */}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 border-4 border-lemonade dark:border-yellow-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-coffee-grounds dark:text-gray-100">Dashboard</h3>
                  <div className="w-10 h-10 bg-matcha/20 dark:bg-green-500/20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-sea-blue to-sea-blue/80 dark:from-blue-600 dark:to-blue-700 text-white p-4 rounded-xl">
                    <p className="text-sm opacity-90">Total Balance</p>
                    <p className="text-2xl font-bold mt-1">$12,450</p>
                  </div>
                  <div className="bg-gradient-to-br from-matcha to-matcha/80 dark:from-green-600 dark:to-green-700 text-white p-4 rounded-xl">
                    <p className="text-sm opacity-90">This Month</p>
                    <p className="text-2xl font-bold mt-1">$3,240</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-lemonade/20 to-honey-drizzle/20 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-sea-blue/30 dark:text-blue-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lemonade dark:bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-matcha dark:bg-green-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </motion.section>

      <section id="features" className="bg-white dark:bg-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-coffee-grounds dark:text-gray-100 mb-4">Everything you need to thrive</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Powerful features designed to make money management effortless and insightful.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-sea-blue/5 to-sea-blue/10 dark:from-blue-900/20 dark:to-blue-800/30 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-sea-blue dark:bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-coffee-grounds dark:text-gray-100 mb-2">Track Income</h3>
              <p className="text-gray-600 dark:text-gray-300">Log every dollar that comes in with custom categories and automatic tracking.</p>
            </div>

            <div className="bg-gradient-to-br from-matcha/5 to-matcha/10 dark:from-green-900/20 dark:to-green-800/30 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-matcha dark:bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-coffee-grounds dark:text-gray-100 mb-2">Visualize Spending</h3>
              <p className="text-gray-600 dark:text-gray-300">Beautiful charts and graphs show exactly where your money goes each month.</p>
            </div>

            <div className="bg-gradient-to-br from-lemonade/5 to-lemonade/10 dark:from-yellow-900/20 dark:to-yellow-800/30 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-lemonade dark:bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-coffee-grounds dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-coffee-grounds dark:text-gray-100 mb-2">Set Budgets</h3>
              <p className="text-gray-600 dark:text-gray-300">Create smart budgets and get alerts when you're approaching your limits.</p>
            </div>

            <div className="bg-gradient-to-br from-honey-drizzle/5 to-honey-drizzle/10 dark:from-orange-900/20 dark:to-orange-800/30 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-honey-drizzle dark:bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-coffee-grounds dark:text-gray-100 mb-2">Bank-Level Security</h3>
              <p className="text-gray-600 dark:text-gray-300">Your financial data is encrypted and protected with industry-leading security.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-gradient-to-r from-sea-blue to-sea-blue/90 dark:from-blue-800 dark:to-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-lemonade dark:text-yellow-400">$45,230</div>
              <div className="text-white/80 dark:text-gray-200 text-lg">Average Total Balance</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-lemonade dark:text-yellow-400">$3,840</div>
              <div className="text-white/80 dark:text-gray-200 text-lg">Avg. Monthly Expenses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-lemonade dark:text-yellow-400">23%</div>
              <div className="text-white/80 dark:text-gray-200 text-lg">Average Savings Rate</div>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-slate-700 hover:bg-lemonade dark:hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 dark:bg-slate-700 hover:bg-lemonade dark:hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 dark:border-gray-700 pt-8 text-center text-white/70 dark:text-gray-300">
            <p>&copy; 2025 FinTrack. All rights reserved. | <a href="#" className="hover:text-lemonade dark:hover:text-yellow-400">Privacy Policy</a> | <a href="#" className="hover:text-lemonade dark:hover:text-yellow-400">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home


