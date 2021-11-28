import React, {FC, SyntheticEvent, useCallback, useMemo, useState} from "react";
import styled from "styled-components";
import DeleteMovieModal from "components/modals/DeleteMovieModal";
import AddEditMovieModal from "components/modals/AddEditMovieModal/AddEditMovieModal";
import errorMessages from "consts/errorMessages";
import MovieCard from "./MovieCard";
import {IMovieProps, IMoviesListProps} from "../movies";
import {useAppSelector} from "hooks/reduxHooks";
import {getMovies} from "store/movies/actions";

const NoMovies = styled.h3`
    color: white;
`

const MoviesList: FC<IMoviesListProps> = (props) => {

    const {setActiveMovie} = props;

    const movies = useAppSelector(getMovies);

    const [deletedMovieId, setDeletedMovieId] = useState(null);

    const [editedMovieId, setEditedMovieId] = useState(null);
    const editedMovieData = useMemo(() => movies.find(m => m.id === editedMovieId), [editedMovieId]);


    const onCardClick = useCallback((id: string) => {
        const clickedMovie = movies.find(m => m.id === id);
        if (!clickedMovie) {
            return
        }
        setActiveMovie(clickedMovie);
    },[movies, setActiveMovie])

    const openEditModal = useCallback((e: SyntheticEvent, id: string) => {
        e.stopPropagation();
        setEditedMovieId(id);
    }, [])

    const openDeleteModal = useCallback((e: SyntheticEvent, id: string) => {
        e.stopPropagation();
        setDeletedMovieId(id);
    }, [])

    if (!movies || !movies.length) {
        return <NoMovies>{errorMessages.noMoviesFound}</NoMovies>
    }

    return (
                <>
                    {movies.map((m: IMovieProps) =>
                        <MovieCard
                            key={m.id}
                            data={m}
                            openEditModal={e => openEditModal(e, m.id)}
                            openDeleteModal={e => openDeleteModal(e, m.id)}
                            onClick={() => onCardClick(m.id)}
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
