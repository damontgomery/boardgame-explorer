import { getBoardGame } from "@/boardgameApi/data/boardgameApi"

export default async function Game({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  // We throw away the rest of the slug and just use the ID to fetch.
  const [id] = slug

  const game = await getBoardGame(id)

  const { name, description, players, boardGameGeekLink, coverImage, rulesLink, status } = game

  return (
    <div>
      <h1>{name}</h1>
      <p>id: {id}</p>
      <p>description: {description}</p>
      <p>players: {players}</p>
      <p>boardGameGeekLink: {boardGameGeekLink}</p>
      <p>coverImage: {coverImage}</p>
      <p>rulesLink: {rulesLink}</p>
      <p>status: {status}</p>
    </div>
  )
}
