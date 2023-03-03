import apiSlice from "../api/apiSlice";

const header = {
  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};

const packageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // insert new package
    postPackage: builder.mutation({
      query: (data) => ({
        url: "package",
        method: "POST",
        headers: header,
        body: data,
      }),
      invalidatesTags: ["Package"],
    }),

    // update a package
    patchPackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `package/${id}`,
        method: "PATCH",
        headers: header,
        body: data,
      }),
      invalidatesTags: ["Package"],
    }),

    // delete a package
    deletePackage: builder.mutation({
      query: (id) => ({
        url: `package/${id}`,
        method: "DELETE",
        headers: header,
      }),
      invalidatesTags: ["Package"],
    }),

    // display all packages
    getPackages: builder.query({
      query: (page) => ({
        url: page ? `package?page=${page}` : "package",
        method: "GET",
        headers: header,
      }),
      providesTags: ["Package"],
    }),

    // display a packages
    getPackage: builder.query({
      query: (id) => ({
        url: `package/${id}`,
        method: "GET",
        headers: header,
      }),
      invalidatesTags: ["Package"],
    }),
  }),
});

export const {
  usePostPackageMutation,
  usePatchPackageMutation,
  useDeletePackageMutation,
  useGetPackagesQuery,
  useGetPackageQuery,
} = packageApi;
