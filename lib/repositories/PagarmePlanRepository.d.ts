import { Plan } from '../models/Plan.js';
import { PagarmeRepository } from './PagarmeRepository.js';
export declare class PagarmePlanRepository extends PagarmeRepository {
    getAll(): Promise<Plan[]>;
}
