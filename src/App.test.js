import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Welcome from './components/Welcome'

describe('title', () => {
  it('is present at the start', () => {
    render(<Welcome />)
    const title = screen.getByText(/Bookshop/i)
    expect(title).toBeInTheDocument()
  })
})
