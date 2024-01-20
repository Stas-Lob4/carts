import { useForm } from 'react-hook-form'

import { Button } from '@/components'
import { ControlledTextField } from '@/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './profile-info-form.module.scss'

const ProfileInfoFormSchema = z.object({
  name: z.string().min(3).trim(),
})

export type ProfileInfoFormValues = z.infer<typeof ProfileInfoFormSchema>

type ProfileInfoFormProps = {
  className?: string
  deactivateEditMode: () => void
  initialValue?: ProfileInfoFormValues
  onSubmit: (data: FormData) => void
}
export const ProfileInfoForm = (props: ProfileInfoFormProps) => {
  const { className, deactivateEditMode, initialValue, onSubmit } = props
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileInfoFormValues>({
    defaultValues: initialValue,
    resolver: zodResolver(ProfileInfoFormSchema),
  })

  const onSubmitHandler = (data: ProfileInfoFormValues) => {
    const formData = new FormData()

    formData.append('userbane', data.name)
    console.log('profileFORM', data.name)
    onSubmit(formData)
    deactivateEditMode()
  }

  const classNames = {
    form: clsx(s.form, className),
    input: s.input,
    saveButton: s.saveButton,
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledTextField
        control={control}
        errorMessage={errors.name?.message}
        label={'Nickname'}
        name={'name'}
      />
      <Button className={classNames.saveButton} fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
