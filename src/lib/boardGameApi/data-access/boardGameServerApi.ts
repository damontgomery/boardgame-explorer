import 'server-only'
import mockData from './mockData.json'
import { BoardGame, BoardGameStatus } from "@/lib/boardGameApi/types"

type ApiResponse = {
  results: BoardGame[]
}

export type GetBoardGamesParams = {
  search?: string
  status?: BoardGameStatus[]
  players?: string[]
}

// @todo additional filters.
export const getBoardGames = ({
  status = [],
  players = [],
}: GetBoardGamesParams = {}): Promise<BoardGame[]> => Promise.resolve(
  (mockData as ApiResponse).results
    .filter((game) => {
      if (!status || status.length === 0) {
        return true
      }

      return status.every((filteredStatus) => game.status.includes(filteredStatus))
    })
    .filter((game) => {
      if (!players || players.length === 0) {
        return true
      }

      return players.every((filteredPlayerCount) => game.players.includes(filteredPlayerCount))
    })
)

export const getBoardGame = (id: string): Promise<BoardGame> => new Promise((resolve) => {
  const game = (mockData as ApiResponse).results.find((game) => game.id === id)

  if (game === undefined) {
    throw new Error(`Game with id ${id} not found`)
  }

  resolve(game)
})
