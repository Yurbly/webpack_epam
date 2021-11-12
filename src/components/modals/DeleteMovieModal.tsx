import React, {CSSProperties, FC} from "react";
import styled from "styled-components";
import ModalComponent from "components/common/Modal";
import colors from "consts/colors";
import genres from "consts/genres";
import ReactModal from "react-modal";
import Button from "../common/Button";

const Title = styled.div`
    font-size: 2.5rem;
    text-transform: uppercase;
    color: ${colors.white};
    letter-spacing: 1px;
    width: 100%;
`;

const Message = styled.div`
    color: ${colors.white};
    padding: 3rem 0 4rem;
    font-size: 1.5rem;
`;

const contentStyle: CSSProperties = {
    display: "flex",
    flexFlow: "column",
    padding: "5rem",
    alignItems: "flex-start",
    maxWidth: "45rem"
};

interface ICustomProps {
    onClose(): void,
    onConfirm(): void
}

const genresOptions = genres.slice();
genresOptions.unshift({id: "", name: "Select genre"});

const DeleteMovieModal: FC<ReactModal.Props & ICustomProps> = props => {

    const {isOpen, onClose, onConfirm} = props;

    return (
        <ModalComponent
            isOpen={isOpen}
            contentStyle={contentStyle}
            onClose={onClose}
        >
            <Title>Delete movie</Title>
            <Message>Are you sure you want to delete this movie?</Message>
            <Button
                title="Confirm"
                onClick={onConfirm}
                buttonStyle={{color: colors.white, background: colors.red}}
                containerStyle={{alignSelf: "flex-end"}}
            />
        </ModalComponent>
    )
}

export default DeleteMovieModal;
