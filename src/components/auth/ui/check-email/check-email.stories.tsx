import { CheckEmail } from '@/components'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: CheckEmail,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Features/Auth/Check Email',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userEmail: 'new-guest@gmail.com',
  },
}
