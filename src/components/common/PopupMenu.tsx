import React, {FC, useState} from "react";
import styled, {css} from "styled-components";
import colors from "consts/colors";
import Cross from "components/common/icons/Cross";
import ThreeDots from "components/common/icons/ThreeDots";

const textCss = css`
    font-size: 1rem;
    color: ${colors.white}
`;

const MenuContainer = styled.div`
  position: relative;
  
  > svg {
      top: 0.5rem;
      right: 0.5rem;
  }
`;

const MenuButton = styled.div`
    cursor: pointer;
    border-radius: 50%;
    background: ${colors.black};
`;

const Menu = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.black};
  padding: 0.5rem 1rem;
  min-width: 12rem;
`;

const CrossContainer = styled.div`
    align-self: flex-end;
    cursor: pointer;
    > svg {
      width: 0.7rem;
      height: 0.7rem;
    }
`;

const MenuItem = styled.div`
  ${textCss};
  cursor: pointer;
  padding: 0.5rem;
`;

interface IMenuProps {
    withIcon?: boolean,
    items: Array<{
        id: string,
        name: string,
        onClick(): void
    }>
}

const PopupMenu: FC<IMenuProps> = props => {

    const {items, withIcon} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <MenuContainer>
            <MenuButton onClick={() => setIsOpen(isOpen => !isOpen)}>
                {withIcon && <ThreeDots width="2rem" height="2rem"/>}
            </MenuButton>
            {isOpen && <Menu>
                {withIcon && isOpen && <CrossContainer onClick={() => setIsOpen(false)}>
                    <Cross width="0.7rem" height="0.7rem"/>
                </CrossContainer>}
                {items.map(item =>
                    <MenuItem
                        key={item.id}
                        onClick={item.onClick}
                    >
                        {item.name}
                    </MenuItem>
                )}
            </Menu>}
        </MenuContainer>
    )
}

export default PopupMenu;
