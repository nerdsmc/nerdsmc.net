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
      description="U'World est un serveur minecraft cracké Survie, OneBlock, MissileWars, Practice et bien plus de l'1.8 à l'1.19">
      <main>
        <Ranks />
      </main>
    </Layout>
  );
}
