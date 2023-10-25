import { AxiosPromise } from 'axios';

import type { BitcoinResponseData } from '../@types';
import { API_PATH, HTTP_METHOD } from '../constants';
import { createInstance } from './base';

enum BITCOIN_PATH_LIST {
	ROOT = '/'
}

const bitcoinInstance = createInstance(API_PATH.BITCOIN);

export const bitcoinAPIs = {
	getBitcoinList: (): AxiosPromise<BitcoinResponseData> =>
		bitcoinInstance({
			method: HTTP_METHOD.GET,
			url: BITCOIN_PATH_LIST.ROOT
		})
};
