import React, {FC, useState} from "react";
import MovieCard from "./MovieCard";
import {IMovieCardData, IMoviesListProps} from "./list";
import styled from "styled-components";
import DeleteMovieModal from "components/modals/DeleteMovieModal";
import AddEditMovieModal from "components/modals/AddEditMovieModal/AddEditMovieModal";

const NoMovies = styled.h3`
    color: white;
`

const MoviesList: FC<IMoviesListProps> = (props) => {

    const [deletedMovieId, setDeletedMovieId] = useState(null);
    const [editedMovieId, setEditedMovieId] = useState(null);

    const {movies} = props;
    if (!movies || !movies.length) {
        return <NoMovies>No movies found</NoMovies>
    }

    const editedMovieData = movies.find(m => m.id === editedMovieId);

    return (
                <>
                    {movies.map((m: IMovieCardData) =>
                        <MovieCard
                            key={m.id}
                            data={m}
                            openDeleteModal={() => setDeletedMovieId(m.id)}
                            openEditModal={() => setEditedMovieId(m.id)}
                        />
                    )}
                    <DeleteMovieModal
                        isOpen={!!deletedMovieId}
                        onClose={() => setDeletedMovieId(null)}
                        onConfirm={() => console.log("deleted", deletedMovieId)}
                    />
                    <AddEditMovieModal
                        isOpen={!!editedMovieId}
                        onClose={() => setEditedMovieId(null)}
                        onConfirm={() => console.log("edited", editedMovieId)}
                        data={editedMovieData}
                    />
                </>
    );
}

export default MoviesList;

