import { useQuery } from '@tanstack/react-query';
import { coploreFetcher } from '../../libs/Fetcher';

export const useGetBitcoinList = () => {
	return useQuery({
		queryKey: ['bitcoin_list'],
		queryFn: () => coploreFetcher.get<[string, string, string][]>('/coin/get_bitcoin_list')
	});
};
