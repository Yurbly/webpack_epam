import React, {CSSProperties, FC} from "react";
import styled from "styled-components";
import ModalComponent from "components/common/Modal";
import colors from "consts/colors";
import Input from "components/common/form/Input";
import Select from "components/common/form/Select";
import genres from "consts/genres";
import DatePickerComponent from "../common/form/Datepicker";

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

const contentStyle: CSSProperties = {
    display: "flex",
    flexFlow: "column",
    padding: "3rem"
};

interface ICustomProps {
    onClose(): void
}

const genresOptions = genres.slice();
genresOptions.unshift({id: "", name: "Select genre"});

const AddMovieModal: FC<ReactModal.Props & ICustomProps> = props => {

    const {isOpen, onClose} = props;

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
                        />
                        <Input
                            title={"Movie url"}
                            placeholder="http://"
                        />
                        <Select
                            title="Genre"
                            options={genresOptions}
                        />
                    </Column>
                    <Column maxWidth="40%">
                        <DatePickerComponent
                            title={"Release date"}
                            placeholder="Select Date"
                        />
                        <Input
                            title={"Rating"}
                            placeholder="7.8"
                        />
                        <Input
                            title={"Runtime"}
                            placeholder="minutes"
                        />
                    </Column>
                </ColumnsContainer>
                <Input
                    title="Overview"
                    placeholder="More description"
                    height="12.5rem"
                />
            </Form>
        </ModalComponent>
    )
}

export default AddMovieModal;
