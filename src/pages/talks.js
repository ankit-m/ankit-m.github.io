import React from "react"
import ComingSoon from "../components/ComingSoon"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Talks({ location }) {
  return (
    <Layout location={location} active="talks">
      <Seo title="Talks" />
      <ComingSoon />
    </Layout>
  )
}
