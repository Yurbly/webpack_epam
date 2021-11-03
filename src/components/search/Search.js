import React, {useState} from "react";
import styled from "styled-components";
import colors from "consts/colors";

const SearchContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-flow: column;
  flex: 1;
  align-items: flex-start;
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  color: ${colors.white};
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0 0 2.1rem;
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
    opacity: 0.7;
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

const Button = styled.button`
    width: 14.6rem;
    height: 3.6rem !important;
    border-radius: 4px;
    border: none;
    background: #F65261;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
`;

const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <SearchContainer className="search-container">
            <Title>Find your movie</Title>
            <SearchRow>
                <SearchInput
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="What do you want to watch?"
                />
                <Button className="search-button">SEARCH</Button>
            </SearchRow>
        </SearchContainer>
    )
}

export default Search;
