import React, {FC, useState} from "react";
import Cross from "components/common/icons/Cross";
import ThreeDots from "components/common/icons/ThreeDots";
import {
    CrossContainer,
    Menu,
    MenuButton,
    MenuContainer,
    MenuItem
} from "components/common/PopupMenu/styled";

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
