import { OrderStatus } from '../typings/OrderStatus.js';
import { Charge } from './Charge.js';
import { OrderItem } from './OrderItem.js';
export interface Order {
    amount: number;
    charges?: Charge[];
    closed_at?: string;
    closed: boolean;
    code: string;
    id: string;
    ip: string;
    items: OrderItem[];
    session_id: string;
    status: OrderStatus;
}
