import { CardDTO } from './CardDTO.js';
import { CreateCustomerDTO } from './CreateCustomerDTO.js';
export interface CreateSubscription {
    code: string;
    plan_id: string;
    customer: CreateCustomerDTO;
    payment_method: 'credit_card';
    card_id: string;
    card: CardDTO;
}
