import { noCase } from 'change-case';
// _mock
import _mock from './_mock';
import { randomNumberRange, randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _appInstalled = ['de', 'en', 'fr', 'kr', 'us'].map((country, index) => ({
  id: _mock.id(index),
  name: ['Germany', 'England', 'France', 'Korean', 'USA'][index],
  android: randomNumberRange(999, 99999),
  windows: randomNumberRange(999, 99999),
  apple: randomNumberRange(999, 99999),
  flag: `/assets/icons/flags/ic_flag_${country}.svg`,
}));
export const _appInvoices = [...Array(5)].map((_, index) => ({
  id: `${Date.now() + index}`,
  price: _mock.number.price(index),
  category: randomInArray(['Android', 'Mac', 'Windows']),
  status: randomInArray(['paid', 'out_of_date', 'in_progress']),
}));

export const _appFeatured = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    'The Reality About Pensions',
    'Benefits of Decentralisation',
    'What is Yield Farming?',
  ][index],
  description: _mock.text.title(index),
  image: _mock.image.feed(index+3),
}));
