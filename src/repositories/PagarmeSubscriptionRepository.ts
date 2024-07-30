import { singleton } from 'tsyringe';

import { CreateSubscription } from '../dtos/CreateSubscriptionDTO.js';
import { Subscription } from '../models/Subscription.js';
import { PagarmeRepository } from './PagarmeRepository.js';

@singleton()
export class PagarmeSubscriptionRepository extends PagarmeRepository {
  async create(order: CreateSubscription): Promise<Subscription> {
    return this.api.post<Subscription>('subscriptions', {
      json: order,
      resolveBodyOnly: true
    });
  }
}
