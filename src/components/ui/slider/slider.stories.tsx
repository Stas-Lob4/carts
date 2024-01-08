import { useState } from 'react'

import { Slider } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: [0, 10],
  },
  render: () => {
    const [value, setValue] = useState<number[]>([0, 10])

    const onValueChangeHandler = (newValue: number[]) => {
      setValue(newValue)
    }

    return <Slider onValueChange={onValueChangeHandler} value={value} />
  },
}
