import { singleton } from 'tsyringe';

import { CreateOrder } from '../models/CreateOrder.js';
import { Order } from '../models/Order.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmeOrderRepository extends PagarmeAbstract {
  async create<T extends PaymentMethod>(order: CreateOrder<T>): Promise<Order<T>> {
    return this.api.post<Order<T>>('orders', {
      json: order,
      resolveBodyOnly: true
    });
  }

  getById<T extends PaymentMethod>(id: string): Promise<Order<T>> {
    return this.api.get<Order<T>>(`orders/${id}`, {
      resolveBodyOnly: true
    });
  }
}
