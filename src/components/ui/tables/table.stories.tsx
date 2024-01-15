import { useState } from 'react'

import ArrowDownSecond from '@/assets/icons/ArrowDownSecond'
import ArrowUp from '@/assets/icons/arrowUp'
import DeleteIcon from '@/assets/icons/deleteIcon'
import EditIcon from '@/assets/icons/editIcon'
import { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import image from '../../../assets/images/no-image-available-hi-814686611.png'
import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from './table'

const meta = {
  argTypes: {},
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTable: Story = {
  args: {},
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created By</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell>Laptops</TableDataCell>
            <TableDataCell>19</TableDataCell>
            <TableDataCell>1/15/2024</TableDataCell>
            <TableDataCell>Neil Breen</TableDataCell>
            <TableDataCell>
              <span className={s.dataImage}>
                <EditIcon />
                <DeleteIcon />
              </span>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>Bill Gates Doubles</TableDataCell>
            <TableDataCell>46</TableDataCell>
            <TableDataCell>1/15/2024</TableDataCell>
            <TableDataCell>Nathan Fielder</TableDataCell>
            <TableDataCell>
              <span className={s.dataImage}>
                <EditIcon />
                <DeleteIcon />
              </span>
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  },
}

const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    id: 1,
    image: image,
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    id: 2,
    image: image,
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    id: 3,
    image: image,
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    id: 4,
    image: image,
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    id: 5,
    image: image,
    title: 'Project E',
    updated: '2023-07-04',
  },
]

export const TableWithMappedOption: Story = {
  args: {},
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created By</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableDataCell>{item.title}</TableDataCell>
              <TableDataCell>{item.cardsCount}</TableDataCell>
              <TableDataCell>{item.updated}</TableDataCell>
              <TableDataCell>{item.createdBy}</TableDataCell>
              <TableDataCell>
                <span className={s.dataImage}>
                  <EditIcon />
                  <DeleteIcon />
                </span>
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const WithSort: Story = {
  args: {},
  render: () => {
    type Sort = {
      direction: 'asc' | 'desc'
      key: string
    } | null

    const [sort, setSort] = useState<Sort>(null)

    const handleSort = (key: string) => {
      if (sort && sort.key === key) {
        setSort({
          direction: sort.direction === 'asc' ? 'desc' : 'asc',
          key,
        })
      } else {
        setSort({
          direction: 'asc',
          key,
        })
      }
    }

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell
              onClick={() => {
                handleSort('name')
              }}
            >
              Name
              {sort && sort.key === 'name' && (
                <span style={{ margin: '5px' }}>
                  {sort.direction === 'asc' ? <ArrowUp /> : <ArrowDownSecond />}
                </span>
              )}
            </TableHeadCell>
            <TableHeadCell
              onClick={() => {
                handleSort('cards')
              }}
            >
              Cards
              {sort && sort.key === 'cards' && (
                <span style={{ margin: '5px' }}>
                  {sort.direction === 'asc' ? <ArrowUp /> : <ArrowDownSecond />}
                </span>
              )}
            </TableHeadCell>
            <TableHeadCell
              onClick={() => {
                handleSort('updated')
              }}
            >
              Last Updated
              {sort && sort.key === 'updated' && (
                <span style={{ margin: '5px' }}>
                  {sort.direction === 'asc' ? <ArrowUp /> : <ArrowDownSecond />}
                </span>
              )}
            </TableHeadCell>
            <TableHeadCell
              onClick={() => {
                handleSort('created')
              }}
            >
              Created By
              {sort && sort.key === 'created' && (
                <span style={{ margin: '5px' }}>
                  {sort.direction === 'asc' ? <ArrowUp /> : <ArrowDownSecond />}
                </span>
              )}
            </TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableDataCell>{item.title}</TableDataCell>
              <TableDataCell>{item.cardsCount}</TableDataCell>
              <TableDataCell>{item.updated}</TableDataCell>
              <TableDataCell>{item.createdBy}</TableDataCell>
              <TableDataCell>
                <span className={s.dataImage}>
                  <EditIcon />
                  <DeleteIcon />
                </span>
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const WithImage: Story = {
  args: {},
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created By</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableDataCell>
                <span className={s.dataImage}>
                  {item.image && <img src={item.image} style={{ height: '60px', width: '60px' }} />}
                  {item.title}
                </span>
              </TableDataCell>
              <TableDataCell>{item.cardsCount}</TableDataCell>
              <TableDataCell>{item.updated}</TableDataCell>
              <TableDataCell>{item.createdBy}</TableDataCell>
              <TableDataCell>
                <span className={s.dataImage}>
                  <EditIcon />
                  <DeleteIcon />
                </span>
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
