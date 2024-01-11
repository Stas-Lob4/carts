import { Avatar } from '@/components/ui/header/avatar/avatar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Header/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Minion',
    size: '72px',
    src: 'https://masterpiecer-images.s3.yandex.net/d60f958fa24111eea68276518f392280:upscaled',
  },
}
