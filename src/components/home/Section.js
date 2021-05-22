import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Icon from "../Icon"

const Section = styled.section`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px solid var(--gray-300);
  padding: 0 1.5em;
  justify-content: center;

  h1 {
    font-weight: var(--fontWeight-black);
    font-size: 48px;
    letter-spacing: -1.5px;
    margin: 1rem 0;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 33px;
    margin: 0;
  }

  .next-section,
  .prev-section {
    display: flex;
    align-items: center;
    position: absolute;
    cursor: pointer;
    color: var(--gray-500);

    span {
      display: inline-block;
      margin: 0 var(--spacing-2);
      font-size: var(--fontSize-2);
      font-weight: var(--fontWeight-bold);
      letter-spacing: -1px;
    }

    @media (min-width: 572px) {
      span {
        display: none;
      }
    }

    svg {
      stroke: var(--gray-500);
    }

    &:hover {
      color: var(--gray-700);

      svg {
        stroke: var(--gray-700);
      }
    }
  }

  .next-section {
    bottom: 16px;
    right: 16px;
  }

  .prev-section {
    bottom: 16px;
    left: 16px;
  }
`
const SectionLeft = styled.div`
  margin-right: 0;
  display: none;

  @media (min-width: 572px) {
    margin-right: 72px;
    display: block;
  }
`
const SectionRight = styled.div`
  flex-grow: 1;
  margin-right: 0;

  @media (min-width: 572px) {
    margin-right: 2rem;
  }
`

function NextSection(props) {
  return (
    <Link className="next-section" to={`#${props.id}`}>
      <span className="accent-font">{props.label}</span>
      <Icon name="arrow-circle-down" height="40px" width="40px" />
    </Link>
  )
}

function PrevSection(props) {
  return (
    <Link className="prev-section" to={`#${props.id}`}>
      <Icon name="arrow-circle-up" height="40px" width="40px" />
    </Link>
  )
}

export default Section
export { SectionLeft, SectionRight, NextSection, PrevSection }
