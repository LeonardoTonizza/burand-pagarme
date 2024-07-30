import { PagarmeModel } from './PagarmeModel.js';
export interface Plan extends PagarmeModel {
    billing_type: string;
    currency: string;
    description: string;
    installments: number[];
    interval_count: number;
    interval: string;
    metadata: unknown;
    name: string;
    payment_methods: string[];
    status: string;
}
