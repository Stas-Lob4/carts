import { ComponentPropsWithoutRef } from 'react'

import { ArrowSort } from '@/assets'
import { Cols, TableHead, TableHeadCell, TableRow } from '@/components'
import { clsx } from 'clsx'

import s from './table-sort-header.module.scss'

export type Column = {
  cols: Cols
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type TableSortHeaderProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    colums: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableSortHeader = (props: TableSortHeaderProps) => {
  const { colums, onSort, sort, ...rest } = props

  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }
    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort?.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  const classNames = {
    alight: s.alight,
    icon: clsx(s.sortArrow, sort?.direction === 'asc' ? s.asc : s.desc),
  }

  return (
    <TableHead {...rest}>
      <TableRow>
        {colums.map(({ cols, key, sortable = true, title }) => (
          <TableHeadCell
            className={classNames.alight}
            col={cols}
            key={key}
            onClick={handleSort(key, sortable)}
          >
            {title}
            {sort && sort.key === key && (
              <span className={classNames.icon}>
                <ArrowSort />
              </span>
            )}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
