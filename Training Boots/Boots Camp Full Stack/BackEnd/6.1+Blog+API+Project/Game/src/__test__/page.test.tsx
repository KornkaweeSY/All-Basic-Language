import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Page from '../app/page'

test('Pages Router', () => {
  render(<Page />)
  const main = within(screen.getByRole('main'))
  expect(
    main.getByRole('heading', { level: 1, name: "Hello" })
  ).toBeDefined()
})