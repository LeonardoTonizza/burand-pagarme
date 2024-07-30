import { CreateOrderDTO, MethodTypes } from '../dtos/CreateOrderDTO.js';
import { Order } from '../models/Order.js';
import { PagarmeRepository } from './PagarmeRepository.js';
export declare class PagarmeOrderRepository extends PagarmeRepository {
    create<T extends MethodTypes>(order: CreateOrderDTO<T>): Promise<Order>;
    getById(id: string): Promise<Order>;
}
