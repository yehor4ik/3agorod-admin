import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ConstPaths } from './ConstPaths.ts';
import { CreateCollection } from '../pages/CreateCollection';
import { CollectionTable } from '../pages/CollectionsList/components/CollectionTable';

export const CollectionRotes: FC = () => {
	return (
		<>
			<Routes>
				<Route index element={<CollectionTable />} />
				<Route path={ConstPaths.CREATE} element={<CreateCollection />} />
			</Routes>
		</>
	);
};
