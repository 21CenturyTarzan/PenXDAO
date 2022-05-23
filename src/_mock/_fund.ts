import { noCase } from 'change-case';
// _mock
import _mock from './_mock';
import { randomNumberRange, randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _fundAssetBreakdown = ['Bitcoin (+Yield)', 'Ethereum (+Yield)', 'USDC (+Yield)', 'DeFi Pulse Index', 'Metaverse Index'].map(
  (appName, index) => ({
    id: _mock.id(index),
    name: appName,
    assetClass: (index <= 1 && 'Cryptocurrency' || index === 2 && 'Stablecoin') || 'DeFi Token Basket',
    price: index === 0 || index === 2 || index === 4 ? 0 : _mock.number.price(index),
    rating: _mock.number.rating(index),
    performance: randomNumberRange(12, 129),
    shortcut: `https://minimal-assets-api-dev.vercel.app/assets/icons/ic_${noCase(appName)}.svg`,
  })
);

export const _fundOrgs = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  orgName: _mock.dao(index),
  avatar: _mock.image.avatar(index),
  favourite: randomNumberRange(9999, 19999),
}));

export const _fundFeatured = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    'The Reality About Pensions',
    'Benefits of Decentralisation',
    'What is Yield Farming?',
  ][index],
  description: _mock.text.title(index),
  image: _mock.image.feed(index+3),
}));
