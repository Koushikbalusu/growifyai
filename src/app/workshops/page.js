import styles from "./workshops.module.css";
import workshopdata from "./workshops.json";
import WorkshopCard from "./workshop_card";

export default function workshopsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.heading_section}>
        <h1 className={styles.heading}>
          Register for an
          <br />
          upcoming <span className={styles.heading_special}>workshop</span>
        </h1>
      </div>
      <div className={styles.workshops_section}>
        <div className={styles.workshops_list}>
          {workshopdata.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              title={workshop.title}
              description={workshop.description}
              image={workshop.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
