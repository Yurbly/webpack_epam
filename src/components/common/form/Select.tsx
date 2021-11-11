import React, {FC} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import {formElement} from "./common";

const SelectComponent = styled.select`
    ${formElement}
`;

const Label = styled.label`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    
    color: ${colors.red};
    text-transform: uppercase;
    line-height: 1.25rem;
    
    width: 100%;
    margin: 0 0 2rem
`;

interface IProps {
    title: string;
    options: Array<
        {
            id: string;
            name: string;
        }
    >
}

const Select: FC<IProps> = props => {

    const {title, options} = props;

    return (
        <Label>
            {title}
            <SelectComponent>
                {
                    options.map(o =>
                        <option key={o.id} value={o.id}>{o.name}</option>
                    )
                }
            </SelectComponent>
        </Label>
    )
}

export default Select;
