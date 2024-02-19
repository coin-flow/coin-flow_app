import { useQuery } from '@tanstack/react-query';

import { coploreFetcher } from '../../libs/Fetcher';
import type { BitcoinList } from '../../models/coin';

export const useGetBitcoinList = () => {
	return useQuery({
		queryKey: ['bitcoin_list'],
		queryFn: () => coploreFetcher.get<BitcoinList>('/coin/get_bitcoin_list')
	});
};
