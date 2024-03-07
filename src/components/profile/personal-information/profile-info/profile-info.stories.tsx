import { ProfileInfo } from '@/components/profile/personal-information/profile-info/profile-info'
import { Meta } from '@storybook/react'

const meta = {
  argTypes: {
    activeEditMode: {
      action: 'activeEditMode',
    },
    logout: {
      action: 'logout',
    },
  },
  component: ProfileInfo,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'features/Profile/ProfileInfo',
} satisfies Meta<typeof ProfileInfo>

export default meta

export const ProfileInfoDemo = () => {
  return (
    <div>
      <ProfileInfo
        activeEditMode={() => {}}
        email={'email@gmail.com'}
        logout={() => {}}
        username={'name'}
      />
    </div>
  )
}
