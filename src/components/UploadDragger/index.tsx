import { FC } from 'react';
import { Upload, UploadProps } from 'antd';
import { IImageCreateResponse } from '../../services/api/Image/types/IImageCreateResponse.ts';
import { apiImage } from '../../services/api/Image/ApiImage.ts';
import { ImageHttpError } from '../../services/api/Image/ImageHttpError.ts';
import { UploadRequestOption } from 'rc-upload/lib/interface';
import { FieldData } from 'rc-field-form/es/interface';

const { Dragger } = Upload;

interface IProps {
	serError: (error: FieldData[]) => void;
	className?: string;
}

export const UploadDragger: FC<IProps> = ({ serError, className }) => {
	const props: UploadProps = {
		name: 'file',
		multiple: false,
		maxCount: 1,
		customRequest: async (options: UploadRequestOption<IImageCreateResponse>) => {
			const { onSuccess, onError, file, onProgress } = options;
			try {
				const response = await apiImage.create(file as File, {
					onDownloadProgress: (event) => {
						!!onProgress && onProgress({ percent: (event.loaded / (event?.total ?? 0)) * 100 });
					},
				});
				!!onSuccess && onSuccess(response);
			} catch (e: any) {
				if (onError) {
					if (e instanceof ImageHttpError) {
						serError(e.getImageValidationError('backgroundImage'));
					}
					// @ts-ignore
					onError();
				}
			}
		},
	};

	return (
		<Dragger {...props} className={className}>
			Upload here
		</Dragger>
	);
};
