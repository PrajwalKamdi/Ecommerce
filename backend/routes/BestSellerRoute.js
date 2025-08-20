import express from 'express';
import { addToBestSeller, getAllProductsBestSeller, getProductBestSeller } from '../controller/Product_BestSeller.js';
const router = express.Router();
router.post('/addToBest', addToBestSeller);
router.get('/getAllFromBest', getAllProductsBestSeller)
router.get('/:id', getProductBestSeller)
export default router;