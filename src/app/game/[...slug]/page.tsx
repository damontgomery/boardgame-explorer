import { getBoardGame } from "@/lib/boardGameApi/data-access/boardGameApi"
import { GameCard } from "@/feature/GameCard"

export default async function Game({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  // We throw away the rest of the slug and just use the ID to fetch.
  const [id] = slug

  try {
    const game = await getBoardGame(id)

    return <GameCard game={game} />
  }
  catch {
    return (
      <div>
        <h1>Game not found</h1>
      </div>
    )
  }
}
