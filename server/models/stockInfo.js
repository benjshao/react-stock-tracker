import mongoose from 'mongoose';

const stockSchema = mongoose.Schema({
    asset: String,
    cost: String,
    shares: String,
    price: String,
    value: String,
    change: String
});

const StockInfo = mongoose.model('StockInfo', stockSchema);

export default StockInfo;