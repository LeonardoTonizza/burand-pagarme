import { GatewayResponse } from '../interfaces/GatewayResponse.js';
export interface Transaction {
    amount: number;
    gateway_response: GatewayResponse;
    id: string;
    status: string;
    success: boolean;
}
