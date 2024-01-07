import { TextField } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Password',
    type: 'password',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'error message',
    label: 'Label',
    placeholder: 'Input error',
  },
}
