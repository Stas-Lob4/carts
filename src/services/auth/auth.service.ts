import { baseApi } from '@/services'

import { LogInArgs, RecoverPasswordArgs, ResendCheckEmailArgs, SignUpArgs, User } from '.'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      checkEmail: builder.mutation<void, { code: string }>({
        query: arg => ({
          body: arg,
          method: 'POST',
          url: 'v1/auth/verify-email',
        }),
      }),
      createAccessToken: builder.mutation<void, void>({
        query: () => ({ method: 'POST', url: 'v1/auth/refresh-token' }),
      }),
      getMe: builder.query<User | undefined, void>({
        providesTags: ['Me'],
        query: () => 'v1/auth/me',
      }),
      logIn: builder.mutation<void, LogInArgs>({
        invalidatesTags: ['Me'],
        query: arg => ({
          body: arg,
          method: 'POST',
          url: 'v1/auth/login',
        }),
      }),
      logOut: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            authService.util.updateQueryData('getMe', undefined, () => {})
          )

          try {
            await queryFulfilled
            dispatch(baseApi.util.resetApiState())
          } catch (e) {
            patchResult.undo()
          }
        },
        query: () => ({
          method: 'POST',
          url: 'v1/auth/logout',
        }),
      }),
      recoverPassword: builder.mutation<void, RecoverPasswordArgs>({
        query: arg => ({
          body: arg,
          method: 'POST',
          url: 'v1/auth/recover-password',
        }),
      }),
      resendCheckEmail: builder.mutation<void, ResendCheckEmailArgs>({
        query: arg => ({ body: arg, method: 'POST', url: 'v1/auth/resend-verification-email' }),
      }),
      resetPassword: builder.mutation<void, { password: string; token?: string }>({
        query: ({ password, token }) => ({
          body: { password },
          method: 'POST',
          url: `v1/auth/reset-password/${token}`,
        }),
      }),
      signUp: builder.mutation<User, SignUpArgs>({
        query: arg => ({ body: arg, method: 'POST', url: 'v1/auth/sign-up' }),
      }),
      updateProfile: builder.mutation<User, FormData>({
        invalidatesTags: ['Me'],
        query: arg => ({
          body: arg,
          method: 'PATCH',
          url: 'v1/auth/me',
        }),
      }),
    }
  },
})

export const {
  useCheckEmailMutation,
  useCreateAccessTokenMutation,
  useGetMeQuery,
  useLogInMutation,
  useLogOutMutation,
  useRecoverPasswordMutation,
  useResendCheckEmailMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authService
