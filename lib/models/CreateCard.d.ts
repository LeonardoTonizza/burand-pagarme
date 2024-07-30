import { Address } from '../interfaces/Address.js';
export interface CreateCard {
    billing_address?: Address;
    token?: string;
}
