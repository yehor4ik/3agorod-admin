import {AxiosError} from 'axios';
import {FieldData} from "rc-field-form/es/interface";

export class HttpError {
  status?: number;
  message: Record<string, string> | string;
  payload?: any;

  constructor(error: unknown) {
    if (error instanceof AxiosError && error?.response) {
      const {status, data, ...payload} = error.response;
      this.status = status;
      this.message = data;
      this.payload = payload;

      return;
    }

    this.message = (error as Error).message;
  }

  setMessage(message: Record<string, string> | string) {
    this.message = message;
  }

  getArrayFormatFormError(): Pick<FieldData, 'name' | 'errors'>[] {
    if (typeof this.message === 'object') {
      return Object.entries(this.message).map(([key, value]) => {
        return {
          name: key,
          errors: [value]
        }
      })
    }

    throw new Error("Error 'message' is not a object ")
  }
}
