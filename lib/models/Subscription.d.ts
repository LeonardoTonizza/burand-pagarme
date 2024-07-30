import { SubscriptionStatus } from '../typings/SubscriptionStatus.js';
import { PagarmeModel } from './PagarmeModel.js';
export interface Subscription extends PagarmeModel {
    status: SubscriptionStatus;
}
