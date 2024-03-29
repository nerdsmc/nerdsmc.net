import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className='font-semibold text-4xl'>IP: <u className='underline'>nerdsmc.net</u></p>
        <div className={styles.buttons + " justify-center"}>
          <Link
            className="button button--secondary button--lg"
            to="/wiki/intro">
            Wiki
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="NerdsMC is a minecraft server open to crack version. There is Prop Hunt, MissileWars, Creative, Parkour, Spleef, Sumo and much more. The server is open from 1.8 to 1.19">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
