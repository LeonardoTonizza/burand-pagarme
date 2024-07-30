import { CreateCustomerCardDTO } from '../dtos/CreateCustomerCardDTO.js';
import { Card } from '../models/Card.js';
import { PagarmeRepository } from './PagarmeRepository.js';
export declare class PagarmeCustomerCardRepository extends PagarmeRepository {
    create(customerId: string, data: CreateCustomerCardDTO): Promise<Card>;
    delete(customerId: string, cardId: string): Promise<void>;
}
