import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { Redirect } from "react-router-dom";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation - ${siteConfig.title}`}
      description="A low backend platform that lets you build applications with ease">
      <Redirect to = 'docs/intro' />
    </Layout>
  );
}
