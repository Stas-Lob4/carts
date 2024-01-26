import { Header } from '@/components/ui/header/header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    onLogout: { action: 'logout' },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  // @ts-expect-error onLogout is required but it is provided through argTypes
  args: {
    email: 'email@gmai.com',
    isLoggedIn: true,
    userName: 'Name',
  },
}

export const NotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
  },
}
