Документация [Storybook](https://storybook.js.org/docs/get-started)

Пример:

```typescript jsx
import { Meta, StoryObj } from '@storybook/react'
import { Button, VariantButton } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		children: 'TEXT',
	},
}
export const PrimaryDark: Story = {
	args: {
		children: 'TEXT',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const Ghost: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Кнопка с прозрачным фоном',
			},
		},
	},
	args: {
		children: 'TEXT',
		variant: VariantButton.GHOST,
	},
}

```
