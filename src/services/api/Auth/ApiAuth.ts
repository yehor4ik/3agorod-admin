import { ApiServiceBase } from '../../ApiServiceBase.ts';
import { ILoginRequest } from './types/ILoginRequest.ts';
import { ILoginResponse } from './types/ILoginResponse.ts';
import { HttpError } from '../../HttpError.ts';
import { Storage } from '../../../localStorage';

class ApiAuth extends ApiServiceBase {
	protected baseUrl = import.meta.env.VITE_BASE_URL + '/users';

	async login(data: ILoginRequest): Promise<ILoginResponse> {
		try {
			const response = await this.post<ILoginRequest, ILoginResponse>('/login', data);
			Storage.setUser(response.data);
			return response.data;
		} catch (error) {
			const newError = new HttpError(error);

			if (newError.status === 401) {
				newError.setMessage(newError.message);
			}

			throw newError;
		}
	}
}

export const apiAuth = new ApiAuth();
