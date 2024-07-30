var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DocumentNotFoundError } from '@burand/functions/exceptions';
import { singleton } from 'tsyringe';
import { PagarmeAbstract } from './PagarmeAbstract.js';
let PagarmeCustomerRepository = class PagarmeCustomerRepository extends PagarmeAbstract {
    async create(data) {
        return this.api.post('customers', {
            json: data,
            resolveBodyOnly: true
        });
    }
    async getByCode(code) {
        const { data } = await this.api.get('customers', {
            resolveBodyOnly: true,
            searchParams: {
                code
            }
        });
        if (!data.length) {
            throw new DocumentNotFoundError();
        }
        return data[0];
    }
};
PagarmeCustomerRepository = __decorate([
    singleton()
], PagarmeCustomerRepository);
export { PagarmeCustomerRepository };
