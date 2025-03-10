import { NextRequest, NextResponse } from 'next/server'
import { BoardGame, BoardGameStatus, getBoardGames, GetBoardGamesParams } from '@/boardgameApi/data/boardgameApi'

type ResponseData = {
  message?: string
  searchParams?: [string, string][]
  data?: BoardGame[]
}

export async function GET(request: NextRequest): Promise<NextResponse<ResponseData>> {
  const searchParams = request.nextUrl.searchParams

  const getBoardGamesParams: GetBoardGamesParams = {}

  if (searchParams.has('status')) {
    getBoardGamesParams.status = searchParams.get('status')?.split(',')
      .map((string) => string.replaceAll('-', ' ')) as unknown as BoardGameStatus[]
  }

  const games = await getBoardGames(getBoardGamesParams)

  return NextResponse.json({ data: games }, { status: 200 })
}
