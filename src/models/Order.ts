import { OrderPaymentStatus } from "../typings/OrderPaymentStatus.js";

export interface Order {
  code: string;
  status: OrderPaymentStatus;
}
