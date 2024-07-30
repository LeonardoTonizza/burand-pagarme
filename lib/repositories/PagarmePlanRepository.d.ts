import { Plan } from '../models/Plan.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmePlanRepository extends PagarmeAbstract {
    getAll(): Promise<Plan[]>;
}
