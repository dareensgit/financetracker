import { useUI } from '../../context/UIContext'

const Card = ({
  children,
  className = '',
  padding = 'md',
  shadow = true,
  border = true,
  ...props
}) => {
  const { isDarkMode } = useUI()

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  const shadowClass = shadow ? 'shadow-lg' : ''
  const borderClass = border
    ? isDarkMode
      ? 'border border-slate-700'
      : 'border border-honey-drizzle/50'
    : ''

  const bgClass = isDarkMode ? 'bg-slate-800' : 'bg-white'

  return (
    <div
      className={`rounded-xl ${bgClass} ${paddingClasses[padding]} ${shadowClass} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

