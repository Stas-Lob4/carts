import { EditOutline, Logout, PersonOutline, PlayCircleOutline, TrashOutline } from '@/assets'
import {
  Avatar,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Typography,
} from '@/components'
import { Meta, StoryObj } from '@storybook/react'

import p from '../header/user-dropdown/user-dropdown.module.scss'
import s from './dropdown-menu.module.scss'

const meta = {
  component: DropdownMenuRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenuRoot>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderDropDown: Story = {
  args: {},
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <button className={p.trigger}>
          <Typography className={p.userName}>Name</Typography>
          <Avatar />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <PlayCircleOutline />
          Learn
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PersonOutline />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Logout />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
}

export const CartDropDown: Story = {
  args: {},
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <button className={s.button}>Open</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <PlayCircleOutline />
          Learn
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <EditOutline />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <TrashOutline />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
}
