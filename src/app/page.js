import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.herosection} id="home">
        <div className={styles.hero_text}>
          <p className={styles.hero_para1}>
            🚀 Trusted by creators in 70+ countries
          </p>
          <h1 className={styles.hero_heading1}>
            <span className={styles.hero_heading_special}>Step</span> into the
          </h1>
          <h1 className={styles.hero_heading2}>
            W<span className={styles.hero_heading_special}>o</span>r
            <span className={styles.hero_heading_special}>l</span>d{" "}
            <span className={styles.hero_heading_special}>o</span>f{" "}
            <span className={styles.hero_heading_special}>A</span>I
          </h1>
          <p className={styles.hero_para2}>
            Empowering innovation with every <br />
            Click.
          </p>
          <div className={styles.hero_btns}>
            <Link href="/workshops">
              <button className={styles.hero_btn1}>Register Now</button>
            </Link>
            <Link href="/learningresources">
              <button className={styles.hero_btn2}>Explore Features</button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            className={styles.hero_img}
            src="/logo.png"
            alt="Logo"
            width={160}
            height={160}
          />
        </div>
      </div>
      <div className={styles.aboutussection} id="aboutus">
        <div className={styles.aboutus_text}>
          <h1 className={styles.aboutus_heading}>
            <span className={styles.aboutus_heading_special}>A</span>b
            <span className={styles.aboutus_heading_special}>o</span>u
            <span className={styles.aboutus_heading_special}>t</span>U
            <span className={styles.aboutus_heading_special}>s</span>
          </h1>
          <p className={styles.aboutus_para}>
            GrowifyAI is on a mission to make AI education
            <br />
            accessible and engaging for everyone.
            <br />
            Our platform provides a comprehensive range of
            <br />
            courses and resouces to help you master arificial
            <br />
            intelligence.
          </p>
        </div>
        <div>
          <Image
            className={styles.aboutus_img}
            src="/aboutus.png"
            alt="About Us"
            width={160}
            height={160}
          />
        </div>
      </div>
      <div className={styles.ourmissionsection} id="ourmission">
        <div className={styles.ourmission_text1}>
          <h1 className={styles.ourmission_heading1}>
            <span className={styles.ourmission_heading1_special}>O</span>u
            <span className={styles.ourmission_heading1_special}>r</span> M
            <span className={styles.ourmission_heading1_special}>i</span>s
            <span className={styles.ourmission_heading1_special}>s</span>i
            <span className={styles.ourmission_heading1_special}>o</span>n
          </h1>
          <p className={styles.ourmission_para1}>
            To democratize AI education and empower individuals and
            organizations with the
            <br />
            Knowledge and skills to thrive in the age of artificial
            intelligence.
          </p>
        </div>
        <div className={styles.ourmission_text2}>
          <div>
            <h1 className={styles.ourmission_heading2}>10,000+</h1>
            <p className={styles.ourmission_para2}>Students</p>
          </div>
          <div>
            <h1 className={styles.ourmission_heading2}>70+</h1>
            <p className={styles.ourmission_para2}>Countries</p>
          </div>
          <div>
            <h1 className={styles.ourmission_heading2}>100+</h1>
            <p className={styles.ourmission_para2}>Workshops Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
