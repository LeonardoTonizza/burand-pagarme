import { singleton } from 'tsyringe';

import { CreateCustomerCardDTO } from '../dtos/CreateCustomerCardDTO.js';
import { Card } from '../models/Card.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmeCustomerCardRepository extends PagarmeAbstract {
  async create(customerId: string, data: CreateCustomerCardDTO): Promise<Card> {
    return this.api.post<Card>(`customers/${customerId}/cards`, {
      json: data,
      resolveBodyOnly: true
    });
  }

  async delete(customerId: string, cardId: string): Promise<void> {
    await this.api.delete<void>(`customers/${customerId}/cards/${cardId}`);
  }
}
