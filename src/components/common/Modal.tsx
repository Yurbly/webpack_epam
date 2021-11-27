import React, {CSSProperties, FC} from "react";
import Modal from "react-modal";
import colors from "consts/colors";
import Cross from "./icons/Cross";
import styled from "styled-components";

const defaultStyle: {content: CSSProperties, overlay: CSSProperties} = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: colors.black,
        zIndex: 4,
        border: "none",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        position: "relative",
        maxWidth: "100vw",
        maxHeight: "80vh",
        width: "50%",
        padding: "2rem"
    },
    overlay: {
        background: colors.transparentBlack,
        zIndex: 3
    }
};

export const initModal = () => {
    Modal.setAppElement("root");
    Modal.defaultStyles = {
        content: {...Modal.defaultStyles.content, ...defaultStyle.content},
        overlay: {...Modal.defaultStyles.overlay, ...defaultStyle.overlay}
    }
};

interface ICustomProps {
    contentStyle?: CSSProperties,
    overlayStyle?: CSSProperties,

    onClose(): void,

    crossTopRem?: number,
    crossRightRem?: number,
    crossSize?: string
}

interface ICrossProps {
    size?: string;
    topRem?: number;
    rightRem?: number;
}

interface IDefaultStyles {
    content: CSSProperties;
    overlay: CSSProperties;
}

const CrossContainer = styled.div<ICrossProps>`
    position: absolute;
    cursor: pointer;
    top: ${props => props.topRem ? `${props.topRem}rem` : "2rem"};
      right: ${props => props.rightRem ? `${props.rightRem}rem` : "2rem"};
      width: ${props => props.size || "2rem"};
      height: ${props => props.size || "2rem"};
`;

const ModalComponent: FC<ReactModal.Props & ICustomProps> = props => {

    const {contentStyle, overlayStyle, onClose, crossTopRem, crossRightRem, crossSize} = props;

    const mergedStyle: IDefaultStyles = {
        content: contentStyle,
        overlay: overlayStyle
    };

    return (
        <Modal style={mergedStyle} {...props}>
            <CrossContainer
                topRem={crossTopRem}
                rightRem={crossRightRem}
                onClick={onClose}
            >
                <Cross
                    onClick={onClose}
                    width={crossSize}
                    height={crossSize}
                />
            </CrossContainer>
            {props.children}
        </Modal>
    )
}

export default ModalComponent;
