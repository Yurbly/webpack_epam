import React from "react";
import styled from "styled-components"
import colors from "consts/colors";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 100%;
  background: ${colors.lightGray};
`;

const Layout = (props) =>
    <LayoutContainer>{props.children}</LayoutContainer>;

export default Layout

