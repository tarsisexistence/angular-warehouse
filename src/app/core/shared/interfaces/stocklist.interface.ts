export interface Stocklist {
  country: string;
  cityStocks: CityStocks[];
}

interface CityStocks {
  city: string;
  stocks: Stocks[];
}

interface Stocks {
  name: string;
  address: string;
  phone: string;
  email?: string;
  site?: string;
}
