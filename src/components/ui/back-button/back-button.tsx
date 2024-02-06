import { MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ArrowBack } from '@/assets'
import { Button, Typography } from '@/components'
import { clsx } from 'clsx'

import s from './back-button.module.scss'

export type BackButtonProps = {
  className?: string
  text?: string
}

export const BackButton = (props: BackButtonProps) => {
  const { className, text = 'Back to Previous Page', ...rest } = props
  const navigate = useNavigate()

  const backHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate(-1)
  }

  const classNames = {
    button: clsx(s.button, className),
  }

  return (
    <Button
      as={Link}
      className={classNames.button}
      onClick={backHandler}
      relative={'path'}
      to={'..'}
      variant={'link'}
      {...rest}
    >
      <ArrowBack />
      <Typography variant={'body2'}>{text}</Typography>
    </Button>
  )
}
