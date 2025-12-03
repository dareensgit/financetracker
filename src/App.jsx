import { BrowserRouter } from 'react-router-dom'
import { UIProvider } from './context/UIContext'
import AppRouter from './router/AppRouter'
import NotificationContainer from './components/ui/Notification'

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <AppRouter />
        <NotificationContainer />
      </BrowserRouter>
    </UIProvider>
  )
}

export default App


