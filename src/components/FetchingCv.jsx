import React, { useState, useEffect } from "react";
import CvCard from "./CvCard";
import styles from "./styles/CvCard.module.css";

function FetchingAndDisplayingCv() {
  const [cv, setCv] = useState(null);

  useEffect(function () {
    fetch('/cv.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setCv(data);
      })
      .catch(function (error) {
        console.error('Error fetching the CV', error);
      });
  }, []);

  if (!cv) {
    return <div className={styles.cvLoadingSpinner}>
      <h2>Loading CV...</h2>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  }

  return (
    <div className={styles.cvMainDiv}>


      <CvCard title={cv.education[0].about} description={cv.education[0].level}>
        <p>{cv.education[0].period}</p>
        <p>{cv.education[0].description}</p>
        <div className={styles.cvCardTechStackDiv}>
          <p>{cv.education[0].techstack[0]}</p>
          <p>{cv.education[0].techstack[1]}</p>
          <p>{cv.education[0].techstack[2]}</p>
          <p>{cv.education[0].techstack[3]}</p>
          <p>{cv.education[0].techstack[4]}</p>
          <p>{cv.education[0].techstack[5]}</p>
          <p>{cv.education[0].techstack[6]}</p>
          <p>{cv.education[0].techstack[7]}</p>
        </div>
      </CvCard>

      <CvCard title={cv.education[1].about} description={cv.education[1].level}>
        <p>{cv.education[1].description}</p>
        <div className={styles.cvCardTechStackDiv}>
          <p>{cv.education[1].techstack[0]}</p>
          <p>{cv.education[1].techstack[1]}</p>
          <p>{cv.education[1].techstack[2]}</p>
          <p>{cv.education[1].techstack[3]}</p>
          <p>{cv.education[1].techstack[4]}</p>
        </div>
      </CvCard>

      <CvCard title={cv.education[2].about} description={cv.education[2].level}>
        <p>{cv.education[2].description}</p>
        <div className={styles.cvCardTechStackDiv}>
          <p>{cv.education[2].techstack[0]}</p>
          <p>{cv.education[2].techstack[1]}</p>
          <p>{cv.education[2].techstack[2]}</p>
          <p>{cv.education[2].techstack[3]}</p>
        </div>
      </CvCard>

      <CvCard title={cv.worked[0].about} description={cv.worked[0].level}>
        <p>{cv.worked[0].period}</p>
        <p>{cv.worked[0].description}</p>
        <div className={styles.cvCardTechStackDiv}>
          <p>{cv.worked[0].techstack[0]}</p>
          <p>{cv.worked[0].techstack[1]}</p>
          <p>{cv.worked[0].techstack[2]}</p>
          <p>{cv.worked[0].techstack[3]}</p>
        </div>
      </CvCard>

      <CvCard title={cv.worked[1].about} description={cv.worked[1].level}>
        <p>{cv.worked[1].period}</p>
        <p>{cv.worked[1].description}</p>
        <div className={styles.cvCardTechStackDiv}>
          <p>{cv.worked[1].techstack[0]}</p>
          <p>{cv.worked[1].techstack[1]}</p>
          <p>{cv.worked[1].techstack[2]}</p>
        </div>
      </CvCard>

      <CvCard title={cv.worked[2].about} description={cv.worked[2].level}>
        <p>{cv.worked[2].period}</p>
        <p>{cv.worked[2].period2}</p>
        <p>{cv.worked[2].description}</p>
        <div className={styles.cvCardTechStackDiv}>
        </div>
      </CvCard>

    </div>
  );
}

export default FetchingAndDisplayingCv;