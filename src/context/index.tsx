import { createContext, FC, useReducer, useContext } from 'react';
import { IState, IStateContextProvider, TDispatch } from './types.ts';
import { stateReducer } from './reducer.ts';

const initialState: IState = {
	authUser: null,
};

const StateContext = createContext<{ state: IState; dispatch: TDispatch } | undefined>(undefined);

export const StateContextProvider: FC<IStateContextProvider> = ({ children }) => {
	const [state, dispatch] = useReducer(stateReducer, initialState);
	const value = { state, dispatch };
	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export const useStateContext = () => {
	const context = useContext(StateContext);

	if (context) {
		return context;
	}

	throw new Error(`useStateContext must be used within a StateContextProvider`);
};
