import { Stocklist } from 'core/shared/interfaces/stocklist.interface';

export const stocklist: Stocklist[] = [
  {
    country: 'Ukraine',
    cityStocks: [
      {
        city: 'Kyiv',
        stocks: [
          {
            name: 'shift',
            address: 'kyiv vladimirskaya 49/a, ukraine',
            email: 'online@shift.kiev.ua',
            site: 'www.shift.kiev.ua',
            phone: '+38 044 220 0028'
          }
        ]
      },
      {
        city: 'Kharkiv',
        stocks: [
          {
            name: 'utopia 8 intelligent store',
            address: 'pushkinskaya, 72 kharkov, ukraine',
            email: 'online@shift.kiev.ua',
            site: 'www.utopia-8.com',
            phone: '+38 044 220 0028'
          }
        ]
      }
    ]
  },
  {
    country: 'Germany',
    cityStocks: [
      {
        city: 'Berlin',
        stocks: [
          {
            name: 'the smart dresser',
            address: 'almstadtstrasse 5 berlin 1011',
            phone: '+49 30 47370005'
          }
        ]
      },
      {
        city: 'Hamburg',
        stocks: [
          {
            name: 'casual couture',
            address: 'thielbek 5 20355 hamburg',
            email: 'hamburg@casualcouture.de',
            phone: '+49 (0)40 790 288 08'
          }
        ]
      }
    ]
  },
  {
    country: 'Belarus',
    cityStocks: [
      {
        city: 'Minsk',
        stocks: [
          {
            name: 'dislabel',
            address: 'khoruzhey street 1a, minsk 220005',
            phone: '+375 29 602-99-66'
          }
        ]
      }
    ]
  }
];
