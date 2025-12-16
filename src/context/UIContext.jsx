import { createContext, useContext, useState, useEffect } from 'react'

const UIContext = createContext()

export const useUI = () => {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}

export const UIProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or default to light mode
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    content: null,
    onClose: null,
  })

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  const openModal = (title, content, onClose) => {
    setModal({
      isOpen: true,
      title,
      content,
      onClose: onClose || (() => closeModal()),
    })
  }

  const closeModal = () => {
    setModal({
      isOpen: false,
      title: '',
      content: null,
      onClose: null,
    })
  }

  const showNotification = (message, type = 'info', duration = 3000) => {
    const id = Date.now()
    const notification = { id, message, type, duration }
    setNotifications(prev => [...prev, notification])

    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }

    return id
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <UIContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        modal,
        openModal,
        closeModal,
        notifications,
        showNotification,
        removeNotification,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}


