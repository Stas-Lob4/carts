import { PersonalInformation } from '@/components/profile/personal-information/personal-information'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    logout: {
      action: 'Success logout',
    },
    updateProfile: {
      action: 'Success update username',
    },
  },
  component: PersonalInformation,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'features/Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta

type Story = StoryObj<typeof meta>

export const WithAvatar: Story = {
  args: {
    data: {
      avatar:
        'https://cdn1.iconfinder.com/data/icons/japan-travel-solid-konnichiwa/512/Samurai-512.png',
      email: 'email@gmail.com',
      username: 'UserName',
    },
    updateAvatar: async (avatar: File) => {
      console.log('Updated avatar:', avatar)
    },
  },
}
export const NoAvatar: Story = {
  args: {
    data: {
      email: 'email@gmail.com',
      username: 'UserName',
    },
    updateAvatar: async (avatar: File) => {
      console.log('Updated avatar:', avatar)
    },
  },
}
