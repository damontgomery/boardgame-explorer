'use client'

import { BoardGame, getBoardGames } from "@/lib/boardGameApi/data-access/boardGameApi"
import styles from "./page.module.css"
import { GameTeaser } from "@/feature/GameTeaser"
import GameSearchStoreProvider from "@/lib/gameSearch/feature/GameSearchStoreProvider"
import { useGameSearchDispatch, useGameSearchSelector } from "@/lib/gameSearch/data-access/hooks"
import { selectStatus, setStatus } from "@/lib/gameSearch/data-access/gameSearchSlice"
import { useState, useEffect, useCallback } from "react"

const GameSearchListing = () => {
  const [games, setGames] = useState<BoardGame[]>([])

  useEffect(() => {
    getBoardGames().then(setGames)
  }, [])

  const dispatch = useGameSearchDispatch()

  const handleSetLoading = useCallback(() =>
    dispatch(setStatus("loading")),
    [dispatch]
  )

  const handleSetIdle = useCallback(() =>
    dispatch(setStatus("idle")),
    [dispatch]
  )

  const status = useGameSearchSelector(selectStatus)

  return (
    <div className={styles.games}>
      <button onClick={handleSetLoading}>Set Status Loading</button>
      <button onClick={handleSetIdle}>Set Status Idle</button>
      <div>Status: {status}</div>
      {games.map(game => <GameTeaser key={game.id} game={game} />)}
    </div>
  )
}

const GameSearchExperience = () => {
  return (
    <GameSearchStoreProvider>
      <GameSearchListing />
    </GameSearchStoreProvider>
  );
}

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Board Games</h1>
        <GameSearchExperience />
      </main>
    </div>
  );
}
