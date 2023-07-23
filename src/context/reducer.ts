import { IAction, IState } from './types.ts';

export const stateReducer = (state: IState, action: IAction) => {
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
