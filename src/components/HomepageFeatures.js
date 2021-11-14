import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '',
    Image: 'https://cdn.sayrix.fr/sH8/javaw_TZApCVnXbg.jpg',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Génération 1.18',
    Image: 'https://cdn.sayrix.fr/sH8/javaw_SDVpFKFkr9.jpg',
    description: (
      <>
      </>
    ),
  }
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
