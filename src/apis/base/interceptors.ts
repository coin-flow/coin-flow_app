import { AxiosInstance } from 'axios';

export const interceptors = (instance: AxiosInstance) => {
	instance.interceptors.request.use(
		config => {
			console.log('### request interceptor test');
			return config;
		},
		error => Promise.reject(error)
	);

	instance.interceptors.response.use(
		response => {
			console.log('### response interceptor test');
			return response;
		},
		error => Promise.reject(error)
	);

	return instance;
};
