import React, {CSSProperties, FC, useCallback, useEffect, useState} from "react";
//@ts-ignore
import moment from "moment";
import ModalComponent from "components/common/Modal";
import Input from "components/common/form/Input";
import SelectComponent from "components/common/form/Select/Select";
import {IOption} from "components/common/form/Select/types";
import DatePickerComponent from "components/common/form/Datepicker";
import Button from "components/common/Button";
import TextArea from "components/common/form/TextArea";
import genres from "consts/genres";
import buttonTypes from "consts/buttonTypes";
import {dateTemplate} from "consts/dateTemplate";
import {Column, ColumnsContainer, Controls, Form, Title} from "./styled";
import {ICustomModalProps} from "./types";
import {IMovieProps} from "components/movie/movies";
import commonText from "consts/commonText";

const contentStyle: CSSProperties = {
    display: "flex",
    flexFlow: "column",
    padding: "3rem"
};

const defaultMovieData: IMovieProps = {
    id: "",
    title: "",
    poster_path: "",
    genres: [],
    release_date: moment().format(dateTemplate),
    rating: "",
    overview: "",
    runtime: ""
};

const genresOptions: Array<IOption> = [];
genres.forEach(g => {
    if (g.id === "all") {
        return
    }
    genresOptions.push({value: g.id, label: g.name});
});

const AddEditMovieModal: FC<ReactModal.Props & ICustomModalProps> = props => {

    const {isOpen, onClose, data, onConfirm} = props;
    const [movieData, setMovieData] = useState(data || defaultMovieData)

    useEffect(() => {
        if (isOpen && data) {
            setMovieData(data);
        }
    }, [isOpen])

    const {
        title,
        poster_path,
        release_date,
        rating,
        overview,
        runtime
    } = movieData;

    const onInputFieldChange = (field: string, value: string | number | Array<string>) => {
        setMovieData((data: IMovieProps)  => ({...data, [field]: value}))
    }

    const onGenreChange = (value: Array<string>) => {
        setMovieData((data: IMovieProps) => ({...data, genres: value}))
    };

    const {titles, placeholders} = commonText.addEditModal;

    const modalTitle = data ? commonText.addEditModal.editMovie : commonText.addEditModal.addMovie;

    return (
        <ModalComponent
            isOpen={isOpen}
            contentStyle={contentStyle}
            onClose={onClose}
        >
            <Title>{modalTitle}</Title>
            <Form>
                <ColumnsContainer>
                    <Column maxWidth="60%">
                        <Input
                            title={titles.title}
                            placeholder={placeholders.title}
                            value={title}
                            onChange={value => onInputFieldChange("title", value)}
                        />
                        <Input
                            title={titles.movieUrl}
                            placeholder={placeholders.movieUrl}
                            value={poster_path}
                            onChange={value => onInputFieldChange("poster_path", value)}
                        />
                        <SelectComponent
                            title={titles.genre}
                            options={genresOptions}
                            value={movieData.genres}
                            onChange={onGenreChange}
                            isMulti
                        />
                    </Column>
                    <Column maxWidth="40%">
                        <DatePickerComponent
                            title={titles.releaseDate}
                            date={release_date}
                            onChange={value => onInputFieldChange("release_date", value)}
                        />
                        <Input
                            title={titles.rating}
                            placeholder={placeholders.rating}
                            value={rating}
                            onChange={value => onInputFieldChange("rating", value)}
                        />
                        <Input
                            title={titles.runtime}
                            placeholder={placeholders.runtime}
                            value={runtime}
                            onChange={value => onInputFieldChange("runtime", value)}
                        />
                    </Column>
                </ColumnsContainer>
                <TextArea
                    title={titles.overview}
                    placeholder={placeholders.overview}
                    height="12.5rem"
                    value={overview}
                    onChange={(value: string) => onInputFieldChange("overview", value)}
                />
            </Form>
            <Controls>
                <Button
                    title={commonText.buttonTitles.reset}
                    styleType={buttonTypes.cancel}
                    onClick={useCallback(() => setMovieData(defaultMovieData), [])}
                />
                <Button title={commonText.buttonTitles.submit} onClick={onConfirm}/>
            </Controls>
        </ModalComponent>
    )
}

export default AddEditMovieModal;
