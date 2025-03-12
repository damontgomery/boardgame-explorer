import styles from "./GameTeaser.module.css"

export const GameTeaserSkeleton = () => 
  <div className={`${styles.component} ${styles.skeleton} skeleton`}>
    <div className={styles.coverImage}/>
    <div className={styles.details}>
      <h1 className={styles.name}></h1>
      <p className={styles.status}></p>
      <p className={styles.players}></p>
      <p className={styles.rulesLink}></p>
    </div>
  </div>
