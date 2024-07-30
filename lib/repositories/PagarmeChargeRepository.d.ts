import { Charge } from '../models/Charge.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmeChargeRepository extends PagarmeAbstract {
    getById(id: string): Promise<Charge>;
}
