import {IResponseDate} from "../../../types/IResponseDate.ts";
import {StocksTypes} from "../enums/StocksTypes.ts";
import {ProductTypes} from "../enums/ProductTypes.ts";

export interface IResponseProduct extends IResponseDate{
  id: number;
  name: string;
  description: string;
  collectionId: number;

  stocks: IResponseProductStocks[];
  images: IResponseProductImage[];
}

interface IResponseProductImage extends IResponseDate{
  id: number;
  url: string;
  filename: string;
  size: number;
}

interface IResponseProductStocks extends IResponseDate{
  id: number;
  quantity: number,
  size: StocksTypes,
  prices: IResponseProductPrice[]
}

interface IResponseProductPrice extends IResponseDate {
  id: number;
  value: number,
  currency: ProductTypes
}