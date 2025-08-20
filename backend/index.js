import cors from 'cors';
import express from 'express';
import connectDb from './config/database.js';
import cart_router from './routes/Cart_route.js';
import product_route from './routes/ProductRoutes.js';

const server = express();
server.use(cors());
const PORT = process.env.PORT || 3000;
connectDb();
server.use(express.json());
server.use('/api', product_route);
server.use('/api', cart_router)
server.listen(PORT, () => {
  console.log("Server running on port ", PORT)
})
server.get('/', (req, res) => {
  res.send('API is running...') 
})
export default server;