import {AxiosError} from 'axios';
import {FieldData} from "rc-field-form/es/interface";

export class HttpError extends Error {
  status?: number;
  // @ts-ignore
  message: string | Record<string, string>
  payload?: any;

  constructor(error: unknown) {
    super()
    if (error instanceof AxiosError && error?.response) {
      const {status, data, ...payload} = error.response;
      this.status = status;
      this.message = data;
      this.payload = payload;

      return;
    }

    this.message = (error as Error).message;
  }

  setMessage(message: string | Record<string, string>): void {
    this.message = typeof message !== "string" ? message.err : message;
  }

  getArrayFormatFormError(): Pick<FieldData, 'name' | 'errors'>[] {
    if (typeof this.message === 'object') {
      return Object.entries(this.message as Record<string, string>).map(([key, value]) => {
        return {
          name: key,
          errors: [value]
        }
      })
    }

    throw new Error("Error 'message' is not a object ")
  }
}
