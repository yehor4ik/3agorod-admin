import {ApiServiceBase} from "../../ApiServiceBase.ts";
import {HttpError} from "../../HttpError.ts";
import {IResponseProduct} from "./types/IResponseProduct.ts";

class ApiProduct extends ApiServiceBase {
  baseUrl = `${import.meta.env.VITE_BASE_URL}/products`;

  async getAll(): Promise<IResponseProduct> {
    try {
      const response = await this.get<IResponseProduct>(this.baseUrl);

      return response.data;
    } catch (e) {
      throw new HttpError(e)
    }
  }
}

export const apiProduct = new ApiProduct()