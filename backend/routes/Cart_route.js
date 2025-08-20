import router from 'express';
import { addToCart, deleteProductCart, getAllProductsCart } from '../controller/Cart_Controller.js';
const cart_router = router.Router();
cart_router.post('/addToCart', addToCart);
cart_router.get('/cart', getAllProductsCart);
cart_router.delete('/delete/:id', deleteProductCart);
export default cart_router;