import { WebhookType } from '@typings/pagarme/WebhookType.js';

interface Customer {
  code: string;
}

interface WebhookData {
  id: string;
  code: string;
  customer: Customer;
}

export interface Webhook {
  id: string;
  type: WebhookType;
  data: WebhookData;
}
