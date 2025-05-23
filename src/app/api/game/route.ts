import { NextRequest, NextResponse } from 'next/server'
import { BoardGame, BoardGameStatus } from "@/lib/boardGameApi/types"
import { getBoardGames, GetBoardGamesParams } from '@/lib/boardGameApi/data-access/boardGameServerApi'

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

  if (searchParams.has('players')) {
    getBoardGamesParams.players = searchParams.get('players')?.split(',')
  }

  const games = await getBoardGames(getBoardGamesParams)

  return NextResponse.json({ data: games }, {
    status: 200,
    headers: { 'Cache-Control': 'public, max-age=600' }
  })
}
