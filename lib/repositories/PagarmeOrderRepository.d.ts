import { CreateOrderDTO, MethodTypes } from '../dtos/CreateOrderDTO.js';
import { Order } from '../models/Order.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeOrderRepository extends PagarmeAbstract {
    create<T extends MethodTypes>(order: CreateOrderDTO<T>): Promise<Order>;
    getById(id: string): Promise<Order>;
}
