import React, {FC} from "react";
import MovieCard from "./MovieCard";
import {IMovieCardData, IMoviesListProps} from "./list";
import styled from "styled-components";

const NoMovies = styled.h3`
    color: white;
`

const MoviesList: FC<IMoviesListProps> = (props) => {

    const {movies} = props;
    if (!movies || !movies.length) {
        return <NoMovies>No movies found</NoMovies>
    }

    return (
                <>
                    {movies.map((m: IMovieCardData) =>
                        <MovieCard
                            key={m.id}
                            data={m}
                        />
                    )}
                </>
    );
}

export default MoviesList;

