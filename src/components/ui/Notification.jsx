import { useEffect } from 'react'
import { useUI } from '../../context/UIContext'

const Notification = ({ id, message, type = 'info', duration = 3000 }) => {
  const { isDarkMode, removeNotification } = useUI()

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        removeNotification(id)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [id, duration, removeNotification])

  const typeStyles = {
    success: isDarkMode
      ? 'bg-green-600 text-white border-green-500'
      : 'bg-green-500 text-white border-green-600',
    error: isDarkMode
      ? 'bg-red-600 text-white border-red-500'
      : 'bg-red-500 text-white border-red-600',
    warning: isDarkMode
      ? 'bg-yellow-600 text-white border-yellow-500'
      : 'bg-yellow-500 text-white border-yellow-600',
    info: isDarkMode
      ? 'bg-blue-600 text-white border-blue-500'
      : 'bg-blue-500 text-white border-blue-600',
  }

  return (
    <div
      className={`px-4 py-3 rounded-lg shadow-lg border-l-4 ${typeStyles[type]} animate-slide-in-right max-w-sm`}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={() => removeNotification(id)}
          className="ml-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const NotificationContainer = () => {
  const { notifications } = useUI()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  )
}

export default NotificationContainer

