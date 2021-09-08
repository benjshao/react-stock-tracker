import React from 'react';

import { Content } from './Button.styles';

const Button = ({ togglePop }) => {
    return (
        <Content>
            <button type="button" onClick={togglePop}>
                ADD ASSET
            </button> 
        </Content>
        
    );
};

export default Button;