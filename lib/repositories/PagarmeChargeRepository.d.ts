import { Charge } from '../models/Charge.js';
import { PagarmeRepository } from './PagarmeRepository.js';
export declare class PagarmeChargeRepository extends PagarmeRepository {
    getById(id: string): Promise<Charge>;
}
