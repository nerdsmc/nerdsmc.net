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
        <li>La permission d'écrire en couleur dans le tchat</li>
        <li>Un serveur personnel avec 20 places au lieu de 5</li>
        <li>6 homes (à la place de 3) dans le Survie</li>
        <li>L'accès à WorldEdit dans le mode Créatif</li>
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
        <li>La permission d'écrire en couleur dans le tchat</li>
        <li>Un serveur personnel avec places illimité, et d'autres avantages</li>
        <li>10 homes (à la place de 3) dans le Survie</li>
        <li>L'accès à WorldEdit dans le mode Créatif</li>
        <li>25% d'argent et d'xp en plus dans le OneBlock</li>
        <li>L'accès a des commandes exclusives (veillez à lire dans le wiki des différents mini-jeux)</li>
      </ul>
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

export default function Ranks() {
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
