import React from "react"
import ComingSoon from "../components/ComingSoon"
import Layout from "../components/layout"

export default function Comics({ location }) {
  return (
    <Layout location={location} active="comics">
      <ComingSoon />
    </Layout>
  )
}
