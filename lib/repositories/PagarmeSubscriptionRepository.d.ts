import { CreateSubscription } from '../dtos/CreateSubscriptionDTO.js';
import { Subscription } from '../models/Subscription.js';
import { PagarmeRepository } from './PagarmeRepository.js';
export declare class PagarmeSubscriptionRepository extends PagarmeRepository {
    create(order: CreateSubscription): Promise<Subscription>;
}
