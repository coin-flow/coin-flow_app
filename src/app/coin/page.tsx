import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import CoinList from '../../components/coin/CoinList';
import { coploreFetcher } from '../../libs/Fetcher';
import type { BitcoinList } from '../../models/coin';
import * as css from './page.css';

export default async function CoinPage() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['bitcoin_list'],
		queryFn: () => coploreFetcher.get<BitcoinList>('/coin/get_bitcoin_list')
	});

	return (
		<div className={css.container}>
			<div className={css.textGroup}>
				<h2 className={css.title}>변동률(24H) 암호화폐 TOP4</h2>
				<span className={css.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam nam corporis ipsa tempora magni ratione
					praesentium id ipsam minima tenetur, iusto quos et. Quam, tenetur accusantium. Nulla, impedit quisquam!
				</span>
			</div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<CoinList />
			</HydrationBoundary>
		</div>
	);
}
