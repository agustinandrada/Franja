import styles from "../page.module.css";

export default function Card() {
  return (
    <main className={styles.main}>
      <div class="card">
        <img
          src="https://doodleipsum.com/500x500/hand-drawn?i=b48528b59f8d071fde57e51d2d6c433d"
          alt="Card image cap"
        />
        <h5 className={styles.title}>Nombre del candidato</h5>
        <p className={styles.title}>A que se postula</p>
        <a href="#" className={styles.title}>
          Check it
        </a>
      </div>

      <div className={styles.card}>
        <img
          src="https://doodleipsum.com/500x500/hand-drawn?i=9b11b7fde5591be86d8928901e68355f"
          alt="Card image cap"
        />
        <h5 className={styles.title}>Nombre del candidato</h5>
        <p className={styles.title}>A que se postula</p>
        <a href="#" className={styles.title}>
          Check it
        </a>
      </div>

      <div class="card">
        <img
          class="card-img"
          src="https://doodleipsum.com/500x500/hand-drawn?i=74c909f45ddde824d103db53e2a71e63"
          alt="Card image cap"
        />
        <h5 className={styles.title}>Nombre del candidato</h5>
        <p className={styles.title}>A que se postula</p>
        <a href="#" className={styles.title}>
          Check it
        </a>
      </div>
    </main>
  );
}
