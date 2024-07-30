import { CreateBoletoPayment } from './CreateBoletoPayment.js';
import { CreateCreditCardPayment } from './CreateCreditCardPayment.js';
import { CreatePixPayment } from './CreatePixPayment.js';

export interface CreatePaymentScheme {
  credit_card: CreateCreditCardPayment;
  boleto: CreateBoletoPayment;
  pix: CreatePixPayment;
}
