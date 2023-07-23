import { FC } from 'react';
import { Col, Row, Spin } from 'antd';
import './index.less';

interface IProps {
	isShow: boolean;
}

export const FullScreenOverlayLoader: FC<IProps> = ({ isShow }) => {
	if (!isShow) return null;

	return (
		<Row className="full-screen-overlay-loader">
			<Col span={24}>
				<Spin tip="Loading" size="large">
					<div className="content" />
				</Spin>
			</Col>
		</Row>
	);
};
