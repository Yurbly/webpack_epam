import React from "react";
import styled, {css} from "styled-components";
import colors from "consts/colors";

export const textCss = css`
    font-size: 1rem;
    color: ${colors.white}
`;

export const MenuContainer = styled.div`
  position: relative;
  
  > svg {
      top: 0.5rem;
      right: 0.5rem;
  }
`;

export const MenuButton = styled.div`
    cursor: pointer;
    border-radius: 50%;
    background: ${colors.black};
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.black};
  padding: 0.5rem 1rem;
  min-width: 12rem;
`;

export const CrossContainer = styled.div`
    align-self: flex-end;
    cursor: pointer;
    > svg {
      width: 0.7rem;
      height: 0.7rem;
    }
`;

export const MenuItem = styled.div`
  ${textCss};
  cursor: pointer;
  padding: 0.5rem;
`;

