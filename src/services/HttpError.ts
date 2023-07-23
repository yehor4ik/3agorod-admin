import { AxiosError } from 'axios';

export class HttpError {
	status?: number;
	message: Record<string, string> | string;
	payload?: any;
	constructor(error: unknown) {
		if (error instanceof AxiosError && error?.response) {
			const { status, data, ...payload } = error.response;
			this.status = status;
			this.message = data;
			this.payload = payload;

			return;
		}

		this.message = (error as Error).message;
	}
}
