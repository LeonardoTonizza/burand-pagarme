import { CreatePayment } from '../typings/CreatePayment.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';
import { CreateCustomer } from './CreateCustomer.js';
import { CreateOrderItem } from './CreateOrderItem.js';
export interface CreateOrder<T extends PaymentMethod> {
    code: string;
    customer_id?: string;
    customer?: CreateCustomer;
    ip: string;
    items: CreateOrderItem[];
    payments: CreatePayment<T>[];
    session_id: string;
}
