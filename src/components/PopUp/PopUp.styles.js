import styled from 'styled-components';

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Molengo&display=swap');
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: rgba(255, 255, 255, 0.70);
    }

    .modal_content {
        font-family: 'Molengo', sans-serif;
        background-color: white;
        position: absolute;
        top: 30%;
        left: 30%;
        width: 40%;
        padding: 20px;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .close {
        color: Black;
        float: right;
        font-size: 25px;
    }

    .close:hover {
        color: #17BECF;
        cursor: pointer;
    }
    
    #submit {
        width: 60px;
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

    #submit:hover {
        filter: brightness(0.95);
    }
    
    input {
        margin: 5px;
        border: 2px solid #d6d6d6;
        height: 30px;
        width: 500px;
    }
`;