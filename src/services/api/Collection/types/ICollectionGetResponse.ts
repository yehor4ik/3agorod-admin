import { IImageCreateResponse } from '../../Image/types/IImageCreateResponse.ts';

export interface ICollectionGetResponse {
	id: 1;
	name: string;
	backgroundId: number;
	createdAt: Date;
	updatedAt: Date;
	backgroundImage: IImageCreateResponse;
}
