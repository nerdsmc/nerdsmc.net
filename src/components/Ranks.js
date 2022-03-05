import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Mini-VIP',
    //Image: 'http://cdn.sayrix.fr/i/z--5.png',
    description: (
      <>
      Le Mini-VIP vous permet de bénéficier de 6 homes (à la place de 3) dans le serveur Survie et la permission d'écrire en couleur dans le tchat!
      <br/>
      <b>Prix: 2.99€</b>
      </>
    ),
  }
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} alt={title}/>
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
