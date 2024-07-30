import { PaymentMethod } from '../typings/PaymentMethod.js';
import { CreateBoletoPayment } from './CreateBoletoPayment.js';
import { CreateCreditCardPayment } from './CreateCreditCardPayment.js';
import { CreatePixPayment } from './CreatePixPayment.js';
export interface CreatePayment {
    payment_method: PaymentMethod;
    credit_card?: CreateCreditCardPayment;
    boleto?: CreateBoletoPayment;
    pix?: CreatePixPayment;
}
