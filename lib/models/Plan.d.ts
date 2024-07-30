import { PaymentMethod } from '../typings/PaymentMethod.js';
export interface Plan {
    billing_type: string;
    currency: string;
    description: string;
    id: string;
    installments: number[];
    interval_count: number;
    interval: string;
    metadata: Record<string, unknown>;
    minimum_price: number;
    name: string;
    payment_methods: PaymentMethod[];
    status: string;
}
