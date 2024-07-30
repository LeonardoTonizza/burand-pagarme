import { Address } from '../interfaces/Address.js';

export interface Card {
  billing_address: Address;
  brand: string;
  exp_month: number;
  exp_year: number;
  first_six_digits: string;
  holder_name: string;
  id: string;
  last_four_digits: string;
  status: string;
  type: string;
}
