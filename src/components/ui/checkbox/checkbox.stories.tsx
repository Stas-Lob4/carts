import { useState } from 'react'

import { Checkbox } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'click',
  },
}
export const Checked: Story = {
  args: {
    checked: true,
    label: 'click',
  },
}
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'click',
  },
}
export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'click',
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click here',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
        Current value: {checked.toString()}
      </>
    )
  },
}
