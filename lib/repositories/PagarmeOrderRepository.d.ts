import { CreateOrder } from '../models/CreateOrder.js';
import { Order } from '../models/Order.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeOrderRepository extends PagarmeAbstract {
    create<T extends PaymentMethod>(order: CreateOrder<T>): Promise<Order<T>>;
    getById<T extends PaymentMethod>(id: string): Promise<Order<T>>;
}
