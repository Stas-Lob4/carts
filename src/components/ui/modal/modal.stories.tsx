import { Button, TextField } from '@/components'
import { Modal } from '@/components/ui/modal/modal'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalWithTitle: Story = {
  args: {
    buttonName: 'Open modal window with title',
    children: (
      <>
        <TextField placeholder={'Name'} />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <TextField placeholder={'Email'} />
      </>
    ),
    title: 'Registration form',
  },
}

export const Default: Story = {
  args: {
    buttonName: 'Open default modal window',
    children: (
      <>
        <TextField label={'Pack name'} />
        <TextField label={'Theme'} />
        <TextField label={'Language'} />
        <Button>Submit</Button>
      </>
    ),
  },
}
