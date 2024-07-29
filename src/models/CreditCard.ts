import { BillingAddress } from '../interfaces/CreateOrder.js';
import { CustomerFull } from './Customer.js';

export interface CreditCardFull {
  id: string;
  first_six_digits: string;
  last_four_digits: string;
  brand: string;
  holder_name: string;
  exp_month: number;
  exp_year: number;
  status: string;
  created_at: string;
  updated_at: string;
  billing_address: BillingAddress;
  customer: CustomerFull;
  type: string;
}

export type CreditCardList = Omit<CreditCardFull, 'customer' | 'type'>;
