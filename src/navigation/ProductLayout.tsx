import { FC } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { ConstPaths } from './ConstPaths.ts';

export const ProductLayout: FC = () => {
	const productLink = <Link to={`/${ConstPaths.PRODUCT}`}>{'<'} Back to Product</Link>;

	const productLinks = (
		<>
			<Link to={`/${ConstPaths.COLLECTION}`}>Collection</Link>
			<Link to={`/${ConstPaths.PRODUCT}/${ConstPaths.CREATE}`}>Create</Link>
		</>
	);

	return (
		<>
			<Routes>
				<Route index element={productLinks} />
				<Route path={ConstPaths.CREATE} element={productLink} />
			</Routes>
		</>
	);
};
