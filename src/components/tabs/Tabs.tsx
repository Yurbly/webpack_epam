import React, {FC, ReactNode} from "react";
import styled from "styled-components";
import Tab from "./Tab";

const TabsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #424242;
    margin: 2rem 0;
    box-sizing: border-box;
    height: 2.7rem;
    width: 100%;
`;
const Area = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    margin: 1rem 0;
`;

interface ITabsProps {
    tabs: Array<any>,
    onTabChange(str: string): void,
    activeTabId: string,
    controls?: ReactNode
}

const Tabs: FC<ITabsProps> = props => {
    const {
        tabs,
        onTabChange,
        activeTabId,
        controls
    } = props;

    return (
            <TabsHeader>
                <Area>
                    {tabs.map((t) =>
                        <Tab
                            name={t.name.toUpperCase()}
                            key={t.id}
                            onClick={() => onTabChange(t.id)}
                            isActive={t.id === activeTabId}
                        />)}
                </Area>
                <Area>
                    {controls}
                </Area>
            </TabsHeader>)
}

export default Tabs;
