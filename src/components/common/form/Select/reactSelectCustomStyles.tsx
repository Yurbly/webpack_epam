//@ts-ignore
import {CSSObjectWithLabel, StylesConfig} from "react-select";
import {IOption, IsMulti} from "./types";
import colors from "consts/colors";

export const customStyles: StylesConfig<IOption, IsMulti> = {
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
