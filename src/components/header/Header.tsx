import React, {FC, useCallback, useState} from "react";
import styled from "styled-components";
import Search from "components/search/Search";
import headerBackgroundUrl from "images/header_background.png";
import Button from "components/common/Button";
import NetflixLogo from "components/common/NetflixLogo";
import AddEditMovieModal from "components/modals/AddEditMovieModal/AddEditMovieModal";
import colors from "consts/colors";
import commonText from "consts/commonText";
import MovieShow from "components/movie/show/MovieShow";
import {IMovieProps} from "components/movie/movies";
import SearchButton from "components/header/SearchButton";

const HeaderContainer = styled.header`
    position: relative;
    height: fit-content;
    width: 100%;
    
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
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
    padding: 2rem 4rem 1rem;
    box-sizing: border-box;
`;

const addButtonStyle = {
    backgroundColor: colors.lightGray,
    opacity: 0.68,
    color: colors.red,
    fontSize: "1.25rem",
    fontWeight: 600
};

interface IHeaderProps {
    activeMovie?: IMovieProps,
    activateSearch(): void
}

const Header: FC<IHeaderProps> = ({activeMovie, activateSearch}) => {

    const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false)

    const handleOpenAddMovieModal = useCallback(() => setIsAddMovieModalOpen(true), [])
    const handleCloseAddMovieModal = useCallback(() => setIsAddMovieModalOpen(false), [])

    return (
        <HeaderContainer>
            <FirstRow>
                <NetflixLogo/>
                {activeMovie
                    ? <SearchButton onClick={activateSearch} />
                    : <Button
                        title={commonText.addMovie}
                        buttonStyle={addButtonStyle}
                        onClick={handleOpenAddMovieModal}
                    />}
            </FirstRow>
            {activeMovie
                ? <MovieShow activeMovie={activeMovie}/>
                : <>
                    <Background src={headerBackgroundUrl}/>
                    <Search/>
                    <AddEditMovieModal
                        isOpen={isAddMovieModalOpen}
                        onClose={handleCloseAddMovieModal}
                        onConfirm={() => {
                        }}
                    />
                </>
            }            </HeaderContainer>
    );
}

export default Header;

