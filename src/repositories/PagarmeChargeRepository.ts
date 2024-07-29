import got, { Got } from 'got';
import { env } from 'node:process';
import { singleton } from 'tsyringe';

import { Charge } from '@interfaces/pagarme/Charge.js';

@singleton()
export class PagarmeChargeRepository {
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

  getById(id: string): Promise<Charge> {
    return this.api.get(`charges/${id}`).json();
  }
}
