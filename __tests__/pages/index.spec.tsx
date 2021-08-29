import { render, screen } from '@testing-library/react'
import Home from '../../src/pages'

describe('Home', () => {
  it('should render hello world', () => {
    render(<Home />)

    expect(screen.getByText(/Hello world/i)).toBeInTheDocument()
  })
})
