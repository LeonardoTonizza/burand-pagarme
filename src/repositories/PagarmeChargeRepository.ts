import { singleton } from 'tsyringe';

import { Charge } from '../models/Charge.js';
import { PagarmeRepository } from './PagarmeRepository.js';

@singleton()
export class PagarmeChargeRepository extends PagarmeRepository {
  getById(id: string): Promise<Charge> {
    return this.api.get<Charge>(`charges/${id}`, {
      resolveBodyOnly: true
    });
  }
}
