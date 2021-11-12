import React, {FC, useCallback} from "react";
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
    title: string,
    placeholder: string,
    options: Array<
        {
            id: string,
            name: string,
        }
    >,
    multiple?: boolean,
    value: Array<string> | string,
    onChange(value: Array<string> | string): void
}

const Select: FC<IProps> = props => {

    const {title, options, multiple, value, onChange, placeholder} = props;

    const handleMultipleChange = useCallback((e: any) => {
        const updatedOptions = [...e.target.options]
            .filter((option: any) => option.selected)
            .map((option: any) => option.value);
        onChange(updatedOptions);
    }, []);

    const handleChange = multiple
        ? handleMultipleChange
        : (({target}: {target: any}) => onChange(target.value));

    return (
        <Label>
            {title}
            <SelectComponent
                multiple={multiple}
                value={value}
                onChange={handleChange}
            >
                <option value="">{placeholder}</option>
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
