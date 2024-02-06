import { Link } from 'react-router-dom'

import { Button, Page, Typography } from '@/components'

import s from './error-page.module.scss'

import ErrorImage from '../../assets/images/404.png'

export const ErrorPage = () => {
  return (
    <Page className={s.container}>
      <img alt={''} src={ErrorImage} />
      <Typography variant={'body1'}>Sorry! Page not found!</Typography>
      <Button as={Link} to={'/'} variant={'primary'}>
        Back to home page
      </Button>
    </Page>
  )
}
