import { AxiosInstance } from 'axios';

export const interceptors = (instance: AxiosInstance) => {
	instance.interceptors.request.use(
		config => {
			return config;
		},
		error => Promise.reject(error)
	);

	instance.interceptors.response.use(
		response => {
			return response;
		},
		error => Promise.reject(error)
	);

	return instance;
};
