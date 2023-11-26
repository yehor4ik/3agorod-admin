import { IImageCreateResponse } from '../../../services/api/Image/types/IImageCreateResponse.ts';

export interface ICreateCollectionForm {
	name: string;
	backgroundImage: IImageCreateResponse;
}
