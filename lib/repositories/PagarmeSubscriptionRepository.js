var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { singleton } from 'tsyringe';
import { PagarmeAbstract } from './PagarmeAbstract.js';
let PagarmeSubscriptionRepository = class PagarmeSubscriptionRepository extends PagarmeAbstract {
    async create(order) {
        return this.api.post('subscriptions', {
            json: order,
            resolveBodyOnly: true
        });
    }
    async delete(id) {
        await this.api.delete(`subscriptions/${id}`);
    }
};
PagarmeSubscriptionRepository = __decorate([
    singleton()
], PagarmeSubscriptionRepository);
export { PagarmeSubscriptionRepository };
