interface PricingScheme {
  price: number;
  scheme_type: string;
}

interface PlanItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  status: string;
  cycles: number;
  created_at: string;
  updated_at: string;
  pricing_scheme: PricingScheme;
}

interface Metadata {
  tenantId: string;
  projectName?: string;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  url: string;
  statement_descriptor: string;
  minimum_price: number;
  interval: string;
  interval_count: number;
  billing_type: string;
  payment_methods: string[];
  installments: number[];
  status: string;
  currency: string;
  created_at: string;
  updated_at: string;
  items: PlanItem[];
  metadata: Metadata;
}

export interface PlanData {
  data: Plan[];
  paging: {
    total: number;
  };
}
