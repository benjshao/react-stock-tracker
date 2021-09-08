import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
//import {
    //API_KEY,
    //API_URL,
//} from './../../config';

const StockChart = ({ searchInput, stockChartXValues, stockChartYValues }) => {
    //const [stockChartXValues, setStockChartXValues] = useState([]);
    //const [stockChartYValues, setStockChartYValues] = useState([]);

    //useEffect(() => {
        //fetchStock();
    //}, []);

    //const fetchStock = () => {
        //let stockChartXValuesFunction = [];
        //let stockChartYValuesFunction = [];

        //fetch(`${API_URL}query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockTicker}&outputsize=full&apikey=${API_KEY}`)
            //.then(function(response) {
                //return response.json();
            //})
            //.then(function(data) {
                //for (var key in data['Time Series (Daily)']) {
                    //stockChartXValuesFunction.push(key);
                    //stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                //}
                //setStockChartXValues(stockChartXValuesFunction);
                //setStockChartYValues(stockChartYValuesFunction);
            //});
    //};

    return (
        <div>
            <Plot
                data={[
                    {
                        x: stockChartXValues,
                        y: stockChartYValues,
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'red'},
                        line: {color: '#17BECF'},
                    }
                ]}
                layout={{
                    width: 720,
                    height: 440,
                    title: searchInput,
                    yaxis: {fixedrange: false, autorange: true},
                    xaxis: {
                        fixedrange: true,
                        rangeselector: {buttons: [
                            {
                                count: 1,
                                label: '1d',
                                step: 'day',
                                stepmode: 'backward'
                            },
                            {
                                count: 5,
                                label: '5d',
                                step: 'day',
                                stepmode: 'backward'
                            },
                            {
                              count: 1,
                              label: '1m',
                              step: 'month',
                              stepmode: 'backward'
                            },
                            {
                              count: 3,
                              label: '3m',
                              step: 'month',
                              stepmode: 'backward'
                            },
                            {step: 'all'}
                          ]},
                    },
                }}
                config={
                    {displayModeBar: false,}
                }
            />
        </div>
    );
};

export default StockChart;