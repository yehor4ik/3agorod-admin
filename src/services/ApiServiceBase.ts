import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TAnyObject } from '../types/TAnyObject.ts';
import { IApiRouterParams } from './types/IApiRouterParams.ts';
import { getApiRouter } from './utils/getApiRouter.ts';
import { Storage } from '../localStorage';
import { ConstPaths } from '../navigation/ConstPaths.ts';

export interface IAxiosRequestConfig extends Omit<AxiosRequestConfig, 'params'>, IApiRouterParams {}

export const apiAxiosInstance = Axios.create({
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		Accept: 'application/json',
	},
});

apiAxiosInstance.interceptors.request.use((request) => {
	if (Storage.getUser()?.token) {
		request.headers['Authorization'] = 'Bearer ' + Storage.getUser()?.token ?? '';
	}
	return request;
});

apiAxiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		if (!(error instanceof AxiosError) || !error?.response) return Promise.reject(error);

		if (error.response.status === 403 || error.response.status === 401) {
			Storage.removeUse();
			window.location.replace(`/${ConstPaths.LOGIN}`);
		}

		return Promise.reject(error);
	},
);

export abstract class ApiServiceBase {
	protected baseUrl = '';
	private readonly axios: AxiosInstance = apiAxiosInstance;

	protected get<Response extends TAnyObject>(
		url = '',
		{ params, query, ...config }: IAxiosRequestConfig = {},
	): Promise<AxiosResponse<Response>> {
		return this.axios.get(getApiRouter(this.baseUrl + url, { params, query }), config);
	}

	protected post<Request extends TAnyObject, Response extends TAnyObject = TAnyObject>(
		url = '',
		data?: Request,
		{ params, query, ...config }: IAxiosRequestConfig = {},
	): Promise<AxiosResponse<Response>> {
		return this.axios.post(getApiRouter(this.baseUrl + url, { params, query }), data, config);
	}

	protected formatFormData<Data extends TAnyObject>(body: Data): FormData {
		const formData = new FormData();

		Object.keys(body).forEach((key) => {
			const item = body[key];

			if (Array.isArray(item)) {
				item.forEach((itemElement) => {
					formData.append(key, itemElement);
				});
				return;
			}

			formData.append(key, item);
		});

		return formData;
	}
}
