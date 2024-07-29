import { ChargeStatus } from '../typings/ChargeStatus.js';

export interface Charge {
  code: string;
  status: ChargeStatus;
}
