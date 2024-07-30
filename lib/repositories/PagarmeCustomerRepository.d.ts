import { CreateCustomerDTO } from '../dtos/CreateCustomerDTO.js';
import { Customer } from '../models/Customer.js';
import { PagarmeRepository } from './PagarmeRepository.js';
export declare class PagarmeCustomerRepository extends PagarmeRepository {
    create(data: CreateCustomerDTO): Promise<Customer>;
    getByCode(code: string): Promise<Customer>;
}
