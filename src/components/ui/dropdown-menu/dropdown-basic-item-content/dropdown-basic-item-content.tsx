import { ReactNode } from 'react'

import s from './dropdown-basic-item-content.module.scss'
import { Typography } from '@/components'

type DropdownBasicItemContentProps = {
  icon: ReactNode
  name: string
}

export const DropdownBasicItemContent = (props: DropdownBasicItemContentProps) => {
  const { icon, name } = props
  return (
    <>
      <div className={s.icon}>{icon}</div>
      <Typography variant={'caption'}>{name}</Typography>
    </>
  )
}
