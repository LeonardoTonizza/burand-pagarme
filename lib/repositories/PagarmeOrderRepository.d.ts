import { CreateOrder } from '../models/CreateOrder.js';
import { Order } from '../models/Order.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeOrderRepository extends PagarmeAbstract {
    create(order: CreateOrder): Promise<Order>;
    getById(id: string): Promise<Order>;
}
