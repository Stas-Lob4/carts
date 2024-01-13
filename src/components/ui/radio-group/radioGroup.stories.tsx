import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const testData = [
  {
    title: 'First',
    value: '1',
  },
  {
    title: 'Second',
    value: '2',
  },
  {
    title: 'Third',
    value: '3',
  },
]

export const Primary: Story = {
  args: {
    options: testData,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: testData,
  },
}
