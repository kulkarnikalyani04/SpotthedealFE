import React from "react";
const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        
        <label htmlFor="vendorLogo">Vendor Logo</label>
        <input
            type="text"
            id="header-search"
            placeholder=" ⬆ Upload"
            name="s" 
        />
        <button type="submit">Browse</button>
    </form>
);

export default SearchBar;