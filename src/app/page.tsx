import { getBoardGames } from "@/boardgameApi/data/boardgameApi"
import styles from "./page.module.css"
import { GameTeaser } from "@/components/GameTeaser/GameTeaser";

export default async function Home() {
  const games = await getBoardGames()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Board Games</h1>
        <div className={styles.games}>
          {games.map(game => (
            <GameTeaser
              key={game.id}
              id={game.id}
              name={game.name}
              players={game.players}
              coverImage={game.coverImage}
              rulesLink={game.rulesLink}
              status={game.status}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
