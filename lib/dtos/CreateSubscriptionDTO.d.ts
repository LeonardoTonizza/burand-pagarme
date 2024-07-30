import { Customer } from '../models/Customer.js';
import { CardDTO } from './CardDTO.js';
export interface CreateSubscription {
    code: string;
    plan_id: string;
    customer: Customer;
    payment_method: 'credit_card';
    card_id: string;
    card: CardDTO;
}
