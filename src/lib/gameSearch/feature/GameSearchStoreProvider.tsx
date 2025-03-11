'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, GameSearchStore } from '../data-access/store'
import { createGameSearchState } from '../data-access/gameSearchSlice'

export default function GameSearchStoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<GameSearchStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(createGameSearchState())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
