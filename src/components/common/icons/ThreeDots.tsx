import React, {FC} from "react";
import colors from "consts/colors";
import {IIconProps} from "./icon";

const ThreeDots: FC<IIconProps> = (props) => {

    return (
        <svg
            id="three_dots_icon"
            viewBox="-84 -48 200 200"
            fill={colors.white}
            {...props}
        >
            <path className="cls-1"
                  d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"/>
        </svg>
    )
}

export default ThreeDots;
