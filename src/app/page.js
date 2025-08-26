import styles from "./page.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <Image className={styles.img} src="/9a2e9ae9c9777765c6eb5e7a1d28c6d1624f919a.png" alt="Logo" width={160} height={160}/>
    </div>
    <div className={styles.page}>
      
    </div>
    </>
  );
}
