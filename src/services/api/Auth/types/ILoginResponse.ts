export interface ILoginResponse {
	user: {
		id: number;
		name: string;
		email: string;
		createdAt: Date;
		updatedAt: Date;
	};
	token: string;
}
