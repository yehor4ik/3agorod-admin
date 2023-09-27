import { notification } from 'antd';

type TPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export const getErrorNotification = (message: string, placement: TPlacement = 'topRight'): void => {
	notification.error({
		message,
		placement,
	});
};
