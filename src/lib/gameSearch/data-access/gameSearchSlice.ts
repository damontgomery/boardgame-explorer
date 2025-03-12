import { createGameSearchSlice } from "./createGameSearchSlice"
// import type { GameSearchThunk } from "./store"
import type { PayloadAction } from "@reduxjs/toolkit"
import { BoardGame } from "@/lib/boardGameApi/types"
import { getBoardGames } from "@/lib/boardGameApi/data-access/boardGameApi"
import { RootState } from "./store"

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
    updateFilters: create.reducer((state, action: PayloadAction<FilterState[]>) => {
      state.filters = action.payload
    }),
    updateResults: create.reducer((state, action: PayloadAction<BoardGame[]>) => {
      state.results = action.payload
    }),
    setStatus: create.reducer((state, action: PayloadAction<GameSearchStateStatus>) => {
      state.status = action.payload
    }),
    executeSearch: create.asyncThunk(
      (_data, thunkApi) => {
        // @todo determine why TS isn't getting the type here.
        // @ts-expect-error - TS is not getting the type here.
        return getBoardGames(thunkApi.getState().gameSearch.filters)
      },
      {
        options: {
          condition(_arg, thunkApi) {
            const { getState } = thunkApi
            const state = getState() as RootState
            if (state.gameSearch.status === "loading") {
              return false
            }
          }
        },
        pending: (state) => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.results = action.payload
        },
        rejected: (state) => {
          state.status = "failed"
        },
      },
    ),
  }),
  selectors: {
    selectResults: (state) => state.results,
    selectFilters: (state) => state.filters,
    selectStatus: (state) => state.status,
  },
});

export const { createGameSearchState, updateFilters, updateResults, setStatus, executeSearch } = gameSearchSlice.actions

export const { selectResults, selectFilters, selectStatus } = gameSearchSlice.selectors
