import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Redirect } from "react-router-dom";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation - ${siteConfig.title}`}
      description="A low backend platform that lets you build applications with ease">
      <Redirect to = '/docs/docs/intro' />
    </Layout>
  );
}
