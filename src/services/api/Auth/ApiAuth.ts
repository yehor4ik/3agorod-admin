import { ApiServiceBase } from '../../ApiServiceBase.ts';
import { ILoginRequest } from './types/ILoginRequest.ts';
import { ILoginResponse } from './types/ILoginResponse.ts';
import { HttpError } from '../../HttpError.ts';

class ApiAuth extends ApiServiceBase {
	protected baseUrl = import.meta.env.VITE_BASE_URL + '/users';

	async login(data: ILoginRequest): Promise<ILoginResponse | HttpError> {
		try {
			return await this.post<ILoginRequest, ILoginResponse>('/login', data);
		} catch (error) {
			return new HttpError(error);
		}
	}
}

export const apiAuth = new ApiAuth();
