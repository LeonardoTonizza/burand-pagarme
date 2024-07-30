import { OrderStatus } from '../typings/OrderStatus.js';
import { PagarmeModel } from './PagarmeModel.js';
export interface Order extends PagarmeModel {
    code: string;
    status: OrderStatus;
}
