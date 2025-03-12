'use client'

import GameSearchStoreProvider from "@/lib/gameSearch/feature/GameSearchStoreProvider"
import { GameSearchListing } from "./GameSearchListing"
import { GameSearchFilters } from "./GameSearchFilters"
import { executeSearch, selectResults } from "@/lib/gameSearch/data-access/gameSearchSlice"
import { useGameSearchDispatch, useGameSearchSelector } from "@/lib/gameSearch/data-access/hooks"
import { useEffect, useState } from "react"

// This needs to be in the context of the GameSearchStoreProvider.
const InitializeGameSearch = () => {
  const [initialLoad, setInitialLoad] = useState(true)
  const games = useGameSearchSelector(selectResults)

  const dispatch = useGameSearchDispatch()

  useEffect(() => {
    if (initialLoad && games.length === 0) {
      setInitialLoad(false)
    }

    dispatch(executeSearch())
  }, [dispatch, initialLoad, games.length])

  return null
}

export const GameSearchExperience = () => {
  

  return (
    <GameSearchStoreProvider>
      <InitializeGameSearch />
      <GameSearchFilters />
      <GameSearchListing />
    </GameSearchStoreProvider>
  )
}
