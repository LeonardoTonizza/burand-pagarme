import { ChargePaymentStatus } from '@typings/pagarme/ChargePaymentStatus.js';

export interface Charge {
  code: string;
  status: ChargePaymentStatus;
}
