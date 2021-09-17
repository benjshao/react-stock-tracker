import mongoose from 'mongoose';
import StockInfo from '../models/stockInfo.js';

export const getStocks = async (req, res) => {
    try {
        const stockInfo = await StockInfo.find();
        console.log(stockInfo);
        res.status(200).json(stockInfo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStock = async (req, res) => {
    const stock = req.body;
    const newStock = new StockInfo(stock);
    try {
        await newStock.save();
        res.status(201).json(newStock);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteStock = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No stock with that id');
    await StockInfo.findByIdAndRemove(id);
    res.json({ message: "Stock deleted successfully." });
}