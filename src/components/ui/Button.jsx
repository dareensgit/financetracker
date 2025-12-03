import { useUI } from '../../context/UIContext'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const { isDarkMode } = useUI()

  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: isDarkMode
      ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
      : 'bg-sea-blue hover:bg-sea-blue/90 text-white focus:ring-sea-blue',
    secondary: isDarkMode
      ? 'bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-500'
      : 'bg-gray-200 hover:bg-gray-300 text-coffee-grounds focus:ring-gray-400',
    outline: isDarkMode
      ? 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 focus:ring-blue-500'
      : 'border-2 border-sea-blue text-sea-blue hover:bg-sea-blue/10 focus:ring-sea-blue',
    accent: isDarkMode
      ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 focus:ring-yellow-400'
      : 'bg-lemonade hover:bg-opacity-90 text-coffee-grounds focus:ring-lemonade',
    danger: isDarkMode
      ? 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
      : 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    ghost: isDarkMode
      ? 'text-gray-300 hover:bg-slate-700 focus:ring-slate-500'
      : 'text-coffee-grounds hover:bg-gray-100 focus:ring-gray-400',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

