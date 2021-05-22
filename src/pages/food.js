import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Layout from '../components/layout';

export default function Food ({ location }) {
  return (
    <Layout location={location} active='food'>
      <ComingSoon />
    </Layout>
  );
}
