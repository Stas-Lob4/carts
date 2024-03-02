import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import ArrowDownSecond from '@/assets/icons/ArrowDownSecond'
import ArrowUp from '@/assets/icons/arrowUp'

import s from './table.module.scss'

export type Cols = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type ThProps = {
  col?: Cols
} & ComponentPropsWithoutRef<'th'>
type TdProps = {
  col?: Cols
} & ComponentPropsWithoutRef<'td'>
export const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <table {...rest} className={`${className} ${s.root}`} ref={ref} />
  }
)

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <thead {...rest} className={`${className} ${s.tableHead}`} ref={ref} />
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <tr {...rest} className={`${className} ${s.tableRow}`} ref={ref} />
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <tbody {...rest} className={`${className} ${s.tableBody}`} ref={ref} />
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ThProps>((props, ref) => {
  const { className, col, ...rest } = props

  return <th {...rest} className={`${className} ${s.tableHeadCell}`} data-col={col} ref={ref} />
})

export const TableDataCell = forwardRef<ElementRef<'td'>, TdProps>((props, ref) => {
  const { className, col, ...rest } = props

  return <td {...rest} className={`${className} ${s.tableDataCell}`} data-col={col} ref={ref} />
})

export type Column = {
  key: string
  sortable?: boolean
  title: string
  width?: string
}
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type TableHeaderProps = {
  columns: Column[]
  onSort?: (sort: Sort) => void
  sort?: Sort
} & Omit<ComponentPropsWithoutRef<'thead'>, 'children'>

export const TableHeader = ({ columns, onSort, sort, ...restProps }: TableHeaderProps) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ key, sortable = true, title, width }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)} style={{ width: width }}>
            {title}
            {sort && sort.key === key && (
              <span>
                {sort.direction === 'asc' ? (
                  <ArrowUp className={s.icon} />
                ) : (
                  <ArrowDownSecond className={s.icon} />
                )}
              </span>
            )}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
