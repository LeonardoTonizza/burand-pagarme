import { Card } from './Card.js';
import { Transaction } from './Transaction.js';

export interface TransactionCreditCard extends Transaction {
  installments: number;
  card: Card;
}
