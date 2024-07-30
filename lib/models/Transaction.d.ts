import { GatewayResponse } from '../interfaces/GatewayResponse.js';
export interface Transaction {
    amount?: number;
    attempt_count?: number;
    gateway_id?: string;
    gateway_response?: GatewayResponse;
    id: string;
    max_attempts?: number;
    next_attempt?: string;
    status?: string;
    success?: boolean;
    transaction_type?: string;
}
