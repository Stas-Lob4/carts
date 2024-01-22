import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { CreatePasswordForm } from './create-password'

const meta = {
  component: CreatePasswordForm,
  tags: ['autodocs'],
  title: 'Components/CreatePasswordForm',
} satisfies Meta<typeof CreatePasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
