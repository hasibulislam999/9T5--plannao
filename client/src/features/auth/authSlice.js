import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: true,
  isError: false,
  isOpen: false,
  error: "",
};

export const getMe = createAsyncThunk("auth/getMe", async (token) => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}user/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  console.log(data);

  if (data?.acknowledgement) {
    return data?.data;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = {};
      localStorage.removeItem("accessToken");
    },
    openModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    login: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.user = {};
      })
      .addCase(getMe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.user = payload;
      })
      .addCase(getMe.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = error.message;
        state.user = {};
      });
  },
});

export const { stopLoading, logout, openModal, login } = authSlice.actions;

export default authSlice.reducer;
