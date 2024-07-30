import { singleton } from 'tsyringe';

import { Charge } from '../models/Charge.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmeChargeRepository extends PagarmeAbstract {
  getById<T extends PaymentMethod>(id: string): Promise<Charge<T>> {
    return this.api.get<Charge<T>>(`charges/${id}`, {
      resolveBodyOnly: true
    });
  }
}
