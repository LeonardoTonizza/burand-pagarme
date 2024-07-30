import { DocumentNotFoundError } from '@burand/functions/exceptions';
import { singleton } from 'tsyringe';

import { CreateCustomerDTO } from '../dtos/CreateCustomerDTO.js';
import { List } from '../interfaces/List.js';
import { Customer } from '../models/Customer.js';
import { PagarmeRepository } from './PagarmeRepository.js';

@singleton()
export class PagarmeCustomerRepository extends PagarmeRepository {
  async create(data: CreateCustomerDTO): Promise<Customer> {
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
