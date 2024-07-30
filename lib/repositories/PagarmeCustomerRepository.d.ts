import { CreateCustomer } from '../models/CreateCustomer.js';
import { Customer } from '../models/Customer.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeCustomerRepository extends PagarmeAbstract {
    create(data: CreateCustomer): Promise<Customer>;
    getByCode(code: string): Promise<Customer>;
}
