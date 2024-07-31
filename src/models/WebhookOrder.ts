import { PaymentMethod } from '../typings/PaymentMethod.js';
import { WebhookOrderType } from '../typings/WebhookOrderType.js';
import { Order } from './Order.js';

export interface WebhookOrder<T extends PaymentMethod = PaymentMethod> {
  id: string;
  type: WebhookOrderType;
  data: Order<T>;
}
