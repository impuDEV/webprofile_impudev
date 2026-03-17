import { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
	args: {
		children: 'TEXT',
	},
}
