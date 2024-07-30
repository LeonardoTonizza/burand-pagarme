import { CreatePaymentScheme } from '../models/CreatePaymentScheme.js';
import { PaymentMethod } from './PaymentMethod.js';
export type CreatePayment<T extends PaymentMethod> = {
    payment_method: T;
} & {
    [key in string & T]: CreatePaymentScheme[T];
};
