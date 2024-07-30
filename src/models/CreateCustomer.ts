import { Address } from '../interfaces/Address.js';
import { Phones } from '../interfaces/Phones.js';
import { CustomerDocumentType } from '../typings/CustomerDocumentType.js';
import { CustomerType } from '../typings/CustomerType.js';

export interface CreateCustomer {
  address?: Address;
  code: string;
  document_type?: CustomerDocumentType;
  document: string;
  email: string;
  name: string;
  phones?: Phones;
  type: CustomerType;
}
