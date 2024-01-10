import { Select } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { label: 'label-1', value: '1' },
  { label: 'label-2', value: '2' },
  { label: 'label-3', value: '3' },
]

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Label',
    options: data,
    placeholder: 'Select',
  },
}
export const Pagination: Story = {
  args: {
    disabled: false,
    label: 'Label',
    options: data,
    pagination: true,
    placeholder: 'Select',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
    options: data,
    placeholder: 'Select',
  },
}
