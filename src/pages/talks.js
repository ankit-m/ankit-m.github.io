import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Layout from '../components/layout';

export default function Talks ({ location }) {
  return (
    <Layout location={location} active='talks'>
      <ComingSoon />
    </Layout>
  );
}
