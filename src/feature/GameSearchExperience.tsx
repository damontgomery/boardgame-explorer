'use client'

import GameSearchStoreProvider from "@/lib/gameSearch/feature/GameSearchStoreProvider"
import { GameSearchListing } from "./GameSearchListing"
import { GameSearchFilters } from "./GameSearchFilters"

export const GameSearchExperience = () => {
  return (
    <GameSearchStoreProvider>
      <GameSearchFilters />
      <GameSearchListing />
    </GameSearchStoreProvider>
  )
}
