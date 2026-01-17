import { useState } from "react";
import styles from "./RSVP.module.css";

export default function RSVP() {
  const [name, setName] = useState(""); // имя
  const [surname, setSurname] = useState(""); // фамилия
  const [message, setMessage] = useState(""); // комментарий
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно подключить отправку на сервер или email
    console.log({ name, surname, message }); // пример вывода
    setSubmitted(true);
  };

  return (
    <section className={styles.rsvp}>
      <h2 className={styles.title}>ОТЗЫВ</h2>
      {!submitted ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Ваша фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="Комментарий или пожелание"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={styles.submit} type="submit">
            Подтвердить участие
          </button>
        </form>
      ) : (
        <p className={styles.thanks}>Спасибо! Ваш отклик получен 🎬</p>
      )}
    </section>
  );
}
