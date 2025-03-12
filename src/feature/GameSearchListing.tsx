'use client'

import styles from "./GameSearchListing.module.css"
import { GameTeaser } from "@/feature/GameTeaser"
import { useGameSearchSelector } from "@/lib/gameSearch/data-access/hooks"
import { selectResults } from "@/lib/gameSearch/data-access/gameSearchSlice"

export const GameSearchListing = () => {
  const games = useGameSearchSelector(selectResults)

  return (
    <div className={styles.games}>
      {games.map(game => <GameTeaser key={game.id} game={game} />)}
    </div>
  )
}
