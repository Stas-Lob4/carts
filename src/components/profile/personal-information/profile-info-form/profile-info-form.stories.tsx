import { ProfileInfoForm } from '@/components/profile/personal-information/profile-info-form/profile-info-form'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ProfileInfoForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocks'],
  title: 'features/Profile/ProfileInfoForm',
} satisfies Meta<typeof ProfileInfoForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { initialValue: { name: 'name' } },
}
