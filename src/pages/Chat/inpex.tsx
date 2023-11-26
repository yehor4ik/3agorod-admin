import { FC } from 'react';
import { Row } from 'antd';
import { ProductLayout } from '../../navigation/ProductLayout.tsx';
import { ProductsRotes } from '../../navigation/ProductRotes.tsx';

export const Chat: FC = () => {
	return (
		<div className="chat-wrapper">
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
