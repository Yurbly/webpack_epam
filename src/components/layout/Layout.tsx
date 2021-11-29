import React, {FC} from "react";
import styled from "styled-components"
import colors from "consts/colors";

const WithFooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 100%;
  background: ${colors.lightGray};
  overflow: auto;
`;

const Layout: FC = (props) =>
    <WithFooterContainer>{props.children}</WithFooterContainer>;

export default Layout

