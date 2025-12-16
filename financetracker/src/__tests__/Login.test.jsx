import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Login from '../pages/auth/Login'
import { UIProvider } from '../context/UIContext'
import { AuthProvider } from '../context/AuthContext'

const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter>
      <UIProvider>
        <AuthProvider>{ui}</AuthProvider>
      </UIProvider>
    </MemoryRouter>
  )
}

describe('Login page', () => {
  test('validates required fields before submit', async () => {
    renderWithProviders(<Login />)

    const submitButton = screen.getByRole('button', { name: /sign in/i })
    fireEvent.click(submitButton)

    expect(
      screen.getByText(/please enter your email and password/i)
    ).toBeInTheDocument()
  })
})