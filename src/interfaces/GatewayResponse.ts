import { GatewayError } from './GatewayError.js';

export interface GatewayResponse {
  code: string;
  errors: GatewayError[];
}
