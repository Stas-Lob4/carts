import { SignUp } from '@/components'
import { SignUpFormValues } from '@/components/auth/lib'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: SignUp,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Features/Auth/Sign Up Form',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    const onSubmitHandler = (data: SignUpFormValues) => {
      alert(JSON.stringify(data))
    }

    return <SignUp onSubmit={onSubmitHandler} />
  },
}
