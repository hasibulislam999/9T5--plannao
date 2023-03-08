import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.plannao.com/",
  }),
  tagTypes: ["Package", "User", "Transaction"],
  endpoints: () => ({}),
});

export default apiSlice;
