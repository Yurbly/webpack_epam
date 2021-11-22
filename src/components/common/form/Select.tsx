import React, {FC, useCallback} from "react";
import styled from "styled-components";
//@ts-ignore
import Select, {StylesConfig, CSSObjectWithLabel} from "react-select"
import colors from "consts/colors";

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

export interface IOption {
    label: string;
    value: string;
}

type IsMulti = false;

interface ISelectProps {
    title: string,
    options: Array<IOption>,
    isMulti?: boolean,
    value: Array<string> | string,
    onChange(value: Array<string> | string): void
}

interface IGetSelectedProps {
    options: Array<IOption>,
    value: string | string[],
    isMulti: boolean
}

const customStyles: StylesConfig<IOption, IsMulti> = {
    option: (provided: CSSObjectWithLabel) => ({
        ...provided,
        color: colors.white,
        background: colors.gray,
        padding: 20,
    }),
    control: () => ({
        width: "100%",
        background: colors.gray,
        position: "relative",
        padding: "0.75rem 0",
        borderRadius: "4px"
    }),
    container: (provided: CSSObjectWithLabel) => ({
        ...provided,
        width: "100%",
        margin: "1rem 0 0",
    }),
    menuList: (provided: CSSObjectWithLabel) => ({
        ...provided,
        padding: 0,
        borderRadius: "4px"
    }),
    indicatorsContainer: (provided: CSSObjectWithLabel) => ({
        ...provided,
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)"
    }),
    indicatorSeparator: () => ({display: "none"}),
    dropdownIndicator: (provided: CSSObjectWithLabel) => ({...provided, color: colors.red}),
    multiValue: (provided: CSSObjectWithLabel) => ({...provided, background: colors.lightGray,}),
    multiValueLabel: (provided: CSSObjectWithLabel) => ({...provided, color: colors.white})
}

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
