import Image from "next/image"
import styles from "./GameTeaser.module.css"
import Link from "next/link"

export const GameTeaser = ({
  id,
  name,
  players,
  coverImage,
  rulesLink,
  status
}: {
  id: string
  name: string
  players?: string[]
  coverImage: string
  rulesLink?: string
  status?: string[]
}) => <div className={styles.component}>
    <Link href={`/game/${id}`}>
      <Image
        className={styles.coverImage}
        src={`/coverImages/${coverImage}`}
        alt="box cover"
        width={500}
        height={500}
      />
    </Link>
    <div className={styles.details}>
      <Link className={styles.name} href={`/game/${id}`}>
        <h1>{name}</h1>
      </Link>
      {status && <p className={styles.status}>
        <span className={styles.label}>Status:</span>
        {status.join(', ')}
      </p>}
      {players && <p className={styles.players}>
        <span className={styles.label}>Players:</span>
        {players.join(', ')}
      </p>}
      {rulesLink && <p className={styles.rulesLink}>
        <a href={rulesLink}>View the rules</a>
      </p>}
    </div>
  </div>
