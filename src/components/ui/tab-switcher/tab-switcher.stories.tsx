import { TabSwitcher, TabType } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

const tabs: TabType[] = [
  { disabled: false, title: 'title-1', value: '1' },
  { disabled: false, title: 'title-2', value: '2' },
  { disabled: false, title: 'title-3', value: '3' },
]

const tabsDisabled: TabType[] = [
  { disabled: false, title: 'title-1', value: '1' },
  { disabled: true, title: 'title-2', value: '2' },
  { disabled: true, title: 'title-3', value: '3' },
]

export const Default: Story = {
  args: {
    tabs: tabs,
  },
}

export const Disabled: Story = {
  args: {
    tabs: tabsDisabled,
  },
}
