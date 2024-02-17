'use client';

import { useGetBitcoinList } from '../../../hooks/queries/useCoinQuery';
import CoinItem from '../CoinItem';
import { container } from './CoinListBody.css';

export default function CoinListBody() {
	const { data: bitcoinList } = useGetBitcoinList();

	return (
		<table className={container}>
			<tbody>
				{bitcoinList?.map(([simbol, name, currentPrice]) => (
					<CoinItem key={simbol} currentPrice={currentPrice} name={name} simbol={simbol} />
				))}
			</tbody>
		</table>
	);
}
