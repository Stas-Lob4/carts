import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from '@/components'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: ForgotPasswordForm,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
