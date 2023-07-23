import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import './Login.less';
import { ILoginRequest } from '../../services/api/Auth/types/ILoginRequest.ts';
import { useMutation } from '@tanstack/react-query';
import { apiAuth } from '../../services/api/Auth/ApiAuth.ts';
import { FullScreenOverlayLoader } from '../../components/FullScreenOverlayLoader';
import { HttpError } from '../../services/HttpError.ts';
import { ILoginResponse } from '../../services/api/Auth/types/ILoginResponse.ts';

export const Login: FC = () => {
	const [form] = Form.useForm<ILoginRequest>();

	const { mutate, isLoading } = useMutation<ILoginResponse | HttpError, HttpError, ILoginRequest>({
		mutationFn: (query) => apiAuth.login(query),
		onError: (error) => console.log(error),
		onSuccess: (data) => console.log(data),
	});

	const onSubmit = (values: ILoginRequest) => {
		mutate(values);
	};

	return (
		<div className="login-wrapper">
			<Form
				form={form}
				className="login-form"
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onSubmit}
				autoComplete="off"
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message: 'Please input your Email!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
			<FullScreenOverlayLoader isShow={isLoading} />
		</div>
	);
};
