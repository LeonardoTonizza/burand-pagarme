import { PaymentMethod } from '../typings/PaymentMethod.js';
import { WebhookChargeType } from '../typings/WebhookChargeType.js';
import { Charge } from './Charge.js';
export interface WebhookCharge<T extends PaymentMethod = PaymentMethod> {
    id: string;
    type: WebhookChargeType;
    data: Charge<T>;
}
