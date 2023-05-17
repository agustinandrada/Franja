import styles from "./page.module.css";
import Card from "./cards/card";

export default function Home() {
  return (
    <div className={styles.fondo}>
      <h1 className={styles.title}>Franja morada Fiq</h1>
      <h2 className={styles.title}>Aca va un slogan</h2>
      <main className={styles.title}>Aca un texto de lo que quieran</main>
      <article>
        <Card></Card>
      </article>
    </div>
  );
}
