import { Header } from '@/components/ui/header/header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    userAvatar:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/298e3af6-f449-4c7b-b347-ad5276a0f2f2/576x',
    userName: 'Александр',
  },
}

export const NotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
  },
}
