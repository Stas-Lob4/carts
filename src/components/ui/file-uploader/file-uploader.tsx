import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { IMAGE_SCHEMA } from '@/common'
import { Typography } from '@/components'
import { ZodEffects, ZodError } from 'zod'

import s from './file-uploader.module.scss'

export type FileUploaderProps = {
  setFile: (file: File | null) => void
  trigger: ReactNode
  validationSchema?: ZodEffects<any>
} & ComponentPropsWithoutRef<'input'>

export const FileUploader = forwardRef<ElementRef<'input'>, FileUploaderProps>((props, ref) => {
  const { className, name, setFile, trigger, validationSchema = IMAGE_SCHEMA, ...rest } = props
  const [error, setError] = useState<null | string>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      validationSchema.parse(file)
      setError(null)
    } catch (e) {
      const error = e as Error | ZodError

      if (error instanceof ZodError) {
        setError('Validate error: ' + error.errors[0].message)
      } else {
        setError('Native error: ' + error.message)
      }
      setFile(null)
    }
    if (!error) {
      file && setFile(file)
    }
  }

  return (
    <Typography as={'label'} className={className} htmlFor={name}>
      {trigger}
      <input
        className={s.inputFile}
        id={name}
        onChange={onChangeHandler}
        ref={ref}
        type={'file'}
        {...rest}
      />
    </Typography>
  )
})
