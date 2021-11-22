import React, {FC, useCallback, useState} from "react";
import styled, {css} from "styled-components";
//@ts-ignore
import moment from "moment";
import colors from "consts/colors";
import {formElement} from "./common";
//@ts-ignore
import {DateSingleInput, OnDateChangeProps} from '@datepicker-react/styled';

const dateTemplate = "YYYY-MM-DD";

export const datePickerCss = css`
    ${formElement};
    margin: 0;
`;

const Label = styled.label`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    
    color: ${colors.red};
    text-transform: uppercase;
    line-height: 1.25rem;
    
    width: 100%;
    margin: 0 0 2rem;
    > div {
       margin: 1rem 0 0; 
       width: 100%;
    }
    > div > label {
        border: none;
        border-radius: 4px;
        outline: none;
        background: ${colors.gray};
    }
    > div > label > div {
        left: auto;
        right: 1rem;
        top: 1.25rem;
    }
    > div > label > div > svg {
      color: ${colors.red};
      width: 1rem !important;
      height: 1rem !important;
    }
    input {
      ${datePickerCss}; 
    }
`;

interface IProps {
    title?: string,
    placeholder: string,
    date: string,
    onChange(date: OnDateChangeProps): void
}

const DatePickerComponent: FC<IProps> = props => {

    const {title, placeholder, date, onChange} = props;

    const [isPickerShown, setIsPickerShown] = useState(false);

    const toggleDatePicker = useCallback(
        (isFocused) => setIsPickerShown(() => isFocused),
        [setIsPickerShown]
    );

    const onDateChange = useCallback(
        (data: OnDateChangeProps) => {
            const momentDate = moment(data.date);
            onChange(momentDate.format(dateTemplate))
        },[]);

    const momentDate = moment(date, dateTemplate);

    return (
        <Label>
            {title}
                <DateSingleInput
                    date={momentDate.toDate()}
                    onDateChange={onDateChange}
                    placeholder={placeholder}
                    showDatepicker={isPickerShown}
                    onFocusChange={toggleDatePicker}
                    showClose={false}
                />
        </Label>
    )
}

export default DatePickerComponent;
