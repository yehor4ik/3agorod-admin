import { FC } from 'react';
import { CollectionRotes } from '../../navigation/CollectionRotes.tsx';
import { CollectionLayout } from '../../navigation/CollerctionLayout.tsx';
import { Row } from 'antd';

export const CollectionList: FC = () => {
	return (
		<div className="collection-list">
			<Row
				justify="space-between"
				align="middle"
				className="collection-list__header"
				style={{ marginBottom: 23 }}
			>
				<CollectionLayout />
			</Row>

			<CollectionRotes />
		</div>
	);
};
