import { Phone, Phones } from '@interfaces/pagarme/CreateOrder.js';

export function getPhoneObject(phone: string): Phones {
  const phones: Partial<Phones> = {};

  const region = phone.substring(0, 2);

  const number = phone.substring(2);

  const object: Phone = {
    area_code: region,
    country_code: '55',
    number
  };

  if (phone.length === 11) {
    phones.mobile_phone = object;
  } else {
    phones.home_phone = object;
  }

  return phones as Phones;
}
