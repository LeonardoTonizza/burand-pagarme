import { OrderPaymentStatus } from '@typings/pagarme/OrderPaymentStatus.js';
import { MethodTypes } from './CreateOrder.js';

interface GatewayResponse {
  code: string;
}

interface Transaction {
  id: string;
  status: OrderPaymentStatus;
  gateway_response: GatewayResponse;
}

interface Card {
  id: string;
  last_four_digits: string;
  first_six_digits: string;
  holder_name: string;
  brand: string;
}

interface TransactionCreditCard extends Transaction {
  installments: number;
  card: Card;
}

interface TransactionPix extends Transaction {
  qr_code: string;
  qr_code_url: string;
  expires_at: string;
}

interface TransactionBoleto extends Transaction {
  url: string;
  pdf: string;
  line: string;
  barcode: string;
  qr_code: string;
  due_at: string;
}

interface LastTransactions {
  credit_card: TransactionCreditCard;
  pix: TransactionPix;
  boleto: TransactionBoleto;
}

interface CustomerResponse {
  id: string;
  code: string;
}

interface BasicInfo {
  id: string;
  code: string;
  status: OrderPaymentStatus;
  customer: CustomerResponse;
}

type LastTransaction<T extends MethodTypes> = LastTransactions[T];

interface Charge<T extends MethodTypes> extends BasicInfo {
  last_transaction: LastTransaction<T>;
  payment_method: MethodTypes;
}

export interface OrderCreated<T extends MethodTypes> extends BasicInfo {
  charges: Charge<T>[];
}
