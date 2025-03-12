'use client'

import styles from "./GameSearchListing.module.css"
import { GameTeaser } from "@/feature/GameTeaser"
import { useGameSearchSelector } from "@/lib/gameSearch/data-access/hooks"
import { selectResults, selectStatus } from "@/lib/gameSearch/data-access/gameSearchSlice"
import { GameTeaserSkeleton } from "@/components/GameTeaser/GameTeaserSkeleton"

export const GameSearchListing = () => {
  const games = useGameSearchSelector(selectResults)
  const searchStatus = useGameSearchSelector(selectStatus)

  return (
    <div className={styles.games}>
      {searchStatus === "loading" ?
        (new Array(12)).fill(null)
          .map((_, index) => <GameTeaserSkeleton key={index} />
        ) :
        games.map(game => <GameTeaser key={game.id} game={game} />)
      }
    </div>
  )
}
