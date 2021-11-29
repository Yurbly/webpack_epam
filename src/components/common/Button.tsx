import React, {FC} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import buttonTypes from "consts/buttonTypes";

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  position: relative;
  z-index: 2;
`;

const ButtonComponent = styled.button<{styleType?: string}>`
    width: 14.6rem;
    height: 3.6rem !important;
    border-radius: 4px;
    border: none;
    background: ${colors.red};
    color: ${colors.white};
    font-size: 1.25rem;
    cursor: pointer;
    ${props => (props.styleType === buttonTypes.cancel) && `
        background: transparent;
        color: ${colors.red};
        border: 2px solid ${colors.red};
    ` }
`;

interface IButtonProps {
    title: string,
    styleType?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    buttonStyle?: {},
    containerStyle?: {}
}


const Button: FC<IButtonProps> = props => {

    const {title, onClick, buttonStyle, containerStyle, styleType} = props;

    return (
        <ButtonContainer style={containerStyle}>
                <ButtonComponent
                    style={buttonStyle}
                    onClick={onClick}
                    styleType={styleType}
                >
                    {title}
                </ButtonComponent>
        </ButtonContainer>
    )
}

export default Button;
