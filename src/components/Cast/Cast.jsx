import styles from "./Cast.module.css";

export default function Cast({ ref }) {
  const cast = [
    {
      name: "Мария",
      role: "Невеста",
      info: "Любит путешествия и кофе. Главная героиня нашей истории ❤️",
      photo: "./woman.jpg",
    },
    {
      name: "Алексей",
      role: "Жених",
      info: "Обожает кино и музыку. Тот самый, кто делает сюжет незабываемым 🎬",
      photo: "./man.jpg",
    },
  ];

  return (
    <section className={styles.cast} ref={ref}>
      <h2 className={styles.sectionTitle}>В главных ролях</h2>

      <div className={styles.cards}>
        {cast.map((person, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.photoContainer}>
              <img
                src={person.photo}
                alt={person.name}
                className={styles.photo}
              />
              <div className={styles.overlay} />
            </div>
            <h3 className={styles.name}>{person.name}</h3>
            <div className={styles.role}>{person.role}</div>
            <p className={styles.info}>{person.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
