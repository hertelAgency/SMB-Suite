import baseApi from '../api/baseApi';

type AuthUser = {
  sub: string;
  email: string;
  role?: string;
  organizationId?: string;
};

type AuthResponse = {
  accessToken: string;
  refreshToken?: string;
  user?: AuthUser;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      AuthResponse,
      { email: string; password: string }
    >({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
    }),
    register: builder.mutation<
      AuthResponse,
      { email: string; password: string; name: string; organizationName?: string }
    >({
      query: (body) => ({ url: '/auth/register', method: 'POST', body }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation } = authApi;