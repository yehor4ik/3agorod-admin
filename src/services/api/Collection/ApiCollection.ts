import { ApiServiceBase } from '../../ApiServiceBase.ts';
import { ICollectionCreateRequest } from './types/ICollectionCreateRequest.ts';
import { ICollectionCreateResponse } from './types/ICollectionCreateResponse.ts';
import { CollectionHttpError } from './CollectionHttpError.ts';

class ApiCollection extends ApiServiceBase {
	protected baseUrl = import.meta.env.VITE_BASE_URL + '/collections';

	async create(data: ICollectionCreateRequest): Promise<ICollectionCreateResponse> {
		try {
			const response = await this.post<ICollectionCreateRequest, ICollectionCreateResponse>(
				'/',
				data,
			);
			return response.data;
		} catch (error) {
			throw new CollectionHttpError(error);
		}
	}
}

export const apiCollection = new ApiCollection();
