import React from "react";
import heroImage from "/assets/hero/heroImage.png";
import styles from "./hero.module.css";
import { getImageUrl } from "../../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mert Can</h1>
        <p className={styles.description}>
          I'm a Mobile developer using React and
          Swift. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:mrtcnunk@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};