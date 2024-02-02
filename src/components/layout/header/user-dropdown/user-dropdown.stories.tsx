import { UserDropDown } from '@/components/layout/header/user-dropdown/user-dropdown'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    logout: { action: 'logout' },
  },
  component: UserDropDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Header/UserDropdown',
} satisfies Meta<typeof UserDropDown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'email@gmai.com',
    userName: 'Name',
  },
}
