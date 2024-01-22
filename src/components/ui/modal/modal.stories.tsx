import { useState } from 'react'

import Close from '@/assets/icons/close'
import { Button, Checkbox, TextField } from '@/components'
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
    title: 'Add New Deck',
    trigger: <Button>Add New Card</Button>,
  },

  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Modal title={args.title} trigger={<Button>Add New Card</Button>}>
          <>
            <TextField label={'Pack Name'} placeholder={'Name'} />
            <Button variant={'secondary'}>Upload Image</Button>
            <Checkbox
              checked={checked}
              label={'Private pack'}
              onCheckedChange={() => setChecked(!checked)}
            />
            <div>
              <Button variant={'secondary'}>Cancel</Button>
              <Button>Add New Pack</Button>
            </div>
          </>
        </Modal>
      </>
    )
  },
}

export const ModalWithoutTitle: Story = {
  args: {
    children: (
      <>
        <div>Do you really want to delete it?</div>
        <div>
          <Button variant={'secondary'}>Cancel</Button>
          <Button>Delete Card</Button>
        </div>
      </>
    ),
    trigger: <Close fill={'white'} />,
  },
}
