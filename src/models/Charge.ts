import { ChargePaymentStatus } from "../typings/ChargePaymentStatus.js";

export interface Charge {
  code: string;
  status: ChargePaymentStatus;
}
