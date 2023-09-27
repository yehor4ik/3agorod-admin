import { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import { IImageCreateResponse } from '../../../services/api/Image/types/IImageCreateResponse.ts';

export interface ICreateCollectionForm {
	name: string;
	backgroundImage: UploadChangeParam<UploadFile<IImageCreateResponse>>;
}
