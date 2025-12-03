import { useUI } from '../../context/UIContext'

const Select = ({
  label,
  value,
  onChange,
  options = [],
  error,
  required = false,
  disabled = false,
  className = '',
  id,
  name,
  placeholder,
  ...props
}) => {
  const { isDarkMode } = useUI()
  const selectId = id || name || `select-${Math.random().toString(36).substr(2, 9)}`

  const baseStyles = 'w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-right pr-10'
  
  const selectStyles = isDarkMode
    ? 'bg-slate-700 bg-opacity-60 border border-slate-600 text-gray-100 focus:ring-blue-500 focus:border-blue-500'
    : 'bg-white bg-opacity-40 border border-white border-opacity-50 text-coffee-grounds focus:ring-sea-blue focus:border-sea-blue backdrop-blur-sm'

  const errorStyles = error
    ? isDarkMode
      ? 'border-red-500 focus:ring-red-500'
      : 'border-red-500 focus:ring-red-500'
    : ''

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className={`block text-sm font-medium ${
            isDarkMode ? 'text-gray-200' : 'text-coffee-grounds'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`${baseStyles} ${selectStyles} ${errorStyles}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundSize: '1.5em 1.5em',
          }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={typeof option === 'object' ? option.value : option}
              value={typeof option === 'object' ? option.value : option}
            >
              {typeof option === 'object' ? option.label : option}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className={`text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
          {error}
        </p>
      )}
    </div>
  )
}

export default Select

