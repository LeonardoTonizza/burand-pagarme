import { CreateCard } from './CreateCard.js';

export interface CreateCreditCardPayment {
  installments?: number;
  card?: CreateCard;
  card_id?: string;
  card_token?: string;
}
