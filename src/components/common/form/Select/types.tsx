import {CSSProperties} from "react";

export interface IOption {
    label: string;
    value: string;
}

export interface ISelectCustomStyles {
    option?: CSSProperties,
    control?: CSSProperties,
    container?: CSSProperties,
    menuList?: CSSProperties,
    indicatorsContainer?: CSSProperties,
    indicatorSeparator?: CSSProperties,
    dropdownIndicator?: CSSProperties,
    multiValue?: CSSProperties,
    multiValueLabel?: CSSProperties,
    singleValue?: CSSProperties
}

export interface ISelectProps {
    title?: string,
    options: Array<IOption>,
    isMulti?: boolean,
    value: Array<string> | string,
    onChange(value: Array<string> | string): void,
    styles?: ISelectCustomStyles,
    withoutTitle?: boolean
}

export interface IGetSelectedProps {
    options: Array<IOption>,
    value: string | string[],
    isMulti: boolean
}
