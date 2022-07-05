import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Mini-VIP',
    Image: 'https://uworldmc.fr/img/mini.png',
    description: (
      <>
      Le Mini-VIP vous permet de bénéficier de 6 homes (à la place de 3) dans le serveur Survie, la permission d'écrire en couleur dans le tchat et un serveur personnel avec 20 slots à la place de 10
      <br/><br/>
      <b>Condition: Faire un don de minimum 2.99€</b>
      </>
    ),
    btnURL: "https://discord.uworldmc.fr",
  },
  {
    title: 'VIP',
    Image: 'https://uworldmc.fr/img/vip.png',
    description: (
      <>
      Le VIP vous permet de bénéficier de 10 homes (à la place de 3) dans le serveur Survie, la permission d'écrire en couleur dans le tchat, l'accès a des commandes exclusives (veillez à lire dans le wiki des différents mini-jeux) et un nombre de slot illimité, la possibilité de mettre des plugins et bien plus sur son serveur personnel!
      <br/><br/>
      <b>Condition: Faire un don de minimum 14.99€</b>
      </>
    ),
    btnURL: "https://discord.uworldmc.fr",
  }
];

function Feature({Image, title, description, btnURL}) {
  return (
    <div className={clsx('col col--4 text--center')}>
      <div className="text--center">
        <img src={Image} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={btnURL}>
            Faire un don
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <div className="row text--center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
