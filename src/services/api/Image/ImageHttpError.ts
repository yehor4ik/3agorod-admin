import { HttpError } from '../../HttpError.ts';
import { FieldData } from 'rc-field-form/es/interface';

export class ImageHttpError extends HttpError {
	constructor(error: unknown) {
		super(error);
	}

	getImageValidationError(errorField: string): Pick<FieldData, 'name' | 'errors'>[] {
		const errors = Object.values(this.message);
		return [
			{
				name: errorField,
				errors,
			},
		];
	}
}
