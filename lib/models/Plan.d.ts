import { PaymentMethod } from '../typings/PaymentMethod.js';
export interface Plan {
    id: string;
    billing_type: string;
    currency: string;
    description: string;
    installments: number[];
    interval_count: number;
    interval: string;
    name: string;
    payment_methods: PaymentMethod[];
    status: string;
}
