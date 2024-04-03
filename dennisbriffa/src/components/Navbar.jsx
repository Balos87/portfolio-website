import React, { useState, useEffect } from 'react';
import styles from './styles/Navbar.module.css';
import buttonStyles from './styles/Button.module.css';

const menuItems = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
];

function NavbarButtonsWithSmoothScrollAndSectionFinder() {
  const [activeSection, setActiveSection] = useState('#about');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function scrollToSection(event, path) {
    event.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleScroll() {
    let currentSection = '';
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    menuItems.forEach(item => {
      const section = document.querySelector(item.path);
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (sectionTop < scrollPosition && sectionTop + sectionHeight > scrollPosition) {
        currentSection = item.path;
      }
    });

    setActiveSection(currentSection);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={buttonStyles.divven}>
        {menuItems.map((item, index) => (
          <a
            href={item.path}
            className={`${buttonStyles.aButton} ${activeSection === item.path ? buttonStyles.active : ''}`}
            onClick={(e) => scrollToSection(e, item.path)}
            key={index}
          >
            <span>{item.title}</span><i></i>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavbarButtonsWithSmoothScrollAndSectionFinder;
