import { Meta, StoryObj } from '@storybook/react'
import { Logo } from '..'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Logo> = {
	title: 'features/Logo',
	component: Logo,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Logo>

export const LogoBigLight: Story = {
	args: {
		big: true
	},
}

export const LogoSmallLight: Story = {
	args: {
		big: false
	},
}

export const LogoBigDark: Story = {
	args: {
		big: true
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
export const LogoSmallDark: Story = {
	args: {
		big: false
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
