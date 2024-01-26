import { baseApi } from '@/services'

import { LoginArgs, RecoverPasswordArgs, ResendCheckEmailArgs, SignUpArgs, User } from '.'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      checkEmail: builder.mutation<void, { code: string }>({
        query: arg => ({
          body: arg,
          method: 'POST',
          url: '/v1/auth/verify-email',
        }),
      }),
      createAccessToken: builder.mutation<void, void>({
        query: () => ({ method: 'POST', url: '/v1/auth/refresh-token' }),
      }),
      getMe: builder.query<User | undefined, void>({
        providesTags: ['Me'],
        query: () => '/v1/auth/me',
      }),
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: arg => ({
          body: arg,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'POST',
          url: '/v1/auth/logout',
        }),
      }),
      recoverPassword: builder.mutation<void, RecoverPasswordArgs>({
        query: arg => ({
          body: arg,
          method: 'POST',
          url: '.v1/auth/recover-password',
        }),
      }),
      resetCheckEmail: builder.mutation<void, ResendCheckEmailArgs>({
        query: arg => ({ body: arg, method: 'POST', url: '/v1/auth/resend-verification-email' }),
      }),
      resetPassword: builder.mutation<void, { password: string; token: string }>({
        query: ({ password, token }) => ({
          body: { password },
          method: 'POST',
          url: `/v1/auth/reset-password/${token}`,
        }),
      }),
      signUp: builder.mutation<User, SignUpArgs>({
        query: arg => ({ body: arg, method: 'POST', url: '/v1/auth/sign-up' }),
      }),
      updateProfile: builder.mutation<User, FormData>({
        invalidatesTags: ['Me'],
        query: arg => ({
          body: arg,
          method: 'PATCH',
          url: '/v1/aut/me',
        }),
      }),
    }
  },
})

export const {
  useCheckEmailMutation,
  useCreateAccessTokenMutation,
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResetCheckEmailMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authService
