import { CreateCustomerCardDTO } from '../dtos/CreateCustomerCardDTO.js';
import { Card } from '../models/Card.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeCustomerCardRepository extends PagarmeAbstract {
    create(customerId: string, data: CreateCustomerCardDTO): Promise<Card>;
    getAll(customerId: string): Promise<Card[]>;
    delete(customerId: string, cardId: string): Promise<void>;
}
