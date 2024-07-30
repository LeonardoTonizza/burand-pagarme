import { SubscriptionStatus } from '../typings/SubscriptionStatus.js';
import { Card } from './Card.js';
import { Customer } from './Customer.js';
import { Period } from './Period.js';
import { SubscriptionItem } from './SubscriptionItem.js';
export interface Subscription {
    billing_day: number;
    billing_type: string;
    boleto_due_days: number;
    card: Card;
    code: string;
    currency: string;
    current_cycle: Period;
    customer: Customer;
    id: string;
    installments: number;
    interval_count: number;
    interval: string;
    items: SubscriptionItem[];
    manual_billing: boolean;
    minimum_price: number;
    next_billing_at: string;
    payment_method: string;
    start_at: string;
    statement_descriptor: string;
    status: SubscriptionStatus;
}
