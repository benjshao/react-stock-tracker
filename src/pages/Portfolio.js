import React, { useState } from 'react';
import {
    API_KEY,
    API_URL,
  } from '../config';
// Components
import Table from './../components/Table';
import Button from './../components/Button';
import PopUp from '../components/PopUp';

const Portfolio = () => {
    const [seen, setSeen] = useState(false);
    const [data, setData] = useState([]);

    const togglePop = () => {
        setSeen(!seen);
    };

    const addAsset = (e) => {
        fetch(`${API_URL}query?function=GLOBAL_QUOTE&symbol=${document.getElementById('symbol').value}&apikey=${API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let currentPrice = 0;
                if (typeof data['Global Quote'] !== 'undefined') {
                    currentPrice = data['Global Quote']['05. price']; 
                }
                let newAsset = {
                    asset: document.getElementById('symbol').value,
                    cost: document.getElementById('cost').value,
                    shares: document.getElementById('shares').value,
                    price: '$' + (parseFloat(currentPrice)).toFixed(2),
                    value: '$' + (parseFloat(document.getElementById('shares').value) * currentPrice).toFixed(2),
                    change: ((parseFloat(currentPrice) - parseFloat(document.getElementById('cost').value)) / parseFloat(document.getElementById('cost').value) * 100).toFixed(2) + '%',
                }
                setData(prevState => [...prevState, newAsset]);
                setSeen(!seen);
          });
        e.preventDefault();
    }

    return (
        <main>
            <Table stocks={data} />
            <Button togglePop={togglePop}  />
            {seen ? <PopUp togglePop={togglePop} addAsset={addAsset} /> : null}
        </main>
    );
};

export default Portfolio;