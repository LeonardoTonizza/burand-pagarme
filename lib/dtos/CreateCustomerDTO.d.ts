import { Address } from '../interfaces/Address.js';
import { Phones } from '../interfaces/Phones.js';
export interface CreateCustomerDTO {
    address?: Address;
    code: string;
    document_type?: 'CPF' | 'CNPJ' | 'PASSPORT';
    document?: string;
    email: string;
    gender?: 'male' | 'female';
    metadata?: unknown;
    name: string;
    phones?: Phones;
    type: 'individual' | 'company';
}
