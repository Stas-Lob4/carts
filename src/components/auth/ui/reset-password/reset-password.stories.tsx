import type { Meta, StoryObj } from '@storybook/react'

import { ResetPassword } from '@/components'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: ResetPassword,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Features/Auth/Reset Password',
} satisfies Meta<typeof ResetPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
