import { ChargeStatus } from '../typings/ChargeStatus.js';
import { PagarmeModel } from './PagarmeModel.js';

export interface Charge extends PagarmeModel {
  code: string;
  status: ChargeStatus;
}
