import { BrowserRouter } from 'react-router-dom'
import { UIProvider } from './context/UIContext'
import { AuthProvider } from './context/AuthContext'
import { DataProvider } from './context/DataContext'
import AppRouter from './router/AppRouter'
import NotificationContainer from './components/ui/Notification'

function App() {
  return (
    <UIProvider>
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <AppRouter />
            <NotificationContainer />
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </UIProvider>
  )
}

export default App


