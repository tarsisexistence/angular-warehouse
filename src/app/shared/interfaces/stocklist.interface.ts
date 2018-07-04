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
	email?: string;
	site?: string;
	phone: string;
}
