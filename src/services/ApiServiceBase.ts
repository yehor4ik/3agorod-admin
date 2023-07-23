import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { TAnyObject } from '../types/TAnyObject.ts';
import { IApiRouterParams } from './types/IApiRouterParams.ts';
import { getApiRouter } from './utils/getApiRouter.ts';

export interface IAxiosRequestConfig extends Omit<AxiosRequestConfig, 'params'>, IApiRouterParams {}

export const apiAxiosInstance = Axios.create({
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		Accept: 'application/json',
	},
});

apiAxiosInstance.interceptors.request.use((request) => {
	return request;
});

apiAxiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		if (!(error instanceof AxiosError) || !error?.response) return Promise.reject(error);

		const originalRequest = error.config;

		if (error.response.status === 403 || error.response.status === 401) {
			// some action
			console.log('originalRequest: ', originalRequest);
		}

		return Promise.reject(error);
	},
);

export abstract class ApiServiceBase {
	protected baseUrl = '';
	private readonly axios: AxiosInstance = apiAxiosInstance;

	protected get<Response extends TAnyObject>(
		url = '',
		{ params, query, ...config }: IAxiosRequestConfig,
	): Promise<Response> {
		return this.axios.get(getApiRouter(this.baseUrl + url, { params, query }), config);
	}

	protected post<Request extends TAnyObject, Response extends TAnyObject = TAnyObject>(
		url = '',
		data?: Request,
		{ params, query, ...config }: IAxiosRequestConfig = {},
	): Promise<Response> {
		return this.axios.post(getApiRouter(this.baseUrl + url, { params, query }), data, config);
	}
}
