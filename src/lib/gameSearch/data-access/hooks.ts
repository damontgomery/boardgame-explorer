import { useDispatch, useSelector, useStore } from "react-redux"
import type { GameSearchDispatch, GameSearchStore, RootState } from "./store"

export const useGameSearchDispatch = useDispatch.withTypes<GameSearchDispatch>()
export const useGameSearchSelector = useSelector.withTypes<RootState>()
export const useGameSearchStore = useStore.withTypes<GameSearchStore>()
