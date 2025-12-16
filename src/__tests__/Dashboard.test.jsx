import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Dashboard from '../pages/main/Dashboard'
import { UIProvider } from '../context/UIContext'
import { DataProvider } from '../context/DataContext'

const renderDashboard = () => {
  return render(
    <MemoryRouter>
      <UIProvider>
        <DataProvider>
          <Dashboard />
        </DataProvider>
      </UIProvider>
    </MemoryRouter>
  )
}

describe('Dashboard page', () => {
  test('renders summary cards with totals', async () => {
    renderDashboard()

    expect(
      await screen.findByText(/total income/i)
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/total expenses/i)
    ).toBeInTheDocument()
  })
})


