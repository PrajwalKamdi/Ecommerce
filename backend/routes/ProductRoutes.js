import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controller/Product_Controller.js';
import { upload } from '../uploads/upload.js';
const product_route = express.Router();
product_route.post('/addNewProduct', upload.single('images'), addProduct);
product_route.get('/products', getAllProducts);
product_route.delete('/deleteProduct/:id', deleteProduct);
product_route.get('/getProduct/:id', getProduct);

product_route.patch('/updateProduct/:id', updateProduct);
export default product_route;