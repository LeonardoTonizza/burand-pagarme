interface BillingAddress {
  line_1: string;
  line_2?: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
}

interface Card {
  billing_address: BillingAddress;
}

interface Phone {
  number: string;
  country_code: string;
  area_code: string;
}

interface Phones {
  home_phone: Phone;
  mobile_phone: Phone;
}

interface Customer {
  code: string;
  type: 'individual' | 'company';
  name: string;
  email: string;
  document: string;
  documentType: 'CPF' | 'CNPJ';
  phones: Partial<Phones>;
}

export interface CreateSubscription {
  code: string;
  plan_id: string;
  customer: Customer;
  payment_method: 'credit_card';
  card_id: string;
  card: Card;
}
