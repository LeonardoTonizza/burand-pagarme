import { TransactionBoleto } from './TransactionBoleto.js';
import { TransactionCreditCard } from './TransactionCreditCard.js';
import { TransactionPix } from './TransactionPix.js';

export interface LastTransactionScheme {
  credit_card: TransactionCreditCard;
  pix: TransactionPix;
  boleto: TransactionBoleto;
}
