import { Transaction } from './Transaction.js';

export interface TransactionBoleto extends Transaction {
  url: string;
  pdf: string;
  line: string;
  barcode: string;
  qr_code: string;
  due_at: string;
}
