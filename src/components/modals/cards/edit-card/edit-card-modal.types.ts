import { ReactNode } from 'react'

import { Card } from '@/common'

export type EditCardModalProps = {
  card: Card
  className?: string
  trigger: ReactNode
}
