import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  package: {},
  isOpen: false,
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setPackage: (state, { payload }) => {
      state.package = payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.package = {};
    },
  },
});

export const { setPackage, closeModal } = packageSlice.actions;

export default packageSlice.reducer;
