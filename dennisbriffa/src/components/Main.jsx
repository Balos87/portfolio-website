import React from "react";
import styles from "./styles/Main.module.css";
import FetchingCv from "./FetchingCv";
import Footer from "./Footer";
import Projects from "./Projects";


function Main() {
  return (
    <main className={styles.main}>

      <section id="about">
        <div>
          <p className={styles.aboutMeText}>
            Förnuvarande studerar jag .NET Fullstack på Chas Academy i Stockholm.
          </p>

          <p className={styles.aboutMeText}>
            Jobbat tidigare som Transportledare och Kranbilschaufför i 20år innan jag bestämde mig för att byta bana till det jag
            har studerat för i gymnasium och haft som hobby genom åren.
          </p>

          <p className={styles.aboutMeText}>
            Jag ser fram emot att få fördjupa mig vidare i denna bransch då det är något jag är genuint intresserad av.
          </p>

          <p className={styles.aboutMeText}>
            Problemlösning och en nyfikenhet för tekink i allmänhet är något som har hjälpt mig både proffesionellt och privat.
          </p>

        </div>
      </section>

      <section id="experience">
        <FetchingCv />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <Footer />
    </main>

  );
}

export default Main;