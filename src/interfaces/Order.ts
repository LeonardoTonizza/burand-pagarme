import { OrderPaymentStatus } from '@typings/pagarme/OrderPaymentStatus.js';

export interface Order {
  code: string;
  status: OrderPaymentStatus;
}
