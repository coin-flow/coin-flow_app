import { useQuery } from '@tanstack/react-query';

import { bitcoinAPIs } from '../../apis';
import { API_PATH } from '../../constants';

export const useBitcoinQuery = () =>
	useQuery([API_PATH.BITCOIN], () => bitcoinAPIs.getBitcoinList().then(res => res.data));
