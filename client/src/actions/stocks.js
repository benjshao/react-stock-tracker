import * as api from '../api';

export const getStocks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStocks();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }    
}

export const createStock = (stock) => async (dispatch) => {
    try {
        const { data } = await api.createStock(stock);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteStock = (id) => async (dispatch) => {
    try {
        await api.deleteStock(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}