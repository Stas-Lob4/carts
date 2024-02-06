import { CreatePassword } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Features/Auth/Create Password',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
