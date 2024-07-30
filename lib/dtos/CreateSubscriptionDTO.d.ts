import { Customer } from '../models/Customer.js';
import { AddDocument } from '../typings/AddDocument.js';
import { CardDTO } from './CardDTO.js';
export interface CreateSubscription {
    code: string;
    plan_id: string;
    customer: AddDocument<Customer>;
    payment_method: 'credit_card';
    card_id: string;
    card: CardDTO;
}
