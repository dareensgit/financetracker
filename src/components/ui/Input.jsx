import { useUI } from '../../context/UIContext'

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  id,
  name,
  ...props
}) => {
  const { isDarkMode } = useUI()
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`

  const baseStyles = 'w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const inputStyles = isDarkMode
    ? 'bg-slate-700 bg-opacity-60 border border-slate-600 text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
    : 'bg-white bg-opacity-40 border border-white border-opacity-50 text-coffee-grounds placeholder-coffee-grounds/50 focus:ring-sea-blue focus:border-sea-blue backdrop-blur-sm'

  const errorStyles = error
    ? isDarkMode
      ? 'border-red-500 focus:ring-red-500'
      : 'border-red-500 focus:ring-red-500'
    : ''

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium ${
            isDarkMode ? 'text-gray-200' : 'text-coffee-grounds'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`${baseStyles} ${inputStyles} ${errorStyles}`}
        {...props}
      />
      {error && (
        <p className={`text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
          {error}
        </p>
      )}
    </div>
  )
}

export default Input

