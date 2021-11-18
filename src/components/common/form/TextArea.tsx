import React, {FC} from "react";
import styled from "styled-components";
import {formElement, Label} from "./common";

const TextComponent = styled.textarea<{ height: string }>`
    ${formElement};
    ${props => props.height && `height: ${props.height}`};
    ${props => props.height && `::placeholder {position: absolute; top: -calc(${props.height}/2)`};
`;

interface IProps {
    title: string,
    value?: string,
    placeholder: string,
    height?: string,
    onChange(value: string): void,
    maxLength?: number
}

const TextArea: FC<IProps> = props => {

    const {title, placeholder, height, value, onChange, ...other} = props;
    return (
        <Label>
            {title}
            <TextComponent
                placeholder={placeholder}
                height={height}
                value={value}
                onChange={({target}) => onChange(target.value)}
                {...other}
            />
        </Label>
    )
}

export default TextArea;
