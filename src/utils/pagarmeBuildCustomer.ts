
import { BillingAddress, Customer } from '@interfaces/pagarme/CreateOrder.js';
import { User } from '@models/User.js';
import { getPhoneObject } from './getPhoneObject.js';



export function getCustomerData(user: User): Customer {


  return {
    code: user.id,
    name: user.name,
    email: user.email,
    document: user.cpf,
    phones: getPhoneObject(user.phone),
    documentType: 'CPF',
    type: 'individual'
  };
}

export function getAddressData(user: User): BillingAddress {


  return {
    city: user.address.city,
    country: 'BR',
    line_1: `${user.address.street}, ${user.address.numeral}`,
    state: user.address.state,
    zip_code: user.address.cep
  };
}

