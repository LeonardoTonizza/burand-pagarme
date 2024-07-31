import { Transaction } from './Transaction.js';
export interface TransactionPix extends Transaction {
    transaction_type: 'pix';
    qr_code: string;
    qr_code_url: string;
    expires_at: string;
}
