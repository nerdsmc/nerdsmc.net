import React from 'react';
import clsx from 'clsx';
import styles from './Ranks.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Mini-VIP',
    Image: 'https://nerdsmc.net/img/mini.png',
    description: (
      <>
      <ul style={{display: 'inline-block', textAlign: 'left'}}>
        <li>✅ The permission to write in color in the chat</li>
        <li>✅ A personal server with 20 slots instead of 5</li>
        <li>✅ 6 homes (instead of 3) in the Survival and OneBlock</li>
        <li>✅ Access to WorldEdit in Creative Mode</li>
				<li>❌ 25% more money and xp in the OneBlock</li>
        <li>❌ Access to exclusive commands (be sure to read in the wiki of the different mini-games)</li>
      </ul>
      <b>Condition: Make a minimum donation of 2.99€</b>
      </>
    ),
    btnURL: "https://discord.gg/nerd",
  },
  {
    title: 'VIP',
    Image: 'https://nerdsmc.net/img/vip.png',
    description: (
      <>
      <ul style={{display: 'inline-block',  textAlign: 'left'}}>
				<li>✅ The permission to write in color in the chat</li>
        <li>✅ A personal server with unlimited slots instead of 5</li>
        <li>✅ 9 homes (instead of 3) in the Survival and OneBlock</li>
        <li>✅ Access to WorldEdit in Creative Mode</li>
				<li>✅ 25% more money and xp in the OneBlock</li>
        <li>✅ Access to exclusive commands (be sure to read in the wiki of the different mini-games)</li>
      </ul>
      <b>Condition: Make a minimum donation of 14.99€</b>
      </>
    ),
    btnURL: "https://discord.gg/nerd",
  }
];

function Feature({Image, title, description, btnURL}) {
  return (
    <div className={clsx('col col--4 text--center')}>
      <div className="">
        <img src={Image} alt={title}/>
      </div>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={btnURL}>
            Make a donation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Ranks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row content-center justify-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
