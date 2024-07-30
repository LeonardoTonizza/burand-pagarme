import { singleton } from 'tsyringe';

import { List } from '../interfaces/List.js';
import { Card } from '../models/Card.js';
import { CreateCard } from '../models/CreateCard.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmeCustomerCardRepository extends PagarmeAbstract {
  async create(customerId: string, data: CreateCard): Promise<Card> {
    return this.api.post<Card>(`customers/${customerId}/cards`, {
      json: data,
      resolveBodyOnly: true
    });
  }

  async getAll(customerId: string): Promise<Card[]> {
    const { data } = await this.api.get<List<Card>>(`customers/${customerId}/cards`, {
      resolveBodyOnly: true
    });

    return data;
  }

  async delete(customerId: string, cardId: string): Promise<void> {
    await this.api.delete<void>(`customers/${customerId}/cards/${cardId}`);
  }
}
