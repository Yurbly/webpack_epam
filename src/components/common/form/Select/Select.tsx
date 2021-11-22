import React, {FC, useCallback} from "react";
import styled from "styled-components";
//@ts-ignore
import Select from "react-select"
import colors from "consts/colors";
import {IGetSelectedProps, IOption, ISelectProps} from "./types";
import {customStyles} from "./reactSelectCustomStyles";

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

const getSelected = ({options, value, isMulti} : IGetSelectedProps) => {
    if (isMulti && value instanceof Array) {
        const valueLowerCased = value.map((v: string) => v.toLowerCase());
        return options.filter(o => valueLowerCased.includes(o.value))
    }
    return options.find(o => (value as string).toLowerCase() === o.value);
}

const SelectComponent: FC<ISelectProps> = props => {

    const {title, options, isMulti, value, onChange} = props;

    const handleMultipleChange = useCallback((options: Array<IOption>) => {
        const mappedOptions = options.map(option => option.value);
        onChange(mappedOptions);
    }, []);

    const handleChange = isMulti
        ? handleMultipleChange
        : ((option: IOption) => onChange(option.value));

    const selected: Array<IOption> | IOption = getSelected({options, value, isMulti});

    return (
        <Label>
            {title}
            <Select
                styles={customStyles}
                options={options}
                value={selected}
                onChange={handleChange}
                isMulti={isMulti}
            />
        </Label>
    )
}

export default SelectComponent;
