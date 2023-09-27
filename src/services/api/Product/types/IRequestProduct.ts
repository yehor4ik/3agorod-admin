import { StocksTypes } from '../enums/StocksTypes.ts';
import { ProductTypes } from '../enums/ProductTypes.ts';

export interface IRequestProduct {
	name: string;
	description: string;
	collectionId: number;
	stocks: IRequestProductStocks[];
	images: number[];
}

interface IRequestProductStocks {
	quantity: number;
	size: StocksTypes;
	prices: IRequestProductPrice[];
}

interface IRequestProductPrice {
	value: number;
	currency: ProductTypes;
}
