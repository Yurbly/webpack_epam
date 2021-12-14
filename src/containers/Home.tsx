import React, {FC, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import Header from "components/header/Header";
import Tabs from "components/tabs/Tabs";
import MoviesList from "components/movie/list/MoviesList";
import ErrorBoundary from "components/common/ErrorBoundary";
import WithFooter from "components/common/WithFooter";
import genres from "consts/genres";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {getMoviesRequest} from "thunks/index";
import {getMoviesData, getMoviesTabFilter} from "store/movies/actions";
import {useThrottle} from "utils/funcUtils";
import SortSelect from "containers/SortSelect";

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

    const [activeMovie, setActiveMovie] = useState(null);

    const dispatch = useAppDispatch();
    const activeTabId = useAppSelector(getMoviesTabFilter);
    const moviesState = useAppSelector(getMoviesData)

    useEffect(() => {
        //@ts-ignore
        dispatch(getMoviesRequest({moviesState}))
    }, []);

    const onSearchThrottled = useThrottle(searchText => {
        //@ts-ignore
        dispatch(getMoviesRequest({moviesState, filters: {searchText}}));
    }, 300);

    const onSearch = useCallback(onSearchThrottled , [onSearchThrottled, moviesState])

    return (
        <WithFooter>
            <HomeContainer>
                <Header
                    activeMovie={activeMovie}
                    activateSearch={() => setActiveMovie(null)}
                    onSearch={onSearch}
                />
                <ContentContainer>
                    <Tabs
                        tabs={genres}
                        activeTabId={activeTabId}
                        //@ts-ignore
                        onTabChange={tabId => dispatch(getMoviesRequest({moviesState, filters: {tab: tabId}}))}
                        controls={
                            <SortSelect
                        //@ts-ignore
                                onChange={value => dispatch(getMoviesRequest({moviesState, sortBy: value}))}
                            />
                        }
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
