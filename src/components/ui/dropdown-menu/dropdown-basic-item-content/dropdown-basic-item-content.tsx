import { ReactNode } from 'react'

import { Typography } from '@/components'

import s from './dropdown-basic-item-content.module.scss'

type DropdownBasicItemContentProps = {
  icon: ReactNode
  name: string
}

export const DropdownBasicItemContent = (props: DropdownBasicItemContentProps) => {
  const { icon, name } = props

  return (
    <>
      <div className={s.icon}>{icon}</div>
      <Typography variant={'body1'}>{name}</Typography>
    </>
  )
}
