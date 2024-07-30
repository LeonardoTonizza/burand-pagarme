import { singleton } from 'tsyringe';

import { List } from '../interfaces/List.js';
import { Plan } from '../models/Plan.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmePlanRepository extends PagarmeAbstract {
  async getAll(): Promise<Plan[]> {
    const { data } = await this.api.get<List<Plan>>('plans', {
      resolveBodyOnly: true
    });

    return data;
  }
}
