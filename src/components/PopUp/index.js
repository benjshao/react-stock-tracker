import React, { useState } from 'react';
import { Content } from './PopUp.styles';

const PopUp = ({ togglePop, addAsset }) => {
    return (
        <Content>
            <div className="modal">
                <div className="modal_content">
                    <span className="close" onClick={togglePop}>
                        &times;
                    </span>
                    <form>
                        <input type="text" id="symbol" name="symbol" placeholder="Enter a symbol" />
                        <br />
                        <input type="text" id="shares" name="shares" placeholder="No. of shares" />
                        <br />
                        <input type="text" id="cost" name="cost" placeholder="Average cost" />
                        <br />
                        <button id="submit" onClick={addAsset}>
                            Done
                        </button>
                    </form>
                </div>
            </div>
        </Content>
        
    );
};

export default PopUp;