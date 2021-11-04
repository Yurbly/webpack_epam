import React from "react";
import styled from "styled-components";
import colors from "consts/colors";

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  align-items: flex-start;
  position: relative;
  z-index: 2;
`;

const ButtonComponent = styled.button`
    width: 14.6rem;
    height: 3.6rem !important;
    border-radius: 4px;
    border: none;
    background: ${colors.red};
    color: ${colors.white};
    font-size: 1.25rem;
    cursor: pointer;
`;

const Button = (props) => {

    const {title, onClick, buttonStyle, containerStyle} = props;

    return (
        <ButtonContainer style={containerStyle}>
                <ButtonComponent style={buttonStyle} onClick={onClick}>{title}</ButtonComponent>
        </ButtonContainer>
    )
}

export default Button;
