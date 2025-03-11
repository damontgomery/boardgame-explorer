import Image from "next/image"
import styles from "./GameCard.module.css"

export const GameCard = ({
  name,
  description,
  players,
  boardGameGeekLink,
  coverImage,
  rulesLink,
  status
}: {
  name: string
  description: string
  players?: string[]
  boardGameGeekLink?: string
  coverImage: string
  rulesLink?: string
  status?: string[]
}) => <div className={styles.component}>
    <Image
      className={styles.coverImage}
      src={`/coverImages/${coverImage}`}
      alt="box cover"
      width={1000}
      height={1000}
    />
    <div className={styles.details}>
      <h1 className={styles.name}>{name}</h1>
      {status && <p className={styles.status}>
        <span className={styles.label}>Status:</span>
        {status.join(', ')}
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
