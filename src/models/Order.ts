import { OrderStatus } from '../typings/OrderStatus.js';

export interface Order {
  code: string;
  status: OrderStatus;
}
