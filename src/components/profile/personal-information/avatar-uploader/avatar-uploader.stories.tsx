import { AvatarUploader } from '@/components/profile/personal-information/avatar-uploader/avatar-uploader'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'onSubmit avatar',
    },
  },
  component: AvatarUploader,
  title: 'features/Profile/AvatarUploader',
} satisfies Meta<typeof AvatarUploader>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarUploaderDemo = () => {
  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <AvatarUploader editable name={'avatar'} onSubmit={() => {}} />
    </div>
  )
}

export const editableTrue: Story = {
  args: {
    editable: true,
    name: 'avatar',
  },
  render: () => <AvatarUploaderDemo />,
}
export const editableFalse = () => {
  return <AvatarUploaderDemo />
}
