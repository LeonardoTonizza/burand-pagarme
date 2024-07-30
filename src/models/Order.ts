import { OrderStatus } from '../typings/OrderStatus.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';
import { Charge } from './Charge.js';
import { OrderItem } from './OrderItem.js';

export interface Order<T extends PaymentMethod> {
  amount: number;
  charges: Charge<T>[];
  closed_at?: string;
  closed: boolean;
  code: string;
  id: string;
  ip: string;
  items: OrderItem[];
  session_id: string;
  status: OrderStatus;
}
