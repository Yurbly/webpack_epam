import React, {CSSProperties, FC, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
//@ts-ignore
import moment from "moment";
import ModalComponent from "components/common/Modal";
import colors from "consts/colors";
import Input from "components/common/form/Input";
import SelectComponent, {IOption} from "components/common/form/Select";
import genres from "consts/genres";
import DatePickerComponent from "components/common/form/Datepicker";
import Button from "components/common/Button";
import buttonTypes from "consts/buttonTypes";
import TextArea from "components/common/form/TextArea";

const Title = styled.div`
    font-size: 2.5rem;
    text-transform: uppercase;
    color: ${colors.white};
    letter-spacing: 1px;
    width: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column;
    width: 100%;
    margin: 1rem 0;
`;

const ColumnsContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 1rem 0;
    
    div:last-child {
        margin-right: 0;
    }
`;

const Column = styled.div<{ maxWidth: string }>`
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: ${props => props.maxWidth || "60%;"};
    margin: 0 2rem 0 0;
`;

const Controls = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    > div:first-child {
        margin: 0 1rem 0 0;
    }
`;

const contentStyle: CSSProperties = {
    display: "flex",
    flexFlow: "column",
    padding: "3rem"
};

interface IMovieProps {
    title: string,
    poster_path?: string,
    genres?: string | Array<string>,
    release_date?: string,
    rating?: number | "",
    overview?: string,
    runtime?: number | ""
}

const defaultMovieData: IMovieProps = {
    title: "",
    poster_path: "",
    genres: "",
    release_date: moment().format("YYYY-DD-MM"),
    rating: "",
    overview: "",
    runtime: ""
};

interface ICustomProps {
    onClose(): void,
    data?: IMovieProps,
    onConfirm(): void
}

const genresOptions: Array<IOption> = [];
genres.forEach(g => {
    if (g.id === "all") {
        return
    }
    genresOptions.push({value: g.id, label: g.name});
});

const AddEditMovieModal: FC<ReactModal.Props & ICustomProps> = props => {

    const {isOpen, onClose, data} = props;
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

    return (
        <ModalComponent
            isOpen={isOpen}
            contentStyle={contentStyle}
            onClose={onClose}
        >
            <Title>Add movie</Title>
            <Form>
                <ColumnsContainer>
                    <Column maxWidth="60%">
                        <Input
                            title={"Title"}
                            placeholder="The Matrix"
                            value={title}
                            onChange={value => onInputFieldChange("title", value)}
                        />
                        <Input
                            title={"Movie url"}
                            placeholder="http://"
                            value={poster_path}
                            onChange={value => onInputFieldChange("poster_path", value)}
                        />
                        <SelectComponent
                            title="Genre"
                            options={genresOptions}
                            value={movieData.genres}
                            onChange={onGenreChange}
                            isMulti
                        />
                    </Column>
                    <Column maxWidth="40%">
                        <DatePickerComponent
                            title={"Release date"}
                            placeholder="Select Date"
                            date={release_date}
                            onChange={value => onInputFieldChange("release_date", value)}
                        />
                        <Input
                            title={"Rating"}
                            placeholder="7.8"
                            value={rating}
                            onChange={value => onInputFieldChange("rating", value)}
                        />
                        <Input
                            title={"Runtime"}
                            placeholder="minutes"
                            value={runtime}
                            onChange={value => onInputFieldChange("runtime", value)}
                        />
                    </Column>
                </ColumnsContainer>
                <TextArea
                    title="Overview"
                    placeholder="More description"
                    height="12.5rem"
                    value={overview}
                    onChange={value => onInputFieldChange("overview", value)}
                />
            </Form>
            <Controls>
                <Button
                    title={"RESET"}
                    styleType={buttonTypes.cancel}
                    onClick={useCallback(() => setMovieData(defaultMovieData), [])}
                />
                <Button title={"SUBMIT"} onClick={() => console.log("submit")}/>
            </Controls>
        </ModalComponent>
    )
}

export default AddEditMovieModal;
