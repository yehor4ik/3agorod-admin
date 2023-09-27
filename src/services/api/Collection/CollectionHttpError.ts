import { HttpError } from '../../HttpError.ts';

export class CollectionHttpError extends HttpError {
	constructor(error: unknown) {
		super(error);
	}

	changeBackgroundIdKey(): void {
		if (typeof this.message === 'object' && 'backgroundId' in this.message) {
			this.message.backgroundImage = this.message.backgroundId;
			delete this.message.backgroundId;
		}
	}
}
