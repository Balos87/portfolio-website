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
      Allt började år 2001 - fick min första dator och en helt ny värld öppnade sig.
      Av ren nyfikenhet började jag utforska och lära mig allt jag kunde om datorer och internet.
    </p>
    
    <p className={styles.aboutMeText}>   
      Det hela tog fart när jag skulle försöka hosta min egen MMORPG-Spelserver hemifrån, efter mycket om och men så lyckades jag.
      Tack vare den erfarenheten som bestod av allt från databas till hemsida, så växte mitt intresse för webbutveckling. 
    </p>

    <p className={styles.aboutMeText}>
      Jag har gjort en hel del sedan dess, allt från att bygga hemsidor, till att skapa webbapplikationer och API:er.
    </p>

    <p className={styles.aboutMeText}>
    Min teknologiska nyfikenhet, och viljan att alltid lära mig mer - Har alltid varit Min Drivkraft.
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