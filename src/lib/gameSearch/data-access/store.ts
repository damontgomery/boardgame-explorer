import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { gameSearchSlice } from "./gameSearchSlice"

const rootReducer = combineSlices(gameSearchSlice)

export type RootState = ReturnType<typeof rootReducer>

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameSearchSlice.middleware),
  });
};


export type GameSearchStore = ReturnType<typeof makeStore>;

export type GameSearchDispatch = GameSearchStore["dispatch"];
export type GameSearchThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
