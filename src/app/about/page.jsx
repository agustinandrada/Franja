import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.fondo}>
      <h1 className={styles.title}>Sobre la franja</h1>
      <article className={styles.text}>
        <p>
          La Franja Morada es una organización estudiantil de Argentina,
          específicamente en la provincia de Santa Fe. Es reconocida como el
          brazo universitario de la Unión Cívica Radical (UCR), un partido
          político argentino. La Franja Morada tiene una larga historia y
          tradición en la política estudiantil y universitaria de Argentina. Su
          nombre proviene del color morado, que es el distintivo del
          radicalismo. Se fundó en 1958 y desde entonces ha tenido una presencia
          activa en las universidades de Santa Fe.
        </p>
        <p>
          La organización tiene como objetivo principal la defensa de los
          derechos estudiantiles y la promoción de una educación de calidad.
          Busca representar y defender los intereses de los estudiantes en
          diferentes ámbitos, incluyendo la participación en centros de
          estudiantes y en órganos de gobierno de las universidades. La Franja
          Morada ha sido reconocida por su participación en diferentes luchas
          estudiantiles y sociales a lo largo de los años. Ha trabajado en la
          defensa de la educación pública, la igualdad de oportunidades y el
          acceso a la universidad para todos los estudiantes. También ha
          promovido la participación política y el compromiso cívico entre los
          jóvenes.
        </p>
        <p>
          Además de su actividad política, la Franja Morada también organiza
          eventos culturales, académicos y deportivos, fomentando la integración
          y el desarrollo integral de los estudiantes. En resumen, la Franja
          Morada es una organización estudiantil en Santa Fe, Argentina, que
          representa a los estudiantes y defiende sus derechos en el ámbito
          universitario. Forma parte del movimiento estudiantil argentino y
          tiene una larga trayectoria en la defensa de la educación y la
          participación política de los jóvenes.
        </p>
      </article>
    </div>
  );
}
