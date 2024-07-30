import { CreateCustomer } from './CreateCustomer.js';
import { CreateOrderItem } from './CreateOrderItem.js';
import { CreatePayment } from './CreatePayment.js';
export interface CreateOrder {
    code: string;
    customer: CreateCustomer;
    ip: string;
    items: CreateOrderItem[];
    payments: CreatePayment[];
    session_id: string;
}
