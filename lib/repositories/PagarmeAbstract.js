import got from 'got';
import { env } from 'node:process';
export class PagarmeAbstract {
    api;
    constructor() {
        this.api = got.extend({
            prefixUrl: 'https://api.pagar.me/core/v5',
            username: env.PAGARME_SECRET_KEY,
            password: '',
            timeout: {
                request: 30_000 // 30 seconds
            },
            responseType: 'json'
        });
    }
}
