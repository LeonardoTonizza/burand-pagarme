import { Address } from '../interfaces/Address.js';

export interface CreateCustomerCardDTO {
  address: Address;
  metadata?: unknown;
  token: string;
}
