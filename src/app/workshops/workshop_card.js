import styles from "./workshop_card.module.css";
import Image from "next/image";

export default function WorkshopCard({
  title,
  description,
  image,
  buttonText,
}) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.card_image}
        src="/logo.png"
        alt={title}
        width={300}
        height={200}
      />
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_description}>{description}</p>
        <button className={styles.card_button}>Register</button>
      </div>
    </div>
  );
}
