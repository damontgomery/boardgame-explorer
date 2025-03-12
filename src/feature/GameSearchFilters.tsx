'use client'

import { ChangeEvent, useCallback } from "react"
import { useGameSearchDispatch, useGameSearchSelector } from "@/lib/gameSearch/data-access/hooks"
import { executeSearch, selectFilters, updateFilters } from "@/lib/gameSearch/data-access/gameSearchSlice"
import { boardGameStatuses } from "@/lib/boardGameApi/types"
import styles from "./GameSearchFilters.module.css"

export const GameSearchFilters = () => {
  const filters = useGameSearchSelector(selectFilters)

  const dispatch = useGameSearchDispatch()

  const handleSearch = useCallback(() =>
    dispatch(executeSearch()),
    [dispatch]
  )

  const handleStatusChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value

    const newFilters = filters.filter(filter => filter.type !== "status")

    if (status) {
      newFilters.push({ type: "status", values: [status], id: "status" })
    }

    dispatch(updateFilters(newFilters))
  }, [dispatch, filters])

  const handlePlayersChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const players = event.target.value

    const newFilters = filters.filter(filter => filter.type !== "players")

    if (players) {
      newFilters.push({ type: "players", values: [players], id: "players" })
    }

    dispatch(updateFilters(newFilters))
  }, [dispatch, filters])

  return (
    <div className={styles.filters}>
      <select
        name="status"
        onChange={handleStatusChange}
      >
        <option value="">Select a status</option>
        {boardGameStatuses.map(
          status => <option key={status} value={status}>{status}</option>
        )}
      </select>
      <label htmlFor="players">Players: {}</label>
      <input
        type="range"
        min="1"
        max="10"
        onChange={handlePlayersChange}
        list="playersMarkers"
        defaultValue="4"
      />
      <datalist id="playersMarkers" className={styles.playersMarkers}>
        {Array.from({ length: 10 }).map((_, index) => (
          <option key={index} value={index + 1} label={`${index + 1}`} />
        ))}
      </datalist>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
