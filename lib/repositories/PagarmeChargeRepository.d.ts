import { Charge } from '../models/Charge.js';
import { PaymentMethod } from '../typings/PaymentMethod.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeChargeRepository extends PagarmeAbstract {
    getById<T extends PaymentMethod>(id: string): Promise<Charge<T>>;
}
