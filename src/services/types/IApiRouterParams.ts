import { TAnyObject } from '../../types/TAnyObject.ts';

export interface IApiRouterParams<
	Params extends string = string,
	Query extends TAnyObject = TAnyObject,
> {
	params?: Record<Params, string>;
	query?: Query;
}
