import React, {FC} from "react";
import styled from "styled-components";
import Search from "components/search/Search";
import headerBackgroundUrl from "images/header_background.png";
import colors from "consts/colors";
import Button from "components/common/Button";
import NetflixLogo from "components/common/NetflixLogo";

const HeaderContainer = styled.header`
    position: relative;
    height: 30rem;
    width: 100%;
    
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    background: ${colors.black};
    overflow: hidden;
`;

const Background = styled.img`
    mix-blend-mode: normal;
    opacity: 0.7;
    filter: blur(5px);
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 4rem;
    box-sizing: border-box;
`;

const addButtonStyle = {
    backgroundColor: colors.lightGray,
    opacity: 0.68,
    color: colors.red,
    fontSize: "1.25rem",
    fontWeight: 600
};

const Header: FC = () => {
    return (
            <HeaderContainer>
                <FirstRow>
                    <NetflixLogo/>
                    <Button
                        title="+ ADD MOVIE"
                        buttonStyle={addButtonStyle}
                    />
                </FirstRow>
                <Search/>
                <Background src={headerBackgroundUrl}/>
            </HeaderContainer>
    );
}

export default Header;

