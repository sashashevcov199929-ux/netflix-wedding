import styles from "./Hero.module.css";
import { Play } from "lucide-react";

const Hero = ({ onClickScroll }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.containerHero}>
        <p className={styles.label}>A NETFLIX ORIGINAL</p>

        <h1 className={styles.title}>Приглашение</h1>

        <p className={styles.subtitle}>
          Alex & Maria • Премьера в июне 14, 2026
        </p>

        <div className={styles.buttons} onClick={onClickScroll}>
          <button className={styles.primary}>
            <Play size={20} /> Смотреть трейлер
          </button>
        </div>

        <p className={styles.countdown}>Примьера через 21 день</p>
      </div>
    </div>
  );
};

export default Hero;
