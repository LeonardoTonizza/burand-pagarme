import { CreateCard } from './CreateCard.js';
import { CreateCustomer } from './CreateCustomer.js';
import { CreateSubscriptionItem } from './CreateSubscriptionItem.js';
export interface CreateSubscription {
    billing_type?: 'prepaid';
    card_id?: string;
    card_token?: string;
    card?: CreateCard;
    code: string;
    currency?: 'BRL';
    customer_id?: string;
    customer?: CreateCustomer;
    installments?: number;
    interval_count?: number;
    interval?: 'month';
    items?: CreateSubscriptionItem[];
    payment_method: string;
    plan_id?: string;
    statement_descriptor?: string;
}
