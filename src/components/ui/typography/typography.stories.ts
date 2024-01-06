import { Typography } from '@/components/ui/typography/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Cart content',
    variant: 'large',
  },
}
export const H1: Story = {
  args: {
    children: 'Cart content',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'Cart content',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'Cart content',
    variant: 'h3',
  },
}
export const Body1: Story = {
  args: {
    children: 'Cart content',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'Cart content',
    variant: 'body2',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Cart content',
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Cart content',
    variant: 'caption',
  },
}
export const Link1: Story = {
  args: {
    children: 'Cart content',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Cart content',
    variant: 'link2',
  },
}
export const Error: Story = {
  args: {
    children: 'Cart content',
    variant: 'error',
  },
}
