import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from './App'

const server = setupServer(
  rest.get('/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ userName: 'John' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)

  expect(linkElement).toBeInTheDocument()
})

test('handle async', async () => {
  render(<App />)

  const { getByText } = screen

  await waitFor(() => expect(getByText('John')).toBeInTheDocument())
})
