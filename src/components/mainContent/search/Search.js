import React, {useState} from "react";
import "./index.css";

const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="search-container">
            <input
                className="search-input"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="What do you want to watch?"
            />
            <button className="search-button">SEARCH</button>
        </div>
    )
}

export default Search;
