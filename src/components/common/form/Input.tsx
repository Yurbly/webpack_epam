import React, {FC} from "react";
import styled from "styled-components";
import {formElement, Label} from "./common";

const InputComponent = styled.input<{ height: string }>`
    ${formElement};
    ${props => props.height && `height: ${props.height}`};
    ${props => props.height && `::placeholder {position: absolute; top: -calc(${props.height}/2)`};
`;

interface IProps {
    title: string,
    value?: string,
    placeholder: string,
    height?: string,
    onChange(value: string): void
}

const Input: FC<IProps> = props => {

    const {title, placeholder, height, value, onChange} = props;
    return (
        <Label>
            {title}
            <InputComponent
                placeholder={placeholder}
                height={height}
                value={value}
                onChange={({target}) => onChange(target.value)}
            />
        </Label>
    )
}

export default Input;
