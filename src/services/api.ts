import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../redux/store";

import {
  LoginRequest,
  RegisterRequest,
  ResenOtpReq,
  VerifyOtpReq,
} from "../utils";
import { setUserProfileData } from "../redux";
import { showAppToast } from "../component";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://52.22.241.165:10054/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  // ✅ If token is invalid (401 Unauthorized)
  if (result.error && result.error.status === 401) {
    showAppToast({
      title: 'Session Expired',
      message: 'Your session has expired. Please log in again.',
      type: 'error',
      timeout: 4000,
      onOkPress: () => console.log('User clicked OK'),
    });
    // ✅ Dispatch logout action (clears token from Redux)
    // api.dispatch(logoutUser());

    // ✅ Navigate to login screen (if using React Navigation)
    // NavigationService.navigate("Login");
  }

  return result;
};

// ✅ Use the new `baseQueryWithAuth` in `authApi`
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    login1: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLogin1Mutation,
} = api;
