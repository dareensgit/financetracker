import { useUI } from '../../context/UIContext'

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  required = false,
  className = '',
  id,
  name,
  ...props
}) => {
  const { isDarkMode } = useUI()
  const checkboxId = id || name || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`flex items-start ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`mt-1 w-4 h-4 rounded border-2 transition-colors ${
          isDarkMode
            ? 'border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500'
            : 'border-gray-300 bg-white text-sea-blue focus:ring-sea-blue'
        } focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className={`ml-2 text-sm ${
            isDarkMode ? 'text-gray-200' : 'text-coffee-grounds'
          } cursor-pointer`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
    </div>
  )
}

export default Checkbox

