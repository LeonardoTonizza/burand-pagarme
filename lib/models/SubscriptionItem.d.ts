import { PricingScheme } from '../interfaces/PricingScheme.js';
export interface SubscriptionItem {
    cycles: number;
    description: string;
    id: string;
    name: string;
    pricing_scheme: PricingScheme;
    quantity: number;
    status: string;
}
