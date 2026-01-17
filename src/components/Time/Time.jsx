import styles from "./Time.module.css";

const Time = () => {
  const events = [
    { episode: "Episode 1", time: "15:00", label: "Сбор гостей" },
    { episode: "Episode 2", time: "16:00", label: "Церемония" },
    { episode: "Episode 3", time: "17:00", label: "Праздничный банкет" },
    { episode: "Episode 4", time: "21:00", label: "Финал танцпол" },
  ];

  return (
    <section className={styles.plot}>
      <h2 className={styles.title}>СЮЖЕТ</h2>
      <ul className={styles.timeline}>
        {events.map((e, idx) => (
          <li className={styles.event} key={idx}>
            <span className={styles.episode}>{e.episode}</span>
            <span className={styles.time}>{e.time}</span>
            <span className={styles.label}> — {e.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Time;
