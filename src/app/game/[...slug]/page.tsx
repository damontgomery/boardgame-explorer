import { getBoardGame } from "@/boardgameApi/data/boardgameApi"
import { GameCard } from "@/components/GameCard/GameCard"

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

    const { name, description, players, boardGameGeekLink, coverImage, rulesLink, status } = game

    return (
      <GameCard
        name={name}
        coverImage={coverImage}
        description={description}
        players={players}
        boardGameGeekLink={boardGameGeekLink}
        rulesLink={rulesLink}
        status={status}
      />
    )
  }
  catch {
    return (
      <div>
        <h1>Game not found</h1>
      </div>
    )
  }
}
