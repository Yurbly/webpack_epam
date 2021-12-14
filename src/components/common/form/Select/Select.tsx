import React, {FC, useCallback} from "react";
import styled from "styled-components";
//@ts-ignore
import Select from "react-select"
import colors from "consts/colors";
import {IGetSelectedProps, IOption, ISelectProps} from "./types";
import {getCustomStyles} from "./reactSelectCustomStyles";

const Label = styled.label<{withoutTitle?: boolean}>`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    
    color: ${colors.red};
    text-transform: uppercase;
    line-height: 1.25rem;
    
    width: 100%;
    margin: 0 0 2rem;
    ${props => props.withoutTitle && `
        margin: 0;
    `}
`;

const getSelected = ({options, value, isMulti} : IGetSelectedProps) => {
    if (isMulti && value instanceof Array) {
        const valueLowerCased = value.map((v: string) => v.toLowerCase());
        return options.filter(o => valueLowerCased.includes(o.value))
    }
    return options.find(o => (value as string).toLowerCase() === o.value);
}

const SelectComponent: FC<ISelectProps> = props => {

    const {title, options, isMulti, value, onChange, styles, withoutTitle} = props;

    const handleMultipleChange = useCallback((options: Array<IOption>) => {
        const mappedOptions = options.map(option => option.value);
        onChange(mappedOptions);
    }, [onChange]);

    const handleSingleChange = useCallback(((option: IOption) => onChange(option.value)), [onChange])

    const handleChange = isMulti ? handleMultipleChange : handleSingleChange;

    const selected: Array<IOption> | IOption = getSelected({options, value, isMulti});

    return (
        <Label withoutTitle={withoutTitle}>
            {title}
            <Select
                styles={getCustomStyles(styles)}
                options={options}
                value={selected}
                onChange={handleChange}
                isMulti={isMulti}
            />
        </Label>
    )
}

export default SelectComponent;
