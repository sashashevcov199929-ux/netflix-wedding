import styles from "./DressCode.module.css";

export default function DressCode() {
  const codes = [
    {
      type: "Мужской",
      description:
        "Классический костюм тёмных тонов, смокинг или чёрный галстук. Бабочка / галстук приветствуется. Красные акценты (платок, запонки) — огонь!",
      img: "./Manstil2.jpg", // подставь своё фото или иконку
    },
    {
      type: "Женский",
      description:
        "Элегантное вечернее / коктейльное платье, длинное платье в пол. Красный, чёрный, бордо, тёмные оттенки. Минимум блестяшек — акцент на силуэт.",
      img: "./WomanStil.jpg",
    },
  ];

  return (
    <section className={styles.dress}>
      <h2 className={styles.title}>Образ</h2>

      <div className={styles.cards}>
        {codes.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.imgWrapper}>
              <img src={item.img} alt={item.type} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.type}>{item.type}</div>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
