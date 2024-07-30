import { DocumentNotFoundError } from '@burand/functions/exceptions';
import { singleton } from 'tsyringe';

import { List } from '../interfaces/List.js';
import { Customer } from '../models/Customer.js';
import { AddDocument } from '../typings/AddDocument.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';

@singleton()
export class PagarmeCustomerRepository extends PagarmeAbstract {
  async create(data: AddDocument<Customer>): Promise<Customer> {
    return this.api.post<Customer>('customers', {
      json: data,
      resolveBodyOnly: true
    });
  }

  async getByCode(code: string): Promise<Customer> {
    const { data } = await this.api.get<List<Customer>>('customers', {
      resolveBodyOnly: true,
      searchParams: {
        code
      }
    });

    if (!data.length) {
      throw new DocumentNotFoundError();
    }

    return data[0];
  }
}
