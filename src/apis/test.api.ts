import { AxiosPromise } from 'axios';

import { API_PATH, HTTP_METHOD } from '../constants';
import { createInstance } from './base';

enum TEST_PATH_LIST {
	ROOT = '/',
	POO = '/poo'
}

const testInstance = createInstance(API_PATH.TEST);

export const testAPIs = {
	getTest: (): AxiosPromise<{ text?: string }> =>
		testInstance({
			method: HTTP_METHOD.GET,
			url: TEST_PATH_LIST.ROOT
		}),
	postTest: (): AxiosPromise<{ text?: string }> =>
		testInstance({
			method: HTTP_METHOD.POST,
			url: TEST_PATH_LIST.POO
		})
};
