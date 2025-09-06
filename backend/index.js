import cors from 'cors';
import express from 'express';
import connectDb from './config/database.js';
import cart_router from './routes/Cart_route.js';
import product_route from './routes/ProductRoutes.js';
import Razorpay from 'razorpay';
import razorRouter from './routes/RazorPayRoute.js';

const server = express();
server.use(cors());
const PORT = process.env.PORT || 3000;
connectDb();

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID,
  key_secret: process.env.RAZORPAY_API_SECRET
});
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api', product_route);
server.use('/api', cart_router);
server.use('/api', razorRouter)
server.listen(PORT, () => {
  console.log("Server running on port ", PORT)
})
server.get('/', (req, res) => {
  res.send('API is running...')
})
export default server;