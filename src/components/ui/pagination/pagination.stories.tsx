import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationWithSelect: Story = {
  args: {
    count: 30,
    onPerPageChange: () => {},
    page: 1,
    perPage: '5',
    perPageOptions: ['3', '5', '7', '10'],
  },
  render: args => {
    const [page, setPage] = useState(1)
    const [select, setSelect] = useState('3')

    return (
      <>
        <Pagination
          {...args}
          count={30}
          onChange={page => {
            setPage(page)
          }}
          onPerPageChange={select => {
            setSelect(select)
          }}
          page={page}
          perPage={select}
          perPageOptions={['3', '5', '7', '10']}
          siblings={1}
        />
      </>
    )
  },
}
