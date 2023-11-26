import { FC } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useQuery } from '@tanstack/react-query';
import { apiCollection } from '../../../../services/api/Collection/ApiCollection.ts';
import { FullScreenOverlayLoader } from '../../../../components/FullScreenOverlayLoader';
import { ICollectionGetResponse } from '../../../../services/api/Collection/types/ICollectionGetResponse.ts';
import { getImagePath } from '../../../../services/api/Auth/utils/getImagePath.ts';

interface DataType {
	id: number;
	name: string;
	backgroundImage: string;
	createdAt: Date;
	updatedAt: Date;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Image background',
		dataIndex: 'backgroundImage',
		key: 'backgroundImage',
		render: (path) => <img src={getImagePath(path)} alt="collection image" />,
	},
	{
		title: 'Collection name',
		width: 100,
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Created date',
		width: 100,
		dataIndex: 'createdAt',
		key: 'createdAt',
	},
	{
		title: 'Updated date',
		width: 100,
		dataIndex: 'updatedAt',
		key: 'updatedAt',
	},
	{
		title: 'Action',
		key: 'operation',
		fixed: 'right',
		width: 100,
		render: () => <a>action</a>,
	},
];

export const CollectionTable: FC = () => {
	const { isLoading, data = [] } = useQuery<ICollectionGetResponse[]>({
		queryKey: ['collections'],
		queryFn: () => apiCollection.fetch(),
	});
	const result: DataType[] = data.map((el) => ({
		id: el.id,
		name: el.name,
		createdAt: el.createdAt,
		updatedAt: el.updatedAt,
		backgroundImage: el.backgroundImage.url,
	}));
	return (
		<FullScreenOverlayLoader isShow={isLoading}>
			<h1>Collection</h1>
			<Table columns={columns} dataSource={result} pagination={false} rowKey="id" />
		</FullScreenOverlayLoader>
	);
};
