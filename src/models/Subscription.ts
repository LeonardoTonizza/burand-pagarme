import { SubscriptionStatus } from '../typings/SubscriptionStatus.js';

export interface Subscription {
  id: string;
  code: string;
  status: SubscriptionStatus;
}
