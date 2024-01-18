import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as Radio from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type Option = { title: string; value: string }

export type RadioGroupProps = {
  errorMessage?: string
  options: Option[]
} & Omit<ComponentPropsWithoutRef<typeof Radio.Root>, 'children'>

export const RadioGroup = forwardRef<React.ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ errorMessage, options, ...rest }: RadioGroupProps) => {
    return (
      <form>
        <Radio.Root className={s.radioGroupRoot} defaultValue={options[0].value} {...rest}>
          {options.map(el => (
            <div className={s.radioGroup} key={el.value}>
              <Radio.Item className={s.item} id={el.value} value={el.value}>
                <Radio.Indicator className={s.indicator} />
              </Radio.Item>
              <Typography as={'label'} className={s.label} htmlFor={el.value} variant={'body2'}>
                {el.title}
              </Typography>
            </div>
          ))}
        </Radio.Root>
      </form>
    )
  }
)
