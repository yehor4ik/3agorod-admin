import { FC } from 'react';
import { ProductLayout } from '../../navigation/ProductLayout.tsx';
import { ProductsRotes } from '../../navigation/ProductRotes.tsx';
import { Row } from 'antd';

export const ProductsList: FC = () => {
	return (
		<div className="products-list">
			<Row
				justify="space-between"
				align="middle"
				className="products-list__header"
				style={{ marginBottom: 23 }}
			>
				<ProductLayout />
			</Row>

			<ProductsRotes />
		</div>
	);
};
