import React from 'react';
import styles from './styles/CvCard.module.css';

function CvCard({ title, description, children }) {
  return (
    <div className={styles.cvCard}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export default CvCard;
