import styles from "./Place.module.css";
import { useEffect, useState } from "react";

const Place = () => {
  const weddingDate = new Date("2026-06-20T16:00:00"); // пример даты свадьбы
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.venue}>
      <h2 className={styles.title}>События происходят</h2>

      <p className={styles.address}>
        Ресторан «Золотой сад»
        <br />
        Москва, проезд Сигнальный, д. 16
      </p>

      <div className={styles.containerImg}>
        <img src="./restoran.jpg" alt="Ресторан Золотой сад" />
      </div>

      <p className={styles.date}>14 июня 2026 • 15:00</p>

      <div className={styles.timer}>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>Дней</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>Часов</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>Минут</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>Секунд</span>
        </div>
      </div>
    </section>
  );
};

export default Place;
