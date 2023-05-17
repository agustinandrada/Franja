import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.fondo}>
      <h1 className={styles.main}>Franja morada Fiq</h1>
      <h2>Aca va un slogan</h2>
      <main>Aca un texto de lo que quieran</main>
      <article>
        <p>
          {
            " Fotos de los candidatos, con nombre, apellido y a que se postulan "
          }
        </p>
        <p>
          {
            " Fotos de los candidatos, con nombre, apellido y a que se postulan "
          }
        </p>
        <p>
          {
            " Fotos de los candidatos, con nombre, apellido y a que se postulan "
          }
        </p>
        <p>
          {
            " Fotos de los candidatos, con nombre, apellido y a que se postulan "
          }
        </p>
      </article>
    </div>
  );
}
