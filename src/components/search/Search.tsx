import React, {FC, useState} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import Button from "components/common/Button";

const SearchContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  width: 80%;
`;

const Title = styled.div`
  color: ${colors.white};
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0 0 3rem;
`;

const SearchRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    height: fit-content;
`;

const SearchInput = styled.input`
    margin: 0 0.85rem 0 0;
    width: 100%;
    height: 3.6rem;
    flex: 1;
    background: rgba(50, 50, 50, 0.8);
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 4px;
    border: none;
    font-size: 1.25rem;
    outline: none;
    
    ::placeholder {
        color: white;
        font-size: 1.25rem;
        opacity: 0.3;
    }
`;

const Search: FC = () => {
    const [search, setSearch] = useState("");

    return (
        <SearchContainer>
            <Title>Find your movie</Title>
            <SearchRow>
                <SearchInput
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="What do you want to watch?"
                />
                <Button
                    title="SEARCH"
                    onClick={() => {}}
                />
            </SearchRow>
        </SearchContainer>
    )
}

export default Search;
