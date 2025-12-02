import { Link, useNavigate } from 'react-router-dom'
import { useUI } from '../../context/UIContext'

const Login = () => {
  const navigate = useNavigate()
  const { isDarkMode } = useUI()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className={`relative min-h-screen flex flex-col justify-center font-sans ${isDarkMode ? 'dark bg-slate-900' : ''}`}>
      <div className="floating-orb orb1"></div>
      <div className="floating-orb orb2"></div>
      <div className="floating-orb orb3"></div>

      <div className="intro">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug px-6">
          <span className="block quote-line">See your money clearly.</span>
          <span className="block quote-line mt-2">Make smarter choices today.</span>
          <span className="block quote-line mt-2">Build financial freedom for tomorrow.</span>
        </h1>
      </div>

      <div className="fade-in flex flex-col md:flex-row w-full h-screen">
        <div className="hidden md:flex md:w-1/2 relative">
          <img 
            src="/main.jpg" 
            alt="Finance Background" 
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-white/10 dark:bg-slate-800/40 backdrop-blur-md relative">
          <div className="frosted-glass rounded-3xl p-10 w-full max-w-md shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-dark dark:text-gray-100">Welcome Back</h2>
              <p className="text-sm text-neutral-dark dark:text-gray-300 opacity-70 mt-2">
                Track your wealth, simply and beautifully.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark dark:text-gray-200 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 bg-opacity-40 dark:bg-opacity-60 border border-white dark:border-slate-600 border-opacity-50 text-neutral-dark dark:text-gray-100 placeholder-neutral-dark/50 dark:placeholder-gray-400 glow-accent transition backdrop-blur-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-dark dark:text-gray-200 mb-2">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 bg-opacity-40 dark:bg-opacity-60 border border-white dark:border-slate-600 border-opacity-50 text-neutral-dark dark:text-gray-100 placeholder-neutral-dark/50 dark:placeholder-gray-400 glow-accent transition backdrop-blur-sm"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm text-neutral-dark dark:text-gray-200">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="accent-accent mr-2" />
                  Remember me
                </label>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition font-medium">Forgot password?</a>
              </div>

              <button 
                type="submit"
                className="w-full block text-center bg-primary dark:bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-neutral-dark dark:hover:bg-blue-700 transition shadow-lg">
                Sign In
              </button>

              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-neutral-dark/20 dark:border-gray-600"></div>
                <span className="px-4 text-neutral-dark/70 dark:text-gray-400 text-sm">or continue with</span>
                <div className="flex-grow border-t border-neutral-dark/20 dark:border-gray-600"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button type="button" className="social-btn p-3 rounded-xl bg-white dark:bg-slate-700 bg-opacity-30 dark:bg-opacity-60 border border-white dark:border-slate-600 border-opacity-40 backdrop-blur-sm transition">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 mx-auto" alt="Google" />
                </button>
                <button type="button" className="social-btn p-3 rounded-xl bg-white dark:bg-slate-700 bg-opacity-30 dark:bg-opacity-60 border border-white dark:border-slate-600 border-opacity-40 backdrop-blur-sm transition">
                  <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 mx-auto" alt="GitHub" />
                </button>
                <button type="button" className="social-btn p-3 rounded-xl bg-white dark:bg-slate-700 bg-opacity-30 dark:bg-opacity-60 border border-white dark:border-slate-600 border-opacity-40 backdrop-blur-sm transition">
                  <img src="https://www.svgrepo.com/show/448224/facebook.svg" className="w-5 mx-auto" alt="Facebook" />
                </button>
              </div>

              <div className="text-center mt-6 text-sm text-neutral-dark dark:text-gray-200">
                Don't have an account?
                <Link to="/register" className="text-primary dark:text-blue-400 font-semibold hover:text-neutral-dark dark:hover:text-blue-300 transition"> Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="w-full bg-white dark:bg-slate-800 border-t-4 border-yellow-400 text-center text-neutral-dark/70 dark:text-gray-400 text-xs py-4 mt-auto">
        © 2025 Finance Tracker. Secure & Beautiful.
      </footer>
    </div>
  )
}

export default Login

