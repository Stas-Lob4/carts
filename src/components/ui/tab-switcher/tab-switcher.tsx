import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}
type TabSwitcherProps = {
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = forwardRef<ElementRef<typeof Tabs.Root>, TabSwitcherProps>(
  (props, ref) => {
    const { defaultValue, onValueChange, tabs, ...rest } = props

    const classNames = {
      list: s.list,
      root: s.root,
      trigger: s.trigger,
    }

    return (
      <Tabs.Root
        className={classNames.root}
        defaultValue={defaultValue ? defaultValue : tabs[0].value}
        onValueChange={onValueChange}
        ref={ref}
        {...rest}
      >
        <Tabs.List className={classNames.list}>
          {tabs.map(el => (
            <Tabs.Trigger
              className={classNames.trigger}
              disabled={el.disabled}
              key={el.value}
              value={el.value}
            >
              {el.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    )
  }
)
