import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

type CardType = <T extends ElementType = 'div'>(
  props: CardProps<T> & { ref?: Ref<ElementRef<T>> }
) => ReactNode

export const Card: CardType = forwardRef(
  <T extends ElementType = 'div'>(
    { as, className, ...rest }: CardProps<T>,
    ref: Ref<ElementRef<T>>
  ) => {
    const Component: ElementType = as || 'div'

    const classNames = {
      root: clsx(s.root, className),
    }

    return <Component className={classNames.root} ref={ref} {...rest} />
  }
)
