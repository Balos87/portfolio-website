import React, { useEffect, useState } from 'react';
import styles from './styles/Projects.module.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStart = Date.now();
    fetch('https://api.github.com/users/balos87/starred')
      .then((response) => response.json())
      .then((data) => {

        const fetchEnd = Date.now();
        const fetchDuration = fetchEnd - fetchStart;
        const minLoadingTime = 1000;

        if (fetchDuration < minLoadingTime) {
          setTimeout(() => {
            setRepos(data);
            setLoading(false);
          }, minLoadingTime - fetchDuration);
        } else {
          setRepos(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.projectsLoadingSpinner}>
        <h2>Loading Projects...</h2>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.projectsMainDiv}>
      {repos.map((repo) => (
        <div key={repo.id} className={styles.projectsCard}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <a className={styles.projectButton} href={repo.html_url} target="_blank" rel="">
            REPOSITORY
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;