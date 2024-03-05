import { Avatar } from '@/components/ui/avatar/avatar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Minion',
    src: 'https://masterpiecer-images.s3.yandex.net/d60f958fa24111eea68276518f392280:upscaled',
  },
}
