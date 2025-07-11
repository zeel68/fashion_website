import express from "express";
import { placeOrder, verifyOrder } from "../controllers/orderController.js";
import authmiddleware from "../middleware/middleware.js";

const orderRouter = express.Router();

orderRouter.post("/place", authmiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
