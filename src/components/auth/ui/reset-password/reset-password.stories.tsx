import type { Meta, StoryObj } from '@storybook/react'

import { ResetPasswordForm } from '@/components'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: ResetPasswordForm,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Features/Auth/Reset Password Form',
} satisfies Meta<typeof ResetPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
