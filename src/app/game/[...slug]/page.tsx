import { getBoardGame } from "@/boardgameApi/data/boardgameApi"
import Image from "next/image"
import styles from "./game.module.css"

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
      <div className={styles.component}>
        <Image className={styles.coverImage} src={`/coverImages/${coverImage}`} alt="box cover" width={1000} height={1000} />
        <div className={styles.details}>
          <h1 className={styles.name}>{name}</h1>
          {status && <p className={styles.status}>
            <span className={styles.label}>Status:</span>
            {status}
          </p>}
          {players && <p className={styles.players}>
            <span className={styles.label}>Players:</span>
            {players.join(', ')}
          </p>}
          <p className={styles.description}>{description}</p>
          {rulesLink && <p className={styles.rulesLink}>
            <a href={rulesLink}>View the rules</a>
          </p>}
          {boardGameGeekLink && <p className={styles.boardGameGeekLink}>
            <a href={boardGameGeekLink}>View more at boardgamegeek.com</a>
          </p>}
        </div>
      </div>
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
