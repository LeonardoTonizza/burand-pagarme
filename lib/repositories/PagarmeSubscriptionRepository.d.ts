import { CreateSubscription } from '../models/CreateSubscription.js';
import { Subscription } from '../models/Subscription.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeSubscriptionRepository extends PagarmeAbstract {
    create(order: CreateSubscription): Promise<Subscription>;
    delete(id: string): Promise<void>;
}
