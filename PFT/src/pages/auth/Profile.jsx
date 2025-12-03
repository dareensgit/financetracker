import Navbar from '../../components/navigation/Navbar'
import { useUI } from '../../context/UIContext'

const Profile = () => {
  const { isDarkMode } = useUI()

  return (
    <div className={`bg-page text-neutral-dark dark:bg-slate-900 dark:text-gray-100 font-sans min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentPage="profile" />

      <main className="flex-grow flex flex-col items-center justify-start px-4 py-10">
        <div className="max-w-3xl w-full fade-in-up">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <img
                  src="images\user-blue-gradient\0684456b-aa2b-4631-86f7-93ceaf33303c.jpg"
                  alt="Profile Picture"
                  className="w-32 h-32 rounded-full object-cover border-4 border-accent/40"
                />
                <button
                  className="absolute bottom-0 right-0 bg-primary dark:bg-blue-600 text-white p-2 rounded-full hover:bg-secondary dark:hover:bg-blue-700 transition"
                  title="Edit Photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536M9 13l3 3 9-9a2.121 2.121 0 00-3-3l-9 9z" />
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-neutral-dark dark:text-gray-100 mb-2">Dareen E.</h2>
                <p className="text-neutral-dark/70 dark:text-gray-400 mb-4">University Student • Giza, Egypt</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Email</label>
                    <p className="text-neutral-dark dark:text-gray-200 mt-1">you@example.com</p>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Phone</label>
                    <p className="text-neutral-dark dark:text-gray-200 mt-1">+20 123 456 7890</p>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Member Since</label>
                    <p className="text-neutral-dark dark:text-gray-200 mt-1">March 2024</p>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-neutral-dark/50 dark:text-gray-500 font-semibold">Account Type</label>
                    <p className="text-neutral-dark dark:text-gray-200 mt-1">Personal</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="px-5 py-2.5 rounded-lg bg-primary dark:bg-blue-600 text-white hover:bg-secondary dark:hover:bg-blue-700 transition font-medium">
                    Edit Profile
                  </button>
                  <button className="px-5 py-2.5 rounded-lg border border-primary dark:border-blue-600 text-primary dark:text-blue-400 hover:bg-primary dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition font-medium">
                    Manage Finances
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-sm text-neutral-dark/70 dark:text-gray-400">Total Balance</p>
              <p className="text-2xl font-semibold text-primary dark:text-blue-400 mt-2">$12,480</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-sm text-neutral-dark/70 dark:text-gray-400">Monthly Savings</p>
              <p className="text-2xl font-semibold text-secondary dark:text-blue-500 mt-2">$2,150</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-sm text-neutral-dark/70 dark:text-gray-400">Goals Completed</p>
              <p className="text-2xl font-semibold text-accent dark:text-yellow-400 mt-2">4/6</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-neutral-dark/70 dark:text-gray-400">
        © 2025 FinTrack. All rights reserved.
      </footer>
    </div>
  )
}

export default Profile


