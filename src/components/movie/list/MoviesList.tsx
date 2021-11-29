import React, {FC, useCallback, useState} from "react";
import MovieCard from "./MovieCard";
import {IMovieCardData, IMoviesListProps} from "./list";
import styled from "styled-components";
import DeleteMovieModal from "components/modals/DeleteMovieModal";
import AddEditMovieModal from "components/modals/AddEditMovieModal/AddEditMovieModal";
import errorMessages from "consts/errorMessages";

const NoMovies = styled.h3`
    color: white;
`

const MoviesList: FC<IMoviesListProps> = (props) => {

    const [deletedMovieId, setDeletedMovieId] = useState(null);
    const [editedMovieId, setEditedMovieId] = useState(null);


    const handleDeleteModalClose = useCallback(() => setDeletedMovieId(null), []);
    const handleEditModalClose = useCallback(() => setEditedMovieId(null), []);

    const {movies} = props;
    if (!movies || !movies.length) {
        return <NoMovies>{errorMessages.noMoviesFound}</NoMovies>
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
                        onClose={handleDeleteModalClose}
                        onConfirm={handleDeleteModalClose}
                    />
                    <AddEditMovieModal
                        isOpen={!!editedMovieId}
                        onClose={handleEditModalClose}
                        onConfirm={handleEditModalClose}
                        data={editedMovieData}
                    />
                </>
    );
}

export default MoviesList;

