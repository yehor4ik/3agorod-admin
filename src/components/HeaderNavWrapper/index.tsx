import { FC, JSX } from 'react';
import { Row } from 'antd';
import { ProductLayout } from '../../navigation/ProductLayout.tsx';

interface IProps {
	children: JSX.Element | JSX.Element[];
}

export const HeaderNavWrapper: FC<IProps> = () => {
	return (
		<nav className="hader-nav-wrapper">
			<Row justify="space-between" align="middle">
				<ProductLayout />
			</Row>
		</nav>
	);
};
