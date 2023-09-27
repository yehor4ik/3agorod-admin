import { LocalStorageKey } from './types.ts';
import { ILoginResponse } from '../services/api/Auth/types/ILoginResponse.ts';

export class Storage {
	static getUser(): ILoginResponse | null {
		const userData = localStorage.getItem(LocalStorageKey.user);
		return userData ? JSON.parse(userData) : userData;
	}

	static setUser(user: ILoginResponse): void {
		localStorage.setItem(LocalStorageKey.user, JSON.stringify(user));
	}

	static removeUse(): void {
		localStorage.removeItem(LocalStorageKey.user);
	}
}
