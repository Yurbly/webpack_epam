import React from "react";
import styled from "styled-components";
import colors from "consts/colors";

export const MovieContainer = styled.div`
  padding: 0 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 35rem;
`;

export const Poster = styled.img`
  background: transparent;
  width: auto;
  height: 100%;
  flex: 1;
`;

export const InfoContainer = styled.div`
  flex: 4;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 0 2rem;
`;

export const TitleRatingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    div:first-child {
      margin: 0 1rem 0 0;
    }
`;

export const Title = styled.div`
  font-size: 2.5rem;
  color: ${colors.white};
  font-weight: 300;
`;

export const Rating = styled.div`
  color: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.white};
  padding: 0.5rem;
`;

export const Genres = styled.div`
    font-size: 0.9rem;
    color: ${colors.white};
    padding: 0.7rem 0 0;
`;

export const YearRuntimeContainer = styled.div`
  display: flex;
  margin: 1.9rem 0 0 0;
  div:first-child {
      margin: 0 1rem 0 0;
  }
`;

export const ColoredText = styled.div`
    font-size: 1.5rem;
    color: ${colors.red};
`;

export const Overview = styled.span`
    font-size: 1.25rem;
    color: ${colors.white};
    padding: 1.9rem 0 0;
`;
