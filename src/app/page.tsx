import { GameSearchExperience } from "@/feature/GameSearchExperience";
import styles from "./page.module.css"

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Board Games</h1>
        <GameSearchExperience />
      </main>
    </div>
  );
}
