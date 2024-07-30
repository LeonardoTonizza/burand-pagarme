import { Customer } from '../models/Customer.js';
import { AddDocument } from '../typings/AddDocument.js';
import { CardDTO } from './CardDTO.js';
import { CreateOrderItemDTO } from './CreateOrderItemDTO.js';
interface Boleto {
    instructions: string;
}
interface CreditCard {
    installments: number;
    card: CardDTO;
    card_id?: string;
    card_token?: string;
}
interface Pix {
    expires_in: number;
}
interface Methods {
    credit_card: CreditCard;
    boleto: Boleto;
    pix: Pix;
}
export type MethodTypes = keyof Methods;
type Method<T extends MethodTypes> = Methods[T];
type PaymentMethod<T extends MethodTypes> = {
    payment_method: T;
} & {
    [key in string & T]: Method<T>;
};
export interface CreateOrderDTO<T extends MethodTypes> {
    code: string;
    customer: AddDocument<Customer>;
    ip: string;
    items: CreateOrderItemDTO[];
    payments: PaymentMethod<T>[];
    session_id: string;
}
export {};
