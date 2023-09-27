import { createContext, FC, useReducer } from 'react';
import { IState, IStateContextProvider, TDispatch } from './types.ts';
import { initialState, stateReducer } from './reducer.ts';

const StateContext = createContext<{ state: IState; dispatch: TDispatch } | undefined>(undefined);

const StateContextProvider: FC<IStateContextProvider> = ({ children }) => {
	const [state, dispatch] = useReducer(stateReducer, initialState);
	const value = { state, dispatch };
	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export { StateContextProvider, StateContext };
