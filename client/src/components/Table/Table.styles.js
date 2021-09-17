import styled from 'styled-components';

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Molengo&display=swap');
    table {
        font-family: 'Molengo', sans-serif;
        border: 2px solid #d6d6d6;
        background-color: white;
        border-spacing: 0;
        margin-top: 20px;
    }

    tr {
        :last-child {
            td {
                border-bottom: 0;  
            }  
        }
    }
    
    td {
        padding: 10px;
        border-bottom: 2px solid #d6d6d6;
    }

    th {
        border-bottom: 2px solid #d6d6d6;
        font-size: 13px;
        padding: 10px;
        font-weight: bold;
        color: #17BECF;
    }

    tfoot {
        background-color: #6e6e6e;
        color: white;
    }

    .asset-col {
        background-color: pink;
    }

    .GreenColor {
        color: #00b300;
        justify-content: right;
    }

    .RedColor {
        color: red;
    }

    .delete-button {
        border: none;
        background: white;
        cursor: pointer;
    }

    .delete-icon {
        color: #bfbfbf;
    }

    .delete-icon:hover {
        transform: scale(1.2)
    }
`;