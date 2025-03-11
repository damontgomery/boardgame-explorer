import { getBoardGames } from "@/lib/boardGameApi/data-access/boardGameApi"
import styles from "./page.module.css"
import { GameTeaser } from "@/feature/GameTeaser";

export default async function Home() {
  const games = await getBoardGames()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Board Games</h1>
        <div className={styles.games}>
          {games.map(game => <GameTeaser key={game.id} game={game} />)}
        </div>
      </main>
    </div>
  );
}
