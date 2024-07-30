import { singleton } from 'tsyringe';

import { CreateSubscription } from '../models/CreateSubscription.js';
import { Subscription } from '../models/Subscription.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmeSubscriptionRepository extends PagarmeAbstract {
  async create(order: CreateSubscription): Promise<Subscription> {
    return this.api.post<Subscription>('subscriptions', {
      json: order,
      resolveBodyOnly: true
    });
  }

  async delete(id: string): Promise<void> {
    await this.api.delete<void>(`subscriptions/${id}`);
  }
}
