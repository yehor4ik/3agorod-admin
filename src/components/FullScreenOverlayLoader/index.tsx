import { FC, JSX } from 'react';
import { Col, Row, Spin } from 'antd';
import './index.less';

interface IProps {
	isShow: boolean;
	children: JSX.Element | JSX.Element[];
}

export const FullScreenOverlayLoader: FC<IProps> = ({ isShow, children }) => {
	return (
		<>
			{isShow && (
				<Row className="full-screen-overlay-loader">
					<Col span={24}>
						<Spin tip="Loading" size="large">
							<div className="content" />
						</Spin>
					</Col>
				</Row>
			)}
			{children}
		</>
	);
};
