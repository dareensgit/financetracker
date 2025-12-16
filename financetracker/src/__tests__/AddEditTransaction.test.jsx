import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import AddEditTransaction from '../pages/transactions/AddEditTransaction'
import { UIProvider } from '../context/UIContext'
import { DataProvider } from '../context/DataContext'

const renderAddPage = () => {
  return render(
    <MemoryRouter initialEntries={['/transactions/add']}>
      <UIProvider>
        <DataProvider>
          <Routes>
            <Route path="/transactions/add" element={<AddEditTransaction />} />
          </Routes>
        </DataProvider>
      </UIProvider>
    </MemoryRouter>
  )
}

describe('AddEditTransaction page', () => {
  test('shows validation message when required fields are missing', () => {
    renderAddPage()

    const submitButton = screen.getByRole('button', { name: /save transaction/i })
    fireEvent.click(submitButton)

    expect(
      screen.getByText(/please fill in all required fields/i)
    ).toBeInTheDocument()
  })
})


