import axios, { CreateAxiosDefaults } from 'axios';

import { interceptors } from './interceptors.ts';

export const createInstance = (path?: string, config?: CreateAxiosDefaults) => {
	const instance = axios.create({
		baseURL: `${import.meta.env.VITE_API_URL}${path}`,
		...config
	});

	return interceptors(instance);
};
