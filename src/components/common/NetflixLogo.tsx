import React, {FC} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import commonText from "consts/commonText";

const NetflixRoulette = styled.span`
    display: flex;
    font-weight: 500;
    font-size: 1.25rem;
    color: ${colors.red};
    
`;

const Bold = styled.span`
    font-weight: 900;
`;

const NetflixLogo: FC = () => {
    return (
        <NetflixRoulette>
            <Bold>{commonText.netflix}</Bold>
            {commonText.roulette}
        </NetflixRoulette>
    );
}

export default NetflixLogo;

