import { render, screen } from '@testing-library/react'
import { ThemeSwitcher } from '..'

describe('Theme Switcher', () => {
	test('Test render', () => {
		render(<ThemeSwitcher />)
		expect(screen.getByTestId('themeSwitcher')).toBeInTheDocument()
	})
})
