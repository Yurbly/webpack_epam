import React, {useState} from "react";
import classnames from "classnames";
import "./index.css";

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

const Tab = ({name, isActive, onClick}) =>
    <div className="tab" onClick={onClick}>
        <div className="tab-name">{name}</div>
        <div className={classnames("underline", {active: isActive})}/>
    </div>

const Toggler = () => {
    const [activeTabNum, setActiveTabNum] = useState(0);

    return (
        <div className="toggler-layout">
            <div className="toggler-container">
                <div className="tabs-container">{
                    tabs.map((t, i) =>
                        <Tab
                            name={t.name.toUpperCase()}
                            key={t.name}
                            onClick={() => setActiveTabNum(i)}
                            isActive={activeTabNum === i}
                        />)
                }</div>
                <div className="content-container">
                    {tabs[activeTabNum].content}
                </div>
            </div>
        </div>
    )
}

export default Toggler;
