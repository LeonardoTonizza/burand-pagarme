import got, { Got } from 'got';
import { env } from 'node:process';
import { singleton } from 'tsyringe';

import { CreateSubscription } from '@interfaces/pagarme/CreateSubscription.js';
import { SubscriptionCreated } from '@interfaces/pagarme/SubscriptionCreated.js';

@singleton()
export class PagarmeSubscriptionRepository {
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

  async create(order: CreateSubscription): Promise<SubscriptionCreated> {
    return this.api
      .post('subscriptions', {
        json: order
      })
      .json();
  }
}
