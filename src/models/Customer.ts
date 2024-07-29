export interface CustomerFull {
  id: string;
  name: string;
  email: string;
  gender: string;
  delinquent: boolean;
  address: Address;
  created_at: string;
  updated_at: string;
  metadata: Metadata;
}

interface Metadata {
  company: string;
}

interface Address {
  id: string;
  line_1: string;
  line_2: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export type CustomerList = Omit<CustomerFull, 'address' | 'phones' | 'metadata' | 'type'>;
