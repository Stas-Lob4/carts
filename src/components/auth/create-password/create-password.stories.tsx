import { CreatePasswordForm } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreatePasswordForm,
  tags: ['autodocs'],
  title: 'features/AUTH/Create Password Form',
} satisfies Meta<typeof CreatePasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
