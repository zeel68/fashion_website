import express from "express";
import { cancelOrder, listOrders, placeOrder, returnOrder, updateStatus, userorder, verifyOrder } from "../controllers/orderController.js";
import authmiddleware from "../middleware/middleware.js";

const orderRouter = express.Router();

orderRouter.post("/place", authmiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", authmiddleware, userorder);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);
orderRouter.post("/return", returnOrder);
orderRouter.post("/cancel", cancelOrder);


export default orderRouter;
