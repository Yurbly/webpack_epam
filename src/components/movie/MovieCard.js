import React from "react";
import styled from "styled-components";
import colors from "consts/colors";

const MovieCardContainer = styled.div`
  padding: 0 0 3rem;
  display: flex;
  flex-flow: column;
  width: 30%;
`;

const Poster = styled.img`
  height: 33rem;
`;

const TitleYearContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 0 0;
    width: 100%;
`;

const Title = styled.div`
  color: ${colors.white};
  font-size: 1.1rem;
`;

const Year = styled.div`
    font-size: 0.9rem;
    border: 1px solid ${colors.gray};
    color: ${colors.white};
    padding: 0.3rem 1rem;
    
    border-radius: 4px;
`;

const Genres = styled.div`
    font-size: 0.9rem;
    color: ${colors.white};
    padding: 0.7rem 0 0;
`;

const MovieCard = props => {

    const {data} = props;
    const {title, genres, poster_path, release_date} = data;

    const date = new Date(release_date);
    const genresString = genres.join(", ");

    return (
        <MovieCardContainer className="search-container">
                <Poster
                    src={poster_path}
                    alt="poster"
                />
            <TitleYearContainer>
                <Title>{title}</Title>
                <Year>{date.getFullYear()}</Year>
            </TitleYearContainer>
            <Genres>{genresString}</Genres>
        </MovieCardContainer>
    )
}

export default MovieCard;
