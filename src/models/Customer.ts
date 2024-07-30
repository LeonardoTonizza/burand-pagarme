import { Address } from '../interfaces/Address.js';
import { Phones } from '../interfaces/Phones.js';
import { PagarmeModel } from './PagarmeModel.js';

export interface Customer extends PagarmeModel {
  address: Address;
  code: string;
  delinquent: boolean;
  document: string;
  email: string;
  metadata: unknown;
  name: string;
  phones: Phones;
  type: string;
}
