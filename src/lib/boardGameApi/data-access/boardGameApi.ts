'use client'

export const getBoardGame = (id: string) => 
  fetch(`/api/game/${id}`)
    .then(res => res.json())
    .then(({data}) => data)

// @todo add filters.
export const getBoardGames = () =>
  fetch(`/api/game`)
    .then(res => res.json())
    .then(({data}) => data)
