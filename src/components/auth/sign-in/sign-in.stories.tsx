import { SignIn, SignInFormValues } from '@/components'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: SignIn,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Auth/Sign In',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    const onSubmitHandler = (data: SignInFormValues) => {
      alert(JSON.stringify(data))
    }

    return <SignIn onSubmit={onSubmitHandler} />
  },
}
