import express from 'express';

import { getStocks, createStock, deleteStock } from '../controllers/stocks.js';

const router = express.Router();

router.get('/', getStocks);
router.post('/', createStock);
router.delete('/:id', deleteStock);

export default router;