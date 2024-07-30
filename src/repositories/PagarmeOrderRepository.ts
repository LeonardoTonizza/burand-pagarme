import { singleton } from 'tsyringe';

import { CreateOrderDTO, MethodTypes } from '../dtos/CreateOrderDTO.js';
import { Order } from '../models/Order.js';
import { PagarmeRepository } from './PagarmeRepository.js';

@singleton()
export class PagarmeOrderRepository extends PagarmeRepository {
  async create<T extends MethodTypes>(order: CreateOrderDTO<T>): Promise<Order> {
    return this.api.post<Order>('orders', {
      json: order,
      resolveBodyOnly: true
    });
  }

  getById(id: string): Promise<Order> {
    return this.api.get<Order>(`orders/${id}`, {
      resolveBodyOnly: true
    });
  }
}
