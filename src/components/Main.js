import React from "react";
import styled from "styled-components";

// @todo add mobile viewport handling
const MainWrapper = styled.main`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 16px;

  &.offset-header {
    margin-top: 92px;
  }
`;

export default function Main(props) {
  return <MainWrapper {...props} />;
}
