import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controller/Product_Controller.js';
import { upload } from '../uploads/upload.js';
const product_route = express.Router();
product_route.post('/addNewProduct', upload.single('images'), addProduct); //done
product_route.get('/products', getAllProducts); //done
product_route.delete('/deleteProduct/:id', deleteProduct); //done
product_route.get('/getProduct/:id', getProduct); //done

product_route.patch('/updateProduct/:id', updateProduct);
export default product_route;