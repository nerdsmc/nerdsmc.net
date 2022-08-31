import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Survie 1.19',
    Image: 'https://uworldmc.fr/img/survie.jpg',
    alt: 'Serveur Minecraft Survie Cracké 1.19'
  },
  {
    title: 'MissileWars',
    Image: 'https://uworldmc.fr/img/missilewars.png',
    alt: 'Serveur Minecraft MissileWars Cracké'
  },
  {
    title: 'OneBlock 1.19',
    Image: 'https://uworldmc.fr/img/oneblock.gif',
    alt: 'Serveur Minecraft OneBlock Cracké 1.19'
  },
  {
    title: 'Parkour',
    Image: 'https://uworldmc.fr/img/parkour.gif',
    alt: 'Serveur Minecraft Parkour Cracké 1.19'
  }
];

function Feature({Image, title, alt}) {
  return (
    <div className={clsx('mx-2')}>
      <div className="text--center">
        <img src={Image} alt={alt} className={styles.featuresimg}/>
      </div>
      <div className="text--center">
        <h3>{title}</h3>
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
