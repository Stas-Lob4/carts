import { useState } from 'react'

import Close from '@/assets/icons/close'
import { Button, Checkbox, TextField, Typography } from '@/components'
import { Modal } from '@/components/ui/modal/modal'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const divStyles = {
  display: 'flex',
  justifyContent: 'space-between',
}

export const ModalWithTitle: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Modal title={'Add New Deck'} trigger={<Button variant={'primary'}>Add New Deck</Button>}>
          <TextField label={'Deck Name'} placeholder={'Name'} />
          <Button variant={'secondary'}>Upload Image</Button>
          <Checkbox
            checked={checked}
            label={'Private decks'}
            onCheckedChange={() => setChecked(!checked)}
          />
          <div style={divStyles}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button>Add New Deck</Button>
          </div>
        </Modal>
      </>
    )
  },
}

export const ModalWithoutTitle: Story = {
  args: {
    children: (
      <>
        <Typography variant={'body1'}>Do you really want to delete it?</Typography>
        <div style={divStyles}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button>Delete Card</Button>
        </div>
      </>
    ),
    trigger: <Close fill={'white'} />,
  },
}
