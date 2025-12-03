import { useUI } from '../../context/UIContext'

const Header = ({ title, subtitle, className = '', children }) => {
  const { isDarkMode } = useUI()

  return (
    <header className={`px-4 md:px-8 pt-8 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h1 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-coffee-grounds'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-coffee-grounds/70'} mt-1`}>
              {subtitle}
            </p>
          )}
        </div>
        {children && <div className="flex-shrink-0">{children}</div>}
      </div>
    </header>
  )
}

export default Header

