import { render, screen } from '@testing-library/react'
import { Button, VariantButton } from './Button'

describe('Button', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})

	test('check variant class', () => {
		render(<Button variant={VariantButton.GHOST}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('ghost')
		screen.debug()
	})
})
