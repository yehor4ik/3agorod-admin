import { ApiServiceBase, IAxiosRequestConfig } from '../../ApiServiceBase.ts';
import { IImageCreateResponse } from './types/IImageCreateResponse.ts';
import { ImageHttpError } from './ImageHttpError.ts';

class ApiImage extends ApiServiceBase {
	baseUrl = import.meta.env.VITE_BASE_URL + '/images';

	async create(image: File, options: IAxiosRequestConfig = {}): Promise<IImageCreateResponse> {
		try {
			const formData = this.formatFormData({ image });

			const response = await this.post<FormData, IImageCreateResponse>('/', formData, options);
			return response.data;
		} catch (error) {
			throw new ImageHttpError(error);
		}
	}
}

export const apiImage = new ApiImage();
