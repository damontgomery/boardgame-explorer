import { NextRequest, NextResponse } from 'next/server'
import { BoardGame } from "@/lib/boardGameApi/types"
import { getBoardGame } from '@/lib/boardGameApi/data-access/boardGameServerApi'

type ResponseData = {
  message?: string
  data?: BoardGame
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }): Promise<NextResponse<ResponseData>> {

  const { id } = await params

  if (!id) {
    return NextResponse.json({ message: 'Missing id' }, { status: 400 })
  }

  try {
    const game = await getBoardGame(id)

    return NextResponse.json({ data: game }, {
      status: 200,
      headers: { 'Cache-Control': 'public, max-age=600' }
    })
  }
  catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred'

    return NextResponse.json({ message }, { status: 500 })
  }
}
