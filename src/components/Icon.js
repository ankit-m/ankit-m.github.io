import React from "react"
import styled from "styled-components"

const iconMap = {
  "arrow-circle-down": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
      />
    </svg>
  ),
  "arrow-circle-up": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
      />
    </svg>
  ),
  calendar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
}
const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${props => props.height || "16px"};
  width: ${props => props.width || "16px"};

  svg {
    height: ${props => props.height || "16px"};
    width: ${props => props.width || "16px"};
  }
`

export default function Icon(props) {
  return (
    <IconWrapper className={`icon ${props.className || ""}`} {...props}>
      {iconMap[props.name]}
    </IconWrapper>
  )
}
