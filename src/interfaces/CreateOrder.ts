export interface BillingAddress {
  line_1: string;
  line_2?: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
}

interface Boleto {
  instructions: string;
}

interface Card {
  billing_address: BillingAddress;
}

interface CreditCard {
  installments: number;
  card_id: string;
  card: Card;
  card_token: string;
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

export interface Phone {
  number: string;
  country_code: string;
  area_code: string;
}

export interface Phones {
  home_phone: Phone;
  mobile_phone: Phone;
}

export interface Item {
  code: string;
  amount: number;
  description: string;
  quantity: number;
}

export interface Customer {
  code: string;
  type: 'individual' | 'company';
  name: string;
  email: string;
  document: string;
  documentType: 'CPF' | 'CNPJ';
  phones: Partial<Phones>;
}

type PaymentMethod<T extends MethodTypes> = {
  [key in string & T]: Method<T>;
} & {
  payment_method: T;
};

export interface CreateOrder<T extends MethodTypes> {
  code: string;
  ip: string;
  session_id: string;
  items: Item[];
  customer: Customer;
  payments: PaymentMethod<T>[];
}
