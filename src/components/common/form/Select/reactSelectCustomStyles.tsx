//@ts-ignore
import {CSSObjectWithLabel, StylesConfig} from "react-select";
import {IOption, ISelectCustomStyles, IsMulti} from "./types";
import colors from "consts/colors";

export const getCustomStyles = (styles: ISelectCustomStyles = {}): StylesConfig<IOption, IsMulti> => {
    const {
        option = {},
        control = {},
        container = {},
        menuList = {},
        indicatorsContainer = {},
        indicatorSeparator = {},
        dropdownIndicator = {},
        multiValue = {},
        multiValueLabel = {},
        singleValue = {}
    } = styles;

    return ({
        option: (provided: CSSObjectWithLabel) => ({
            ...provided,
            color: colors.white,
            background: colors.gray,
            padding: 20,
            ...option
        }),
        control: () => ({
            width: "100%",
            background: colors.gray,
            position: "relative",
            padding: "0.75rem 0",
            borderRadius: "4px",
            ...control
        }),
        container: (provided: CSSObjectWithLabel) => ({
            ...provided,
            width: "100%",
            margin: "1rem 0 0",
            ...container
        }),
        menuList: (provided: CSSObjectWithLabel) => ({
            ...provided,
            padding: 0,
            borderRadius: "4px",
            ...menuList
        }),
        indicatorsContainer: (provided: CSSObjectWithLabel) => ({
            ...provided,
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            ...indicatorsContainer
        }),
        indicatorSeparator: () => ({display: "none", ...indicatorSeparator}),
        dropdownIndicator: (provided: CSSObjectWithLabel) => ({...provided, color: colors.red, ...dropdownIndicator}),
        multiValue: (provided: CSSObjectWithLabel) => ({...provided, background: colors.lightGray, ...multiValue}),
        multiValueLabel: (provided: CSSObjectWithLabel) => ({...provided, color: colors.white, ...multiValueLabel}),
        singleValue: (provided: CSSObjectWithLabel) => ({...provided, ...singleValue})
    }
)
}
