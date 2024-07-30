import { singleton } from 'tsyringe';

import { Charge } from '../models/Charge.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmeChargeRepository extends PagarmeAbstract {
  getById(id: string): Promise<Charge> {
    return this.api.get<Charge>(`charges/${id}`, {
      resolveBodyOnly: true
    });
  }
}
