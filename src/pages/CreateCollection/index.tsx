import {FC} from "react";
import {Form, Input, Upload, UploadProps, Button} from "antd";
import {ILoginRequest} from "../../services/api/Auth/types/ILoginRequest.ts";
import {FullScreenOverlayLoader} from "../../components/FullScreenOverlayLoader";
import {UploadRequestOption} from "rc-upload/lib/interface";
import {apiImage} from "../../services/api/Image/ApiImage.ts";
import {IImageCreateResponse} from "../../services/api/Image/types/IImageCreateResponse.ts";

const { Dragger } = Upload;

export const CreateCollection: FC = () => {
  const [form] = Form.useForm<ILoginRequest>();
  // const { setFields } = form;
  const onSubmit = (values: ILoginRequest) => {
    console.log(values)
  };

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
          }
        })
        !!onSuccess && onSuccess(response)
      } catch (e: any) {
        !!onError && onError(e)
      }
    },
  };

  return (
    <div className="create-collection">
      <Form
        form={form}
        className="form"
        name="basic"
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Collection background image"
          name="backgroundImage"
        >
          <Dragger {...props}>
            Upload here
          </Dragger>
        </Form.Item>

        <Button type='primary' htmlType="submit">Create</Button>

      </Form>
      {/*TODO*/}
      <FullScreenOverlayLoader isShow={false} />
    </div>
  );
}