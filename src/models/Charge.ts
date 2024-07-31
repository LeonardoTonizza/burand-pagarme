import { ChargeStatus } from '../typings/ChargeStatus.js';
import { LastTransaction } from '../typings/LastTransaction.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';

export interface Charge<T extends PaymentMethod = PaymentMethod> {
  amount: number;
  canceled_amount?: number | null;
  code: string;
  due_at: string;
  id: string;
  last_transaction: LastTransaction<T>;
  paid_amount?: number;
  paid_at?: string;
  payment_method: PaymentMethod;
  status: ChargeStatus;
}
