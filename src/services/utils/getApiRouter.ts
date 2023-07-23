import { IApiRouterParams } from '../types/IApiRouterParams.ts';
import { stringify } from 'qs';

export const getApiRouter = (
	route: string,
	{ query, params = {} }: IApiRouterParams = {},
): string => {
	let formattedRoute = route;

	for (const paramKey of Object.keys(params)) {
		formattedRoute = formattedRoute.replace(`:${paramKey}`, params[paramKey]);
	}

	if (query) {
		const queryString = stringify(query, { arrayFormat: 'repeat' });
		formattedRoute = `${formattedRoute}?${queryString}`;
	}

	return formattedRoute;
};
