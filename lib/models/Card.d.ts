import { Address } from '../interfaces/Address.js';
import { Customer } from './Customer.js';
import { PagarmeModel } from './PagarmeModel.js';
export interface Card extends PagarmeModel {
    billing_address: Address;
    brand: string;
    customer: Customer;
    exp_month: number;
    exp_year: number;
    first_six_digits: string;
    holder_name: string;
    last_four_digits: string;
    status: string;
    type: string;
}
