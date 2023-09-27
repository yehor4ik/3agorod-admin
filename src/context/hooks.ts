import { IState, TDispatch } from './types.ts';
import { useContext } from 'react';
import { StateContext } from './index.tsx';

export const useStateContext = (): { state: IState; dispatch: TDispatch } => {
	const context = useContext(StateContext);

	if (context) {
		return context;
	}

	throw new Error(`useStateContext must be used within a StateContextProvider`);
};
