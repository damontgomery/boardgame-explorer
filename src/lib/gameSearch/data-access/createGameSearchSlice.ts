import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

export const createGameSearchSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
