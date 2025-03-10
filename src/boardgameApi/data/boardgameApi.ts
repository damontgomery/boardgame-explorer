import mockData from './mockData.json';

export type BoardGameStatus = "own" | "previously owned" | "want to play";

export type BoardGame = {
  id: string
  name: string
  description: string
  players: string
  boardGameGeekLink: string
  coverImage: string
  rulesLink: string
  status: BoardGameStatus[]
}

type ApiResponse = {
  results: BoardGame[]
}

export type GetBoardGamesParams = {
  search?: string;
  status?: BoardGameStatus[];
}

// @todo additional filters.
export const getBoardGames = ({
  status = [],
}: GetBoardGamesParams): Promise<BoardGame[]> => Promise.resolve(
  (mockData as ApiResponse).results
    .filter((game) => {
      if (!status || status.length === 0) {
        return true
      }

      return status.every((filteredStatus) => game.status.includes(filteredStatus))
    })
)

export const getBoardGame = (id: string): Promise<BoardGame> => new Promise((resolve) => {
  const game = (mockData as ApiResponse).results.find((game) => game.id === id)

  if (game === undefined) {
    throw new Error(`Game with id ${id} not found`)
  }

  resolve(game)
})
