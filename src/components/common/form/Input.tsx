import React, {FC} from "react";
import styled from "styled-components";
import {formElement, Label} from "./common";

const InputComponent = styled.input<{ height: string }>`
    ${formElement};
    ${props => props.height && `height: ${props.height}`};
    ${props => props.height && `::placeholder {position: absolute; top: -calc(${props.height}/2)`};
`;

interface IProps {
    title: string;
    placeholder: string;
    height?: string;
}

const Input: FC<IProps> = props => {

    const {title, placeholder, height} = props;
    return (
        <Label>
            {title}
            <InputComponent placeholder={placeholder} height={height}/>
        </Label>
    )
}

export default Input;
