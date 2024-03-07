import { AvatarUploader } from '@/components/profile/personal-information/avatar-uploader/avatar-uploader'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    updateAvatar: {
      action: 'onSubmit avatar',
    },
  },
  component: AvatarUploader,
  title: 'features/Profile/AvatarUploader',
} satisfies Meta<typeof AvatarUploader>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarUploaderDemo = () => {
  const updateAvatarHandler = async (avatar: File) => {
    console.log('Updated avatar:', avatar)
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <AvatarUploader editable name={'avatar'} updateAvatar={updateAvatarHandler} />
    </div>
  )
}

export const EditableTrue: Story = {
  args: {
    editable: true,
    name: 'avatar',
    updateAvatar: async (avatar: File) => {
      console.log('Updated avatar:', avatar)
    },
  },
  render: () => <AvatarUploaderDemo />,
}
export const EditableFalse = () => {
  return <AvatarUploaderDemo />
}
