import express from 'express'
import connectDb from './config/database.js';
import product_route from './routes/ProductRoutes.js';
import cors from 'cors'
import router from './routes/BestSellerRoute.js';
import cart_router from './routes/Cart_route.js';

const server = express();
server.use(cors());
const PORT = process.env.PORT || 3000;
connectDb();
server.use(express.json());
server.use('/api/product', product_route);
server.use('/api/product', router);
server.use('/api/cart', cart_router)


server.listen(PORT, () => {
  console.log("Server running on port ", PORT)
})

export default server;