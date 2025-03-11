import { createGameSearchSlice } from "./createGameSearchSlice"
// import type { GameSearchThunk } from "./store"
import type { PayloadAction } from "@reduxjs/toolkit"
import { BoardGame } from "@/lib/boardGameApi/data-access/boardGameApi"

export interface FilterState {
  type: string
  values: string[]
  id: string
}

export type GameSearchStateStatus = "idle" | "loading" | "failed" 

export interface GameSearchSliceState {
  filters: FilterState[]
  page?: number
  results: BoardGame[]
  status: GameSearchStateStatus
}

const initialState: GameSearchSliceState = {
  filters: [],
  results: [],
  status: "idle",
}

export const gameSearchSlice = createGameSearchSlice({
  name: "gameSearch",
  initialState,
  reducers: (create) => ({
    createGameSearchState: create.reducer(() => {
      return initialState
    }),
    updateFilters: create.reducer((state, action: PayloadAction<FilterState>) => {
      state.filters.push(action.payload)
    }),
    updateResults: create.reducer((state, action: PayloadAction<BoardGame[]>) => {
      state.results = action.payload
    }),
    setStatus: create.reducer((state, action: PayloadAction<GameSearchStateStatus>) => {
      state.status = action.payload
    }),
  }),
  selectors: {
    selectResults: (state) => state.results,
    selectFilters: (state) => state.filters,
    selectStatus: (state) => state.status,
  },
});

export const { createGameSearchState, updateFilters, updateResults, setStatus } = gameSearchSlice.actions

export const { selectResults, selectFilters, selectStatus } = gameSearchSlice.selectors
