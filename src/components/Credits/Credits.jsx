import styles from "./Credits.module.css";

const photos = [
  "/LoveOne.jpg",
  "/LoveTwo.jpg",
  "/LoveTree.jpg",
  "/LoveFour.jpg",
  "/LoveFive.jpg",
];

export default function Credits() {
  return (
    <section className={styles.credits}>
      <h2 className={styles.title}>ТИТРЫ</h2>
      <div className={styles.finalMessage}>
        <p>
          Наша история только начинается…
          <br />
          <strong>14 июня 2026</strong> мы официально скажем друг другу «Да»!
          <br />
          <br />
          Будем ждать вас с огромным нетерпением, чтобы разделить этот день
          вместе
          <br />
          Вы — главные гости нашего фильма. Без вас не будет финальных титров!
        </p>
        <p className={styles.heart}>♡</p>
      </div>

      <div className={styles.carousel}>
        {photos.map((src, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.imgWrapper}>
              <img src={src} alt={`Момент ${idx + 1}`} className={styles.img} />
              <div className={styles.overlay} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
