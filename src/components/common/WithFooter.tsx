import React, {FC} from "react";
import styled from "styled-components"
import colors from "consts/colors";
import NetflixLogo from "./NetflixLogo";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  
  width: fit-content;
  margin: 0 0 3rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  
  background: ${colors.gray};
  padding: 1rem 0;
`;

const Layout: FC = (props) =>
    <Container>
        {props.children}
        <Footer>
            <NetflixLogo/>
        </Footer>
    </Container>;

export default Layout

