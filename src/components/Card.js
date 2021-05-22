import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid;
  padding: 8px;
  border-color: ${props =>
    props.color ? `var(--${props.color}-light)` : "var(--gray-600)"};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-color: ${props =>
      props.color ? `var(--${props.color})` : "var(--gray-800)"};
  }

  h4 {
    font-weight: 500;
    margin: 0 0 8px 0;
    opacity: 1;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  time {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--gray-600);
    font-weight: 300;

    .icon {
      height: 12px;
      width: 12px;
      margin-right: 4px;
    }
  }
`

export default function Card(props) {
  return (
    <CardWrapper className="card" {...props}>
      <h4>{props.title}</h4>
      {props.children}
    </CardWrapper>
  )
}
