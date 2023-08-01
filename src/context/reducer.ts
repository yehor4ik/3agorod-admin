import { IAction, IState } from './types.ts';
import {Storage} from "../localStorage";

export const initialState: IState = {
  authUser: Storage.getUser(),
};

export const stateReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'SET_USER': {
			return {
				...state,
				authUser: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
