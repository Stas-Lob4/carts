export type ProfileData =
  | {
      avatar?: string
      email: string
      name: string
    }
  | undefined

export type Grade = { grade: string }

export type Option = {
  label: string
  value: string
}
