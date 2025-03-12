'use client'

import { FilterState } from "@/lib/gameSearch/data-access/gameSearchSlice"

export const getBoardGame = (id: string) => 
  fetch(`/api/game/${id}`)
    .then(res => res.json())
    .then(({data}) => data)

export const getBoardGames = (filters: FilterState[]) => {
  const queryParams = new URLSearchParams()

  for (const filter of filters) {
    queryParams.append(filter.type, filter.values.join(","))
  }

  return fetch(`/api/game?${queryParams.toString()}`)
    .then(res => res.json())
    .then(({data}) => data)
}
