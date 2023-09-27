import { ReactNode } from 'react';
import { ILoginResponse } from '../services/api/Auth/types/ILoginResponse.ts';

export const SET_USER = 'SET_USER';

export interface IState {
	authUser: ILoginResponse | null;
}

export interface IAction {
	type: string;
	payload: ILoginResponse | null;
}

export interface IStateContextProvider {
	children: ReactNode;
}

export type TDispatch = (action: IAction) => void;
