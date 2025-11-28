import { ObjectId } from "mongoose";
import { OrderStatus } from "../enum/order.enum";

export interface OrderItemInput {
  productId: ObjectId;
  itemPrice: number;
  itemQuantity: number;
  orderId?: ObjectId;
}

export interface Order {
  _id: ObjectId;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  memberId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  _id: ObjectId;
  itemQuantity: number;
  itemPrice: number;
  orderId?: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
