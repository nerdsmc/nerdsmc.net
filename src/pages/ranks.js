import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Ranks from '../components/Ranks';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="NerdsMC is a minecraft server open to crack version. There is Prop Hunt, MissileWars, Creative, Parkour, Spleef, Sumo and much more. The server is open from 1.8 to 1.19">
      <main>
        <Ranks />
      </main>
    </Layout>
  );
}
