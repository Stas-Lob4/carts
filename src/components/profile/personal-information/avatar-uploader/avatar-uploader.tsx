import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { EditAvatar } from '@/assets'
import { Avatar, Button } from '@/components'
import { FileUploader } from '@/components/ui/file-uploader'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './avatar-uploader.module.scss'

type AvatarUploaderProps = {
  avatarUrl?: string
  className?: string
  editable?: boolean
  name?: string
  updateAvatar: (avatar: AvatarUploaderValue) => Promise<void>
}

const AvatarUploaderSchema = z
  .instanceof(File)
  .refine(file => file.size <= 1000000, `Max image size is 1MB. The file will not be uploaded.`)
  .refine(
    file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
  )

export type AvatarUploaderValue = z.infer<typeof AvatarUploaderSchema>
export const AvatarUploader = (props: AvatarUploaderProps) => {
  const { avatarUrl, className, editable, name, updateAvatar } = props
  const fileRef = useRef<HTMLInputElement>(null)

  const [avatar, setAvatar] = useState<File | null>(null)

  const avatarIsValid =
    avatar !== null &&
    ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(avatar.type) &&
    avatar.size <= 1000000

  const { handleSubmit } = useForm<AvatarUploaderValue>()

  const submitHandler = async (avatar: File | null) => {
    if (avatar) {
      await updateAvatar(avatar)
      setAvatar(avatar)
    }
  }

  const classNames = {
    avatar: s.avatar,
    editAvatar: s.editAvatar,
    root: clsx(s.root, className),
    uploader: s.uploader,
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={classNames.root}>
        <Avatar
          className={classNames.avatar}
          name={name}
          src={avatarIsValid ? URL.createObjectURL(avatar) : avatarUrl}
          title={'avatar'}
        />
        {editable && (
          <FileUploader
            className={classNames.uploader}
            ref={fileRef}
            setFile={submitHandler}
            trigger={
              <Button as={'span'} className={classNames.editAvatar} variant={'icon'}>
                <EditAvatar />
              </Button>
            }
            validationSchema={AvatarUploaderSchema}
          />
        )}
      </div>
    </form>
  )
}
