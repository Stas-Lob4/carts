import { useState } from 'react'

import { Card, Typography } from '@/components'
import {
  AvatarUploader,
  AvatarUploaderValue,
} from '@/components/profile/personal-information/avatar-uploader'
import { ProfileInfo } from '@/components/profile/personal-information/profile-info/profile-info'
import {
  ProfileInfoForm,
  ProfileInfoFormValues,
} from '@/components/profile/personal-information/profile-info-form/profile-info-form'
import { clsx } from 'clsx'

import s from './personal-information.module.scss'

type ProfileData = {
  avatar?: string
  email: string
  username: string
}

type PersonalInformationProps = {
  className?: string
  // User type was used before, but for updating we do not need to update whole User type obj - I guess
  data?: ProfileData
  logout: () => void
  updateAvatar: (avatar: AvatarUploaderValue) => Promise<void>
  updateProfile: (data: ProfileInfoFormValues) => void
}
export const PersonalInformation = (props: PersonalInformationProps) => {
  const { className, data, logout, updateAvatar, updateProfile } = props

  const [editMode, setEditMode] = useState(false)
  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => setEditMode(false)

  const logoutHandler = () => {
    logout()
  }

  const classNames = {
    root: clsx(s.root, className),
    title: s.title,
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.title} variant={'large'}>
        Personal Information
      </Typography>
      <AvatarUploader
        avatarUrl={data?.avatar}
        editable={!editMode}
        name={data?.username}
        updateAvatar={updateAvatar}
      />
      {editMode ? (
        <ProfileInfoForm
          deactivateEditMode={deactivateEditMode}
          initialValue={{ name: data?.username ? data?.username : '' }}
          onSubmit={updateProfile}
        />
      ) : (
        <ProfileInfo
          activeEditMode={activateEditMode}
          email={data?.email}
          logout={logoutHandler}
          username={data?.username}
        />
      )}
    </Card>
  )
}
