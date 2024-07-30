import { WebhookType } from '../typings/WebhookType.js';
import { WebhookData } from './WebhookData.js';

export interface Webhook {
  id: string;
  type: WebhookType;
  data: WebhookData;
}
