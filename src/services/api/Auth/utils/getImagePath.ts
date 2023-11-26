const domain = import.meta.env.VITE_BASE_URL;

export const getImagePath = (path: string): string => {
	return domain + path;
};
