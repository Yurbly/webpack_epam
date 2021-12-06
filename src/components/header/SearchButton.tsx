import React, {FC} from "react";
import styled from "styled-components";
import searchImgUrl from "images/search.png";

const SearchIcon = styled.img`
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;
`;

const SearchButton: FC<{onClick(): void}> = (props) => <SearchIcon src={searchImgUrl} {...props}/>;

export default SearchButton

