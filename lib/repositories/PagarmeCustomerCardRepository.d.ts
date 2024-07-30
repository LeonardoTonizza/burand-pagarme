import { Card } from '../models/Card.js';
import { CreateCard } from '../models/CreateCard.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeCustomerCardRepository extends PagarmeAbstract {
    create(customerId: string, data: CreateCard): Promise<Card>;
    getAll(customerId: string): Promise<Card[]>;
    delete(customerId: string, cardId: string): Promise<void>;
}
