import React, {useState} from "react";
import styled from "styled-components";
import Tab from "./Tab";

const tabs = [
    {
        name: "all",
        content: "Mock 1"
    },
    {
        name: "documentary",
        content: "Mock 2"
    },
    {
        name: "comedy",
        content: "Mock 3"
    },
    {
        name: "horror",
        content: "Mock 4"
    },
    {
        name: "crime",
        content: "Mock 5"
    }
];

const TabsWrapper = styled.div`
  display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: #232323;
`;

const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #424242;
`;

const TabContentContainer = styled.div`
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Tabs = () => {
    const [activeTabNum, setActiveTabNum] = useState(0);

    return (
            <TabsWrapper className="toggler-container">
                <TabsContainer className="tabs-container">{
                    tabs.map((t, i) =>
                        <Tab
                            name={t.name.toUpperCase()}
                            key={t.name}
                            onClick={() => setActiveTabNum(i)}
                            isActive={activeTabNum === i}
                        />)
                }</TabsContainer>
                <TabContentContainer className="content-container">
                    {tabs[activeTabNum].content}
                </TabContentContainer>
            </TabsWrapper>
    )
}

export default Tabs;
