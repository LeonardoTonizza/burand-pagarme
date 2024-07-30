import { PricingScheme } from '../interfaces/PricingScheme.js';
export interface CreateSubscriptionItem {
    description: string;
    id: string;
    name?: string;
    plan_item_id?: string;
    pricing_scheme: PricingScheme;
    quantity?: number;
}
