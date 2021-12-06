import React, {FC, useCallback} from "react";
import movieMockImgUrl from "images/movie-mock.png";
import {IMovieProps} from "../movies";
import {
    ColoredText,
    Genres,
    InfoContainer,
    MovieContainer,
    Overview,
    Poster,
    Rating,
    Title,
    TitleRatingContainer,
    YearRuntimeContainer
} from "./styled";
import {useMinutesToHHmm} from "utils/dateUtils";

const MovieShow: FC<{activeMovie: IMovieProps}> = props => {
    const {activeMovie} = props;

    const {
        title,
        genres,
        poster_path,
        release_date,
        rating,
        runtime,
        overview
    } = activeMovie;

    const date = new Date(release_date);

    const genresString = genres.join(", ");

    const onError = useCallback((e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = movieMockImgUrl;
    }, []);

    const posterSrc = poster_path || movieMockImgUrl;

    const runtimeText = useMinutesToHHmm(Number(runtime), [activeMovie]);

    return (
        <MovieContainer>
            <Poster
                src={posterSrc}
                onError={onError}
                alt="poster"
            />
            <InfoContainer>
            <TitleRatingContainer>
                <Title>{title}</Title>
                {rating && <Rating>{rating}</Rating>}
            </TitleRatingContainer>
            <Genres>{genresString}</Genres>
                <YearRuntimeContainer>
                    <ColoredText>{date.getFullYear()}</ColoredText>
                    <ColoredText>{runtimeText}</ColoredText>
                </YearRuntimeContainer>
            <Overview>{overview}</Overview>
            </InfoContainer>
        </MovieContainer>
    )
}

export default MovieShow;
