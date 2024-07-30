import { LastTransactionScheme } from '../models/LastTransactionScheme.js';
import { PaymentMethod } from './PaymentMethod.js';
export type LastTransaction<T extends PaymentMethod> = LastTransactionScheme[T];
