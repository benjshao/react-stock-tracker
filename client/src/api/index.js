import axios from 'axios';

const url = 'https://react-smartfolio.herokuapp.com/stocks';

export const fetchStocks = () => axios.get(url);
export const createStock = (newStock) => axios.post(url, newStock);
export const deleteStock = (id) => axios.delete(`${url}/${id}`);