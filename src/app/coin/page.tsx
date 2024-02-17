import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import CoinList from '../../components/coin/CoinList';
import { coploreFetcher } from '../../libs/Fetcher';

export default async function CoinPage() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['bitcoin_list'],
		queryFn: () => coploreFetcher.get<[string, string, string][]>('/coin/get_bitcoin_list')
	});

	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<CoinList />
			</HydrationBoundary>
		</div>
	);
}
