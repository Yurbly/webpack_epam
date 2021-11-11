import React, {FC, useCallback, useState} from "react";
import styled, {css} from "styled-components";
import colors from "consts/colors";
import {formElement} from "./common";
//@ts-ignore
import {DateSingleInput, OnDateChangeProps} from '@datepicker-react/styled';

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
    title?: string;
    placeholder: string;
}

const DatePickerComponent: FC<IProps> = props => {

    const {title, placeholder} = props;

    const [date, setDate] = useState(new Date());
    const [isPickerShown, setIsPickerShown] = useState(false);

    const toggleDatePicker = useCallback(
        (isFocused) => setIsPickerShown(() => isFocused),
        [setIsPickerShown]
    );

    const onDateChange = useCallback(
        (data: OnDateChangeProps) => setDate(data.date),
        []
    );

    return (
        <Label>
            {title}
                <DateSingleInput
                    date={date}
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
