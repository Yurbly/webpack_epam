import React, {FC} from "react";
import styled from "styled-components";

interface IUnderlineProps {
    isActive: boolean
}

const TabContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 2.7rem;
    justify-content: space-between;
    padding-right: 1rem;
    cursor: pointer;
    
    :last-child {
        padding-right: 0;
    }
`;

const TabName = styled.div`
    display: flex;
    flex-flow: column;
    height: 3rem;
    justify-content: space-between;
    color: white;
`;

const Underline = styled.div<IUnderlineProps>`
    width: 100%;
    height: 4px;
    background: #F65261;
    ${props => !props.isActive && "visibility: hidden"};
`;

interface ITabProps {
    name: string,
    isActive: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const Tab: FC<ITabProps> = ({name, isActive, onClick}) =>
    <TabContainer onClick={onClick}>
        <TabName>{name}</TabName>
        <Underline isActive={isActive}/>
    </TabContainer>;

export default Tab;
