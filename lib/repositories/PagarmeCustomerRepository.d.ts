import { Customer } from '../models/Customer.js';
import { AddDocument } from '../typings/AddDocument.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeCustomerRepository extends PagarmeAbstract {
    create(data: AddDocument<Customer>): Promise<Customer>;
    getByCode(code: string): Promise<Customer>;
}
