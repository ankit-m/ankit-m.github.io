import React from "react";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Comics({ location }) {
  return (
    <Layout location={location} active="comics">
      <Seo title="Comics" />
      <ComingSoon />
    </Layout>
  );
}
