import React from "react"
import styled from "styled-components"

const BadgeWrapper = styled.div`
  border-radius: 8px;
  background: var(--gray-200);
  font-weight: 500;
  text-transform: uppercase;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 14px;
  display: inline-block;
  padding: 2px 8px;
  color: var(--gray-600);
`

export default function Badge(props) {
  return <BadgeWrapper {...props}>{props.children}</BadgeWrapper>
}
