import { PaymentMethod } from '../typings/PaymentMethod.js';
import { CreateCard } from './CreateCard.js';
import { CreateCustomer } from './CreateCustomer.js';

export interface CreateSubscription {
  customer: CreateCustomer;
  card: CreateCard;
  code: string;
  payment_method: PaymentMethod;
  card_id?: string;
  card_token?: string;
  plan_id: string;
}
