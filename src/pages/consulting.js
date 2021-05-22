import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Layout from '../components/layout';

export default function Consulting ({ location }) {
  return (
    <Layout location={location} active='consulting'>
      <ComingSoon />
    </Layout>
  );
}
