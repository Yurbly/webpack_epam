import React, {FC} from "react";
import styled from "styled-components";
import {formElement, IInputProps, Label} from "./common";

const TextComponent = styled.textarea<{ height: string }>`
    ${formElement};
    ${props => props.height && `height: ${props.height}`};
    ${props => props.height && `::placeholder {position: absolute; top: -calc(${props.height}/2)`};
`;

const TextArea: FC<IInputProps> = props => {

    const {title, placeholder, height, value, onChange} = props;
    return (
        <Label>
            {title}
            <TextComponent
                placeholder={placeholder}
                height={height}
                value={value}
                onChange={({target}) => onChange(target.value)}
            />
        </Label>
    )
}

export default TextArea;
