import got, { Got } from 'got';
import { env } from 'node:process';
import { singleton } from 'tsyringe';

import { CreateOrder, MethodTypes } from '@interfaces/pagarme/CreateOrder.js';
import { Order } from '@interfaces/pagarme/Order.js';
import { OrderCreated } from '@interfaces/pagarme/OrderCreated.js';

@singleton()
export class PagarmeOrderRepository {
  private readonly api: Got;

  constructor() {
    this.api = got.extend({
      prefixUrl: 'https://api.pagar.me/core/v5/',
      username: env.PAGARME_SECRET_KEY,
      password: '',
      timeout: {
        request: 30_000 // 30 seconds
      },
      responseType: 'json'
    });
  }

  async create<T extends MethodTypes>(order: CreateOrder<T>): Promise<OrderCreated<T>> {
    return this.api
      .post('orders', {
        json: order
      })
      .json();
  }

  getById(id: string): Promise<Order> {
    return this.api.get(`orders/${id}`).json();
  }
}
