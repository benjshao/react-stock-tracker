export default (stocks = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return stocks.filter((stock) => stock._id !== action.payload);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...stocks, action.payload];
        default:
            return stocks;
    }
}