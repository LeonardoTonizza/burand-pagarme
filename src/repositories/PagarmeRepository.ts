import { BillingAddress, Customer } from '@interfaces/pagarme/CreateOrder.js';
import { CreditCardFull, CreditCardList } from '@interfaces/pagarme/CreditCard.js';
import { CustomerFull, CustomerList } from '@interfaces/pagarme/Customer.js';
import { PlanData } from '@interfaces/pagarme/Plan.js';
import got, { Got } from 'got';
import { env } from 'node:process';
import { singleton } from 'tsyringe';

export type ListClientsResponse = { data: CustomerList[]; pagiing: { total: number; next: string } };
export type ListCreditCardResponse = { data: CreditCardList[]; pagiing: { total: number; next: string } };
@singleton()
export class PagarmeRepository {
  private readonly api: Got;

  constructor() {
    this.api = got.extend({
      prefixUrl: 'https://api.pagar.me/core/v5/',
      username: env.PAGARME_SECRET_KEY,
      password: '',
      timeout: {
        request: 30_000 // 30 seconds
      },
      responseType: 'json'
    });
  }

  async listClients(userId: string): Promise<ListClientsResponse> {
    return this.api
      .get<ListClientsResponse>('customers', {
        searchParams: {
          code: userId
        }
      })
      .json();
  }

  async createClient(customer: Customer, address: BillingAddress): Promise<CustomerFull> {
    return this.api.post<CustomerFull>('customers', { json: { ...customer, address } }).json();
  }

  async createCreditCard(token: string, customerId: string, address: BillingAddress): Promise<CreditCardFull> {
    return this.api
      .post<CreditCardFull>(`customers/${customerId}/cards`, { json: { token, billing_address: address } })
      .json();
  }

  async listCreditCards(customerId: string): Promise<ListCreditCardResponse> {
    return this.api.get<ListCreditCardResponse>(`customers/${customerId}/cards`).json();
  }

  async deleteCreditCard(customerId: string, cardId: string): Promise<CreditCardFull> {
    return this.api.delete<CreditCardFull>(`customers/${customerId}/cards/${cardId}`).json();
  }

  async getPlansByTenantIdAndIntervalAndStatus(
    tenantId: string,
    interval: 'yearly' | 'monthly',
    status: 'active' | 'inactive' | 'deleted'
  ): Promise<PlanData> {
    return this.api.get<PlanData>(`plans?name=${tenantId}-${interval}&status=${status}`).json();
  }

  async getAllPlansActives(): Promise<PlanData> {
    return this.api.get<PlanData>('plans?status=active').json();
  }
}
