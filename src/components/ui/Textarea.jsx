import { useUI } from '../../context/UIContext'

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  id,
  name,
  ...props
}) => {
  const { isDarkMode } = useUI()
  const textareaId = id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`

  const baseStyles = 'w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed resize-y'
  
  const textareaStyles = isDarkMode
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
          htmlFor={textareaId}
          className={`block text-sm font-medium ${
            isDarkMode ? 'text-gray-200' : 'text-coffee-grounds'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        className={`${baseStyles} ${textareaStyles} ${errorStyles}`}
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

export default Textarea

