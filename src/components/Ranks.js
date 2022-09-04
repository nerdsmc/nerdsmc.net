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
      Le Mini-VIP vous permet de bénéficier de 
      <ul>
        <li>La permission d'écrire en couleur dans le tchat (voir les codes de formatage sur https://wiki.ess3.net/mc/)</li>
        <li>Un serveur personnel avec 20 places au lieu de 10</li>
        <li>6 homes (à la place de 3) dans le Survie</li>
      </ul>
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
      Le VIP vous permet de bénéficier de
      <ul>
        <li>La permission d'écrire en couleur dans le tchat (voir les codes de formatage sur https://wiki.ess3.net/mc/)</li>
        <li>Un serveur personnel avec places illimité, la possibilité de mettre des plugins et bien plus</li>
        <li>l'accès a des commandes exclusives (veillez à lire dans le wiki des différents mini-jeux)</li>
      </ul>
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
      <div className="container content-center">
        <div className="row content-center justify-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
