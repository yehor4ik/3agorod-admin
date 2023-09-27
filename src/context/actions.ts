import { IAction, SET_USER } from './types.ts';
import { ILoginResponse } from '../services/api/Auth/types/ILoginResponse.ts';

export const setUserInfo = (data: ILoginResponse): IAction => ({
	type: SET_USER,
	payload: data,
});
