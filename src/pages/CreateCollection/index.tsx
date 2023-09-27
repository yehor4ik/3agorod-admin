import { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { FullScreenOverlayLoader } from '../../components/FullScreenOverlayLoader';
import { useMutation } from '@tanstack/react-query';
import { apiCollection } from '../../services/api/Collection/ApiCollection.ts';
import { ICollectionCreateResponse } from '../../services/api/Collection/types/ICollectionCreateResponse.ts';
import { ICollectionCreateRequest } from '../../services/api/Collection/types/ICollectionCreateRequest.ts';
import { ICreateCollectionForm } from './types/ICreateCollectionForm.ts';
import { checkFileExist } from '../../utils/checkFileExist.ts';
import { CollectionHttpError } from '../../services/api/Collection/CollectionHttpError.ts';
import { getErrorNotification } from '../../components/Noification';
import './CreateCollection.less';
import { UploadDragger } from '../../components/UploadDragger';
import { FieldData } from 'rc-field-form/es/interface';

export const CreateCollection: FC = () => {
	const [form] = Form.useForm<ICreateCollectionForm>();
	const { setFields, resetFields } = form;
	const { mutate, isLoading } = useMutation<
		ICollectionCreateResponse,
		CollectionHttpError,
		ICollectionCreateRequest
	>({
		mutationFn: (query) => apiCollection.create(query),
		onError: (error) => {
			if (error.status === 400) {
				error.changeBackgroundIdKey();
				setFields(error.getArrayFormatFormError());
			} else {
				getErrorNotification(error.getMessage());
			}
		},
		onSuccess: () => {
			resetFields();
		},
	});
	const onSubmit = (values: ICreateCollectionForm): void => {
		const query: ICollectionCreateRequest = {};
		if (values.name) query.name = values.name;
		if (checkFileExist(values.backgroundImage)) {
			query.backgroundId = values.backgroundImage.file.response!.id;
		}

		mutate(query);
	};

	const setError = (error: FieldData[]): void => {
		setFields(error);
	};

	return (
		<div className="create-collection">
			<Form form={form} className="form" name="basic" onFinish={onSubmit} autoComplete="off">
				<Form.Item label="Name" name="name">
					<Input />
				</Form.Item>

				<Form.Item label="Collection background image" name="backgroundImage">
					<UploadDragger serError={setError} />
				</Form.Item>

				<Button type="primary" htmlType="submit">
					Create
				</Button>
			</Form>
			<FullScreenOverlayLoader isShow={isLoading} />
		</div>
	);
};
