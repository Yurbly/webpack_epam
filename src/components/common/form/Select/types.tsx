export interface IOption {
    label: string;
    value: string;
}

export interface ISelectProps {
    title: string,
    options: Array<IOption>,
    isMulti?: boolean,
    value: Array<string> | string,
    onChange(value: Array<string> | string): void
}

export interface IGetSelectedProps {
    options: Array<IOption>,
    value: string | string[],
    isMulti: boolean
}
