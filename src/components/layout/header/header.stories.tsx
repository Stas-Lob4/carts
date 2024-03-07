import { Header } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    logout: { action: 'logout' },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    profile: {
      email: 'email@gmai.com',
      name: 'Name',
    },
  },
}

export const NotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
    profile: undefined,
  },
}
