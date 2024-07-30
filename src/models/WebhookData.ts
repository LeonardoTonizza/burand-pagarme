import { Customer } from './Customer.js';

export interface WebhookData {
  id: string;
  code: string;
  customer: Customer;
}
