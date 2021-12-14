import React, {FC} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import SelectComponent from "components/common/form/Select/Select";
import {useAppSelector} from "hooks/reduxHooks";
import {getMoviesSort} from "store/movies/actions";
import {Property} from "csstype";
import commonText from "consts/commonText";
import sortTypes from "consts/sortTypes";
import BoxSizing = Property.BoxSizing;

const SelectContainer = styled.div`   
    display: flex;
    align-items: center;
    padding: 0 0 1.5rem;
    width: 18rem;
`;

const Label = styled.div`
    padding: 0.2rem 1.5rem;
    box-sizing: border-box;
    color: ${colors.white};
    opacity: 0.6;
    text-transform: uppercase;
    white-space: pre;
`;

const {tabs} = commonText;

const sortOptions = [
    {
        label: tabs.releaseDate,
        value: sortTypes.release_date
    },
    {
        label: tabs.runtime,
        value: sortTypes.runtime
    },
    {
        label: tabs.rating,
        value: sortTypes.vote_average
    }
];

interface ISortSelectProps {
    onChange(value: string): void
}

const customSelectStyles = {
    control: {
        padding: "0 1.5rem 0 0",
        boxSizing: "border-box" as BoxSizing,
        background: "transparent"
    },
    container: {
        margin: "0"
    },
    singleValue: {
        color: colors.white
    }
}

const SortSelect: FC<ISortSelectProps> = ({onChange}) => {

    const value = useAppSelector(getMoviesSort)

    return (

        <SelectContainer>
            <Label>
                {commonText.sortBy}
            </Label>
            <SelectComponent
                options={sortOptions}
                value={value}
                onChange={onChange}
                styles={customSelectStyles}
                withoutTitle
            />
        </SelectContainer>
    );
}

export default SortSelect;
