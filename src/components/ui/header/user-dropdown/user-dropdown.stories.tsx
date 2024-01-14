import { UserDropDown } from '@/components/ui/header/user-dropdown/user-dropdown'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    onLogout: { action: 'logout' },
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
  // @ts-expect-error onLogout is required but it is provided through argTypes
  args: {
    email: 'email@gmai.com',
    userName: 'Name',
  },
}
