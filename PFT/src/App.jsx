import { BrowserRouter } from 'react-router-dom'
import { UIProvider } from './context/UIContext'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UIProvider>
  )
}

export default App


