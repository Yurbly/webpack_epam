import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import Header from "components/header/Header";
import Tabs from "components/tabs/Tabs";
import MoviesList from "components/movie/list/MoviesList";
import ErrorBoundary from "components/common/ErrorBoundary";
import WithFooter from "components/common/WithFooter";
import genres from "consts/genres";
import {useAppDispatch} from "hooks/reduxHooks";
import {getMoviesRequest} from "thunks/index";

const HomeContainer = styled.div`   
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: content-box;
    width: 78.8rem;
`;

const ContentContainer = styled.div`
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.black};
    width: 100%;
    box-sizing: border-box;
    
    flex-flow: column;
    background: #232323;
`;

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

const Home: FC = () => {

    const [activeTabId, setActiveTabId] = useState((genres[0] && genres[0].id) || "");
    const [activeMovie, setActiveMovie] = useState(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(getMoviesRequest())
    }, [activeTabId]);

    return (
        <WithFooter>
            <HomeContainer>
                <Header
                    activeMovie={activeMovie}
                    activateSearch={() => setActiveMovie(null)}
                />
                <ContentContainer>
                    <Tabs
                        tabs={genres}
                        activeTabId={activeTabId}
                        onTabChange={setActiveTabId}
                    />
                    <ErrorBoundary>
                        <MoviesContainer>
                            <MoviesList setActiveMovie={setActiveMovie} />
                        </MoviesContainer>
                    </ErrorBoundary>
                </ContentContainer>
            </HomeContainer>
        </WithFooter>
    );
}

export default Home;
