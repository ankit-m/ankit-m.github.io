import React from "react";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Food({ location }) {
  return (
    <Layout location={location} active="food">
      <Seo title="Food" />
      <ComingSoon />
    </Layout>
  );
}
