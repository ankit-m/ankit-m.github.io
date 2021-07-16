import React from "react";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Consulting({ location }) {
  return (
    <Layout location={location} active="consulting">
      <Seo title="Consulting" />
      <ComingSoon />
    </Layout>
  );
}
