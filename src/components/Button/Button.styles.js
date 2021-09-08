import styled from 'styled-components';

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Molengo&display=swap');
    button {
        width: 110px;
        height: 30px;
        font-family: 'Molengo', sans-serif;
        color: white;
        background-color: #17BECF;
        border-radius: 8px;
        border: none;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
        margin: 15px;
    }
    button:hover {
        filter: brightness(0.95);
    }
`;