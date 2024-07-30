import { ChargeStatus } from '../typings/ChargeStatus.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';
import { Transaction } from './Transaction.js';
export interface Charge {
    amount: number;
    canceled_amount?: number | null;
    code: string;
    due_at: string;
    gateway_id?: string;
    id: string;
    last_transaction: Transaction | null;
    paid_amount?: number;
    paid_at?: string;
    payment_method: PaymentMethod;
    status: ChargeStatus;
}
