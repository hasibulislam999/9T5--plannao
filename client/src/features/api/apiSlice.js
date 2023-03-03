import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  tagTypes: ["Package", "User", "Transaction"],
  endpoints: () => ({}),
});

export default apiSlice;
