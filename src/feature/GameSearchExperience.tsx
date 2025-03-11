'use client'

import { useCallback } from "react"
import styles from "./GameSearchExperience.module.css"
import { GameTeaser } from "@/feature/GameTeaser"
import GameSearchStoreProvider from "@/lib/gameSearch/feature/GameSearchStoreProvider"
import { useGameSearchDispatch, useGameSearchSelector } from "@/lib/gameSearch/data-access/hooks"
import { executeSearch, selectResults } from "@/lib/gameSearch/data-access/gameSearchSlice"

const GameSearchListing = () => {
  const dispatch = useGameSearchDispatch()

  const handleSearch = useCallback(() =>
    dispatch(executeSearch()),
    [dispatch]
  )

  const games = useGameSearchSelector(selectResults)

  return (
    <div className={styles.games}>
      <button onClick={handleSearch}>Search</button>
      {games.map(game => <GameTeaser key={game.id} game={game} />)}
    </div>
  )
}

export default function GameSearchExperience() {
  return (
    <GameSearchStoreProvider>
      <GameSearchListing />
    </GameSearchStoreProvider>
  )
}
