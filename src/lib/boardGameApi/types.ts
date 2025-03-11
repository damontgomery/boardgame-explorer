export type BoardGameStatus = "own" | "previously owned" | "want to play"

export type BoardGame = {
  id: string
  name: string
  description: string
  players: string[]
  boardGameGeekLink: string
  coverImage: string
  rulesLink: string
  status: BoardGameStatus[]
}
