import React, { useState, useEffect, useRef } from 'react';
import {
    API_URL,
    API_KEY,
} from '../../config';
import SearchLogo from '../../images/search.svg';

import { Content } from './SearchBar.styles';

const SearchBar = ({ searchInput, handleSearchStock, fetchStock }) => {
    const searchFetch = () => {
        fetch(`${API_URL}query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=${API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(searchData) {
                console.log(searchData);
            });
    };

    return (
        <Content>
            <form onSubmit={(e) => handleSearchStock(e)}>
                <input id='searchInput' type="text" placeholder="Enter a symbol" />
                <button id='search-button' type="submit">
                    <img id='search-logo' src={SearchLogo} alt="search-icon" />
                </button>
            </form>
        </Content>
        
    );
};

export default SearchBar;