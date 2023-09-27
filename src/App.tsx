import { FC } from 'react';
import { Login } from './pages/Auth';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ConstPaths } from './navigation/ConstPaths.ts';
import { ProductsList } from './pages/ProductsList';
import { CollectionList } from './pages/CollectionsList';
import './App.less';

export const App: FC = () => {
	const location = useLocation();
	const redirectToProduct =
		location.pathname === '/' ? `/${ConstPaths.PRODUCT}` : location.pathname;

	return (
		<div className="app">
			<div className="container">
				<Navigate to={redirectToProduct} />

				<Routes>
					<Route path={`/${ConstPaths.LOGIN}`} element={<Login />} />

					<Route path={`/${ConstPaths.PRODUCT}/*`} element={<ProductsList />} />

					<Route path={`/${ConstPaths.COLLECTION}/*`} element={<CollectionList />} />
				</Routes>
			</div>
		</div>
	);
};
