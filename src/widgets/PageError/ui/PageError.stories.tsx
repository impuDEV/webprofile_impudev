import { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof PageError> = {
	title: 'widgets/PageError',
	component: PageError,
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PageError>

export const Light: Story = {
	args: {}
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)]
}
