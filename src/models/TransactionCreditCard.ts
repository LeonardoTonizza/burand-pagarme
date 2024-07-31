import { Card } from './Card.js';
import { Transaction } from './Transaction.js';

export interface TransactionCreditCard extends Transaction {
  transaction_type: 'credit_card';
  installments: number;
  card: Card;
}
