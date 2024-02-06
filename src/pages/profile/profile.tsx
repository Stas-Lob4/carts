import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/common'
import { BackButton, Page, PersonalInformation } from '@/components'
import { AvatarUploaderValue } from '@/components/profile/personal-information/avatar-uploader'
import { ProfileInfoFormValues } from '@/components/profile/personal-information/profile-info-form/profile-info-form'
import { useGetMeQuery, useLogoutMutation, useUpdateProfileMutation } from '@/services'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [updateProfile] = useUpdateProfileMutation()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const updateAvatar = async (avatar: AvatarUploaderValue) => {
    const formData = new FormData()

    formData.append('avatar', avatar)
    const updateProfilePromise = updateProfile(formData).unwrap()

    await toast.promise(updateProfilePromise, {
      error: 'Failed update avatar',
      pending: 'Updating avatar...',
      success: 'Avatar updated successfully!',
    })

    await updateProfilePromise
  }

  const updateNickname = async (data: ProfileInfoFormValues) => {
    const formData = new FormData()

    formData.append('name', data.name)
    const updateProfilePromise = updateProfile(formData).unwrap()

    await toast.promise(updateProfilePromise, {
      error: 'Failed update nickname',
      pending: 'Updating nickname...',
      success: 'Nickname updated successfully!',
    })

    await updateProfilePromise
  }

  const logoutHandler = async () => {
    await logout()
      .unwrap()
      .then(() => navigate(ROUTES.signIn))
  }

  return (
    <Page>
      <BackButton text={'Back to Deck List'} />
      <PersonalInformation
        data={data}
        logout={logoutHandler}
        updateAvatar={updateAvatar}
        updateProfile={updateNickname}
      />
    </Page>
  )
}
