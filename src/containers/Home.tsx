import React, {FC, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import Header from "components/header/Header";
import Tabs from "components/tabs/Tabs";
import MoviesList from "components/movie/list/MoviesList";
import ErrorBoundary from "components/common/ErrorBoundary";
import WithFooter from "components/common/WithFooter";

const tabs = [
    {
        id: "all",
        name: "all"
    },
    {
        id: "documentary",
        name: "documentary"
    },
    {
        id: "comedy",
        name: "comedy"
    },
    {
        id: "horror",
        name: "horror"
    },
    {
        id: "crime",
        name: "crime"
    }
];


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

const Main: FC = () => {

    const [activeTabId, setActiveTabId] = useState((tabs[0] && tabs[0].id) || "");
    const [movies, setMovies] = useState([]);

    const getMovies = useCallback(async () => {
        const tabData = tabs.find(t => t.id === activeTabId);

        const backendUrl = new URL("http://localhost:4000/movies");

        const isFiltered = activeTabId !== tabs[0].id;
        if (isFiltered) {
            backendUrl.searchParams.append("filter", tabData.name);
        }

        const response = await fetch(backendUrl.toString());
        const result = await response.json();

        setMovies(result.data);
    }, [activeTabId]);

    useEffect(() => {
        getMovies();
    }, [activeTabId]);

    return (
        <WithFooter>
            <HomeContainer>
                <Header/>
                <ContentContainer>
                    <Tabs
                        tabs={tabs}
                        activeTabId={activeTabId}
                        onTabChange={setActiveTabId}
                    />
                    <ErrorBoundary>
                        <MoviesContainer>
                            <MoviesList movies={movies}/>
                        </MoviesContainer>
                    </ErrorBoundary>
                </ContentContainer>
            </HomeContainer>
        </WithFooter>
    );
}

export default Main;

