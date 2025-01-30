import { StoryFn } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
// eslint-disable-next-line impudev-fsd/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
	(
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<Story />
			</div>
		</ThemeProvider>
	)
