import { CreateSubscription } from '../dtos/CreateSubscriptionDTO.js';
import { Subscription } from '../models/Subscription.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeSubscriptionRepository extends PagarmeAbstract {
    create(order: CreateSubscription): Promise<Subscription>;
}
