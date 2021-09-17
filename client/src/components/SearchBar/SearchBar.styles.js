import styled from 'styled-components';

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Molengo&display=swap');
    #searchInput {
        margin-top: 20px;
        width: 300px;
        height: 25px;
        font-family: 'Molengo', sans-serif;
        font-size: 15px;
        border-color: #d6d6d6;
        border-style: solid;
        border-width: 1px;
        vertical-align: middle;
    }

    #search-button {
        margin-top: 20px;
        width: 50px;
        height: 29px;
        background-color: #17BECF;
        border: none;
        vertical-align: middle;
        cursor: pointer;
    }

    #search-button:hover {
        filter: brightness(0.95);
    }
    
    #search-logo {
        width: 15px;
        margin-top: 2px;
    }
`;