import { EditOutline, Logout, PersonOutline, PlayCircleOutline, TrashOutline } from '@/assets'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Typography,
} from '@/components'
import { Meta, StoryObj } from '@storybook/react'

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

export const Learn: Story = {
  args: {},
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <button>Open</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <PlayCircleOutline />
          <Typography>Learn</Typography>
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

export const HeaderDropDown: Story = {
  args: {},
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <button>Image</button>
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
