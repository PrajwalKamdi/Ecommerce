import { razorpayInstance } from "../index.js";
import Cart from "../model/Cart.js";
import crypto from "crypto";
export const createOrder = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
      receipt: "receipt#1"
    }
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      order: order
    });

  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while creating order"
    })
  }
}

export const getKey = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_API_ID
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching key"
    })
  }
}

export const paymentVerification = async (req, res) => {
  console.log(req.body);
  const {  razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(sign.toString())
    .digest('hex');
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
  return res.status(400).json({ success: false, message: "Missing Razorpay fields" });
}

  if (expectedSign === razorpay_signature) {
    await Cart.deleteMany();
    return res.redirect(`https://ecommerce-f-x87w.onrender.com/payment-success?reference=${razorpay_payment_id}`);
  } else {
    res.status(400).json({
      success: false,
      message: "Invalid signature sent!"
    })
  }
}