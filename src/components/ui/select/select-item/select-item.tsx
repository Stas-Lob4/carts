import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Option } from '@/components'
import * as SelectFromRadix from '@radix-ui/react-select'

import s from './select-item.module.scss'

type SelectItemProps = Option & ComponentPropsWithoutRef<typeof SelectFromRadix.Item>

export const SelectItem = forwardRef<ElementRef<typeof SelectFromRadix.Item>, SelectItemProps>(
  ({ value, ...rest }, ref) => {
    return (
      <SelectFromRadix.Item className={s.selectItem} ref={ref} value={value} {...rest}>
        <SelectFromRadix.ItemText>{value}</SelectFromRadix.ItemText>
      </SelectFromRadix.Item>
    )
  }
)
