import React from "react";
import styled, {css} from "styled-components";
import colors from "consts/colors";

export const formElement = css`
    background: ${colors.gray};
    color: ${colors.white};
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5rem;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin: 1rem 0 0;
`;

export const Label = styled.label`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    
    color: ${colors.red};
    text-transform: uppercase;
    line-height: 1.25rem;
    
    width: 100%;
    margin: 0 0 2rem
`;

export interface IInputProps {
    title: string,
    value?: string,
    placeholder: string,
    height?: string,
    onChange(value: string): void
}
