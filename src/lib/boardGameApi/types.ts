export const boardGameStatuses = ["own", "previously owned", "want to play"] as const
export type BoardGameStatus = typeof boardGameStatuses[number] 

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
