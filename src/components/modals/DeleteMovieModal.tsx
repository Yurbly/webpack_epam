import React, {CSSProperties, FC} from "react";
import styled from "styled-components";
import ModalComponent from "components/common/Modal";
import colors from "consts/colors";
import ReactModal from "react-modal";
import Button from "components/common/Button";
import commonText from "consts/commonText";

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

interface ICustomModalProps {
    onClose(): void,
    onConfirm(): void
}

const DeleteMovieModal: FC<ReactModal.Props & ICustomModalProps> = props => {

    const {isOpen, onClose, onConfirm} = props;

    return (
        <ModalComponent
            isOpen={isOpen}
            contentStyle={contentStyle}
            onClose={onClose}
        >
            <Title>{commonText.deleteModal.title}</Title>
            <Message>{commonText.deleteModal.message}</Message>
            <Button
                title={commonText.common.confirm}
                onClick={onConfirm}
                buttonStyle={{color: colors.white, background: colors.red}}
                containerStyle={{alignSelf: "flex-end"}}
            />
        </ModalComponent>
    )
}

export default DeleteMovieModal;
