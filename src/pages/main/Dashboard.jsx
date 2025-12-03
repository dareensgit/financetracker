import { Link } from 'react-router-dom'
import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'

const Dashboard = () => {
  const { isDarkMode } = useUI()

  return (
    <div className={`bg-gray-50 dark:bg-slate-900 min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="dashboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-wrap gap-3">
              <select className="px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-transparent">
                <option>October 2025</option>
                <option>September 2025</option>
                <option>August 2025</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-transparent">
                <option>All Types</option>
                <option>Income</option>
                <option>Expenses</option>
              </select>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 text-sea-blue dark:text-blue-400 hover:bg-sea-blue/5 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
              </svg>
              <span>Custom Range</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          
          <div className="lg:col-span-1 space-y-4">
            
            <div className="bg-gradient-to-br from-matcha to-matcha/90 dark:from-green-600 dark:to-green-700 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Total Income</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">$8,450.00</p>
              <p className="text-sm opacity-80 mt-1">+12% from last month</p>
            </div>

            <div className="bg-gradient-to-br from-honey-drizzle to-honey-drizzle/90 dark:from-orange-600 dark:to-orange-700 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Total Expenses</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">$5,230.00</p>
              <p className="text-sm opacity-80 mt-1">-5% from last month</p>
            </div>

            <div className="bg-gradient-to-br from-sea-blue to-sea-blue/90 dark:from-blue-600 dark:to-blue-700 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Net Income</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">$3,220.00</p>
              <p className="text-sm opacity-80 mt-1">38% of income</p>
            </div>

            <div className="bg-gradient-to-br from-lemonade to-lemonade/90 dark:from-yellow-500 dark:to-yellow-600 text-coffee-grounds dark:text-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium opacity-90">Savings Rate</h3>
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <p className="text-3xl font-bold">38.1%</p>
              <p className="text-sm opacity-80 mt-1">Great job!</p>
            </div>

          </div>

          <div className="lg:col-span-3 space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100 mb-4">Spending by Category</h3>
                <div className="flex items-center justify-center h-64">
                  <svg className="w-48 h-48" viewBox="0 0 200 200" role="img" aria-label="Pie chart showing spending by category">
                    <path d="M 100,100 L 100,20 A 80,80 0 0,1 161.4,52.8 Z" fill={isDarkMode ? "#2563eb" : "#0F4E77"}/>
                    <path d="M 100,100 L 161.4,52.8 A 80,80 0 0,1 161.4,147.2 Z" fill={isDarkMode ? "#16a34a" : "#89A577"}/>
                    <path d="M 100,100 L 161.4,147.2 A 80,80 0 0,1 100,180 Z" fill={isDarkMode ? "#eab308" : "#F8D27E"}/>
                    <path d="M 100,100 L 100,180 A 80,80 0 0,1 38.6,147.2 Z" fill={isDarkMode ? "#ea580c" : "#E7B08B"}/>
                    <path d="M 100,100 L 38.6,147.2 A 80,80 0 0,1 100,20 Z" fill={isDarkMode ? "#2563eb" : "#0F4E77"}/>
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-sea-blue'}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Housing (35%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-green-600' : 'bg-matcha'}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Food (25%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-yellow-500' : 'bg-lemonade'}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Transport (20%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-orange-600' : 'bg-honey-drizzle'}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Entertainment (15%)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100 mb-4">Income vs Expenses</h3>
                
                <div className="h-64 flex items-end justify-around space-x-2 pt-4">
                  <div className="flex flex-col items-center flex-1 space-y-1">
                    <div className="w-full flex flex-col items-center space-y-1">
                      <div className={`w-full rounded-t-lg ${isDarkMode ? 'bg-green-600' : 'bg-matcha'}`} style={{height: '140px'}}></div>
                      <div className={`w-full rounded-t-lg ${isDarkMode ? 'bg-orange-600' : 'bg-honey-drizzle'}`} style={{height: '100px'}}></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">Aug</span>
                  </div>
                  
                  <div className="flex flex-col items-center flex-1 space-y-1">
                    <div className="w-full flex flex-col items-center space-y-1">
                      <div className={`w-full rounded-t-lg ${isDarkMode ? 'bg-green-600' : 'bg-matcha'}`} style={{height: '150px'}}></div>
                      <div className={`w-full rounded-t-lg ${isDarkMode ? 'bg-orange-600' : 'bg-honey-drizzle'}`} style={{height: '110px'}}></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">Sep</span>
                  </div>
                  
                  <div className="flex flex-col items-center flex-1 space-y-1">
                    <div className="w-full flex flex-col items-center space-y-1">
                      <div className={`w-full rounded-t-lg ${isDarkMode ? 'bg-green-600' : 'bg-matcha'}`} style={{height: '170px'}}></div>
                      <div className={`w-full rounded-t-lg ${isDarkMode ? 'bg-orange-600' : 'bg-honey-drizzle'}`} style={{height: '105px'}}></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">Oct</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-6 mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-green-600' : 'bg-matcha'}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Income</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-orange-600' : 'bg-honey-drizzle'}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Expenses</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-coffee-grounds dark:text-gray-100">Recent Transactions</h3>
                <Link to="/transactions" className="text-sea-blue dark:text-blue-400 hover:underline text-sm font-medium">View All</Link>
              </div>

              <div className="space-y-3">
                
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sea-blue/10 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-sea-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-coffee-grounds dark:text-gray-100">Rent Payment</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Oct 28, 2025 • Housing</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-red-600 dark:text-red-400">-$1,200.00</span>
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-matcha/10 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-matcha dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-coffee-grounds dark:text-gray-100">Monthly Salary</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Oct 27, 2025 • Income</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-green-600 dark:text-green-400">+$4,500.00</span>
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-lemonade/10 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-lemonade dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-coffee-grounds dark:text-gray-100">Grocery Shopping</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Oct 26, 2025 • Food</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-red-600 dark:text-red-400">-$142.50</span>
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-honey-drizzle/10 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-honey-drizzle dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-coffee-grounds dark:text-gray-100">Netflix Subscription</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Oct 25, 2025 • Entertainment</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-red-600 dark:text-red-400">-$15.99</span>
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-matcha/10 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-matcha dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-coffee-grounds dark:text-gray-100">Freelance Project</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Oct 24, 2025 • Income</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-green-600 dark:text-green-400">+$850.00</span>
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sea-blue/10 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-sea-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-coffee-grounds dark:text-gray-100">Car Insurance</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Oct 23, 2025 • Transport</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-red-600 dark:text-red-400">-$125.00</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard


