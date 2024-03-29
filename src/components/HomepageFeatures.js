import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Survival 1.19',
    Image: 'https://nerdsmc.net/img/survie.jpg',
    alt: 'Minecraft Server Survival Crack 1.19'
  },
  {
    title: 'MissileWars',
    Image: 'https://nerdsmc.net/img/missilewars.png',
    alt: 'Minecraft Server MissileWars Crack'
  },
  {
    title: 'OneBlock 1.19',
    Image: 'https://nerdsmc.net/img/oneblock.gif',
    alt: 'Minecraft Server OneBlock Crack 1.19'
  },
  {
    title: 'Parkour',
    Image: 'https://nerdsmc.net/img/parkour.gif',
    alt: 'Minecraft Server Parkour Crack SMP'
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
