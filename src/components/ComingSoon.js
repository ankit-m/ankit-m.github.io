import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ComingSoonWrapper = styled.div`
  max-width: 320px;
  text-align: center;
  margin: 160px auto 0 auto;
  display: block;

  a {
    font-size: 1.2rem;
  }

  p {
    line-height: 1.5rem;
  }
`

export default function ComingSoon() {
  return (
    <ComingSoonWrapper>
      <h1 className="accent-font">Coming Soon</h1>
      <p>
        I am working hard to build this page. It should be ready soon. In the
        meantime you can go through blogposts.
      </p>
      <Link to="/" className="accent-font">
        Go home
      </Link>
    </ComingSoonWrapper>
  )
}
