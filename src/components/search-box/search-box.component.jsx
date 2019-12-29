import React from "react";
import './search-box.styles.css';

export const SearchBox = ({handleChange, placeholder}) => (
    // Note: Lifting state up
    <input className='search' type="search" placeholder={placeholder} onChange={handleChange} />
);