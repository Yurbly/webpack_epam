import React from "react";
import styled from "styled-components";
import Search from "components/search/Search";
import headerBackgroundUrl from "images/header_background.png";

const HomeContainer = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: content-box;
    width: 78.8rem;
`;

const Header = styled.header`
    position: relative;
    height: 30rem;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

const Background = styled.div`
    background: url(${headerBackgroundUrl});
    mix-blend-mode: normal;
    opacity: 0.3;
    filter: blur(8.15485px);
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Main = () => {

    return (
        <HomeContainer>
            <Header>
                <Search/>
                <Background/>
            </Header>
        </HomeContainer>
    );
}

export default Main;

