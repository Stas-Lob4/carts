import { Loader } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Loader,
  tags: ['autodocs'],
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
