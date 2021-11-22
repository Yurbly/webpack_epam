import React from "react";
import styled from "styled-components";
//@ts-ignore
import colors from "consts/colors";

export const Title = styled.div`
    font-size: 2.5rem;
    text-transform: uppercase;
    color: ${colors.white};
    letter-spacing: 1px;
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-flow: column;
    width: 100%;
    margin: 1rem 0;
`;

export const ColumnsContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 1rem 0;
    
    div:last-child {
        margin-right: 0;
    }
`;

export const Column = styled.div<{ maxWidth: string }>`
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: ${props => props.maxWidth || "60%;"};
    margin: 0 2rem 0 0;
`;

export const Controls = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    > div:first-child {
        margin: 0 1rem 0 0;
    }
`;
