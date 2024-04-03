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
            Fullstack Student
          </h2>

          <h3 className={styles.mySignatureNote}>
            I build fullstack projects, finding solutions to any problem is my passion.
          </h3>

          <div>
            <Navbar />
          </div>
          <div>
            <section>
              
            </section>
          </div>
        </header>
      </div>
    </span>
  );
}

export default Header;
