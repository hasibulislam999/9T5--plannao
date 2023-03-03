import apiSlice from "../api/apiSlice";
import { login } from "./authSlice";

const token = localStorage.getItem("accessToken");

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // signup an user
    signup: builder.mutation({
      query: (data) => ({
        url: "user/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // signin an user
    signin: builder.mutation({
      query: (data) => ({
        url: "user/signin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const user = await queryFulfilled;
          if (user?.data?.acknowledgement) {
            localStorage.setItem("accessToken", user?.data?.data?.token);
            dispatch(login(user?.data?.data?.user));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // find all users
    getAllUsers: builder.query({
      query: (page) => ({
        url: `user/all?page=${page}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),

    // find by id
    findUser: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    // update user info
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: `user/${data._id}`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    // delete user info
    removeUserInfo: builder.mutation({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useFindUserQuery,
  useUpdateUserInfoMutation,
  useRemoveUserInfoMutation,
  useGetAllUsersQuery,
} = authApi;
