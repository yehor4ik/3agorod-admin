import { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import { TAnyObject } from '../types/TAnyObject.ts';

export const checkFileExist = <File extends TAnyObject>(
	object?: UploadChangeParam<UploadFile<File>>,
): boolean => {
	return !!object && !!object.file.response;
};
