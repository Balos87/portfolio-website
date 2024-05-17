import React from 'react';
import styles from './styles/Header.module.css';
import Navbar from './Navbar';

function Header() {
  return (
    <span className={styles.headerSpan}>
      <div>
        <header>

          <h1 className={styles.myName}>
            Dennis Briffa
          </h1>

          <h2 className={styles.myRole}>
            .NET Fullstack Studerande
          </h2>

          <h3 className={styles.mySignatureNote}>
            Att finna lösningar till alla problem är min passion.
          </h3>

          <div>
            <Navbar />
          </div>
          <div>
            <section>
              <div className={styles.divSocialLogos}>
                <a href="https://www.linkedin.com/in/dennisbriffa/">
                  <img className={styles.socialLogo} src="/portfolio-website/images/icons8-linkedin-50.png" alt="Linkedin link to my page" />
                </a>
                <a href="https://github.com/Balos87">
                  <img className={styles.socialLogo} src="/portfolio-website/images/icons8-github-50.png" alt="Github link to my repository" />
                </a>
                <a href="mailto:dennisbriffa87@gmail.com?subject=Contact from Website">
                  <img className={styles.socialLogo} src="/portfolio-website/images/icons8-email-50.png" alt="Email link to contant me thru email" />
                </a>
              </div>
            </section>
          </div>
        </header>
      </div>
    </span>
  );
}

export default Header;
