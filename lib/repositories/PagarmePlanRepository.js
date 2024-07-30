var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { singleton } from 'tsyringe';
import { PagarmeRepository } from './PagarmeRepository.js';
let PagarmePlanRepository = class PagarmePlanRepository extends PagarmeRepository {
    async getAll() {
        const { data } = await this.api.get('plans', {
            resolveBodyOnly: true
        });
        return data;
    }
};
PagarmePlanRepository = __decorate([
    singleton()
], PagarmePlanRepository);
export { PagarmePlanRepository };
