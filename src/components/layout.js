import React, { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import GlobalStyle from "./GlobalStyles";

const Layout = ({ active, children, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <Fragment>
      <GlobalStyle />
      <Header active={active} />
      <Main className={location.pathname !== rootPath && "offset-header"}>
        {children}
      </Main>
    </Fragment>
  );
};

export default Layout;
