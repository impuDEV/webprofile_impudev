import type { Preview } from '@storybook/react'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/shared/const/theme'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

const preview: Preview = {
	decorators: [
		StyleDecorator,
		ThemeDecorator(Theme.LIGHT),
		RouterDecorator,
		SuspenseDecorator,
	],
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#16171d',
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: 'fullscreen',
		themes: {
			default: 'light',
			list: [
				{ name: 'light', class: Theme.LIGHT, color: '#ffffff' },
				{ name: 'dark', class: Theme.DARK, color: '#000000' },
			],
		},
	},
}

export default preview
