import apiSlice from "../api/apiSlice";

const header = {
  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};

const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // insert new transaction
    postTransaction: builder.mutation({
      query: (data) => ({
        url: "transaction",
        method: "POST",
        headers: header,
        body: data,
      }),
      invalidatesTags: ["Transaction"],
    }),

    // delete a transaction
    deleteTransaction: builder.mutation({
      query: (id) => ({
        url: `transaction/${id}`,
        method: "DELETE",
        headers: header,
      }),
      invalidatesTags: ["Transaction"],
    }),

    // display all transactions
    getTransactions: builder.query({
      query: (id) => ({
        url: "transaction",
        method: "GET",
        headers: header,
      }),
      providesTags: ["Transaction"],
    }),

    // display a transaction
    getTransaction: builder.query({
      query: (id) => ({
        url: `transaction/${id}`,
        method: "GET",
        headers: header,
      }),
      invalidatesTags: ["Transaction"],
    }),
  }),
});

export const {
  usePostTransactionMutation,
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
  useGetTransactionQuery,
} = transactionApi;
